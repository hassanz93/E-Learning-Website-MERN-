import React from 'react';
import Home from './components/home.js';
import SignUpUseState from './components/signup.js';
import Nav from './components/navigationbar.js';
import SignInUseState from './components/login.js';
import Course from './components/courses.js';

import { Route, NavLink, Routes } from "react-router-dom";
import  { useState, useEffect } from "react";
import CourseDetails from './components/coursedetails'




function App() {

  return (
    <div className="App">
      
     <Nav />
		<Routes>
		
		<Route path='/' element={<Home />} />
		<Route path='/signup' element={<SignUpUseState />} />
    <Route path='/signin' element={<SignInUseState />} />
    <Route path='/courses' element={<Course />} />

   <Route path='/courses/:courseId' element={<CourseDetails />} />

    

    
         
		</Routes>
  </div>
  );
}

export default App;
