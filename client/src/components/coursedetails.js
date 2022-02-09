import "./style/details.css";
import { useParams } from "react-router-dom";
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

  const displayData = () => { 
    return course.videos.map((data) => { 
      return (
        <tr>
          <td>{data.videotitle}</td>
          
          </tr>
       
      );
      
    })
    
    
    ;
  };
  const displayPreview=() =>{
    return (

    <td rowSpan={course.videos.length}>
      <a className="a-video" href={`/courses/${course._id}/video`}>
        {" "}
        Preview
      </a>
    </td>
    )
  
  }

  if (loading)
    return (
      <>
        <h1>LOADING....</h1>
      </>
    );

  return (
    <div className="bodycon-details">
      <div className="container-details">
        <div className="main-details" key={course._id}>
          <div className="product-details">
            <p className="infocategory-details">{course.category}</p>
            <p className="infoname-details">{course.title}</p>
            <p className="infodescription-details">
              {course.description.substring(0, 10000)}...
            </p>

            <div className="ratings-details">
              <div className="highlight-details">{course.status}</div>
              <div className="ratingstar-details">
                Ratings: {course.reviews}/5
              </div>
              <div className="ratingnumber-details">
                ({course.reviewsnumber} likes)
              </div>
              <div className="students-details">{course.buyers} students</div>
            </div>

            <div className="extrainfo-details">
              <div className="author-details">Course by {course.credit}</div>
              <div className="uploaddate-details">{course.Date}</div>
              <div className="language-details">
                Language: {course.language}{" "}
              </div>
            </div>

            <h2 className="Course-title">Course Content</h2>

            <table className="Tables coursecontent">
              <tr>
                <th>Video Topic</th>
                <th>Play Videos</th>
              </tr>
              <tr>
              {displayData()}
              <td>
              {displayPreview()}
              </td>
              </tr>
              
            </table>
          </div>
        </div>
      </div>

      <div className="buy-details">
        <img src={course.image} alt={course.title} className="image-details" />
        <div className="price-details"> ${course.price}</div>
        <div className="seats-details"> Seats left: {course.seats}</div>
        <button className="buttonBuy">Buy Now</button>
        <div className="moneyback">30-Day Money-Back Guarantee</div>
      </div>
    </div>
  );
}

export default CourseDetails;
