import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aicon from "../images/qt-icon.png";
import Aicon1 from "../images/review-icon.png";

function Testimonial() {
  const [expanded, setExpanded] = useState({});

  const handleReadMore = (index) => {
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
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

  const testimonials = [
    {
      author: "Rajesh Kumar",
      review: "Shree Ramlalla Collection has the most exquisite range of men’s shirts! The quality is top-notch, and I received compliments at every event I attended. Highly recommended! Date of experience: September 10, 2023.",
    },
    {
      author: "Pooja Sharma",
      review: "I purchased a couple of women’s shirts from Shree Ramlalla Collection, and I absolutely love them! They are stylish, comfortable, and perfect for both work and casual outings. Will definitely be back for more!",
    },
    {
      author: "Anil Verma",
      review: "The jeans from Shree Ramlalla Collection are a game-changer! Perfect fit and great quality. I've worn them on multiple occasions, and they hold up beautifully. Date of experience: August 5, 2023.",
    },
    {
      author: "Sneha Gupta",
      review: "I recently bought a couple of shirts and jeans, and I couldn’t be happier! The fabric is soft and breathable, perfect for summer wear. Shree Ramlalla Collection is now my go-to for clothing! Date of experience: July 20, 2023.",
    },
    {
      author: "Vikram Singh",
      review: "Amazing service and fantastic products! The men’s shirts I ordered exceeded my expectations in terms of quality and fit. I will definitely recommend Shree Ramlalla Collection to my friends. Date of experience: June 15, 2023.",
    },
    {
      author: "Neha Patel",
      review: "I am in love with my new tops from Shree Ramlalla Collection! They are chic and perfect for summer. The customer service was also excellent! Can’t wait to shop again. Date of experience: May 30, 2023.",
    },
    {
      author: "Rahul Yadav",
      review: "I purchased a denim jacket along with some jeans, and it was worth every penny! The fit is perfect, and the styles are trendy. Thanks, Shree Ramlalla Collection, for making me look stylish! Date of experience: April 10, 2023.",
    },
    {
      author: "Suman Rani",
      review: "I had a wonderful shopping experience with Shree Ramlalla Collection. The selection of women’s clothing is impressive, and the quality is fantastic! I will definitely be a returning customer. Date of experience: March 25, 2023.",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="section-header">
          <h5>Testimonial</h5>
          <h2>What Our Clients Say</h2>
        </div>
        <div className="testimonial-slider">
          <Slider {...testimonialSettings}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-content">
                  <div className="testimonial-author">
                    <img src={Aicon1} alt="Review Icon" className="review-icon" />
                    <h6>{testimonial.author}</h6>
                  </div>
                  <p className={`testimonial-review ${expanded[index] ? "expanded" : ""}`}>
                    {expanded[index] ? testimonial.review : `${testimonial.review.substring(0, 100)}...`}
                  </p>
                  <button
                    className="read-more"
                    onClick={() => handleReadMore(index)}
                  >
                    {expanded[index] ? "Read Less" : "Read More"}
                  </button>
                  <div className="quote-icon">
                    <img src={Aicon} alt="Quote Icon" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
