import "./style/courses.css";
import { Link, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import './style/home.css'
 

function Category1(){
const [category, setCourses] = useState([]);
const[searchParams] = useSearchParams()
const Category1 = searchParams.get('category');

useEffect(() => {
  
  axios.get(`http://localhost:8000/courses?category=${Category1}`)
  .then((response) => {
			
    setCourses(response.data)
  
    
  }).catch((error) => {
    console.log(error);
    });
}, []); // empty array because we only run once

  

  return (
    category.map(course =>{
      return(
    <div className="main"   key={course._id}>
    <div className="product">
      <img src={course.image} alt={course.title} />

      <div className="product__info">
        <p className="info__name">{course.title}</p>
        <p className="info__name">{course.category}</p>

        <p className="info__description">{course.description.substring(0, 100)}...</p>

        <p className="info__price">${course.price}</p>


        <Link to={`/courses/${course._id}`} className="info__button">

    
          View
        </Link>
        
      </div>
    </div>
    </div>
      )
})
  )
}
export default Category1;