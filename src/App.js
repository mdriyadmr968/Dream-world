import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Homepage/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Footer from './Component/Shared/Footer/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import { createContext, useState } from 'react';
import NavigationBar from './Component/Shared/NavigationBar/NavigationBar';

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
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
            <Footer></Footer>
          </Router>
        </UserContext.Provider>
      </UserData.Provider>
    </div>
  );
}

export default App;
