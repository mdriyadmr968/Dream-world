import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
  faStar,
  faHome,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./Spots.css";

const Spots = () => {
  const [spotData, setSpotData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/spots")
      .then((res) => res.json())
      .then((data) => setSpotData(data));
  }, []);
  return (
    <Container className="spot-container">
      <h5 className="indigoText text-left mt-5 ">Book Your Favourite place</h5>
      <h2 className="darkIndigoText text-center font-weight-bold">
        best tourist package
        <br /> available for you
      </h2>
      <Row className="">
        {spotData.map((data) => (
          <Col key={data._id} sm={4}>
            <div className="card cards-container" style={{ width: "21rem" }}>
              <Image class="card-img-top" src={data.img} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title ">{data.title}</h5>
                <p class="card-text">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {data.places}
                </p>
                <Row>
                  <Col>
                    <Card.Text className="text-secondary">
                      <FontAwesomeIcon icon={faStar} /> {data.rating}{" "}
                    </Card.Text>
                  </Col>
                  <Col className="text-right">
                    <Card.Text className="text-secondary">
                      <FontAwesomeIcon icon={faHome} /> {data.duration}{" "}
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <h2 className=" indigoText">{data.price}</h2>
                  </Col>
                  <Col className="text-right">
                    <button
                      onClick={() => {
                        navigate(`/spotDetail/${data._id}`, { replace: true });
                      }}
                      className="btn btn-danger"
                    >
                      View Details
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Spots;
