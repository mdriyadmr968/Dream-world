import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import loading from "../../../Images/loading.gif";

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
      <h5 className=" spot-header text-left ">Top Destination</h5>
      <h2 className="spot-title mb-5">
        select the best best tourist package suitable for you
      </h2>

      {spotData.length === 0 ? (
        <div className="d-flex justify-content-center">
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <Row className="">
          {spotData.map((data) => (
            <Col key={data._id} sm={4}>
              <div
                className="card cards-container"
                style={{ width: "21rem", height: "28rem", borderRadius: "2%" }}
              >
                <Image
                  class="card-img-top"
                  style={{ width: "100%", height: "45%", borderRadius: "2%" }}
                  src={data.img}
                  alt="Card image cap"
                />
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
                      <h2 className="package-price">
                        From <br />
                        <span className="priceNumber">{data.price}$ </span> Per
                        Person
                      </h2>
                    </Col>
                    <Col className="text-right">
                      <button
                        onClick={() => {
                          // navigate(`/spotDetail/${data._id}`, {
                          navigate(`/spotDetail/${data._id}`, {
                            replace: true,
                          });
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
      )}
    </Container>
  );
};

export default Spots;
