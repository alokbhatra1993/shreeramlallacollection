import React from 'react';
import Slider from 'react-slick';
import Brand1 from '../images/abudhabi.png';
import Brand2 from '../images/singaporetourism.png';
import Brand3 from '../images/jordan.png';
import Brand4 from '../images/indonesia.png';
import Brand5 from '../images/rajasthan-tourism.png';
import Brand6 from '../images/uttarakhand-logo.png';

function Brand() {
    const brandSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
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

    return (
        <div className="brand-area">
            <div className="container">
                <h2 className="text-center mb-4 creative-heading" style={{ color: '#02123c' }}>Our Partners</h2>
                <Slider className="row brand-active" {...brandSettings}>
                    {[Brand1, Brand2, Brand3, Brand4, Brand5, Brand6].map((brand, index) => (
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6" key={index}>
                            <div className="single-brand" style={{ padding: '20px', transition: 'transform 0.3s' }}>
                                <img 
                                    src={brand} 
                                    alt={`Brand ${index + 1}`} 
                                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
                                    className="brand-img" 
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Brand;
