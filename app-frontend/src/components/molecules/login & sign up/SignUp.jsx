import React from "react";
import { FaTimes } from "react-icons/fa";
import { StyledFormModal, Overlay } from "./styles";
import Button from "../../atoms/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getInView, toggleInView } from "../../../app/features/ui";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import Input from "../../atoms/input/Input";
import Link from "../../atoms/link/Link";

const SignUp = ({ visibility }) => {
  const inView = useSelector(getInView);
  const dispatch = useDispatch();

  return (
    <Overlay visiblity={inView}>
      <StyledFormModal visiblity={inView}>
        <div className="exit-button">
          <Button
            variance="text"
            sx={{ padding: "2px" }}
            onClick={() => dispatch(toggleInView())}
            icon={<FaTimes size={25} />}
          />
        </div>

        <h1>SignUp</h1>

        <div className="input-feilds">
          <Input text="Full Name" icon={<FiUser size={32} />} type="text" />
          <Input text="Email" icon={<BiEnvelope size={32} />} type="email" />
          <Input
            text="Password"
            icon={<BiLockAlt size={32} />}
            type="password"
          />
        </div>

        <div className="action-buttons">
          <Button
            text="Sign Up"
            variance="contained"
            sx={{
              backgroundColor: "#ff5d3e",
              color: "#fff",
              padding: "1rem 3rem",
              fontWeight: 600,
            }}
          />

          <div className="term-and-conditions">
            <span>
              By creating an account, agree to our terms and conditions
            </span>
            <Link text="Terms & Conditions" sx={{ color: "#ff5d3e" }} />
          </div>
        </div>
      </StyledFormModal>
    </Overlay>
  );
};

export default SignUp;
