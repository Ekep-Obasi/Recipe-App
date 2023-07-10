import React, { useState } from "react";
import StyledSidebar from "./sidebar.styles";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import SideBarData from "./SidebarData";
import Submenu from "./Submenu";

const Sidebar = () => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <StyledSidebar state={isClosed}>
      {!isClosed ? (
        <SlMenu
          size={25}
          style={{ margin: "0 0 2rem 0", cursor: "pointer" }}
          onClick={() => setIsClosed((prev) => !prev)}
        />
      ) : (
        <RxCross2
          size={25}
          style={{ margin: "0 0 2rem 0" }}
          onClick={() => setIsClosed((prev) => !prev)}
        />
      )}
      {SideBarData()?.map((data, id) => (
        <Submenu menuState={isClosed} item={data} key={id} />
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
