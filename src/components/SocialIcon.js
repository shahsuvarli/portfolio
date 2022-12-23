import React from "react";
import PropTypes from "prop-types";

function SocialIcon({ social }) {
  return (
    <li>
      <a href={social.link}>{social.img}</a>
    </li>
  );
}

export default SocialIcon;

SocialIcon.propTypes = {
  social: PropTypes.object,
};
