import React from 'react';
import Home from './components/home.js';
import SignUpUseState from './components/signup.js';
import Nav from './components/navigationbar.js';
import SignInUseState from './components/login.js';
import Course from './components/courses.js';
import Category1 from './components/category1.js';
import { Route, Routes } from "react-router-dom";




function App() {

  return (
    <div className="App">
      
     <Nav />
		<Routes>
		
		<Route path='/' element={<Home />} />
		<Route path='/signup' element={<SignUpUseState />} />
    <Route path='/signin' element={<SignInUseState />} />
    <Route path='/courses' element={<Course />} />
    <Route path='/courses/Programming-FrontEnd' element={<Category1 />} /> 
    

    
         
		</Routes>
  </div>
  );
}

export default App;
