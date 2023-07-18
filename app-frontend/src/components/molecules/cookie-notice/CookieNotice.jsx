import React from "react";
import { CookieWrapper, Overlay } from "./style";
import Button from "../../atoms/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getInView, toggleInView } from "../../../app/features/ui";

const CookieNotice = () => {
  const inView = useSelector(getInView);
  const dispatch = useDispatch();

  return (
    <Overlay visiblity={inView}>
      <CookieWrapper visiblity={inView}>
        <div className="text-container">
          <h1>Cookie Notice</h1>
          <p>
            To ensure an optimal user experience, we use cookies to collect some
            user data for advertising and analytics purposes.
          </p>
        </div>
        <Button
          text="Got it"
          variance="contained"
          sx={{
            backgroundColor: "#ff5d3e",
            color: "#fff",
            padding: "1rem 3rem",
            fontWeight: 600,
          }}
          onClick={() => dispatch(toggleInView())}
        />
      </CookieWrapper>
    </Overlay>
  );
};

export default CookieNotice;
