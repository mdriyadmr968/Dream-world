import {
  faAddressBook,
  faHome,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../Images/Logo (1).png";
import "./AddSpot.css";

const AddSpot = () => {
  const [loggedInUser] = useContext(UserContext);
  const [addSpot, setaddSpot] = useState({});
  const [file, setFile] = useState(null);

  const handleAddSpot = (e) => {
    const newSpotInfo = { ...addSpot };
    newSpotInfo[e.target.name] = e.target.value;
    setaddSpot(newSpotInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleAddedData = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", addSpot.title);
    formData.append("price", addSpot.price);
    formData.append("places", addSpot.places);
    formData.append("rating", addSpot.duration);
    formData.append("duration", addSpot.rating);

    fetch("http://localhost:5000/addNewSpot", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
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
                <Link className="link" to="bookings">
                  <span>
                    <FontAwesomeIcon icon={faAddressBook} size="xs" /> Booking
                    list
                  </span>
                </Link>
              </p>
              <p>
                <Link className="link" to="addSpot">
                  <span>
                    <FontAwesomeIcon icon={faPlus} size="xs" /> Add Tourist Spot
                  </span>
                </Link>
              </p>
              <p>
                <Link className="link" to="myOrders">
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
            <h5 className="ml-auto user__name">{loggedInUser.name}</h5>
          </div>
          <div className="dashboard__content">
            <Form className="AddSpot">
              <Row>
                <Col>
                  <Form.Label className="mt-1">Title</Form.Label>
                  <Form.Control
                    onBlur={handleAddSpot}
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    required
                  />
                </Col>
                <Col>
                  <Form.Label className="mt-1">Price</Form.Label>
                  <Form.Control
                    onBlur={handleAddSpot}
                    name="price"
                    type="number"
                    placeholder="Price"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="mt-1">Places</Form.Label>
                  <Form.Control
                    onBlur={handleAddSpot}
                    name="location"
                    type="text"
                    placeholder="Location"
                    required
                  />
                </Col>
                <Col>
                  <Form.Label className="mt-1">Duration</Form.Label>
                  <Form.Control
                    onBlur={handleAddSpot}
                    name="bedroom"
                    type="number"
                    placeholder="Enter Quantity"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="mt-1">Rating</Form.Label>
                  <Form.Control
                    onBlur={handleAddSpot}
                    name="bathroom"
                    type="number"
                    placeholder="Enter Quantity"
                    required
                  />
                </Col>
                <Col>
                  <Form.Label className="mt-1">Thumbnail</Form.Label>
                  {/* <Form.File onChange={handleFileChange}  /> */}
                  <input type="file" onChange={handleFileChange}></input>
                </Col>
              </Row>
              <div className="text-right mt-3 mr-1">
                <button
                  type="submit"
                  onClick={handleAddedData}
                  className="btn indigoBtn"
                >
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
