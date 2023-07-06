import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../app/features/user";
import { BiLockAlt, BiEnvelope } from "react-icons/bi";
import { FiUser, FiAtSign } from "react-icons/fi";
import { PiSignOutBold } from "react-icons/pi";
import StyledProfileWrapper from "./profile.styles";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import { NavLink } from "react-router-dom";
import profile from "../../../assets/images/profile.jpg";
import google from "../../../assets/images/google.png";
import facebook from "../../../assets/images/facebook.png";

const Profile = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <StyledProfileWrapper>
      <header>
        <h1>Profile</h1>
        <Button
          type="submit"
          text="SAVE"
          variance="contained"
          sx={{
            backgroundColor: "#ff5d3e",
            color: "#fff",
            padding: "1rem 3rem",
            fontWeight: 600,
          }}
        />
      </header>
      <main>
        <form className="avatar">
          <img src={profile} alt="profile pic" />
          <Button
            type="submit"
            text="Update Photo"
            variance="contained"
            sx={{
              backgroundColor: "#ff5d3e",
              color: "#fff",
              padding: "0.5rem 2rem",
              fontWeight: 500,
              height: "fit-content",
            }}
          />
          <Button
            type="submit"
            text="Delete"
            variance="outlined"
            sx={{
              color: "#000",
              padding: "0.5rem 2rem",
              fontWeight: 500,
              borderColor: "#000",
              height: "fit-content",
            }}
          />
        </form>

        <form>
          <div className="inputFeild">
            <label htmlFor="">FULL NAME</label>
            <Input
              text={user?.name || ""}
              name="name"
              icon={<FiUser size={32} />}
              type="text"
            />
          </div>
          <div className="inputFeild">
            <label htmlFor="">USERNAME</label>
            <Input
              text="Set your Default Name"
              name="username"
              icon={<FiAtSign size={32} />}
              type="text"
            />
          </div>
          <div className="inputFeild">
            <label htmlFor="">EMAIL</label>
            <Input
              text={user?.email || ""}
              name="email"
              icon={<BiEnvelope size={32} />}
              type="email"
            />
          </div>
          <div className="inputFeild">
            <label htmlFor="">PASSWORD</label>
            <Input
              text={user?.password}
              value={user?.password?.split(0, 15).pop()}
              name="password"
              icon={<BiLockAlt size={32} />}
              type="password"
            />
            <NavLink>change</NavLink>
          </div>
        </form>

        <div className="social-media info">
          <h3>Connected Accounts</h3>
          <div className="accounts">
            <div className="info">
              <div className="social-icon">
                <img src={facebook} alt="Facebook icon" />
                <span>{user?.name}</span>
              </div>
              <span>Disconnected</span>
            </div>
            <div className="info">
              <div className="social-icon">
                <img src={google} alt="Google icon" />
                <span>{user?.email}</span>
              </div>
              <span>Disconnected</span>
            </div>
          </div>
        </div>
        <div className="subscriptions">
          <h3>NewsLetter</h3>
          <div className="container">
            <p>You are currently Subscribed to our newsletter</p>
            <Button
              type="submit"
              text="Unsubscribe"
              variance="outlined"
              sx={{
                color: "#000",
                padding: "0.5rem 2rem",
                fontWeight: 500,
                borderColor: "#000",
                height: "fit-content",
              }}
            />
          </div>
        </div>
        <div className="logout-delete">
          <a href="/" className="signout">
            <PiSignOutBold size={22} /> Sign out
          </a>
          <a href="/" className="delete">Delete Account</a>
        </div>
      </main>
    </StyledProfileWrapper>
  );
};

export default Profile;
