import React from "react";
import BannerImage from "../assets/Image.png";
import "../styles/Home.css";
import HighlightsItem from "../components/Highlightsitem";
import Categories from "../components/Categories";

function Home() {
  return (
    <div>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1 className="headertext">  Welcome to Hawaii</h1>
    </div>
    <HighlightsItem />
    <Categories />


    </div>
  );
}

export default Home;
