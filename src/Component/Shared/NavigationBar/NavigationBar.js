import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import logo from "../../../Images/Logo (1).png";
import "./NavigationBar.css";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(app);

const NavigationBar = () => {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();

  return (
    <div className="">
      <Navbar className="px-5 " variant="dark" collapseOnSelect expand="md">
        <Navbar.Brand href="">
          <img
            className="w-50 mx-2"
            style={{ height: "50px", borderRadius:' 50% '}}
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
            <Nav.Link href="" onClick={() => navigate("/", { replace: true })}>
              My Orders
            </Nav.Link>
            <Nav.Link href="" onClick={() => navigate("/", { replace: true })}>
              Manage All Orders
            </Nav.Link>
            <Nav.Link>{user?.displayName && user.displayName} </Nav.Link>
            {user?.uid ? (
              // <button onClick={() => signOut(auth)}>sign out</button>
              <Nav.Link href="" onClick={() => signOut(auth)}>
                logOut
              </Nav.Link>
            ) : (
              <Nav.Link
                href=""
                onClick={() => navigate("/login", { replace: true })}
              >
                login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
