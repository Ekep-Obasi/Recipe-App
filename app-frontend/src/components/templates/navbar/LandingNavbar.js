import React from "react";
import { StyledHomeNav } from "./navbar.styles";
import Logo from "../../../assets/images/Logo.png";
import { LuFacebook, LuTwitter, LuInstagram, LuSearch } from "react-icons/lu";
import Button from "../../atoms/button/Button";
import { NavbarData } from "./NavBarData";
import DropDown from "../../molecules/dropdown/DropDown";
import { useLocation, useNavigate } from "react-router-dom";

const LandingNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <StyledHomeNav>
      <div className="nav-bar-row-1">
        <div className="social-media-icons">
          <LuFacebook size={22} />
          <LuTwitter size={22} />
          <LuInstagram size={22} />
        </div>
        <div className="search_login">
          <LuSearch size={22} />

          <Button
            text="login"
            variance="outlined"
            onClick={() =>
              navigate("/home/login", { state: { background: location } })
            }
            sx={{
              padding: "0.45rem 1rem",
              borderColor: "#000",
              height: "fit-content",
            }}
          />
        </div>
      </div>

      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="links">
        {NavbarData?.map((item, id) => (
          <DropDown title={item?.title} options={item?.sublink} key={id} />
        ))}
      </div>
    </StyledHomeNav>
  );
};

export default LandingNavbar;
