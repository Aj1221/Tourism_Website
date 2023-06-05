import React from "react";
import "../styles/About.css";
import BannerImage from "../assets/Image.png";

function About() {
  return (
    <div>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1 className="headertext">  Welcome to Hawaii</h1>
    </div>
    <div className="about">

      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Hawaii Tourism! We are delighted to have you here and introduce you to the amazing world of travel and exploration. Our mission is to inspire, inform, and assist travelers in discovering the best destinations and experiences the United States has to offer.

        Who We Are:
        At Hawaii Tourism, we are a passionate team of travel enthusiasts dedicated to showcasing the beauty, diversity, and rich culture of the United States. With our extensive knowledge and love for travel, we aim to provide you with valuable insights, tips, and resources to make your journey unforgettable.
        <br />
        What We Offer:
        <br />
        
        1- Destination Guides: Our website is your ultimate resource for comprehensive destination guides. From bustling cities to serene landscapes, we cover a wide array of locations, highlighting their unique attractions, local cuisines, historical landmarks, and hidden gems.
        <br />
        
       2- Travel Tips: We understand that planning a trip can be overwhelming, which is why we offer practical travel tips and advice to simplify the process. Whether it's information about transportation, visa requirements, packing essentials, or safety precautions, we've got you covered.
       <br />
        
       3- Itineraries and Recommendations: To help you make the most of your time in the United States, we provide carefully curated itineraries and recommendations for various durations and interests. Whether you're a history buff, a nature lover, or a foodie, we'll suggest the best activities and experiences tailored to your preferences.
       <br />
        
        4-Inspiring Stories: Get inspired by the travel stories and experiences shared by fellow explorers. From heartwarming encounters with locals to awe-inspiring adventures, our stories will fuel your wanderlust and motivate you to embark on your own remarkable journeys.
        <br />
        
        5-Practical Resources: We believe in providing all the necessary resources for a hassle-free travel experience. Our website offers practical information on accommodations, transportation options, local guides, and useful apps to enhance your trip and make it truly memorable.
        <br />
        
        Join our community of travel enthusiasts:
        At Hawaii Tourism, we encourage you to be part of our vibrant community of travel enthusiasts. Follow us on social media platforms to stay updated with the latest travel news, tips, and exciting offers. Share your travel experiences with us and fellow travelers, and let's inspire each other to explore the wonders of the United States together.
        <br />
        
        Start Your Unforgettable Journey:
        Whether you're planning your first visit to the United States or looking for new adventures to add to your bucket list, Hawaii Tourism is here to guide and inspire you every step of the way. Let us help you create memories that will last a lifetime as you embark on an extraordinary journey through the diverse landscapes and vibrant cultures of the United States.
        </p>
      </div>
    </div>
    </div>

  );
}

export default About;
