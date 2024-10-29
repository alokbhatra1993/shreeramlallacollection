import React from 'react';
import { Link } from 'react-router-dom';
import mensShirts from "../images/shirt6.jpg"; // Update with actual shirt image
import womensShirts from "../images/shirt2.jpg"; // Update with actual shirt image
import jeans from "../images/shirt1.jpg"; // Update with actual jeans image
import trendingStyles from "../images/shirt7.jpg"; // Update with actual trending styles image

function HolidaysByTheme() {
  return (
    <>
      <section id="pricing" className="pricing-area pt-6 pb-6"> {/* Reduced padding */}
        <div className="container justify-center items-center-new">
          <div className="row justify-center items-center-new">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="section-title mb-4"> {/* Reduced margin */}
                <div className="flex justify-between items-center">
                  <h2 className="creative-heading1">Shop by Category</h2>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Discover our exclusive collection of men's and women's clothing, 
                including stylish shirts and comfortable jeans. Each piece is crafted 
                with quality materials to ensure you look and feel your best. 
                Whether you’re dressing up for an occasion or going casual, 
                our versatile styles have you covered.
              </p>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="row">
                {/* Cards */}
                {[
                  { img: mensShirts, title: 'Men’s Shirts', link: '/mens-shirts' },
                  { img: womensShirts, title: ' Printed Shirts', link: '/mens-shirts' },
                  { img: jeans, title: 'Stylish Shirts', link: '/jeans' },
                  { img: trendingStyles, title: 'Trending Styles', link: '/trending-styles' }
                ].map((theme, index) => (
                  <div className="col-md-6 mb-4" key={index}>
                    <div className="card bg-white shadow-lg hover:shadow-2xl rounded-lg overflow-hidden transition duration-300">
                      <img src={theme.img} alt={theme.title} className="w-full h-40 object-cover" /> {/* Reduced height */}
                      <div className="p-4 flex justify-between items-center">
                        <h3 className="text-md font-semibold text-gray-800 mb-4">{theme.title}</h3>
                        <Link to={theme.link} className="secondary-button">
                          View More <i className="fas fa-angle-right ml-2"></i>
                        </Link> {/* Styled 'View More' button */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HolidaysByTheme;
