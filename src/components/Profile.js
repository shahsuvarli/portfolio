import React from "react";
import profile from "../assets/images/profile.jpeg";
import { socials } from "../assets/json/socials";
import SocialIcon from "./SocialIcon";

function Profile() {
  const message = "Hey, I am Elvin";
  return (
    <header className="profile-container">
      <img draggable={false} src={profile} className="profile-img" alt="hey" />
      <span className="header-text">
        {message.split("").map((letter, index) => (
          <span key={index} id={`letter-${index}`} className="letter">
            {letter}
          </span>
        ))}
      </span>
      <ul className="social-icons">
        {socials.map((social) => {
          return <SocialIcon social={social} key={social.id} />;
        })}
      </ul>
    </header>
  );
}

export default Profile;
