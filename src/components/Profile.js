import React from "react";
import profile from "../assets/images/profile.jpeg";
import "../styles/profile.css";
import { socials } from "../assets/json/socials";
import SocialIcon from "./SocialIcon";

function Profile() {
  return (
    <header className="profile-container">
      <img src={profile} className="profile-img" alt="hey" />
      <span className="header-text">Hey, I am Elvin!</span>
      <ul className="social-icons">
        {socials.map((social) => {
          return <SocialIcon social={social} key={social.id} />;
        })}
      </ul>
    </header>
  );
}

export default Profile;
