import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar";
import Products from "./components/products";
import Footer from "./components/footer";
import SignUp from "./components/sign";
import { Outlet } from "react-router-dom";
import Test from "./test";
import Home from "./components/home";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
