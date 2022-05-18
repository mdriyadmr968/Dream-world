import React from 'react';
import './Register.css'

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
const auth = getAuth(app);



const Register = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();
  


  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
    return (
      <div className="register-container">
        <h2>register</h2>
        <div className="form">
          <div className="form-body">
            <div className="username">
              <label className="form__label" for="firstName">
                First Name{" "}
              </label>
              <input
                className="form__input"
                type="text"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="lastname">
              <label className="form__label" for="lastName">
                Last Name{" "}
              </label>
              <input
                type="text"
                name=""
                id="lastName"
                className="form__input"
                placeholder="LastName"
              />
            </div>
            <div className="email">
              <label className="form__label" for="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                placeholder="Email"
              />
            </div>
            <div className="password">
              <label className="form__label" for="password">
                Password{" "}
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" for="confirmPassword">
                Confirm Password{" "}
              </label>
              <input
                className="form__input"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div class="footer">
            <button  class="btn btn-warning" type="submit" class="btn">
              Register
            </button>
          </div>
        </div>
        <p>
          already have an account? <a href="/login">Login</a>
        </p>
        <div>------------ or ------------</div>
        <button
          type="button"
          class="btn btn-warning"
          onClick={handleGoogleSignIn}
        >
          Google Signin
        </button>
      </div>
    );
};

export default Register;