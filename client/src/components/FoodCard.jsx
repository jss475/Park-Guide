import {Image, Box, Divider} from '@chakra-ui/react'
import {useHistory, useLocation} from 'react-router-dom'

function FoodCard({food}){

    //refactor the food instance
    const {id, name, pictures} = food

    //create history to push
    const history = useHistory()
    const {pathname} = useLocation()

    //create onclick to send to individual food page
    function handleFoodCardClick(){
        if (pathname !== `/yosemite/food/${id}`){
            history.push({pathname: `/yosemite/food/${id}`,
                          state: {
                            id: id
                          }
        })
        }
    }

    return (
        <>
        <Box w="28%" borderWidth='1px' borderRadius='lg' overflow='hidden' m='5' onClick={handleFoodCardClick}>
          <Image src={pictures[0]} alt="Picture of food" w="100%" height="150px" pl="10px" pr="10px" pt="10px" borderRadius="20px"/>
            <Box p='6'>
                {/* difficult + route_type + estimate_time */}
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='sm'
                        textTransform='uppercase'
                        ml='0'
                    >
                        {/* {difficulty} &bull; {route_type} &bull; {estimated_time} ({mileage} mi) */}
                    </Box>
                </Box>
                {/* title of the card */}
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={5}
                    >
                    {name}
                </Box>

            </Box>
        </Box>

        </>
    )

}

export default FoodCard