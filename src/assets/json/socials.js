import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


export const socials = [
  {
    id: 0,
    name: "Linkedin",
    img: <FaLinkedinIn size={50} color="beige" />,
    link: "https://www.linkedin.com/in/shahsuvarli/",
  },
  {
    id: 1,
    name: "Github",
    img: <BsGithub size={50} color="beige" />,
    link: "http://github.com/shahsuvarli",
  },
  {
    id: 2,
    name: "Instagram",
    img: <FiInstagram size={50} color="beige" />,
    link: "https://www.instagram.com/shahsuvarli_/",
  },
  {
    id: 3,
    name: "Twitter",
    img: <BsTwitter size={50} color="beige" />,
    link: "https://twitter.com/EShahsuvarli",
  },
];
