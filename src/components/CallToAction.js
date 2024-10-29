import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="row justify-content-center align-items-center cta-background" 
             style={{ borderRadius: '20px', overflow: 'hidden' }}>
          <div className="col-lg-12 col-md-12 text-center cta-content">
            <h2 className="creative-heading">Diwali Big Sale!</h2>
            <p className="cta-subtitle">Exclusive Offers on All Fashion Varieties</p>
            <a href="#contact" className="secondary-button">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
