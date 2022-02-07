import React, { useContext, useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import axios from "axios";
import './style/signup.css';
import AuthContext from "../context/AuthContext";


const AlertStyle ={
  display: "none"
}

const SignInUseState = (props) => {
  const [user, setUser] = useState({
     
      email : "",
      password : "",
   
 
  })
  const [errorMessage, setErrorMessage] = useState('');

  const [className, setClassName] = useState('');

  const {getLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>{
      setUser({...user, [e.target.name] : e.target.value})
  }

  const handleSubmit = e =>{
      e.preventDefault()
      
    
      const userData = {
      
        email: user.email,
        password: user.password,
       
      
      };
  
      axios
        .post("http://localhost:8000/users/login", userData)
        .then((response) => {
          console.log(response.status)

          if(response.status === 200 ){
            setErrorMessage(("Logged In successfully"));
            setClassName("alert alert-success");
            document.getElementsByClassName("alert alert-success")[0].style.display = 'block';
            getLoggedIn();
            navigate("/");
          }

        }).catch((error) => {
       if( error.response.status === 400){ 
             console.log(error.response.data.message);
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
      <h1>Login</h1>
      <br></br>
        <div className="form-div mt-5 form">
        <div className={className} style={AlertStyle} role="alert">{errorMessage} </div>
          <form onSubmit={handleSubmit}>
          
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
          

            <input color="info"
              type="submit"
              className="btn btn-block mt-2 signupbutton"
              value="Login"
            />
          </form>
          <p>You Don't Have An Account <Link to='/signup'>click here</Link></p>

        </div>
      </div>
    

    </div>
    
  );
};

export default SignInUseState;
