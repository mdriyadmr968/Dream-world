import React from "react";
import axios from "axios";
import logo from "../../../Images/Logo (1).png";

import "./AddSpot.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHome, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../../firebase.init";

const auth = getAuth(app);

const AddSpot = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://intense-eyrie-89942.herokuapp.com/services", data)
      .then((res) => {
        console.log(res);

        if (res.data.insertedId) {
          alert("New spot added successfully");
          reset();
        } else {
          alert("FAiled");
        }
      });
  };
  return (
    <div>
      <div className="bookings">
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <div className="sidebar">
              <div className="logo">
                <Link to="/">
                  <img className="h-75 w-75" src={logo} alt="logo" />
                </Link>
              </div>
              <div
                className="dashboard__link mt-5"
                style={{ textAlign: "left" }}
              >
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
                      <FontAwesomeIcon icon={faPlus} size="xs" /> Add Tourist
                      Spot
                    </span>
                  </Link>
                </p>
                <p>
                  <Link className="link" to="/removeSpot">
                    <span>
                      <FontAwesomeIcon icon={faMinus} size="xs" /> Remove
                      Tourist Spot
                    </span>
                  </Link>
                </p>
                <p>
                  <Link className="link" to={`/myOrders/${user.email}`}>
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
              <h3 className="pl-3 dashboard__header">Add a New Tourist Spot in Website</h3>
            </div>
            <div className="dashboard__content">
              {/* used react hook form */}
              <Form className="AddSpot" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col>
                    <Form.Label className="mt-1">Title</Form.Label>
                    <Form.Control
                      {...register("title")}
                      placeholder="Enter title"
                    />
                  </Col>
                  <Col>
                    <Form.Label className="mt-1">place</Form.Label>
                    <Form.Control
                      {...register("places")}
                      placeholder="places"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="mt-1">Image</Form.Label>
                    <Form.Control
                      {...register("img")}
                      placeholder="Enter image url"
                    />
                  </Col>
                  <Col>
                    <Form.Label className="mt-1">Duration</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("duration")}
                      placeholder="duration"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="mt-1">price</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("price")}
                      placeholder="price"
                    />
                  </Col>
                  <Col>
                    <Form.Label className="mt-1">rating</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("rating")}
                      placeholder="rating"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="mt-1">Details</Form.Label>
                    <Form.Control
                      as="textarea"
                      {...register("description")}
                      placeholder="Description"
                      rows={3}
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
    </div>
  );
};

export default AddSpot;
