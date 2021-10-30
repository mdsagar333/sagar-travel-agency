import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Footer from "./Pages/SharedComponent/Footer/Footer";
import Navbar from "./Pages/SharedComponent/Header/Navbar";
import About from "./Pages/About/About";
import Register from "./Pages/Register/Register";
import AllTour from "./Pages/AllTour/AllTour";
import Login from "./Pages/Login/Login";
import TourDetails from "./Pages/SingleTourDetails/TourDetails";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about-us">
            <About></About>
          </Route>
          <Route exact path="/tour">
            <AllTour />
          </Route>
          <Route path="/tour/:tourId">
            <TourDetails></TourDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
