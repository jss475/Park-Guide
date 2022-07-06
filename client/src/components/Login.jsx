import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Input, Button, Box, FormControl, FormLabel, Heading, Text } from '@chakra-ui/react'

function Login({handleLSLoggedIn}){

    //set an errors state to output the error one gets when trying to login
    const [errors, setErrors] = useState([])
    let history = useHistory()
    

    //handle the login and send a post request to the server
    const handleLogin = async (e) => {
        e.preventDefault()

        let form = new FormData(document.querySelector("#login-form"))

        let req = await fetch("/login", {
            method: "POST",
            body: form
        })

        if(req.ok){
            let data = await req.json()
            handleLSLoggedIn(true,data.id)
            history.push("/about")
        }else {
            let err = await req.json();
            setErrors(err.error);
        }
        
    }
    return(
        <Box mt="80px" w="50%" ml="auto" mr="auto">
            <Heading textAlign="center">Login</Heading>
            <Text color="red">{errors}</Text>
            <form id="login-form" onSubmit={handleLogin}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input name="email" placeholder="Enter your email"/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input name = "password" type = "password" placeholder="Enter your password"/>
                </FormControl>
                <Button mt = "15px" type="submit">Submit</Button>
            </form>
        </Box>
    )
}

export default Login