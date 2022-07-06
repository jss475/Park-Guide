import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Input, Button, Select, FormControl, FormLabel, Box, Text, FormErrorMessage, FormHelperText} from '@chakra-ui/react'

function NewTrailForm({isLoggedIn}){
    //set error for filling out the new trail form
    const [errors, setErrors] = useState([])
    let history = useHistory()

    //prepend website with https:// if not already present
    function addhttp(url) {
        if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
            url = "http://" + url;
        }
        return url;
    }


    const handleNewTrailSubmit = async (e) => {
        e.preventDefault()
        let form = new FormData(document.querySelector("#new-trail-form"))
        
        let req = await fetch("/trails", {
            method: "POST",
            body: form
        })
        if(req.ok){
            setErrors(['Thanks for successfully submitting the new trail!'])
            let res = req.json()
            console.log(res)
        }else{
            let res = await req.json()
            let err_array = []

            for(let i in res.errors) {
                let message = `${i}: ${res.errors[i]}`
                err_array.push(message)
            }
            setErrors(err_array)
        }
    }

    let disabled_val
    if(isLoggedIn){
        disabled_val = false
    }else{
        disabled_val = true
    }

    return (
        <Box mt="80px" w="80%" ml="auto" mr="auto">  
            {errors.map(error => <Text color="red">{error}</Text>)}
            <form id="new-trail-form" onSubmit={handleNewTrailSubmit}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" placeholder="Enter Name of the Trail"/>
                </FormControl>
                <FormControl isRequired w="300px">
                    <FormLabel>Mileage</FormLabel>
                    <Input name="mileage" placeholder="Enter the length of the trail (mi)"/>
                </FormControl>
                <FormControl isRequired w="300px">
                    <FormLabel>Starting Elevation</FormLabel>
                    <Input name = "starting_elevation" placeholder="Enter the starting elevation"/>
                </FormControl>
                <FormControl isRequired w="300px">
                    <FormLabel>Elevation Gain</FormLabel>
                    <Input name = "elevation_gain" placeholder="Enter the elevation gain"/>
                </FormControl>
                <FormControl isRequired w="300px">
                    <FormLabel>Starting Latitude</FormLabel>
                    <Input name = "starting_lat" placeholder="Enter the starting latitude"/>
                </FormControl>
                <FormControl isRequired w="300px">
                    <FormLabel>Starting Longitude</FormLabel>
                    <Input name = "starting_long" placeholder="Enter the starting longitude"/>
                </FormControl>
                <FormControl isRequired w="300px">
                    <FormLabel>Route Type</FormLabel>
                    <Select name="route_type" placeholder = 'Select the route type'>
                        <option value="Out & Back">Out & Back</option>
                        <option value="Loop">Loop</option>
                    </Select>
                </FormControl>
                <FormControl isRequired w="300px">
                    <FormLabel>Difficulty</FormLabel>
                    <Select name="difficulty" placeholder = 'Select the difficulty'>
                        <option value="Extremely Hard">Extremely Hard</option>
                        <option value="Hard">Hard</option>
                        <option value="Medium">Medium</option>
                        <option value="Easy">Easy</option>
                    </Select>
                </FormControl>
                <FormControl isRequired w="300px">
                    <FormLabel>Estimated Time</FormLabel>
                    <Input name = "estimated_time" placeholder="Enter the estimated time"/>
                </FormControl>
                <FormControl isRequired w="300px">
                    <FormLabel>Recommended Water</FormLabel>
                    <Select name="water" placeholder = 'Select the water needed (L)'>
                        <option value="4">4L</option>
                        <option value="3">3L</option>
                        <option value="2">2L</option>
                        <option value="1">1L</option>
                    </Select>
                </FormControl>
                <FormControl isRequired w="300px">
                    <FormLabel>Recommended Food</FormLabel>
                    <Select name="food" placeholder = 'Select the food needed'>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Pictures</FormLabel>
                    <Input name = "pictures" placeholder="Enter the pictures"/>
                </FormControl>
                {/* Disable button when not logged in */}
                <Button disabled={disabled_val} type="submit" mt="15px">Submit</Button>
            </form>
    </Box>
    )

}

export default NewTrailForm