
import "./style/courses.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import CourseDetails from "./coursedetails.js"

function Course(){
const [courses, setCourses] = useState([]);

useEffect(() => {
  fetch("http://localhost:8000/courses")
    .then(response => response.json()
  )
    .then(data => {
      console.log(data)
      setCourses(data); 
    
    });
}, []); 

  return (

		   courses.map((course => {
     
				return (
		 
       
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
  )
}
export default Course;