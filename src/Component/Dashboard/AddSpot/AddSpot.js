import React from "react";
import axios from "axios";
import logo from "../../../Images/Logo (1).png";

import "./AddSpot.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, Row } from "react-bootstrap";
const AddSpot = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/services", data).then((res) => {
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
                      <FontAwesomeIcon icon={faPlus} size="xs" /> Add Tourist
                      Spot
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
              <Form className="AddSpot" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col>
                    <Form.Label className="mt-1">Title</Form.Label>
                    <input {...register("title")} placeholder="Enter title" />
                  </Col>
                  <Col>
                    <Form.Label className="mt-1">place</Form.Label>
                    <input
                      type="number"
                      {...register("places")}
                      placeholder="places"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="mt-1">Image</Form.Label>
                    <input {...register("img")} placeholder="Enter image url" />
                  </Col>
                  <Col>
                    <Form.Label className="mt-1">Duration</Form.Label>
                    <input
                      type="number"
                      {...register("duration")}
                      placeholder="duration"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="mt-1">price</Form.Label>
                    <input {...register("price")} placeholder="price" />
                  </Col>
                  <Col>
                    <Form.Label className="mt-1">rating</Form.Label>
                    <input
                      type="number"
                      {...register("rating")}
                      placeholder="rating"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="mt-1">Details</Form.Label>
                    <textarea
                      {...register("description")}
                      placeholder="Description"
                    />
                  </Col>
                </Row>

                <input type="submit" />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSpot;

{
  /* <form onSubmit={handleSubmit(onSubmit)}>
  <input
    {...register("name", { required: true, maxLength: 20 })}
    placeholder="Name"
  />
  <textarea {...register("description")} placeholder="Description" />
  <input type="number" {...register("price")} placeholder="price" />
  <input type="submit" />
</form>; */
}
