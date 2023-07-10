import React, { useState } from "react";
import { styled } from "styled-components";

const StyledNavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  height: 65px;
  width: 100%;
  font-size: 1.25rem;
  font-family: ${(props) => props.theme.fontFamily[0]};
  text-decoration: none;
  display: flex;
  overflow-y: none;
  box-sizing: border-box;

  &:hover,
  &.active {
    border-right: 5px solid black;
    background-color: lightblue;
    cursor: pointer;
  }
  .link-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    .icons {
      min-width: 2rem;
    }
  }
`;

const Submenu = ({ item, menuState }) => {
  const [subnav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav((prev) => !prev);
  return (
    <>
      <StyledNavLink
        title={item.label}
        menuState={menuState}
        href={item.path}
        onClick={item.children && showSubNav}
      >
        <div className="link-btn">
          <div className="icons">{item.icon}</div>
          {menuState && <div className="label">{item.label}</div>}
        </div>
        {menuState && (
          <>
            <div>
              {item.children && subnav
                ? item.isOpened
                : item.children
                ? item.isClosed
                : null}
            </div>
          </>
        )}
      </StyledNavLink>
      {subnav &&
        item.children.map(({ label, icon, path }) => (
          <StyledNavLink title={label} visibility={subnav} href={path}>
            <div className="link-btn">
              <div className="icons">{icon}</div>
              {menuState && <div className="label">{label}</div>}
            </div>
          </StyledNavLink>
        ))}
    </>
  );
};

export default Submenu;
