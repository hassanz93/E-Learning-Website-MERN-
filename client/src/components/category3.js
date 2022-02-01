
import "./style/courses.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './style/home.css';
import './style/nav.css';
import axios from 'axios';

function Category3(){
const [thirdCategory, setCategory] = useState([]);


useEffect(() => {
  axios.get(`http://localhost:8000/category/?category=Physics`)
    .then((response) => {

      setCategory(response.data)


    }).catch((error) => {
      console.log(error);
    });
}, []); // empty array because we only run once


  console.log('Result: ' + thirdCategory + "Final") 

  return (
    thirdCategory.map(course =>{
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
export default Category3;