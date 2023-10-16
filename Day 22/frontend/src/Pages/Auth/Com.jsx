import React from 'react';
import Signin from '../../Components/Register/Signin';
import Signup from '../../Components/Register/Singup';
import AdminSignin from '../../Components/Register/AdminSignin';
import { useLocation } from "react-router-dom";
const Com=()=> {
    const location=useLocation();
  if (location.pathname === './login') {
    return <Signin />;
  } else if (location.pathname === './sign') {
    return <AdminSignin />;
  } else  {
    return <Signup />;
  } 
}

export default Com;
