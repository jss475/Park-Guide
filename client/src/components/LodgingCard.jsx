import {useHistory, useLocation} from 'react-router-dom'
import {Box, Image} from '@chakra-ui/react'

function LodgingCard({lodging}){

    //refactor the lodging instance
    const {id, name, website, lodging_amenity, room_amenity, upvote, downvote, image} = lodging

    //create history to push
    const history = useHistory()
    const {pathname} = useLocation()

    //create onclick to send to individual food page
    function handleLodgingCardClick(){
        if (pathname !== `/yosemite/lodging/${id}`){
            history.push({pathname: `/yosemite/lodging/${id}`,
                            state: {
                            id: id
                            }
        })
        }
    }
    
    return (
        <>
        <Box w="28%" borderWidth='1px' borderRadius='lg' overflow='hidden' m='5' onClick={handleLodgingCardClick}>
          <Image src={image} alt="Picture of lodging" w="100%" height="150px" pl="10px" pr="10px" pt="10px" borderRadius="20px"/>
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

export default LodgingCard