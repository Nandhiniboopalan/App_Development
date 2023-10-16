import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import AdminSignin from "../../Components/Register/AdminSignin";
import StoryPage from "../../Components/Demo/Demo";
import EditProfileForm from "../../Components/EditProfileComponent/EditProfileForm";
import Register from "../../Components/Register/Register";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Auth from "../Auth/Auth";

import EditProfilePage from "../EditProfile/EditProfilePage";
import HomePage from "../HomePage/HomePage";
import Profile from "../Profile/Profile";
import Story from "../Story/Story";
// import Termsandconditions from "../HomeRight/Termsandconditions";
// import Privacypolicy from "../HomeRight/Privacypolicy";
// import Faqs from "../HomeRight/Faqs";

const Routers = () => {
  const location =useLocation();
  return (
    <div>
      

{(location.pathname !== "/login" && location.pathname!=="/signup" && location.pathname!=="/sign")&& (
    <div className="flex">
      <div className="sidebarBox border border-l-slate-500 w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/p/:postId" element={<HomePage />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/demo" element={<StoryPage />} />
          <Route path="/story/:userId" element={<Story />} />
          <Route path="/account/edit" element={<EditProfilePage />} />
          {/* <Route path="/sign" element={<AdminSignin />} /> */}
          {/* <Route path="/terms" component={Termsandconditions} /> */}
          {/* <Route path="/privacy" component={Privacypolicy} /> */}
          {/* <Route path="/faqs" component={Faqs} /> */}
        </Routes>
      </div>
    </div>
  )}
  {(location.pathname === "/login" || location.pathname==="/signup"||location.pathname==="/sign") && (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<Auth />} />
      <Route path="/sign" element={<Auth />} />
    </Routes>
  )}
    </div>
    
  );
};

export default Routers;
