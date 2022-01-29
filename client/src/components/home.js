// import './home.css';
import React from 'react';
import './style/home.css'
import { Router, Route, Link, Routes, NavLink} from "react-router-dom";

function Home(){
 return(

    <>
    <section className="first-section">
        <div></div>
        <aside className="first-section-info">
            <div className="first-section-info-text">
                <h2>Welcome to Udemy</h2>
                <p>We Deliver Real Results</p>
                <Link to='/'>
                    <button color="info">Browse Courses </button>
                    {' '}</Link>
            </div>
        </aside>
    </section>
    <section className="second-section">
        <div className='second-section-info'>
            <p>Learn from an elite community of instructors, experts, and thought leaders with high-quality content.</p>
        </div>
    </section>
    <section class="container features">
			
	
			<div class="section-heading">
							<h2>Our Features</h2>
						
						</div>
	
			<div class="row">
				<div class="col-md-4">
					<div class="featured-box">
						<i class="fa fa-eye fa-2x"></i>
						<div class="text">
							<h3>Latest Courses</h3>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="featured-box">
						<i class="fa fa-quote-right fa-2x"></i>
						<div class="text">
							<h3>Assessment</h3>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="featured-box">
						<i class="fa fa-arrows fa-2x"></i>
						<div class="text">
							<h3>Certificate</h3>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
				</div>
			</div>

		</section>
	</>

 )
}

export default Home