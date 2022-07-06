import React from 'react';
import {Link as ReactLink, useHistory} from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Link,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {GiHamburgerMenu} from 'react-icons/gi'
import '../navbar.css'
// import {Link as ReachLink} from '@reach/router'

function NavBar({isLoggedIn, handleLSLoggedIn}){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  //set to push page to different page
  let history = useHistory()
  //handle the button click for the signup event
  function handleSignUpClick(){
    history.push('/signup')
  }

  //handle the sing in button click
  function handleLoginClick(){
    history.push('/login')
  }

  //handle the logout click
  const handleLogOut= async () => {
    await fetch('/logout', {
      method: "DELETE"
    });
    handleLSLoggedIn(false)
    history.push("/about")
  }

  //handle the add a trail button click
  function handleAddTrailClick(){
    history.push('/yosemite/trails/new')
    onClose()
  }

  //handle the add a food button click
  function handleAddFoodClick(){
    history.push('/yosemite/food/new')
    onClose()
  }

    //handle the add a lodging button click
    function handleAddLodgingClick(){
      history.push('/yosemite/lodging/new')
      onClose()
    }

  return (
    <>
      <Button ref={btnRef} leftIcon={<GiHamburgerMenu />}colorScheme='teal' onClick={onOpen} variant='outline' position="fixed" top="0" right = "0" m='4'>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link as={ReactLink} to='/about' onClick={onClose}>
              Park Guide
            </Link>
          </DrawerHeader>
          {/* This is where I put in the links */}
          <DrawerBody>
            <Link as={ReactLink} to='/about' className="navbar-about" onClick={onClose}>
              About
            </Link>
            <h1 className="navbar-title">National Parks</h1>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Link as={ReactLink} to='/yosemite'>
                        Yosemite
                      </Link>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link as={ReactLink} to='/yosemite/lodging' onClick={onClose}>
                    Lodging
                  </Link>
       
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link as={ReactLink} to='/yosemite/food' onClick={onClose}>
                      Food
                  </Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link as={ReactLink} to='/yosemite/trails' onClick={onClose}>
                      Trails
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
          {/* When logged in you can add stuff */}
          {isLoggedIn ? 
          <DrawerBody>
            <Flex flexDirection="column">
              <Button onClick={handleAddTrailClick}>Add a Trail!</Button>
              <Button  onClick={handleAddLodgingClick} mt="10px">Add Lodging!</Button>
              <Button onClick = {handleAddFoodClick} mt="10px">Add Food!</Button>
            </Flex>
          </DrawerBody> :
          null
          }

          <DrawerFooter>
            {!isLoggedIn ? 
              <>
                  <Button colorScheme='blue' mr={3} onClick={()=> {
                    handleLoginClick()
                    onClose()
                  }}>Sign In</Button>
                  <Button colorScheme='blue' mr={3} onClick={()=> {
                    handleSignUpClick()
                    onClose()
                  }}>
                  Sign Up
                  </Button> 
              </> :
                <Button variant='outline' mr={3} onClick={()=> {
                  onClose()
                  handleLogOut()
                  }}>
                  Logout
                </Button>
          }
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavBar