import React, { useState } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Full Name is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.phoneNumber) tempErrors.phoneNumber = "Phone Number is required.";
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Fetch API or send form data to the server here
    // For demonstration, we'll log it to the console
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  return (
    <section className="get-in-touch-section py-5" style={{ backgroundColor: '#fff3e0' }}>
      <div className="container">
        <h2 className="text-center mb-4 creative-heading pb-4" style={{ color: '#ff5722' }}>Get in Touch with Us</h2>
        <div className="row align-items-stretch">
          <div className="col-md-6 d-flex">
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md flex-grow-1 d-flex flex-column">
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  name="fullName" 
                  id="fullName" 
                  className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} 
                  value={formData.fullName} 
                  onChange={handleChange} 
                />
                {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                  value={formData.email} 
                  onChange={handleChange} 
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input 
                  type="tel" 
                  name="phoneNumber" 
                  id="phoneNumber" 
                  className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`} 
                  value={formData.phoneNumber} 
                  onChange={handleChange} 
                />
                {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`} 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <button type="submit" className="btn" style={{ backgroundColor: '#ff5722', color: '#fff' }}>
                Connect Now
              </button>
            </form>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img 
              src="https://images.pexels.com/photos/6069075/pexels-photo-6069075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // New fashion-themed image
              alt="Get in Touch Illustration"
              className="img-fluid rounded"
              style={{ border: '2px solid #ff5722' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
