import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import "./SpotDetail.css";

const SpotDetail = () => {
  const [loggedInUser] = useContext(UserContext);
  const [spotData, setSpotData] = useState([]);
  const [bookingInfo, setBookingInfo] = useState({});

  useEffect(() => {
    fetch("https://dream-world-server-mdriyadmr968.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => setSpotData(data));
  }, []);

  const { id } = useParams();

  const spot = spotData.find((data) => data._id === id) || {};
  console.log(spot.status);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      spot: spot.title,
      price: spot.price,
      status: "pending",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        "https://dream-world-server-mdriyadmr968.vercel.app/addBooking",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await res.json();
      window.alert("Booking added successfully!");
      console.clear();
    } catch (error) {
      window.alert("Error adding booking: " + error);
      console.clear();
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const response = await fetch(
  //     "https://dream-world-server-mdriyadmr968.vercel.app/addBooking",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     }
  //   );
  //   const result = await response.json();
  //   console.log(result);
  // };

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <img src={spot.img} alt="" className="img-fluid" />
            <div className="pt-3">
              <Row>
                <img src="" alt="" />
              </Row>
            </div>
            <Row className="my-3">
              <Col>
                <h2 className="font-weight-bold darkIndigoText">
                  {spot.title}
                </h2>
              </Col>
              <Col>
                <h2 className="font-weight-bold indigoText text-right">
                  {spot.price}$
                </h2>
              </Col>
            </Row>
            <p className="text-secondary">
              {spot.details}., {spot.duration} Bedroom, Semi-furnished,
              Luxurious, South facing Spot for Orders in Rangs Malancha,
              Melbourne.
            </p>
            <h3 className="font-weight-bold darkIndigoText">Price Detail -</h3>
            <p className="text-secondary">
              fees/tour: 30$ (negotiable) <br />
              Service Charge : 10$ per package, subject to change <br />
              Insurance : 100%.
            </p>
          </Col>
          <Col md={4}>
            <div className="px-1 pt-5 pb-2">
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Number:
                  <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Message:
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpotDetail;
