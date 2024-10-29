import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'; // Import your eCommerce logo

const Footer = () => {
  return (
    <footer className="footer-bg">
      {/* Wavy Shape */}
      <svg
        className="wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100px", position: "relative" }}
      >
        <path
          fill="#F27F0C"
          d="M0,64L30,96C60,128,120,192,180,208C240,224,300,192,360,160C420,128,480,96,540,74.7C600,53,660,43,720,64C780,85,840,139,900,176C960,213,1020,235,1080,224C1140,213,1200,171,1260,138.7C1320,107,1380,85,1410,74.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
        ></path>
      </svg>

      <div className="footer-content">
        <div className="container">
          <div className="row">
            {/* Column 1: About */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <img src={logo} alt="logo" className="mb-3" />
                <h2 className="footer-heading text-white">Elevate Your Style with Us</h2>
                <p className="footer-text text-light">
                  Discover the latest trends in men's, women's, and kids' fashion. Shop now to redefine your wardrobe with elegance and style.
                </p>
                <div className="footer-social mt-3">
                  <Link to="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="#" className="social-icon">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Column 2: Customer Service */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h2 className="footer-heading text-white">Customer Service</h2>
                <div className="footer-link">
                  <ul className="list-unstyled text-light">
                    <li><Link to="/faq" className="text-light">FAQ</Link></li>
                    <li><Link to="/support" className="text-light">Support</Link></li>
                    <li><Link to="/returns" className="text-light">Returns & Exchanges</Link></li>
                    <li><Link to="/shipping" className="text-light">Shipping Information</Link></li>
                    <li><Link to="/contact" className="text-light">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Column 3: Shop */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h2 className="footer-heading text-white">Shop</h2>
                <div className="footer-link">
                  <ul className="list-unstyled text-light">
                    <li><Link to="/mens" className="text-light">Men's Clothing</Link></li>
                    <li><Link to="/womens" className="text-light">Women's Clothing</Link></li>
                    <li><Link to="/kids" className="text-light">Kids' Clothing</Link></li>
                    <li><Link to="/accessories" className="text-light">Accessories</Link></li>
                    <li><Link to="/new-arrivals" className="text-light">New Arrivals</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Column 4: Contact Information */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h2 className="footer-heading text-white">Contact Us</h2>
                <div className="f-contact">
                  <ul className="list-unstyled text-light">
                    <li className="mb-2">
                      <i className="icon fas fa-phone"></i>
                      <span>+91-9680124031, +91-9680739098</span>
                    </li>
                    <li className="mb-2">
                      <i className="icon fas fa-envelope"></i>
                      <Link to="mailto:ramlallacollection@gmail.com" className="text-light">ramlallacollection@gmail.com</Link>
                    </li>
                    <li className="mb-2">
                      <i className="icon fas fa-map-marker-alt"></i>
                      <span className="text-light">Road No 17, 55 no. Bus Stand, Near Bhole Baba Juice Center V.K.I.A, Jaipur</span>
                    </li>
                    <li className="mb-2">
                      <i className="icon fas fa-globe"></i>
                      <Link to="https://www.shreeramlallacollection.com" className="text-light">www.shreeramlallacollection.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap bg-pink text-white py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="mb-0 text-black">
              &copy; {new Date().getFullYear()} Shree Ramlalla Collection. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
