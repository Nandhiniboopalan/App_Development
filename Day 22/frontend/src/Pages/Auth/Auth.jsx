import React from "react";
import { useLocation } from "react-router-dom";
import Signin from "../../Components/Register/Signin";
import Signup from "../../Components/Register/Singup";
import AdminSignin from "../../Components/Register/AdminSignin";

// import Com from "../../Auth/Com";

// Now you can use the Com component in this file

import "./Auth.css";

const Auth = () => {
  const location = useLocation();

  return (
    <div>
      <div class="flex items-center justify-center h-[100vh]">
        <div className="relative mr-10 hidden lg:block"></div>

        <div className="form md:w-[35vw] lg:w-[22vw]">
          {location.pathname === "/login" ? <Signin/> :  <Signup/>}
          {/* <Com /> */}
        </div>
      </div>
    </div>
  );
};

export default Auth;
