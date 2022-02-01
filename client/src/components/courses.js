import "./style/courses.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/courses")
      .then((response) => {
        setCourses(response.data);
            })
      .catch((error) => {
        console.log(error);
      });
  });

  return courses.map((course) => {
    return (
      <div className="main" key={course._id}>
        <div className="product">
          <img src={course.image} alt={course.title} />

          <div className="product__info">
            <p className="info__name">{course.title}</p>
            <p className="info__name">{course.category}</p>

            <p className="info__description">
              {course.description.substring(0, 100)}...
            </p>

            <p className="info__price">${course.price}</p>

<<<<<<< HEAD
            <Link to={`/courses/${course._id}`} className="info__button">
              View
            </Link>
          </div>
        </div>
=======
        <p className="info__price">${course.price}</p>


        <Link to={`/courses/${course._id}`} className="info__button">

    
          View
        </Link>
        
>>>>>>> 9b4093bfc4e0f09b83c2b880434f43640b000aab
      </div>
    );
  });
}
export default Course;
