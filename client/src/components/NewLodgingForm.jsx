import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Input, Button, Select, FormControl, FormLabel, Box, Stack, Checkbox, CheckboxGroup, Text, Flex, FormErrorMessage, FormHelperText} from '@chakra-ui/react'

function NewLodgingForm({isLoggedIn}){
    //set error for filling out the new food form
    const [errors, setErrors] = useState([])

    //set const for lodging amenity check
    const [checkedLAmenity, setCheckedLAmenity] = useState([])
    //set const for romm amenity check
    const [checkedRAmenity, setCheckedRAmenity] = useState([])

    //set const for all inputs
    const [allInputs, setAllInputs] = useState({lodging_amenity: []})

    let history = useHistory()

    //prepend website with https:// if not already present
    function addhttp(url) {
        if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
            url = "http://" + url;
        }
        return url;
    }

    function array_maker(string){
        let arr = string.split(",")
        return arr
    }

   
    const handleNewLodgingSubmit = async (e) => {
        e.preventDefault()

        let req = await fetch("/lodgings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(allInputs)
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


    //disable and enabel submit button based on login status
    let disabled_val
    if(isLoggedIn){
        disabled_val = false
    }else{
        disabled_val = true
    }

    //handle onChange
    
    function handleLodgingAmenityChange(e){
        if(!checkedLAmenity.includes(e.target.value)){

            setCheckedLAmenity([...checkedLAmenity,e.target.value])
            setAllInputs({...allInputs, "lodging_amenity":[...checkedLAmenity,e.target.value]})
        }else{

            setCheckedLAmenity([...checkedLAmenity].filter(amenity => amenity !== e.target.value))
            setAllInputs({...allInputs, "lodging_amenity":[...checkedLAmenity].filter(amenity => amenity !== e.target.value)})
        }
    }

    function handleRoomAmenityChange(e){
        if(!checkedRAmenity.includes(e.target.value)){

            setCheckedRAmenity([...checkedRAmenity,e.target.value])
            setAllInputs({...allInputs, "room_amenity":[...checkedRAmenity,e.target.value]})
        }else{

            setCheckedRAmenity([...checkedRAmenity].filter(amenity => amenity !== e.target.value))
            setAllInputs({...allInputs, "room_amenity":[...checkedRAmenity].filter(amenity => amenity !== e.target.value)})
        }

    }
    console.log(allInputs)
    
    return (
        <Box mt="80px" w="80%" ml="auto" mr="auto">  
            {errors.map(error => <Text color="red">{error}</Text>)}
            <form id="new-lodging-form" onSubmit={handleNewLodgingSubmit}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" placeholder="Enter name of the place" onChange={(e)=> setAllInputs({...allInputs, [e.target.name]: e.target.value})}/>
                </FormControl>
                <FormControl isRequired w="300px" mt="10px">
                    <FormLabel>Address</FormLabel>
                    <Input name="address" placeholder="Enter the address" onChange={(e)=> setAllInputs({...allInputs, [e.target.name]: e.target.value})}/>
                </FormControl>
                <FormControl isRequired w="300px" mt="10px">
                    <FormLabel>Website</FormLabel>
                    <Input name = "website" placeholder="Enter the website" onChange={(e)=> setAllInputs({...allInputs, [e.target.name]: e.target.value})}/>
                </FormControl>
                <Flex mt="15px">
                    <FormControl>
                        <FormLabel>Lodging Amenity</FormLabel>
                        <Stack >
                            <CheckboxGroup >
                                <Checkbox  name = "room_service" value="Room Service" onChange={handleLodgingAmenityChange}>Room Service</Checkbox>
                                <Checkbox  name = "dining" value="Dining" onChange={handleLodgingAmenityChange}>Dining</Checkbox>
                                <Checkbox  value="Free Guest Parking" onChange={handleLodgingAmenityChange}>Free Guest Parking</Checkbox>
                                <Checkbox  value="Valet" onChange={handleLodgingAmenityChange}>Valet</Checkbox>
                                <Checkbox  value="Gift Shop" onChange={handleLodgingAmenityChange}>Gift Shop</Checkbox>
                                <Checkbox  value="ADA Accessible" onChange={handleLodgingAmenityChange}>ADA Accessible</Checkbox>
                                <Checkbox  value="Golf Course" onChange={handleLodgingAmenityChange}>Golf Course</Checkbox>
                                <Checkbox  value="Swimming Pool" onChange={handleLodgingAmenityChange}>Swimming Pool</Checkbox>
                                <Checkbox  value="Non Smoking" onChange={handleLodgingAmenityChange}>Non Smoking</Checkbox>
                                <Checkbox  value="Concierge" onChange={handleLodgingAmenityChange}>Concierge</Checkbox>
                                <Checkbox  value="Shuttle Access" onChange={handleLodgingAmenityChange}>Shuttle Access</Checkbox>
                            </CheckboxGroup>
                        </Stack>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Room Amenity</FormLabel>
                        <Stack >
                            <CheckboxGroup >
                                <Checkbox  value="Hair Dryer" onChange={handleRoomAmenityChange}>Hair Dryer</Checkbox>
                                <Checkbox  value="Room Service" onChange={handleRoomAmenityChange}>Room Service</Checkbox>
                                <Checkbox  value="Private Room" onChange={handleRoomAmenityChange}>Private Room</Checkbox>
                                <Checkbox  value="Shared Room" onChange={handleRoomAmenityChange}>Shared Room</Checkbox>
                                <Checkbox  value="Rollaway Crib" onChange={handleRoomAmenityChange}>Rollaway Crib</Checkbox>
                                <Checkbox  value="Non-Smoking" onChange={handleRoomAmenityChange}>Non-Smoking</Checkbox>
                                <Checkbox  value="Iron/Ironing Board" onChange={handleRoomAmenityChange}>Iron/Ironing Board</Checkbox>
                                <Checkbox  value="Flat Screen TV" onChange={handleRoomAmenityChange}>Flat Screen TV</Checkbox>
                                <Checkbox  value="Mini Fridge" onChange={handleRoomAmenityChange}>Mini Fridge</Checkbox>
                                <Checkbox  value="No Pets Allowed" onChange={handleRoomAmenityChange}>No Pets Allowed</Checkbox>
                                <Checkbox  value="Toiletries" onChange={handleRoomAmenityChange}>Toiletries</Checkbox>
                                <Checkbox  value="Balcony/Patio" onChange={handleRoomAmenityChange}>Balcony/Patio</Checkbox>
                                <Checkbox  value="Daily Housekeeping" onChange={handleRoomAmenityChange}>Daily Housekeeping</Checkbox>
                                <Checkbox  value="Telephone" onChange={handleRoomAmenityChange}>Telephone</Checkbox>
                            </CheckboxGroup>
                        </Stack>
                    </FormControl>
                </Flex>
                <FormControl isRequired w="300px" mt="10px">
                    <FormLabel>Picture</FormLabel>
                    <Input name = "image" placeholder="Enter URL for picture" onChange={(e)=> setAllInputs({...allInputs, [e.target.name]: e.target.value})}/>
                </FormControl>
                {/* Disable button when not logged in */}
                <Button disabled={disabled_val} type="submit" mt="15px" >Submit</Button>
            </form>
    </Box>
    )
}

export default NewLodgingForm