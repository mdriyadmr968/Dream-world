import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import travelers1 from "../../../Images/travelers1.png";
import travelers2 from "../../../Images/travelers2.png";
import travelers3 from "../../../Images/travelers3.png";
import "./Review.css";

const Review = () => {
  return (
    <div className="review-wrapper">
      <div className="review-container">
        <h2 className="review-title">Our Travelers Review</h2>
        <p className="review-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          architecto tempore veritatis tempora. Dolores!{" "}
        </p>

        <div className="review-card-container">
          <div className="review-card">
            <div className="review-top">
              <div>
                <img src={travelers1} className="reviewer-img" alt="" />
              </div>
              <div>
                <h3 className="reviewer">Jims Pull</h3>

                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
              </div>
            </div>
            <div className="review-bottom">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                ex quasi voluptatum dignissimos ab quae! Cumque molestiae at
                dolore placeat ea, sapiente vitae aut perspiciatis ipsum quas ex
                vero laborum.
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="review-top">
              <div>
                <img src={travelers1} className="reviewer-img" alt="" />
              </div>
              <div>
                <h3 className="reviewer">Jims Pull</h3>

                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
              </div>
            </div>
            <div className="review-bottom">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                ex quasi voluptatum dignissimos ab quae! Cumque molestiae at
                dolore placeat ea, sapiente vitae aut perspiciatis ipsum quas ex
                vero laborum.
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="review-top">
              <div>
                <img src={travelers1} className="reviewer-img" alt="" />
              </div>
              <div>
                <h3 className="reviewer">Jims Pull</h3>

                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
                <FontAwesomeIcon icon={faStar} className="coloured-icon"/>
              </div>
            </div>
            <div className="review-bottom">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                ex quasi voluptatum dignissimos ab quae! Cumque molestiae at
                dolore placeat ea, sapiente vitae aut perspiciatis ipsum quas ex
                vero laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
