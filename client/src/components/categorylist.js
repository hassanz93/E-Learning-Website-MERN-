import React from "react";
import { NavLink } from "react-router-dom";
import './style/nav.css';


function CategoryList(props) {
	// console.log(props.obj.category)

return(
    
    <li><NavLink to={`/courses/${props.obj.category}`}>{props.obj.category}</NavLink></li>                                    
)
}

export default CategoryList;