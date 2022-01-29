import React from 'react';
import "./style/courses.css";
import { Link } from "react-router-dom";

function Course(props){
  return (
    <div className="main">
    <div className="product">
      <img src={props.image} alt={props.title} />

      <div className="product__info">
        <p className="info__name">{props.title}</p>
        <p className="info__name">{props.category}</p>

        <p className="info__description">{props.description.substring(0, 100)}...</p>

        <p className="info__price">${props.price}</p>

        <Link to={`/product/${props.productId}`} className="info__button">
          View
        </Link>
        
      </div>
    </div>
    </div>
  );
};

export default Course;