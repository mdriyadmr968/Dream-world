import React from "react";
import "./Tourguide.css";
import guide1 from "../../../Images/guide1.png";
import guide2 from "../../../Images/guide2.png";
import guide3 from "../../../Images/guide3.png";

const Tourguide = () => {
  return (
    <div className="guide-container">
      <h1 className="guide-title">Tour Guide</h1>
      <h5 className="guide-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
        necessitatibus omnis exercitationem voluptate cum reprehenderit autem
        sapiente impedit odio praesentium!
      </h5>

      <div className="guide-card-container">
        <div className="guide-card">
          <img src={guide1} alt="" className="guide-image" />
          <h1 className="guide-name">James Robert</h1>
          <h3 className="guide-designation">Tour Guide</h3>
        </div>
        <div className="guide-card">
          <img src={guide2} alt="" className="guide-image" />
          <h1 className="guide-name">James Robert</h1>
          <h3 className="guide-designation">Tour Guide</h3>
        </div>
        <div className="guide-card">
          <img src={guide3} alt="" className="guide-image" />
          <h1 className="guide-name">James Robert</h1>
          <h3 className="guide-designation">Tour Guide</h3>
        </div>
      </div>
    </div>
  );
};

export default Tourguide;
