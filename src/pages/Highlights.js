import React from "react";

// import "../styles/Highlights.css";
import HighlightsItem from "../components/Highlightsitem";
import BannerImage from "../assets/Image.png";


function Highlights() {
  return (
    <div >
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <h1 className="headertext">  Welcome to Hawaii</h1>
</div>
     <HighlightsItem />
     
      </div>
  );
}

export default Highlights;
