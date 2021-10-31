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
import useContextAPI from "./Hooks/useContextAPI";
import LoadingSpinner from "./Pages/SharedComponent/Spinner/LoadingSpinner";
import PrivateRoute from "./Pages/SharedComponent/PrivateRoute/PrivateRoute";
import MyOrders from "./Pages/MyOrders.js/MyOrders";
import AllOrder from "./Pages/AllOrder/AllOrder";
import CreateTour from "./Pages/CreateTour/CreateTour";
import Admin from "./Pages/Admin/Admin";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  const { userLoading } = useContextAPI();
  if (userLoading) {
    return <LoadingSpinner />;
  }
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
          <Route exact path="/tours">
            <AllTour />
          </Route>
          <PrivateRoute path="/tour/:tourId">
            <TourDetails></TourDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/my-orders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/manage-all-orders">
            <AllOrder></AllOrder>
          </PrivateRoute>
          <PrivateRoute path="/create-tour">
            <CreateTour></CreateTour>
          </PrivateRoute>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
