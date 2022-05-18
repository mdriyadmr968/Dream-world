import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Homepage/Home/Home";
import Footer from "./Component/Shared/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./Component/Shared/NavigationBar/NavigationBar";
import NotFound from '../src/Component/NotFound/Notfound'
import Login from "./Component/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
