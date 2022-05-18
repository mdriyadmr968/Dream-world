import React from "react";
import banner_video from '../../../Images/Home - Adventure Tours.mp4'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_video">
        <video src={banner_video} autoPlay loop muted></video>
      </div>

      <div className="banner-text">
        <h3>Find your special tour today</h3>
        <h1>with Dream World</h1>
        <button type="button" class=" btn-banner">
          view tours
        </button>
      </div>
    </div>
  );
};

export default Banner;
