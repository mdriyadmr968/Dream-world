import React, { useContext, useState } from 'react';
import { Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../../App';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import logo from '../../../Images/Logo (1).png'
import './NavigationBar.css'

const NavigationBar = () => {
    let navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: "",
      email: "",
    });
     let buttons;

      const handleSignOut = () => {
        firebase
          .auth()
          .signOut()
          .then((res) => {
            const signOutUser = {
              isSignedIn: false,
              name: "",
              email: "",
            };
            setUser(signOutUser);
            setLoggedInUser(signOutUser);
          })
          .catch(function (error) {
            // An error happened.
          })
          .then((data) => {
            if (data) {
              window.alert("logged out succesfully.");
            } else {
              window.alert("logged out succesfully.");
            }
          });
      };

       if (loggedInUser.email) {
         buttons = (
           <Nav>
             <NavDropdown title={loggedInUser.name} id="basic-nav-dropdown">
               <NavDropdown.Item>
                 <Link to="/bookings" className="link">
                   Go to Dashboard
                 </Link>
               </NavDropdown.Item>
               <NavDropdown.Item onClick={handleSignOut}>
                 Log Out
               </NavDropdown.Item>
             </NavDropdown>
           </Nav>
         );
       } else {
         buttons = (
           <ul className="navbar-nav menuBtn">
             <li className="nav-item">
               <button
                 onClick={() =>navigate("/login", { replace: true })}
                 className="btn btn-warning"
               >
                 Login
               </button>
             </li>
           </ul>
         );
       }

    return (
      <div className="">
        <Navbar className="px-5 " variant="dark" collapseOnSelect expand="md">
          <Navbar.Brand href="">
            <img
              className="w-50 mx-2"
              style={{ height: "50px" }}
              src={logo}
              alt=""
            />
            <span>Dream World</span>
          </Navbar.Brand>
          <Navbar.Toggle
            className="ml-auto"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="" onClick={() => navigate("/", { replace: true })}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/myOrders" href="">
                My Orders
              </Nav.Link>
              <Nav.Link as={NavLink} to="/manageBooking" href="">
                Manage All Orders
              </Nav.Link>
            </Nav>
            {buttons}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default NavigationBar;