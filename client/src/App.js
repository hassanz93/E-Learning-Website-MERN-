import React from 'react';
import Home from './components/home';
import SignUpUseState from './components/signup';
import Nav from './components/navigationbar';
import SignInUseState from './components/login';
import Course from './components/courses.js';
import coursesData from "./data/courses"
import { Route, NavLink, Routes } from "react-router-dom";
import axios from "axios";
import  { useState, useEffect } from "react";



function App() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/courses")
      .then(response => response.json())
      .then(data => {
        setCourses(data); // set users in state
      });
  }, []); // empty array because we only run once

  const courseElement = courses.map(course =>{
    return <Course image={course.image} title={course.title} category={course.category} description={course.description}
                    price={course.price} productId = {course.productId}  /> 
  })
  return (
    <div className="App">
      
     <Nav />
		<Routes>
		
		<Route path='/' element={<Home />} />
		<Route path='/signup' element={<SignUpUseState />} />
    <Route path='/signin' element={<SignInUseState />} />
    <Route path='/courses' element={courseElement} />

    
         
		</Routes>
  </div>
  );
}

export default App;
