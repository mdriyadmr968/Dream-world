import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Homepage/Home/Home";
import Footer from "./Component/Shared/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./Component/Shared/NavigationBar/NavigationBar";
import NotFound from "../src/Component/NotFound/Notfound";
import Login from "./Component/Login/Login";
import SpotDetail from "./Component/Homepage/SpotDetail/SpotDetail";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import MyOrders from "./Component/Dashboard/MyOrders/MyOrders";
import Bookings from "./Component/Dashboard/Bookings/Bookings";
import AddSpot from "./Component/Dashboard/AddSpot/AddSpot"
import { createContext, useState } from "react";
import RemoveSpot from "./Component/Dashboard/RemoveSpot/RemoveSpot";

export const UserContext = createContext();
export const UserData = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    success: false,
  });
  return (
    <div className="App">
      <UserData.Provider value={[user, setUser]}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <NavigationBar></NavigationBar>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/spotDetail/:id"
                element={
                  <RequireAuth>
                    <SpotDetail />
                  </RequireAuth>
                }
              ></Route>
              <Route path="/myOrders/:email" element={<MyOrders />}></Route>
              <Route path="/bookings" element={<Bookings />}></Route>
              <Route path="/addSpot" element={<AddSpot/>}></Route>
              <Route path="/removeSpot" element={<RemoveSpot/>}></Route>

              <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer></Footer>
          </Router>
        </UserContext.Provider>
      </UserData.Provider>
    </div>
  );
}

export default App;
