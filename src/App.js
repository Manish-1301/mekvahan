import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Home/Home'; 

function App() {
  return (
      <Router>
        <SignIn path='/' />
        <Home path ='/home'/>
      </Router>
  );
}

export default App;
