import React from "react";


function CategoryList(props) {
	console.log(props.obj.category)

return(

					
                        <li><a href="#">{props.obj.category}</a></li>
                    
                   
)
}

export default CategoryList;