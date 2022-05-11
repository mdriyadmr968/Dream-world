import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import "./Header.css";

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div>
      <header class="header">
        <a href="" class="logo">
          Dream World
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <a href="">
              {user?.uid ? (
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => signOut(auth)}
                >
                  sign out
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              )}
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
