import { useEffect, useState } from "react"
import FoodCard from "./FoodCard"
import {Flex, Heading, Divider} from '@chakra-ui/react'

function FoodContainer(){
    //set state for all food data
    const [allFoods, setAllFoods] = useState([])
    //fetch the food data
    useEffect(()=> {
        fetch("/foods")
            .then(res => res.json())
            .then(data => setAllFoods(data))
    },[])

    //guard clause against empty arrays
    let restaurants = []
    let groceries = []
    //filtering between restaurants and groceries
    if(allFoods.length > 0){
        restaurants = allFoods.filter(food => food.food_type !== "Grocery")
        groceries = allFoods.filter(food => food.food_type === "Grocery")
    }

    return (
        <>
            <Heading mt="80px" ml="25px">Restaurants at Yosemite!</Heading>
            <Flex flexWrap="wrap" justifyContent="left" >
                {restaurants.map(food=> {
                    return <FoodCard key={food.id} food={food} />
                })}
            </Flex>

            <Divider mt="40px"/>

            <Heading mt="40px" ml="25px">Groceries at Yosemite!</Heading>
            <Flex flexWrap="wrap" justifyContent="left" >
                {groceries.map(food=> {
                    return <FoodCard key={food.id} food={food} />
                })}
            </Flex>
        </>
    )

}

export default FoodContainer