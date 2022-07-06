import { useState, useEffect } from "react"
import {useLocation} from 'react-router-dom'
import { Text, Image, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Icon,
    Divider,
    Box,
    Avatar
} from "@chakra-ui/react"
import {GiHamburger, GiWaterDrop} from 'react-icons/gi'
import {BiUpvote, BiDownvote} from 'react-icons/bi'
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import '../trailpage.css'


function TrailPage(){
    //get pathname to retrieve the ID of the trail that was clicked
    const {pathname, state} = useLocation()
    // let trailId = pathname[pathname.length-1]

    //create state to take in trail data
    const [trailData, setTrailData] = useState({
        id: '',
        name: '',
        proximity: '',
        mileage: '', 
        elevation_gain: '', 
        starting_elevation: '', 
        starting_lat: 80, 
        starting_long: 80, 
        ending_lat: '', 
        ending_long: '', 
        route_type: '', 
        difficulty: '', 
        estimated_time: '', 
        water: '', 
        food: '', 
        pictures: [],
        upvote: '',
        downvote: '',
        user_trails: [{reviews: '', user: {name: ''}}]
    })
    //pull the trail data for just the one trail
    useEffect(()=> {
        fetch(`/trails/${state.id}`)
            .then(res => res.json())
            .then(data => setTrailData(data))
    },[])

    //hide the API key for google maps
    const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})

    //refactor the trail data
    const {id, name, proximity, mileage, elevation_gain, starting_elevation, starting_lat, starting_long, ending_lat, ending_long, route_type, difficulty, estimated_time, water, food, pictures, upvote, downvote, user_trails} = trailData


    //creating the google map
    let map
    if(!isLoaded){
        map = <div>Loading...</div>
    }else{
        // debugger
        map = <GoogleMap zoom={13} center={{lat: starting_lat, lng: starting_long}} mapContainerClassName="map-container">

            <Marker position={{lat: starting_lat, lng: starting_long}} label="SL"  />
        </GoogleMap>
    }

    //create burger icons for number of foods
    let burgerIcon = []
    for(let i = 0; i < food; i++){
        burgerIcon.push(<Icon as={GiHamburger} />)
    }
    
    //create water icons for number of water needed (in L's)
    let waterIcon = []
    for(let i=0; i < water; i++){
        waterIcon.push(<Icon as={GiWaterDrop} />)
    }

    //on click for the upvote
    function handleUpvoteClick(){
        const configObj = {
            "upvote": upvote+1,
        }

        fetch(`/trails/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(configObj)
        })
            .then(res => res.json())
            .then(data => setTrailData(data))
    }

    //on click for the downvote
    function handleDownvoteClick(){
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify({
                downvote: downvote+1
            })
        }

        fetch(`/trails/${id}`,configObj)
            .then(res => res.json())
            .then(data => setTrailData(data))
    }

    //map out the reviews with the user name
    let reviews = user_trails.map(ut => {
        return (
            <>
            <Divider mt="15px" key={ut.id}/>
                <Box mt="25px" ml="25px" mb="25px">
                    <Flex flexWrap="inline">
                        <Avatar name={ut.user.name} src='https://bit.ly/broken-link' />
                        <Text mt="1%" ml="10px">{ut.user.name}</Text>
                    </Flex>
                    <Text mt="15px">{ut.review}</Text>
                </Box>
            {/* <Divider mt="25px"/> */}
            </>
        )
    })

     
    return (
        <>
        <div className="trail-page-container">
            {/* Title and upvote and downvote */}
            <Flex>
                <Text ml="5px" w="80%" fontSize='3xl'>{name}</Text>
                <Flex w="20%" mr="30px">
                    <TableContainer >
                        <Table variant='simple'>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Flex flexWrap="inline">
                                            <Icon as={BiUpvote} mr="10px" onClick={handleUpvoteClick}/> 
                                            <Text>{upvote}</Text>
                                        </Flex>

                                    </Td>
                                    <Td>
                                        <Flex flexWrap="inline">
                                            <Icon as={BiDownvote} mr="10px" onClick= {handleDownvoteClick}/> 
                                            <Text>{downvote}</Text>
                                        </Flex>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>
            </Flex>
            
            {/* Image and Map container */}
            <Flex flexWrap="inline" w="100%">
                <Image className="trail-page-img" src={pictures[0]} w="50%" alt="trail page image" m="5px" borderRadius="5"/>
                {/* {map} */}
            </Flex>
            {map}
            <Flex flexWrap="inline" w="100%">
                {/* Add 1st table */}
                <Flex w="50%">
                    <TableContainer w="100%" ml="5px" border="2px ridge" mt="10px" borderRadius="5px">
                        <Table variant='simple'  >
                            <Thead>
                            <Tr>
                                <Th>Difficulty</Th>
                                <Th>Miles</Th>
                                <Th>Estimated Time</Th>
                                <Th>Type</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                            <Tr>
                                <Td>{difficulty}</Td>
                                <Td>{mileage}</Td>
                                <Td>{estimated_time}</Td>
                                <Td>{route_type}</Td>
                            </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>
                
                <Flex w="50%">
                    <TableContainer w="70%" ml="15px">
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Recommended Food</Th>
                                    <Th>Recommended Water</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{burgerIcon}</Td>
                                    <Td>{waterIcon}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    {/* creating stats table for the elevation */}
                    <StatGroup w="30%" ml = "10px"  mt="10px">
                        <Stat>
                            <StatLabel>Starting Elevation</StatLabel>
                            <StatNumber>{starting_elevation} ft</StatNumber>
                            <StatHelpText>
                            <StatArrow type={elevation_gain >=0 ?'increase' : 'decrease'} />
                            {elevation_gain} ft of elevation gain
                            </StatHelpText>
                        </Stat>
                    </StatGroup>
                </Flex>
            </Flex>

           
            {/* <Divider mt="50px"/> */}

            {/* Add reviews */}
            <Text fontSize='2xl' fontWeight="semibold" ml="25px" mt="50px">User Reviews</Text>
            {reviews}
        </div>
        </>
    )
}

export default TrailPage