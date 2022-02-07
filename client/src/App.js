import React from 'react';
import Home from './components/home.js';
import SignUpUseState from './components/signup.js';
import Nav from './components/navigationbar.js';
import SignInUseState from './components/login.js';
import Course from './components/courses.js';
import Category from './components/coursesBycategories.js';
import CourseDetails from './components/coursedetails.js';
import UploadCourse from './components/uploadcourse.js';
import VideoPlayer from './components/videoplayer';
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
    <Route path='/courses/:id' element={<CourseDetails />} />
    <Route path='/category/:category' element={<Category />} /> 
    <Route path='/uploadcourse' element={<UploadCourse />} />
    <Route path='/courses/:id/video' element={<VideoPlayer />} />

		</Routes>
  </div>
  );
}

export default App;
