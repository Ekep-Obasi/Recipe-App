import React from "react";
import StyledNav from "./navbar.styles";
import logo from "../../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNav>
      <img src={logo} alt="logo" />
      <div>
        <NavLink to="/home">HomePage</NavLink>
        <NavLink>Recipe Pages</NavLink>
        <NavLink>Pages</NavLink>
        <NavLink>Buy</NavLink>
      </div>
    </StyledNav>
  );
};

export default Navbar;
