import React from "react";
import Login from "./components/molecules/login & sign up/Login";
import SignUp from "./components/molecules/login & sign up/SignUp";
import Home from "./components/pages/home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getInView } from "./app/features/ui";
import Profile from "./components/pages/profile/Profile";

const RoutesComponent = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const inView = useSelector(getInView);

  return (
    <>
      <Routes location={location || background}>
        <Route path="/home" element={<Home />}>
          <Route path="login" element={<Login visibility={inView} />} />
          <Route path="signup" element={<SignUp visibility={inView} />} />
        </Route>
        <Route path="profile" element={<Profile />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="login" element={<Login visibility={inView} />} />
          <Route path="signup" element={<SignUp visibility={inView} />} />
        </Routes>
      )}
    </>
  );
};

export default RoutesComponent;
