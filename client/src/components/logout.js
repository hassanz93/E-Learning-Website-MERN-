import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate} from "react-router-dom";
import "./style/logout.css"

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();


  async function logOut() {
     await axios.get("http://localhost:8000/users/logout");
   
    await getLoggedIn();
    getLoggedIn();
    navigate("/");
  }

  return  (
  <li>  <input color="info"
      type="button"
      className="btn logoutbutton"
      value="Logout"
      onClick={logOut}
    />
    </li>)
}

export default LogOutBtn;