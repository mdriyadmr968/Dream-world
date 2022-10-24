import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import "./Login.css";
import app from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import googleIcon from "../../Images/google.png";
import { UserContext } from "../../App";

const auth = getAuth(app);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // const { displayName, email, photoURL } = result.user;
        // const signedInUser = { name: displayName, email, img: photoURL };
        // setLoggedInUser(signedInUser);
        navigate(from, { replace: true });
      })
      .then((data) => {
        if (data) {
          window.alert("logged in succesfully");
        } else {
          window.alert("logged in succesfully");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <Container className="text-center login-container">
        <Row className="justify-content-md-center mt-5">
          <div className="login-card mt-5">
            <h3>Login With</h3>
            <Button onClick={handleGoogleSignIn} variant="light">
              <img src={googleIcon} alt="" /> Continue with Google
            </Button>
            <p>
              Don't have an account?{" "}
              <a href="https://accounts.google.com/signup?hl=en" target="blank">
                Create an account.
              </a>
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
