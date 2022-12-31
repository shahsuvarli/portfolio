import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const size = 50;
const color = "snow";

export const socials = [
  {
    id: 0,
    name: "Linkedin",
    img: <FaLinkedinIn size={size} color={color} />,
    link: "https://www.linkedin.com/in/shahsuvarli/",
  },
  {
    id: 1,
    name: "Github",
    img: <BsGithub size={size} color={color} />,
    link: "http://github.com/shahsuvarli",
  },
  {
    id: 2,
    name: "Instagram",
    img: <FiInstagram size={size} color={color} />,
    link: "https://www.instagram.com/shahsuvarli_/",
  },
  // {
  //   id: 3,
  //   name: "Twitter",
  //   img: <BsTwitter size={size} color={color} />,
  //   link: "https://twitter.com/EShahsuvarli",
  // },
];
