import React, { useContext, useState } from "react";
import './style/home.css';
import AuthContext from "../context/AuthContext";
import { Link} from "react-router-dom";

function Home(){

	

	const { loggedIn } = useContext(AuthContext);
 return(

    <>
    <section className="first-section">
        <div></div>
        <aside className="first-section-info">
            <div className="first-section-info-text">
                <h2>Welcome to Udemy</h2>
                <p>We Deliver Real Results</p>
                <Link to='/courses'>
                    <button color="info">Browse Courses </button>
                    </Link>
            </div>
        </aside>
    </section>
    <section className="second-section">
        <div className='second-section-info'>
            <p>Learn from an elite community of instructors, experts, and thought leaders with high-quality content.</p>
        </div>
    </section>
    <section className="container features">
			
	
			<div className="section-heading">
							<h2>Our Features</h2>
						
						</div>
	
			<div className="row">
				<div className="col-md-4">
					<div className="featured-box">
						<i className="fa fa-eye fa-2x"></i>
						<div className="text">
							<h3>Latest Courses</h3>
							Take advantage of the variety of new courses uploaded each day and learn new skills to increase your chances of success in life.
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="featured-box">
						<i className="fa fa-quote-right fa-2x"></i>
						<div className="text">
							<h3>Assessment</h3>
							Get a free assessment to help recommend you courses based on your preferences including current knowledge and skills.
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="featured-box">
						<i className="fa fa-arrows fa-2x"></i>
						<div className="text">
							<h3>Certificate</h3>
							Earn a certificate to carry with you proudly. Certificates are available in different languages; English, Arabic, and French.
						</div>
					</div>
				</div>
			</div>

		</section>
		<section className="fourth-section">
                    <aside className="fourth-section-info">
                        <div className="fourth-section-info-text">
                            <h2>Upload to Udemy</h2>
                            <p>Join the ranks and upload your own courses</p>
							{loggedIn === true && (
             
                            <Link to='/uploadCourse'><button style={{ width : '150px', padding : '10px' }} color='info'>Upload Course</button> {' '}</Link>
							)}
							 {loggedIn === false && (
								     <Link to='/signup'><button style={{ width : '150px', padding : '10px' }} color='info'>Upload Course</button> {' '}</Link>
							 )}
									 </div>
                    </aside>
                <div className="illustrated-image">
                    <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/video_upload_3d4u.svg" alt=""/>
                </div>
            </section>
			<footer className="footer-section">
                <div className="footer-section-info">
                  
                    <p className="infofooter">Copyrights Reserved @2022</p>
                </div>
            </footer>
	</>

 )
}

export default Home