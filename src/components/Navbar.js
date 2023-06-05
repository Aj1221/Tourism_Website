import React, { useState } from "react";
import Logo from "../assets/aloha.PNG";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img  alt = '/' src={Logo} />
        <Link to="/"> Home </Link>
        <Link to="/highlights"> Highlights </Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact </Link>

        <div className="hiddenLinks">
       < Link to="/"> Home </Link>
        <Link to="/highlights"> Highlights </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link className='bookbtn' to="/">Book Trip</Link>
        </div>
      </div>
      <div className="rightSide">
      <Link className='bookbtn' to="/">Book Trip</Link>
        
        <button style={{color:'black'}} onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
