import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Input, Button, Select, FormControl, FormLabel, Box, Textarea, Text, FormErrorMessage, FormHelperText} from '@chakra-ui/react'

function NewFoodForm({isLoggedIn}){
    //set error for filling out the new food form
    const [errors, setErrors] = useState([])
    let history = useHistory()

    //prepend website with https:// if not already present
    function addhttp(url) {
        if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
            url = "http://" + url;
        }
        return url;
    }

    const handleNewFoodSubmit = async (e) => {
        e.preventDefault()
        
        let form = new FormData(document.querySelector("#new-food-form"))
        //append website if needed
        form.append("website", addhttp(form.get("website")))

        let req = await fetch("/foods", {
            method: "POST",
            body: form
        })
        if(req.ok){
            setErrors(['Thanks for successfully submitting!'])
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
            <form id="new-food-form" onSubmit={handleNewFoodSubmit}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" placeholder="Enter name of the place"/>
                </FormControl>
                <FormControl isRequired w="300px" mt="10px">
                    <FormLabel>Address</FormLabel>
                    <Input name="address" placeholder="Enter the address"/>
                </FormControl>
                <FormControl isRequired w="300px" mt="10px">
                    <FormLabel>Website</FormLabel>
                    <Input name = "website" placeholder="Enter the website"/>
                </FormControl>
                <FormControl isRequired w="300px" mt="10px">
                    <FormLabel>Food Type</FormLabel>
                    <Select name="food_type" placeholder = 'Select the food type'>
                        <option value="African">African</option>
                        <option value="Asian">Asian</option>
                        <option value="American">American</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Cafe">Cafe</option>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Latin American">Latin American</option>
                    </Select>
                </FormControl>
                <FormControl isRequired mt="10px">
                    <FormLabel>Description</FormLabel>
                    <Textarea name = "description" placeholder="Enter a description"/>
                    <FormHelperText>Minimum 50 characters</FormHelperText>
                </FormControl>
                <FormControl isRequired w="300px" mt="10px">
                    <FormLabel>Picture</FormLabel>
                    <Input name = "pictures" placeholder="Enter URL for picture"/>
                </FormControl>
                {/* Disable button when not logged in */}
                <Button disabled={disabled_val} type="submit" mt="15px" >Submit</Button>
            </form>
    </Box>
    )

}

export default NewFoodForm