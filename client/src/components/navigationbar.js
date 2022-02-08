import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./style/nav.css";
import { Route, NavLink, Routes } from "react-router-dom";
import CategoryList from "./categorylist";
import AuthContext from "../context/AuthContext";
import LogOutBtn from "./logout";




function Nav() {
  const [categ, setCategorie] = useState([]);

  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get("http://localhost:8000/courses")
      .then((response) => {
        setCategorie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displayData = () => {
    let uniquecateg = categ.filter((ele, ind) =>
      ind === categ.findIndex(elem =>
        elem.id === ele.id && elem.category === ele.category))
    return uniquecateg.map((data) => {
      return <CategoryList obj={data} key={data._id} />;
    });
  };

  return (

    <div className="navbar navbar-inverse">
      <div className="container navbarcont">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html"></a>
        </div>

        <div className="navbar-collapse collapse">
          {loggedIn === false && (
            <>
              <ul className="nav navbar-nav mainNav">

                <li className="active">
                  {" "}
                  <NavLink className="nav-link" to={"/"}>
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>


                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Categories <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">{displayData()}</ul>
                </li>
              </ul>
              <ul className="nav navbar-nav pull-right mainNav">
                <li>
                  {" "}
                  <NavLink className="nav-link" to={"/signup"}>
                    {" "}
                    SignUp{" "}
                  </NavLink>
                </li>
              </ul>
            </>
          )}
          {loggedIn === true && (
            <>
              <ul className="nav navbar-nav mainNav">

                <li className="active">
                  {" "}
                  <NavLink className="nav-link" to={"/"}>
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to={"/uploadcourse"}>
                    {" "}
                    Upload Course{" "}
                  </NavLink>
                </li>

                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Categories <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">{displayData()}</ul>
                </li>
              </ul>
              <ul className="nav navbar-nav pull-right mainNav">

                <LogOutBtn />


              </ul>
            </>
          )}
        </div>
      </div>
    </div>

  );
}

export default Nav;

