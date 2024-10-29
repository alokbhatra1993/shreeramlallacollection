import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./CustomArrows"; // Adjust the import path as needed
import { Link } from "react-router-dom";

// Importing local images
import mensFashion from "../images/mensfashion.jpg";
import womensFashion from "../images/mensfashion.jpg";
import kidsFashion from "../images/mensfashion.jpg";

function Sliderhome() {
  const home = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    autoplay: true,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="home" className="slider-area fix p-relative" style={{ width: '100vw', overflow: 'hidden' }}>
      <Slider className="slider-active" {...home}>
        {/* Men's Fashion Slide */}
        <div className="single-slider slider-bg d-flex align-items-center" style={{ position: 'relative', height: '100vh' }}>
          <img src={mensFashion} alt="Men's Fashion" className="slider-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="slider-content s-slider-content text-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
            <h2 className="animated-heading">Men's Fashion</h2>
            <p>
              Discover the latest trends in men's clothing, from casual wear to formal attire.
            </p>
            <div className="slider-btn mt-30 mb-105">
              <Link to="/men" className="btn ss-btn active mr-15">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Women's Fashion Slide */}
        <div className="single-slider slider-bg d-flex align-items-center" style={{ position: 'relative', height: '100vh' }}>
          <img src={womensFashion} alt="Women's Fashion" className="slider-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="slider-content s-slider-content text-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
            <h2 className="animated-heading">Women's Fashion</h2>
            <p>
              Elevate your wardrobe with stylish outfits for every occasion.
            </p>
            <div className="slider-btn mt-30 mb-105">
              <Link to="/women" className="btn ss-btn active mr-15">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Kids' Fashion Slide */}
        <div className="single-slider slider-bg d-flex align-items-center" style={{ position: 'relative', height: '100vh' }}>
          <img src={kidsFashion} alt="Kids' Fashion" className="slider-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="slider-content s-slider-content text-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
            <h2 className="animated-heading">Kids' Fashion</h2>
            <p>
              Find trendy and comfortable clothing for kids of all ages.
            </p>
            <div className="slider-btn mt-30 mb-105">
              <Link to="/kids" className="btn ss-btn active mr-15">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Sliderhome;
