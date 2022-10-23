import React from "react";
import "./UpcomingTour.css";
import card1 from "../../../Images/card1.png";
import card2 from "../../../Images/card2.png";
import card3 from "../../../Images/card3.png";
import card4 from "../../../Images/card4.png";

const UpcomingTour = () => {
  return (
    <div className="upcoming-container">
      <div className="upcoming-wrapper">
        <h1 className="upcoming-title">Upcoming Best Tours</h1>
        <h6 className="upcoming-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          officiis.
        </h6>

        <div className="upcoming-cards">
          <div className="upcoming-card">
            <img src={card1} alt="" />
            <div className="upcoming-card-body">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <div className="d-flex justify-content-evenly">
                <div>
                  <button className="btn btn-danger">Book Now</button>
                </div>
                <div>
                  <h2 className="package-price">
                    From <br />
                    <span className="priceNumber">70$ </span> Per Person
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="upcoming-card">
            <img src={card2} alt="" />
            <div className="upcoming-card-body">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <div className="d-flex justify-content-evenly">
                <div>
                  <button className="btn btn-danger">Book Now</button>
                </div>
                <div>
                  <h2 className="package-price">
                    From <br />
                    <span className="priceNumber">50$ </span> Per Person
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="upcoming-card">
            <img src={card3} alt="" />
            <div className="upcoming-card-body">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <div className="d-flex justify-content-evenly">
                <div>
                  <button className="btn btn-danger">Book Now</button>
                </div>
                <div>
                  <h2 className="package-price">
                    From <br />
                    <span className="priceNumber">150$ </span> Per Person
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTour;
