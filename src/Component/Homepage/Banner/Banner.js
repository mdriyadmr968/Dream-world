import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

import image1 from "../../../Images/background1.jpg";
import image2 from "../../../Images/background2.jpg";
import image3 from "../../../Images/background3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel fade={true} pause={false} className="Carousel-container">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="captions-styles">
            <h1>ENJOY YOU'R HOLIDAY WITH DREAM WORLD</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, dolor.
            </p>
            <div class="banner-button">View Adventure</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={image2}
            alt="Third slide"
          />
          <Carousel.Caption className="captions-styles">
            <h1>LET'S YOUR JOURNEY BEGINS WITH DREAM WORLD</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              assumenda doloremque itaque amet iure optio?
            </p>
            <div class="banner-button">View Adventure</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className="captions-styles">
            <h1>YOUR JOURNEY BEGINS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              expedita eaque quis cum numquam sapiente?
            </p>
            <div class="banner-button">View Adventure</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
