import React from 'react';
import Home from './components/home';
import SignUpUseState from './components/signup';
import Nav from './components/navigationbar';
import SignInUseState from './components/login';
import Course from './components/courses.js';
import coursesData from "./data/courses"
import { Route, NavLink, Routes } from "react-router-dom";



function App() {
  const courseElement = coursesData.map(course =>{
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
