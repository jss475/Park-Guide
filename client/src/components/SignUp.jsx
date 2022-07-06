import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Input, Button, FormControl, FormLabel, Box, Text, Heading} from '@chakra-ui/react'


function SignUp({handleLSLoggedIn}){

    //set an error for when the user tries to sign up
    const [errors, setErrors] = useState([])
    let history = useHistory()
    
    //handle the signup and sending a post request to the server
    const handleSignUp = async (e) => {
        e.preventDefault()

        let form = new FormData(document.querySelector("#signup-form"))

        let req = await fetch("/signup", {
            method: "POST",
            body: form
        })
  
        if(req.ok){
            let data = await req.json()
            handleLSLoggedIn(true,data.id)
            history.push("/about")
        }else {
            let res = await req.json()
            let err_array = []

            for (let i in res.errors) {
                let message = `${i}: ${res.errors[i]}`;
                err_array.push(message);
            }
            setErrors(err_array)
        }
    }
    return(
        <Box mt="80px" w="50%" ml="auto" mr="auto">  
            <Heading textAlign="center">Sign Up</Heading>
            {errors.map(error => <Text color="red">{error}</Text>)}
            <form id="signup-form" onSubmit={handleSignUp}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" placeholder="Enter Your Name"/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input name="email" placeholder="Enter your email"/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input name = "password" type="password" placeholder="Enter your password"/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password Confirmation</FormLabel>
                    <Input name = "password_confirmation" type="password" placeholder="Confirm your password"/>
                </FormControl>
                <Button mt="15px" type="submit">Submit</Button>
            </form>
        </Box>
    )
}

export default SignUp