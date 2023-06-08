import React from "react";
import "./footer.css";
import Logo from "../../components/Logo";
import NavButton from "../../components/NavButton";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const menu = (
    <ul className="menu">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );

  const dataIcon = [
    {
      id: 1,
      icon: <FaFacebook />,
    },
    {
      id: 2,
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      icon: <FaTwitter />,
    },
    {
      id: 4,
      icon: <FaYoutube />,
    },
    {
      id: 5,
      icon: <FaInstagram />,
    },
  ];
  return (
    <footer>
      <div className="foot wrapper">
        <div className="foot1">
          <div className="content1">@2023 rohit</div>
          <div className="content2">
            <Logo />
          </div>
          <div className="content3">
            <NavButton />
          </div>
        </div>
        <hr style={{ backgroundColor: "#CDD1D4" }} />
        <div className="foot2">
          <div className="content1">{menu}</div>
          <div className="content2">
            {dataIcon?.map((data) => (
              <div className="icon" key={data.id}>
                {data.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
