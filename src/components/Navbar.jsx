import React from "react";
import logo from "../assets/logo.jpg";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        <NavLink to="/" className="nav-link">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products" className="nav-link">
          <li>Products</li>
        </NavLink>
        <NavLink to="/about" className="nav-link">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/jobs" className="nav-link">
          <li>Jobs</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/contact", { replace: true })}>
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
