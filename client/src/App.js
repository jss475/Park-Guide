import React, {useState} from 'react';
import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import NavBar from './components/NavBar'
import {Switch, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import TrailsContainer from './components/TrailsContainer'
import TrailPage from './components/TrailPage'
import NewTrailForm from './components/NewTrailForm';
import FoodContainer from './components/FoodContainer';
import FoodPage from './components/FoodPage'
import NewFoodForm from './components/NewFoodForm';
import LodgingContainer from './components/LodgingContainer';
import LodgingPage from './components/LodgingPage'
import NewLodgingForm from './components/NewLodgingForm';

function App() {

  //create a state to check if the user has logged in
  //need to use local storage due to state being update on a refresh
  //credit to James Coffman for the code below
  const [isLoggedIn, setIsLoggedIn] = useState(()=> {
    const logged = localStorage.getItem('loggedIn')
    return logged==="true" ? true : false
  })
  
  //handle changing the state of the local storage logged in value
  function handleLSLoggedIn(val,id){
    setIsLoggedIn(val)
    //set a loggedIn tag to be true or false if logged in
    val ? localStorage.setItem('loggedIn','true') : localStorage.setItem('loggedIn','false')
    //set ID of user
    val ? localStorage.setItem('id',id) : localStorage.removeItem('id')
  }

  console.log(isLoggedIn)
  return (
    <ChakraProvider>
      <NavBar isLoggedIn={isLoggedIn} handleLSLoggedIn={handleLSLoggedIn}/>
      <Switch>
        <Route exact path = "/about">
          About
        </Route>
        <Route exact path = "/yosemite">
          Yosemite
        </Route>
        <Route exact path = "/yosemite/lodging">
          <LodgingContainer />
        </Route>
        <Route exact path = "/yosemite/lodging/new">
          <NewLodgingForm isLoggedIn={isLoggedIn}/>
        </Route>
        <Route exact path = "/yosemite/lodging/:id">
          <LodgingPage isLoggedIn={isLoggedIn}/>
        </Route>
        <Route exact path = "/yosemite/food">
          <FoodContainer />
        </Route>
        <Route exact path = "/yosemite/food/new">
          <NewFoodForm isLoggedIn={isLoggedIn}/>
        </Route>
        <Route exact path = "/yosemite/food/:id">
          <FoodPage />
        </Route>
        <Route exact path = "/yosemite/trails">
          <TrailsContainer />
        </Route>
        <Route exact path = "/yosemite/trails/new">
          <NewTrailForm isLoggedIn={isLoggedIn}/>
        </Route>
        <Route exact path = "/yosemite/trails/:id">
          <TrailPage />
        </Route>
        <Route exact path = "/login">
          <Login handleLSLoggedIn={handleLSLoggedIn}/>
        </Route>
        <Route exact path = "/signup">
          <SignUp handleLSLoggedIn={handleLSLoggedIn}/>
        </Route>
        <Route exact path = "/logout">
          Logout
        </Route>
        <Route exact path = "/me">
          Me
        </Route>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
