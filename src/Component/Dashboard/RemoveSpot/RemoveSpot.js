import React from "react";
import { Link } from "react-router-dom";
import "./RemoveSpot.css";
import logo from "../../../Images/Logo (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import app from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

const auth = getAuth(app);
const RemoveSpot = () => {
  const [user] = useAuthState(auth);
  //   console.log(user);
  const [spotsInfo, setSpotsInfo] = useState([]);

  useEffect(() => {
    fetch("https://intense-eyrie-89942.herokuapp.com/spots")
      .then((res) => res.json())
      .then((data) => setSpotsInfo(data));
  }, []);

  //   delete an user

  const handleDeleteSpot = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://intense-eyrie-89942.herokuapp.com/removeSpot/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = spotsInfo.filter((user) => user._id !== id);
            setSpotsInfo(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="bookings">
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <div className="sidebar">
            <div className=" h-75 w-75">
              <Link to="/">
                <img src={logo} alt="logo" />
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
                <Link className="link" to="/removeSpot">
                  <span>
                    <FontAwesomeIcon icon={faPlus} size="xs" /> Remove Tourist
                    Spot
                  </span>
                </Link>
              </p>
              <p>
                <Link className="link" to={`/myOrders`}>
                  <span className="booking-link">
                    <FontAwesomeIcon icon={faUser} size="xs" /> My Orders
                  </span>
                </Link>
              </p>
              <p>
                <Link className="link" to="/">
                  <span>
                    <FontAwesomeIcon icon={faHome} size="xs" /> Back to Home
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-10 col-sm-12">
          <div className="sec__title d-flex">
            <h3 className="pl-3">Remove tour spot</h3>
          </div>
          <div className="dashboard__content">
            <div className="table__content">
              <Table borderless size="sm">
                <thead className="mt-3">
                  <tr className="tableRow">
                    <th style={{ width: "40%" }} className="pl-3">
                      {" "}
                      place
                    </th>
                    <th style={{ width: "40%" }} className="pl-3">
                      {" "}
                      remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {spotsInfo.map((singleSpot) => (
                    <tr key={singleSpot._id}>
                      <td style={{ width: "40%" }} className="pl-3 pt-3">
                        {singleSpot.places}
                      </td>
                      <td style={{ width: "40%" }} className="pl-3 pt-3">
                        <button
                          onClick={() => handleDeleteSpot(singleSpot._id)}
                        >
                          remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveSpot;
