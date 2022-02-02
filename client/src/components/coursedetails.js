import "./style/courses.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function CourseDetails() {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/courses/" + id)
      .then((response) => {
        console.log("success");
        console.log(response);
        setCourse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error");
        setLoading(false);
      });
  }, []); 

  if(loading) return <><h1>LOADING....</h1></>

  return (
    <>
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

    </div>
  </div>
</div>
    </>
  );
}

export default CourseDetails;
