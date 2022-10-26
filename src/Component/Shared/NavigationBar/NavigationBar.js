import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "./NavigationBar.css";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(app);

const NavigationBar = () => {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();

  const handleDashboardClick = () => {
    if (user) {
      navigate(`/myOrders/${user.email}`, { replace: true });
    } else {
      navigate(`/login`, { replace: true });
    }
  };
  const handleManageClick = () => {
    if (user) {
      navigate(`/bookings`, { replace: true });
    } else {
      navigate(`/login`, { replace: true });
    }
  };

  // function for navbars dynamic background color
  const navbar = document.querySelector(".nav-fixed");
  window.onscroll = () => {
    if (window.scrollY > 5) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };

  return (
    <div className="">
      <Navbar
        className="nav-fixed fixed-top px-5 py-4"
        variant="dark"
        collapseOnSelect
        expand="md"
      >
        <Navbar.Brand href="" className="text-black">
          <span className="project-name">Dream World</span>
        </Navbar.Brand>
        <Navbar.Toggle
          className="ml-auto"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link
              href=""
              className="text-light ms-5"
              onClick={() => navigate("/", { replace: true })}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href=""
              className="text-light"
              onClick={handleDashboardClick}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              href=""
              className="text-light"
              onClick={handleManageClick}
            >
              Manage All Orders
            </Nav.Link>
            <Nav.Link className="text-light">
              {user?.displayName && user.displayName}{" "}
            </Nav.Link>
            {user?.uid ? (
              <Nav.Link
                href=""
                className="text-light"
                onClick={() => signOut(auth)}
              >
                LogOut
              </Nav.Link>
            ) : (
              <Nav.Link
                href=""
                className="text-light"
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
