import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/SharedComponent/Footer/Footer";
import Navbar from "./Pages/SharedComponent/Header/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home></Home>
      <Footer />
    </div>
  );
}

export default App;
