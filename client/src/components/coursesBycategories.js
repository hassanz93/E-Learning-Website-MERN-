
import "./style/courses.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './style/home.css';
import './style/nav.css';
import axios from 'axios';

function Category1(){
const [course, setCourse] = useState([]);
let { category } = useParams();
  const [loading, setLoading] = useState(true);

useEffect(() => { 
  axios.get(`http://localhost:8000/category/?category=` + category)

    .then((response) => {
      
      setCourse(response.data)
      console.log(response.data)
      setLoading(false);

    }).catch((error) => {
      console.log(error);
      setLoading(false);

    });
}, [category]); 

if(loading) return <><h1>LOADING....</h1></>

  return (
    course.map(course =>{
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