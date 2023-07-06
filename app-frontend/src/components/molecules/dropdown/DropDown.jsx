import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import StyledDropDown from "./dropdown.styles";

const DropDown = ({ title, options }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);

  return (
    <StyledDropDown state={show}>
      <div className="title" role="button" onClick={toggleShow}>
        <span>{title}</span>

        <RiArrowDropDownLine style={{ className: "dropdown-icon" }} size={40} />
      </div>

      <div className="dropdown">
        {options?.map((item) => (
          <NavLink>{item}</NavLink>
        ))}
      </div>
    </StyledDropDown>
  );
};

export default DropDown;
