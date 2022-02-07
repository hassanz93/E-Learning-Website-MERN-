import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style/uploadcourse.css";
import "./style/nav.css";
import AuthContext from "../context/AuthContext";






  const AlertStyle = {
    display: "none",
  };

const UploadCourse = () => {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    price: 0,
    credit: "",
    language:"",
        seats:10  });


        
  const [videoFields, setVideoFields ] = useState( [] );
  const [videoObj, setVideoObj] = useState({});

  const [errorMessage, setErrorMessage] = useState("");

  const [className, setClassName] = useState("");

 
 const handleChange = async function(e) {
      e.preventDefault();
      e.persist();
     if(e.target.name.startsWith("video")){
        //handle video fields
        setVideoObj( {...videoObj, [e.target.name]: e.target.value })
        console.log(videoObj);
      } else {
        setCourse({ ...course, [e.target.name]: e.target.value });
        // console.log(`COURSE: ${course}`)
      }
  };


  function handleAdd() {
    setVideoFields(videoFields => [...videoFields, videoObj]);
    console.log(videoFields);
    //to reset the video object
    setVideoObj({});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      title: course.title,
      description: course.description,
      category: course.category,
      image: course.image,
      price: course.price,
      videos: videoFields, // cuz we created an array for videos and kept it updated
      credit: course.credit,
      language:course.language,
      seats:course.seats
    };
    console.log(courseData);

    axios
      .post("http://localhost:8000/courses/uploadcourse", courseData)
      .then((response) => {
        console.log(response.status);

        if (response.status === 200) {
          setErrorMessage("Course Added Successfully");
          setClassName("alert alert-success");
          document.getElementsByClassName(
            "alert alert-success"
          )[0].style.display = "block";
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setErrorMessage(error.response.data.message);
          setClassName("alert alert-danger");
          document.getElementsByClassName(
            "alert alert-danger"
          )[0].style.display = "block";
        }
      });

    console.log(courseData);
  };


  return (
  
      
   <div className="container">
   <h1>Upload Course</h1>

 
      <div className="container upload">
     

        <br></br>
        <div className="form-div mt-5 ">
          <div className={className} style={AlertStyle} role="alert">
            {errorMessage}
          </div>
          <form onSubmit={handleSubmit}>
              <div className="row">
          <div className="col-sm-6">
        
            <input
              type="text"
              placeholder="Course Title"
              onChange={handleChange}
              name="title"
              value={course.title}
              className="form-control form-group mt-2"
            />

            <input
              type="text"
              placeholder="Course Description"
              onChange={handleChange}
              name="description"
              value={course.description}
              className="form-control form-group mt-2"
            />

            <input
              type="number"
              placeholder="Course Price"
              name="price"
              onChange={handleChange}
              value={course.price}
              className="form-control form-group mt-2"
            />

            <input
              type="text"
              placeholder="Course Category"
              onChange={handleChange}
              name="category"
              value={course.category}
              className="form-control form-group mt-2"
            />
            <input
              type="text"
              placeholder="Course Image"
              name="image"
              onChange={handleChange}
              value={course.image}
              className="form-control form-group mt-2"
            />
            <select class="form-control form-group mt-2" aria-label="Default select example"
              placeholder="Course Language"
              name="language"
              onChange={handleChange}
              value={course.language}
            >
              <option>Choose A Language</option>
                <option   value="English">English</option>
                <option   value="Arabic">Arabic</option>
                <option   value="French">French</option>
            </select>
  
            <input
              type="text"
              placeholder="Course Credit"
              name="credit"
              onChange={handleChange}
              value={course.credit}
              className="form-control form-group mt-2"
            />
             <input
              type="number"
              min={10}
              max={50}
              placeholder="Course Seats"
              name="seats"
              onChange={handleChange}
              value={course.seats}
              className="form-control form-group mt-2"
            />


     </div>
        <div className="col-sm-6">
            <input
              type="text"
              placeholder="Course Video"
              name="video"
              onChange={handleChange}
              value={ videoObj.video || ""}
              className="form-control form-group mt-2 "
            />

            <input
              type="text"
              placeholder="Video Title"
              name="videotitle"
              onChange={handleChange}
              value={ videoObj.videotitle || ""}
              className="form-control form-group mt-2 "
            />
            <input
              type="text"
              placeholder="Video Description"
              name="videodescription"
              onChange={handleChange}
              value={ videoObj.videodescription || ""}
              className="form-control form-group mt-2 "
            />

            <input color="info"
             onClick={() => handleAdd()}
              className="btn btn-block mt-1 uploadButton"
              value="Add Video/Fill Again To Add Another"
            />
                        </div>
            
                        </div>
  
            <input
              color="info"
              type="submit"
              className="btn btn-block mt-2 signupbutton"
              value="Submit"
            />
          </form>
        </div>
      </div>
      </div>
     
  );
};


export default UploadCourse;


