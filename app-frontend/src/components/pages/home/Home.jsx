import React from "react";
import { StyledHomeWrapper } from "./home.styles";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../../templates/navbar/Navbar";
import Dropdown from "../../atoms/dropdown/Dropdown";

const Home = () => {
  const location = useLocation();
  return (
    <StyledHomeWrapper>
      {/* <Navbar /> */}
      <Outlet />
      Home
      <Link to="login" state={{ background: location }}>
        Login
      </Link>
      <Link to="signup" state={{ background: location }}>
        SignUp
      </Link>
    </StyledHomeWrapper>
  );
};

export default Home;
