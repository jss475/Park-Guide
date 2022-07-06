import { useEffect, useState } from "react"
import { Flex } from '@chakra-ui/react'
import TrailsCard from "./TrailsCard"

function TrailsContainer() {
    
    //set state for fetching all the trails
    const [allTrails, setAllTrails] = useState([])

    useEffect(()=> {
        fetch("/trails")
            .then(res => res.json())
            .then(data => setAllTrails(data))
    },[])


    //create filter based off of upvote
    if(allTrails.length > 0){
        allTrails.sort(function(a,b) {
            return parseInt(b.upvote) - parseInt(a.upvote)
        })
    }
    return(
        <>
        <Flex flexWrap="wrap" justifyContent="left" mt="80px">
            {allTrails.map(trail => {
                return <TrailsCard key={trail.id} trail={trail}/>
            })}
        </Flex>
        </>
    )
}

export default TrailsContainer