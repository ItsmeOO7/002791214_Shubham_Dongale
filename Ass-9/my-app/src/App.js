import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Jobs from './Pages/Jobs';


function App() {
  return (
    <div className= "App" >
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>}></Route>
        <Route path = "/Home" element = {<Home/>}></Route>
        <Route path = "/About" element = {<About/>} ></Route>
        <Route path='/Contact' element = {<Contact/>}></Route>
        <Route path='/Jobs' element = {<Jobs/>}></Route>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
