import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Hotel1 from "../images/expert-guide.svg";
import Hotel2 from "../images/comfort.svg";
import Hotel3 from "../images/personalized-service.svg";
import Hotel4 from "../images/cultural-immersion.svg";
import Hotel5 from "../images/recognize.svg";
import Hotel6 from "../images/hassle.svg";

function WhyChooseUs() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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

  const services = [
    {
      img: Hotel1,
      title: "Expert Fashion Advice",
      description:
        "Our fashion experts provide personalized recommendations to help you find the perfect outfits.",
      link: "/service-details",
    },
    {
      img: Hotel2,
      title: "Quality Assurance",
      description:
        "We ensure that all our products are made from high-quality materials for lasting comfort.",
      link: "/service-details",
    },
    {
      img: Hotel3,
      title: "Personalized Shopping Experience",
      description: "Get tailored shopping experiences that cater to your unique style.",
      link: "/service-details",
    },
    {
      img: Hotel4,
      title: "Trendy Collections",
      description: "Stay on top of fashion trends with our regularly updated collections.",
      link: "/service-details",
    },
    {
      img: Hotel5,
      title: "24/7 Customer Support",
      description: "Our dedicated team is here to assist you at any time with your queries.",
      link: "/service-details",
    },
    {
      img: Hotel6,
      title: "Hassle-Free Returns",
      description: "Enjoy easy returns and exchanges for a worry-free shopping experience.",
      link: "/service-details",
    },
  ];

  return (
    <section className="pt-[100px] pb-16 bg-gray-50 whychoose"> {/* Updated padding */}
      <div className="container mx-auto px-4 pb-0">
        <div className="text-center mb-12 p-5 mt-8 pb-0 explore-padding section-header">
          <h5>Explore</h5>
          <h2>Why Choose Shree Ramlalla Collection?</h2>
        </div>

        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <div key={index} className="p-4 mt-6"> {/* Margin for cards */}
              <div className="why-choose-card bg-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out p-8 flex flex-col justify-between h-full">
                <div className="flex justify-center items-center mb-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-16 h-16"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--secondary-color)" }}
                >
                  <Link to={service.link} className="hover:text-secondary-color">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default WhyChooseUs;
