import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {Heading, Box, Image, Text, Flex, Spacer, Link, Divider, Avatar, TableContainer, Table, Tbody, Td, Tr, Icon} from '@chakra-ui/react'
import {FiExternalLink} from 'react-icons/fi'
import {BiUpvote, BiDownvote} from 'react-icons/bi'

function FoodPage(){
    
    //get the id Data from the history push with UseLocation
    //set the data for the food
    const {state} = useLocation()
    const [foodData, setFoodData] = useState({
        pictures: [],
        user_foods: [{reviews: '', user: {name: ''}}]
    })

    //pull the food data for just the one food
    useEffect(()=> {
        const getFood = async () => {
            let req = await fetch(`/foods/${state.id}`);
        
            if (req.ok) {
                let res = await req.json();
                setFoodData(res);
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
    
        fetch(`/foods/${id}`,configObj)
            .then(res => res.json())
            .then(data => setFoodData(data))
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
   

        fetch(`/foods/${id}`,configObj)
            .then(res => res.json())
            .then(data => setFoodData(data))
    }

    //refactor the food data into its attributes
    const {id, name, address, website, proximity, pictures, food_type, description, user_foods, upvote, downvote} = foodData

    //map out the reviews with the user name
    let reviews = user_foods.map(uf => {
        return (
            <>
            <Divider mt="15px"/>
            <Box mt="25px" ml="25px" mb="25px">
                <Flex flexWrap="inline">
                    <Avatar name={uf.user.name} src='https://bit.ly/broken-link' />
                    <Text mt="1%" ml="10px">{uf.user.name}</Text>
                </Flex>
                <Text mt="15px">{uf.review}</Text>
            </Box>
            {/* <Divider mt="25px"/> */}
            </>
        )
    })

    return (
        <>
            <Box mt="80px" ml = "25px" w="80%">
                <Flex>
                    <Heading w="80%">{name}</Heading>
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
                <Image src={pictures[0]} w="100%" borderRadius="20px" maxW="1366px"/>
                <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='sm'
                        ml='0'
                    >
                        <Flex flexWrap="inline"> 
                            <Text>{address}</Text>
                            <Spacer />
                            <Text>{food_type}</Text>    
                        </Flex>
                        <Flex flexWrap="inline" color="blue">
                            <Link href={website} isExternal>
                                Official Website 
                            </Link>
                            <FiExternalLink mx="2px"/>
                        </Flex>
                </Box>
                <Box mt="15px">
                    <p style={{"white-space": "pre-line"}}>{description}</p>
                </Box>
                
            </Box>

            {/* If logged in you can leave a review */}
            {/* {isLoggedIn ? 
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
        
            : null} */}

            {/* Add reviews */}
            <Text fontSize='2xl' fontWeight="semibold" ml="25px" mt="50px">User Reviews</Text>
            {reviews}
        </>
    )
}

export default FoodPage