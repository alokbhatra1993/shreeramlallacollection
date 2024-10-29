import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'; // Import the logo

const TopBar = () => {
  return (
    <header className="bg-white py-3">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side - Logo */}
          <div className="col-6 col-md-4 text-start">
            <Link to="/">
              <img
                src={logo} // Use the imported logo
                alt="Tripping Tales Logo"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </Link>
          </div>

          {/* Right side - Login/Signup buttons */}
          <div className="col-6 col-md-8 text-end">
            <Link to="/login" className="common-button me-3">
              Login
            </Link>
            <Link to="/signup" className="secondary-button">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
