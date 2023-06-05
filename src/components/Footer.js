import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Logo from "../assets/footer.PNG";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
    <div>
    <img alt = '/' src={Logo} />
    </div>
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2023 Ajitesh_Tourism_Website</p>
    </div>
  );
}

export default Footer;
