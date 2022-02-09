import "./style/details.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from 'react-player/youtube'
import "./style/videoplayer.css"

function VideoPlayer() {
  const [course, setCourse] = useState({videos:[]});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/courses/" + id)
      .then((response) => {
        console.log("success");
        console.log(response);
        setCourse(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);


  const displayTitle = () => {
    return course.videos.map((data) => {


      return (
        <div className="container">
          <h2 className='video-title'>{data.videotitle} </h2>
          <div className="row">
          <div className="video-player col-md-6">

            <ReactPlayer
              controls={true}
              url={`${data.video}`} />
              </div>
              <div className="video-desc col-md-6">
                {data.videodescription}
              </div>
          </div>
        </div>
      )
    });
  }
  return (
    displayTitle()
  )
}

export default VideoPlayer;