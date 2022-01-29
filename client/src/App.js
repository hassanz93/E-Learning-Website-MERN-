

import React from 'react';
import Home from './components/home';
import SignUpUseState from './components/signup';
import Nav from './components/navigationbar';
import SignInUseState from './components/login';
import { Route, NavLink, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
     <Nav />
		<Routes>
		
		<Route path='/' element={<Home />} />
		<Route path='/signup' element={<SignUpUseState />} />
    <Route path='/signin' element={<SignInUseState />} />
         
		</Routes>
  </div>
  );
}

export default App;
