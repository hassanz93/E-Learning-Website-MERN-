import React, { useEffect, useState } from "react";
import axios from "axios";
import './style/nav.css';
import Home from './home';
import SignUpUseState from './signup';
import { Route, NavLink, Routes } from "react-router-dom";
import CategoryList from "./categorylist";


function Nav() {

	const [categ, setCategorie] = useState([]);
	
	useEffect(() => {
		getCategories();
		
	  }, []); 



    const getCategories = () =>{
		axios.get("http://localhost:8000/courses")
		.then((response) => {
			
			setCategorie(response.data)
		
			
		}).catch((error) => {
			console.log(error);
		  });
	}

	const displayData = () => {

		
       return  (   categ.map((data => {
			
		console.log(categ);
				return <CategoryList obj={data} key={data._id} />;
		
		  })
	   )
		)}
	
	

  return (
 
    <div className="navbar navbar-inverse">
		<div className="container navbarcont">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
				<a className="navbar-brand" href="index.html">
			</a>
			</div>
			<div className="navbar-collapse collapse">
				<ul className="nav navbar-nav mainNav">
					<li className="active">  <NavLink className="nav-link" to={"/"}> Home </NavLink></li>
				
					
     
					<li><a href="#">Upload Course</a></li>
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">Categories <b className="caret"></b></a>
						<ul className="dropdown-menu">
						{displayData()}
						</ul>
						
					</li>
        

				</ul>
        <ul className="nav navbar-nav pull-right mainNav">
          <li> <NavLink className="nav-link" to={"/signup"}> SignUp </NavLink></li>
          </ul>
			</div>

		</div>
	</div>


  );
}

export default Nav;
















