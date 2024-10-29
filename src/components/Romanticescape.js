import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { NextArrow, PrevArrow } from "./CustomArrows"; // Adjust the import path
import shirt1 from "../images/shirt1.jpg";
import shirt2 from "../images/shirt2.jpg";
import shirt3 from "../images/shirt3.jpg";
import shirt4 from "../images/shirt4.jpg";
import shirt5 from "../images/shirt5.jpg";
import shirt6 from "../images/shirt6.jpg";
import shirt7 from "../images/shirt7.jpg";
import shirt8 from "../images/shirt8.jpg";
import shirt9 from "../images/shirt9.jpg";

const ShirtsSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    autoplay: true,
    slidesToShow: 5, // Show 5 slides in a row
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="shirts"
      className="shirts-area pt-16 pb-16 mt-8 relative"
      style={{
        backgroundImage: `url('your-background-image-url.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Optional background overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Explore Our Latest Shirts
          </h2>
        </div>

        <Slider {...settings}>
          {/* Shirt 1 */}
          <div className="p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={shirt1}
                alt="Shirt 1"
                className="w-full h-48 object-cover" // Reduced height to h-48
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  Classic White Shirt
                </h4>
                <p className="text-gray-600 mb-4">Rs 399/Only</p>
              
              </div>
            </div>
          </div>

          {/* Shirt 2 */}
          <div className="p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={shirt2}
                alt="Shirt 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  Casual Blue Shirt
                </h4>
                <p className="text-gray-600 mb-4">Rs 399/Only</p>
               
               
              </div>
            </div>
          </div>

          {/* Shirt 3 */}
          <div className="p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={shirt3}
                alt="Shirt 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  Formal Black Shirt
                </h4>
                <p className="text-gray-600 mb-4">Rs 399/Only</p>
               
               
              </div>
            </div>
          </div>

          {/* Shirt 4 */}
          <div className="p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={shirt4}
                alt="Shirt 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  Striped Red Shirt
                </h4>
                <p className="text-gray-600 mb-4">Rs 399/Only</p>
             
               
              </div>
            </div>
          </div>

          {/* Shirt 5 */}
          <div className="p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={shirt5}
                alt="Shirt 5"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  Summer Yellow Shirt
                </h4>
                <p className="text-gray-600 mb-4">Rs 399/Only</p>
             
               
              </div>
            </div>
          </div>

          {/* Shirt 5 */}
          <div className="p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={shirt6}
                alt="Shirt 6"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  Summer Yellow Shirt
                </h4>
                <p className="text-gray-600 mb-4">Rs 399/Only</p>
              
               
              </div>
            </div>
          </div>

          {/* Shirt 5 */}
          <div className="p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={shirt7}
                alt="Shirt 7"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  Summer Yellow Shirt
                </h4>
                <p className="text-gray-600 mb-4">Rs 399/Only</p>
               
               
              </div>
            </div>
          </div>

        {/* Shirt 5 */}
        <div className="p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={shirt8}
                alt="Shirt 8"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  Summer Yellow Shirt
                </h4>
                <p className="text-gray-600 mb-4">Rs 399/Only</p>
               
               
              </div>
            </div>
          </div>
           {/* Shirt 5 */}
        <div className="p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={shirt9}
                alt="Shirt 9"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900">
                  Summer Yellow Shirt
                </h4>
                <p className="text-gray-600 mb-4">Rs 399/Only</p>
               
               
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ShirtsSlider;
