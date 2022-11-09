import React from "react";
import profile from "../assets/images/profile.jpeg";
import "../styles/profile.css";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Profile() {
  return (
    <header className="profile-container">
      <img src={profile} className="profile-img" alt="hey" />
      <span className="header-text">Hey, I am Elvin!</span>
      <ul className="social-icons">
        <li className="social-icon">
          <FaLinkedinIn size={50} color="white" />
        </li>
        <li className="social-icon">
          <BsGithub size={50} color="white" />
        </li>
        <li className="social-icon">
          <BsTwitter size={50} color="white" />
        </li>
        <li className="social-icon">
          <FiInstagram size={50} color="white" />
        </li>
      </ul>
    </header>
  );
}

export default Profile;
