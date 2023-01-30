import React from "react";
import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import logo from "../../../Images/Logo (1).png";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faHome,
  faUser,
  faAddressBook,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";
import { getAuth } from "firebase/auth";
import app from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";


const auth = getAuth(app);


const MyOrders = () => {
  
  const [loggedInUser] = useContext(UserContext);
  const [myOrders, setMyOrders] = useState([]);

  const [user] = useAuthState(auth);


  const { email } = useParams();
  useEffect(() => {
    fetch(
      `https://dream-world-server-mdriyadmr968.vercel.app/bookings?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [email]);
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
            <div className="dashboard__link mt-5" style={{ textAlign: "left" }}>
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
                    <FontAwesomeIcon icon={faMinus} size="xs" /> Remove Tourist
                    Spot
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
                    <FontAwesomeIcon icon={faHome} size="xs" /> Back to Home
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-10 col-sm-12">
          <div className="sec__title d-flex">
            <h3 className="pl-3 dashboard__header">
              Your Ordered tourist spot
            </h3>
            <h5 className="ml-auto user__name">{loggedInUser.name}</h5>
          </div>
          <div className="dashboard__content">
            <div className="table__content">
              <Table borderless size="sm">
                <thead className="mt-3">
                  <tr className="tableRow">
                    <th style={{ width: "40%" }} className="pl-3">
                      {" "}
                      Name
                    </th>
                    <th style={{ width: "30%" }} className="pl-3 text-center">
                      Price
                    </th>
                    <th style={{ width: "30%" }} className="pl-3 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {myOrders.map((order) => (
                    <tr key={order._id}>
                      <td style={{ width: "40%" }} className="pl-3 pt-3">
                        {order.spot}
                      </td>
                      <td
                        style={{ width: "30%" }}
                        className="pl-3 pt-3 text-center"
                      >
                        {order.price}
                      </td>
                      <td style={{ width: "30%" }} className="pl-3 text-center">
                        <button className="btn greenBtn mt-2 btn-sm">
                          {order.status}
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

export default MyOrders;
