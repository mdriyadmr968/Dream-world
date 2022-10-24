import React, { useContext, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import logo from "../../../Images/Logo (1).png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddSpot.css";
import {
  faAddressBook,
  faHome,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const AddSpot = () => {
  const [bookingInfo, setBookingInfo] = useState({});

  const handleBlur = (e) => {
    const newBookingInfo = { ...bookingInfo };
    newBookingInfo[e.target.name] = e.target.value;
    setBookingInfo(newBookingInfo);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("name", bookingInfo.name);

    fetch("https://fierce-hamlet-20637.herokuapp.com/addNewSpot", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .then((data) => {
        if (data) {
          window.alert("New Spot added Succesfully");
        } else {
          window.alert("Failed to add new spot");
        }
      });

    e.preventDefault();
  };

  return (
    <div className="bookings">
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <div className="sidebar">
            <div className="logo">
              <Link to="/">
                <img className="h-75 w-75" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="dashboard__link mt-5">
              <p>
                <Link className="link" to="/bookings">
                  <span>
                    <FontAwesomeIcon icon={faAddressBook} size="xs" /> Booking
                    list
                  </span>
                </Link>
              </p>
              <p>
                <Link className="link" to="/addSpot">
                  <span>
                    <FontAwesomeIcon icon={faPlus} size="xs" /> Add Tourist Spot
                  </span>
                </Link>
              </p>
              <p>
                <Link className="link" to="/myOrders">
                  <span className="booking-link">
                    <FontAwesomeIcon icon={faUser} size="xs" /> My Orders
                  </span>
                </Link>
              </p>
              <p>
                <Link className="link" to="/">
                  <span>
                    <FontAwesomeIcon icon={faHome} size="xs" /> Back to home
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-10 col-sm-12">
          <div className="sec__title d-flex">
            <h3 className="pl-3">Add Orders Spot</h3>
          </div>
          <div className="dashboard__content">
            <Form className="AddSpot" onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Label className="mt-1">Title</Form.Label>
                  <Form.Control
                    onBlur={handleBlur}
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    required
                  />
                </Col>
              </Row>

              <div className="text-right mt-5 mr-1">
                <button type="submit" className="btn btn-danger">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSpot;
