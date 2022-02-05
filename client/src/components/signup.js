import React, { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import './style/signup.css';
import './style/nav.css';

const AlertStyle ={
  display: "none"
}

const SignUpUseState = (props) => {
  const [user, setUser] = useState({
      name : "",
      email : "",
      password : "",
      username: "",
      address: "",
 
  })
  const [errorMessage, setErrorMessage] = useState('');

  const [className, setClassName] = useState('');

  const handleChange = (e) =>{
      setUser({...user, [e.target.name] : e.target.value});
        console.log(e.target.name);
        
  }

  const handleSubmit = e =>{
      e.preventDefault()
      
    
      const userData = {
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
        address: user.address,
      
      };
  
      axios
        .post("http://localhost:8000/users/register", userData)
        .then((response) => {
          console.log(response.status)

          if(response.status === 200 ){
            setErrorMessage(("Signed Up successfully"));
            setClassName("alert alert-success")
            document.getElementsByClassName("alert alert-success")[0].style.display = 'block';
          }

        }).catch((error) => {
         if( error.response.status === 400){ 
          setErrorMessage((error.response.data.message));
          setClassName("alert alert-danger")
          document.getElementsByClassName("alert alert-danger")[0].style.display = 'block';
        } 
     
        });
  
      console.log(userData);
     
    };
  
  return (
    <div>
      <div className="container signup">
        <h1>Register</h1>
        <br></br>
        <div className="form-div mt-5">
        <div className={className} style={AlertStyle} role="alert">{errorMessage} </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              name="name"
              value={user.name }
              className="form-control form-group mt-2"
            />

            <input
              type="text"
              placeholder="UserName"
              onChange={handleChange}
              name="username"
              value={user.username}
              className="form-control form-group mt-2"
            />

            <input
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
              value={user.email}
              className="form-control form-group mt-2"
            />

            <input
              type="password"
              placeholder="password"
              onChange={handleChange}
              name="password"
              value={user.password}
              className="form-control form-group mt-2"
            />
              <input
              type="text"
              placeholder="address"
              name="address"
              onChange={handleChange}
              value={user.address}
              className="form-control form-group mt-2"
            />

            <input color="info"
              type="submit"
              className="btn btn-block mt-2 signupbutton"
              value="Submit"
            />
          </form>
           <p>already have an account? click <Link to='/signIn'>here</Link></p>

        </div>
      </div>
    </div>
  
    
  );
};

export default SignUpUseState;
