import React from "react";
import { FaTimes } from "react-icons/fa";
import { StyledFormModal, Overlay } from "./styles";
import Button from "../../atoms/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getInView, toggleInView } from "../../../app/features/ui";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Input from "../../atoms/input/Input";
import Link from "../../atoms/link/Link";

const Login = ({ visibility }) => {
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
        <h1>LOGIN</h1>
        <div className="input-feilds">
          <Input text="Email" icon={<BiEnvelope size={32} />} type="email" />
          <Input
            text="Password"
            icon={<BiLockAlt size={32} />}
            type="password"
          />
        </div>
        <div className="actions">
          <div className="forgot-pswd">
            <Link
              text="Forgot Password?"
              sx={{ color: "#ff5d3e", fontSize: "0.95rem" }}
            />
          </div>
          <div className="action-buttons">
            <Button
              text="Login"
              variance="contained"
              sx={{
                backgroundColor: "#ff5d3e",
                color: "#fff",
                padding: "1rem 3rem",
                fontWeight: 600,
              }}
            />
            <span> Or Login with</span>
            <div className="passport">
              <Button
                text="Facebook"
                icon={<FaFacebookF size={24} />}
                variance="contained"
                sx={{
                  backgroundColor: "#f3f3f3",
                  fontWeight: 550,
                  color: "#3f5995",
                }}
              />
              <Button
                text="Google"
                icon={<FcGoogle size={24} />}
                variance="contained"
                sx={{ backgroundColor: "#f3f3f3", fontWeight: 550 }}
              />
            </div>
            <div className="link-to-signup">
              <span>Don't have an account?</span>
              <Link text="Sign Up" sx={{ color: "#ff5d3e" }} />
            </div>
          </div>
        </div>
      </StyledFormModal>
    </Overlay>
  );
};

export default Login;
