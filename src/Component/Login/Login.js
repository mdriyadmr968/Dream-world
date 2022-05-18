import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css'
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   function validateForm() {
     return email.length > 0 && password.length > 0;
   }

   function handleSubmit(event) {
     event.preventDefault();
   }

   const from = location?.state?.from?.pathname || "/";

   const handleGoogleSignIn = () => {
     signInWithGoogle().then(() => {
       navigate(from, { replace: true });
     });
   };
  return (
    <div className="login-container">
      <h3>Please Login</h3>
      <div style={{ margin: "20px" }}>
        <button
          type="button"
          class="btn btn-warning"
          onClick={handleGoogleSignIn}
        >
          Google Sign In
        </button>
      </div>

      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="button" class="btn btn-warning" block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
