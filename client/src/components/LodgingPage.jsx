import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {Heading, Box, Image, Text, Flex, UnorderedList, ListItem, Link, Divider, Avatar, TableContainer, Button, Table, Tbody, Td, Tr, Icon, FormControl, Textarea, FormLabel} from '@chakra-ui/react'
import {FiExternalLink} from 'react-icons/fi'
import {BiUpvote, BiDownvote} from 'react-icons/bi'

function LodgingPage({isLoggedIn}){
    //get the id Data from the history push with UseLocation
    //set the data for the food
    const {state} = useLocation()
    const [lodgingData, setLodgingData] = useState({
        user_lodgings: [{reviews: '', user: {name: ''}}]
    })

    //pull the food data for just the one food
    useEffect(()=> {
        const getFood = async () => {
            let req = await fetch(`/lodgings/${state.id}`);
        
            if (req.ok) {
                let res = await req.json();
                setLodgingData(res);
            } else {
                console.error("whoops");
            }
            };
            getFood();
    },[])

    //on click for the upvote
    function handleUpvoteClick(){
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify({
                upvote: upvote+1
            })
        }

    
        fetch(`/lodgings/${id}`,configObj)
            .then(res => res.json())
            .then(data => setLodgingData(data))
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


        fetch(`/lodgings/${id}`,configObj)
            .then(res => res.json())
            .then(data => setLodgingData(data))
    }

    //handle adding a review if logged in
    function handleAddReview(e){
        e.preventDefault()
        const user_id = localStorage.getItem("id")
        const configObj = {
            
        }

        fetch('/user_trails/', configObj)
    }

    //refactor the lodging data into its attributes 
    const {id, name, address, website, lodging_amenity, room_amenity, upvote, downvote, image, user_lodgings} = lodgingData
 
    //map out the reviews with the user name
    let reviews = user_lodgings.map(ul => {
        return (
            <>
            <Divider mt="15px"/>
            <Box mt="25px" ml="25px" mb="25px">
                <Flex flexWrap="inline">
                    <Avatar name={ul.user.name} src='https://bit.ly/broken-link' />
                    <Text mt="1%" ml="10px">{ul.user.name}</Text>
                </Flex>
                <Text mt="15px">{ul.review}</Text>
            </Box>
            {/* <Divider mt="25px"/> */}
            </>
        )
    })

    return (
        <>
            <Box mt="80px" ml = "25px" w="80%">
                <Flex>
                    <Heading w="70%">{name}</Heading>
                    <Flex w="30%" mr="30px">
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
                <Image src={image} w="100%" borderRadius="20px" maxW="1366px"/>
                <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='sm'
                        ml='0'
                    >
                        <Flex flexWrap="inline"> 
                            <Text>{address}</Text>  
                        </Flex>
                        <Flex flexWrap="inline" color="blue">
                            <Link href={website} isExternal>
                                Book Today!
                            </Link>
                            <FiExternalLink mx="2px"/>
                        </Flex>
                </Box>
                <Flex flexWrap="inline" mt="15px">
                    <Box>
                        <Text fontWeight="semibold">Lodging Amenity</Text>
                        <UnorderedList>
                            {lodging_amenity ? lodging_amenity.map(amenity => {
                                return <ListItem>{amenity}</ListItem>
                            }) : null    
                            }
                        </UnorderedList>
                    </Box>
                    <Box ml="10%">
                        <Text fontWeight="semibold">Room Amenity</Text>
                        <UnorderedList>
                            {room_amenity ? room_amenity.map(amenity => {
                                return <ListItem>{amenity}</ListItem>
                            }) : null    
                            }
                        </UnorderedList> 
                    </Box>
                </Flex>
                
            </Box>

            {/* If logged in you can leave a review */}
            {isLoggedIn ? 
                <>
                    <form onSubmit={handleAddReview} >
                        <Box w="80%" ml="auto" mr="auto" mt="50px">
                            <FormControl isRequired  >
                                <FormLabel>Add a Review!</FormLabel>
                                <Textarea></Textarea>            
                            </FormControl>
                            <Button type="submit" float="right" mt="10px"  mb="50px">Submit</Button>
                        </Box>
                    </form>
                </>
        
            : null}

            {/* Add user reviews */}
            <Text fontSize='2xl' fontWeight="semibold" ml="25px" mt="50px" mb="50px">User Reviews</Text>
            {reviews}


        </>
    )
}

export default LodgingPage