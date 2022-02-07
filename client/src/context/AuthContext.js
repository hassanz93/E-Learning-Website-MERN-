import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:8000/users/loggedIn");
 
   
    setLoggedIn(loggedInRes.data);
    console.log(loggedInRes.data)

  }

  useEffect(() => {
    getLoggedIn();
  }, [loggedIn]);






  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };