import { getAuth } from 'firebase/auth';
import React from 'react';
import './Login.css'
import app from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Row } from 'react-bootstrap';
import googleIcon from '../../Images/google.png'

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then( ()=>{
            navigate(from, {replace: true})
        })
    }
    return (
      <div>
        <Container className="text-center">
          <Row className="justify-content-md-center mt-3">
            <div className="login-card mt-5">
              <h3>Login With</h3>
              <Button onClick={handleGoogleSignIn} variant="light">
                <img src={googleIcon} alt="" /> Continue with Google
              </Button>
              <p>
                Don't have an account?{" "}
                <a
                  href="https://accounts.google.com/signup?hl=en"
                  target="blank"
                >
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