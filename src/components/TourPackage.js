import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TourPackage = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/92090/pexels-photo-92090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        {/* Overlay for darkening background */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="container relative z-10 mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16 space-y-6 md:space-y-0 md:space-x-6">
          {/* Left Side: Heading and Subheading */}
          <div className="md:w-1/2 text-left text-white space-y-3">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: "var(--secondary-color)" }}
            >
              Baku Tour Packages
            </h1>
            <p className="text-lg text-white">
              The One Where East Meets West In Style
            </p>
          </div>

          {/* Right Side: Request a Callback Form */}
          <div className="md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-2xl">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--primary-color)" }}
            >
              Request a Callback
            </h2>
            <form className="space-y-5">
              <div className="flex flex-col">
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--primary-color)" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--primary-color)" }}
                >
                  Email ID
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--primary-color)" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition shadow-md"
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "var(--secondary-color)",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Explore Our Packages Section */}
      <div className="container mx-auto my-12 px-4">
        <h2
          className="text-3xl text-left font-bold mb-6"
          style={{ color: "var(--primary-color)" }}
        >
          Featured Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1704997983693-5b41300cf124?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  6 Days Backpacking Trip To Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    5N/6D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 11 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 45,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 74,002
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 29,002
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1726760472497-d99e8b5129be?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  5 Days Luxury Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    4N/5D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 15 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 74,002
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 99,002
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 25,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.pexels.com/photos/2927001/pexels-photo-2927001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  7 Days Group Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    6N/7D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 20 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 85,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 1,10,000
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 25,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.pexels.com/photos/18207708/pexels-photo-18207708/free-photo-of-heydar-aliev-centre-in-baku-azerbaijan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  5 Days Cultural Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    4N/5D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 25 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 50,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 65,000
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 15,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1704997983693-5b41300cf124?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  6 Days Backpacking Trip To Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    5N/6D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 11 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 45,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 74,002
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 29,002
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1726760472497-d99e8b5129be?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  5 Days Luxury Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    4N/5D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 15 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 74,002
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 99,002
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 25,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.pexels.com/photos/2927001/pexels-photo-2927001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  7 Days Group Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    6N/7D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 20 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 85,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 1,10,000
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 25,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.pexels.com/photos/18207708/pexels-photo-18207708/free-photo-of-heydar-aliev-centre-in-baku-azerbaijan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  5 Days Cultural Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    4N/5D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 25 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 50,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 65,000
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 15,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1704997983693-5b41300cf124?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  6 Days Backpacking Trip To Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    5N/6D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 11 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 45,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 74,002
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 29,002
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1726760472497-d99e8b5129be?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  5 Days Luxury Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    4N/5D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 15 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 74,002
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 99,002
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 25,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.pexels.com/photos/2927001/pexels-photo-2927001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  7 Days Group Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    6N/7D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 20 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 85,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 1,10,000
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 25,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.pexels.com/photos/18207708/pexels-photo-18207708/free-photo-of-heydar-aliev-centre-in-baku-azerbaijan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  5 Days Cultural Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    4N/5D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 25 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 50,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 65,000
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 15,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1704997983693-5b41300cf124?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  6 Days Backpacking Trip To Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    5N/6D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 11 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 45,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 74,002
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 29,002
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1726760472497-d99e8b5129be?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  5 Days Luxury Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    4N/5D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 15 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 74,002
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 99,002
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 25,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.pexels.com/photos/2927001/pexels-photo-2927001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  7 Days Group Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    6N/7D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 20 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 85,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 1,10,000
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 25,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://images.pexels.com/photos/18207708/pexels-photo-18207708/free-photo-of-heydar-aliev-centre-in-baku-azerbaijan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Baku Trip"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-lg font-bold mb-2 text-primary-600"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  5 Days Cultural Tour in Baku
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">
                    <i
                      className="fas fa-calendar-alt mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    4N/5D
                  </span>
                  <span className="text-gray-500">
                    <i
                      className="fas fa-plane mr-1"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                    Baku Airport
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  <i
                    className="fas fa-clock mr-1"
                    style={{ color: "var(--primary-color)" }}
                  ></i>
                  Date: 25 Oct
                </p>
                {/* Price Information */}
                <div className="mt-2 flex justify-between items-center">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    INR 50,000
                  </p>
                  <p className="text-sm font-bold text-gray-500 line-through">
                    INR 65,000
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    SAVE INR 15,000
                  </p>
                </div>
                {/* Request Callback Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto my-5 px-4">
          <h2
            className="text-3xl font-bold mb-4 text-left"
            style={{ color: "#02123c" }}
          >
          Places You Can Visit In Baku

          </h2>
          <p className="text-lg mb-4 text-gray-700">
          his UNESCO World Heritage Site is the historical core of Baku, featuring narrow alleys, ancient mosques, and historic buildings. Highlights include the Maiden Tower and the Palace of the Shirvanshahs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Activity Card 1 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1637391866494-20ab7dad5011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Paragliding"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Paragliding
                  </h5>
                  <p className="text-gray-600">
                    Experience the thrill of paragliding over the stunning
                    landscapes of Baku. A must-try for adventure seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full  group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 2 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1649926020585-354cdbdc30f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJha3UlMjB0b3VyfGVufDB8fDB8fHww"
                alt="Off-road Adventures"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Off-road Adventures
                  </h5>
                  <p className="text-gray-600">
                    Explore the rugged terrains of Baku with exhilarating
                    off-road adventures. Perfect for thrill-seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full secondary-button group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 3 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1726423391473-59d7fd386c56?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Scuba Diving"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Scuba Diving
                  </h5>
                  <p className="text-gray-600">
                    Dive into the azure waters of Baku and discover an
                    underwater world filled with beauty and adventure!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {/* Activity Card 1 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1637391866494-20ab7dad5011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Paragliding"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Paragliding
                  </h5>
                  <p className="text-gray-600">
                    Experience the thrill of paragliding over the stunning
                    landscapes of Baku. A must-try for adventure seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full  group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 2 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1649926020585-354cdbdc30f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJha3UlMjB0b3VyfGVufDB8fDB8fHww"
                alt="Off-road Adventures"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Off-road Adventures
                  </h5>
                  <p className="text-gray-600">
                    Explore the rugged terrains of Baku with exhilarating
                    off-road adventures. Perfect for thrill-seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full secondary-button group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 3 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1726423391473-59d7fd386c56?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Scuba Diving"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Scuba Diving
                  </h5>
                  <p className="text-gray-600">
                    Dive into the azure waters of Baku and discover an
                    underwater world filled with beauty and adventure!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {/* Activity Card 1 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1637391866494-20ab7dad5011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Paragliding"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Paragliding
                  </h5>
                  <p className="text-gray-600">
                    Experience the thrill of paragliding over the stunning
                    landscapes of Baku. A must-try for adventure seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full  group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 2 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1649926020585-354cdbdc30f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJha3UlMjB0b3VyfGVufDB8fDB8fHww"
                alt="Off-road Adventures"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Off-road Adventures
                  </h5>
                  <p className="text-gray-600">
                    Explore the rugged terrains of Baku with exhilarating
                    off-road adventures. Perfect for thrill-seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full secondary-button group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 3 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1726423391473-59d7fd386c56?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Scuba Diving"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Scuba Diving
                  </h5>
                  <p className="text-gray-600">
                    Dive into the azure waters of Baku and discover an
                    underwater world filled with beauty and adventure!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto my-5 px-4">
          <h2
            className="text-3xl font-bold mb-4 text-left"
            style={{ color: "#02123c" }}
          >
            Adventure Activities You Can Enjoy in Baku
          </h2>
          <p className="text-lg mb-4 text-gray-700">
            Discover the excitement of Baku with its thrilling adventure
            activities. From paragliding over scenic landscapes to exploring
            rugged terrains, Baku offers unforgettable experiences for every
            adventure enthusiast.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Activity Card 1 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1637391866494-20ab7dad5011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Paragliding"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Paragliding
                  </h5>
                  <p className="text-gray-600">
                    Experience the thrill of paragliding over the stunning
                    landscapes of Baku. A must-try for adventure seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full  group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 2 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1649926020585-354cdbdc30f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJha3UlMjB0b3VyfGVufDB8fDB8fHww"
                alt="Off-road Adventures"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Off-road Adventures
                  </h5>
                  <p className="text-gray-600">
                    Explore the rugged terrains of Baku with exhilarating
                    off-road adventures. Perfect for thrill-seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full secondary-button group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 3 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1726423391473-59d7fd386c56?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Scuba Diving"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Scuba Diving
                  </h5>
                  <p className="text-gray-600">
                    Dive into the azure waters of Baku and discover an
                    underwater world filled with beauty and adventure!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {/* Activity Card 1 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1637391866494-20ab7dad5011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Paragliding"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Paragliding
                  </h5>
                  <p className="text-gray-600">
                    Experience the thrill of paragliding over the stunning
                    landscapes of Baku. A must-try for adventure seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full  group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 2 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1649926020585-354cdbdc30f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJha3UlMjB0b3VyfGVufDB8fDB8fHww"
                alt="Off-road Adventures"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Off-road Adventures
                  </h5>
                  <p className="text-gray-600">
                    Explore the rugged terrains of Baku with exhilarating
                    off-road adventures. Perfect for thrill-seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full secondary-button group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 3 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1726423391473-59d7fd386c56?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Scuba Diving"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Scuba Diving
                  </h5>
                  <p className="text-gray-600">
                    Dive into the azure waters of Baku and discover an
                    underwater world filled with beauty and adventure!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {/* Activity Card 1 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1637391866494-20ab7dad5011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Paragliding"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Paragliding
                  </h5>
                  <p className="text-gray-600">
                    Experience the thrill of paragliding over the stunning
                    landscapes of Baku. A must-try for adventure seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full  group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 2 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1649926020585-354cdbdc30f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJha3UlMjB0b3VyfGVufDB8fDB8fHww"
                alt="Off-road Adventures"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Off-road Adventures
                  </h5>
                  <p className="text-gray-600">
                    Explore the rugged terrains of Baku with exhilarating
                    off-road adventures. Perfect for thrill-seekers!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full secondary-button group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 3 */}
            <div className="relative group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1726423391473-59d7fd386c56?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Scuba Diving"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-lg font-bold text-gray-800">
                    Scuba Diving
                  </h5>
                  <p className="text-gray-600">
                    Dive into the azure waters of Baku and discover an
                    underwater world filled with beauty and adventure!
                  </p>
                  <button className="secondary-button text-white font-semibold py-2 px-4 rounded-full group-hover:opacity-100 transition-opacity duration-300">
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container mx-auto my-10 px-4 mb-7">
  <h2 className="text-3xl font-bold mb-4 text-left" style={{ color: "#02123c" }}>
    Baku's Must-Try Culinary Destinations and Gastronomic Delights!
  </h2>
  <p className="text-lg mb-8 text-gray-700">
    Discover the vibrant food scene in Baku with our curated list of top eateries. From traditional Azerbaijani dishes to modern culinary delights, these spots promise an unforgettable dining experience.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Restaurant Card 1 */}
    <div className="relative group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="h-full w-full relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2898205/pexels-photo-2898205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Traditional Azerbaijani Cuisine"
          className="object-cover h-full w-full transition-all duration-300 transform hover:scale-110"
        />
      </div>
      {/* Text Section with adjusted rgba background */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.4)] p-8 rounded-3xl text-center transition-all duration-300">
        <h5 className="text-2xl font-bold text-white">Nargiz</h5>
        <p className="text-white mt-1">Azerbaijani and International</p>
        <p className="text-gray-300 mt-2">Fountains Square</p>
        <p className="text-white font-semibold">Cost for Two: 2400</p>
        <button className="mt-4 secondary-button text-white font-semibold py-2 px-4 rounded-full transition-all hover:bg-blue-700">
          Send Enquiry
        </button>
      </div>
    </div>

    {/* Restaurant Card 2 */}
    <div className="relative group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="h-full w-full relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/19335838/pexels-photo-19335838/free-photo-of-illuminated-shelves-with-bottles-of-alcohol-above-the-bar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fine Dining Experience"
          className="object-cover h-full w-full transition-all duration-300 transform hover:scale-110"
        />
      </div>
      {/* Text Section with adjusted rgba background */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.4)] p-8 rounded-3xl text-center transition-all duration-300">
        <h5 className="text-2xl font-bold text-white">Chinar</h5>
        <p className="text-white mt-1">Asian and Azerbaijani Fusion</p>
        <p className="text-gray-300 mt-2">Nizami Street</p>
        <p className="text-white font-semibold">Cost for Two: 3200</p>
        <button className="mt-4 secondary-button text-white font-semibold py-2 px-4 rounded-full transition-all hover:bg-blue-700">
          Send Enquiry
        </button>
      </div>
    </div>

    {/* Restaurant Card 3 */}
    <div className="relative group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="h-full w-full relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Culinary Delight"
          className="object-cover h-full w-full transition-all duration-300 transform hover:scale-110"
        />
      </div>
      {/* Text Section with adjusted rgba background */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.4)] p-8 rounded-3xl text-center transition-all duration-300">
        <h5 className="text-2xl font-bold text-white">Shirvanshah Mum Restaurant</h5>
        <p className="text-white mt-1">Traditional Azerbaijani Cuisine</p>
        <p className="text-gray-300 mt-2">Old City, Icherisheher</p>
        <p className="text-white font-semibold">Cost for Two: 2800</p>
        <button className="mt-4 secondary-button text-white font-semibold py-2 px-4 rounded-full transition-all hover:bg-blue-700">
          Send Enquiry
        </button>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
  {/* Restaurant Card 1 */}
  <div className="relative group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
    <div className="h-full w-full relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Luxury Italian Cuisine"
        className="object-cover h-full w-full transition-all duration-300 transform hover:scale-110"
      />
    </div>
    {/* Text Section with adjusted rgba background */}
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.4)] p-8 rounded-3xl text-center transition-all duration-300">
      <h5 className="text-2xl font-bold text-white">La Dolce Vita</h5>
      <p className="text-white mt-1">Italian Fine Dining</p>
      <p className="text-gray-300 mt-2">Port Baku</p>
      <p className="text-white font-semibold">Cost for Two: 3500</p>
      <button className="mt-4 secondary-button text-white font-semibold py-2 px-4 rounded-full transition-all hover:bg-blue-700">
        Send Enquiry
      </button>
    </div>
  </div>

  {/* Restaurant Card 2 */}
  <div className="relative group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
    <div className="h-full w-full relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Asian Fusion Delights"
        className="object-cover h-full w-full transition-all duration-300 transform hover:scale-110"
      />
    </div>
    {/* Text Section with adjusted rgba background */}
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.4)] p-8 rounded-3xl text-center transition-all duration-300">
      <h5 className="text-2xl font-bold text-white">Saffron</h5>
      <p className="text-white mt-1">Asian Fusion Cuisine</p>
      <p className="text-gray-300 mt-2">Flame Towers</p>
      <p className="text-white font-semibold">Cost for Two: 4000</p>
      <button className="mt-4 secondary-button text-white font-semibold py-2 px-4 rounded-full transition-all hover:bg-blue-700">
        Send Enquiry
      </button>
    </div>
  </div>

  {/* Restaurant Card 3 */}
  <div className="relative group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
    <div className="h-full w-full relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/4667030/pexels-photo-4667030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Traditional Azerbaijani Flavors"
        className="object-cover h-full w-full transition-all duration-300 transform hover:scale-110"
      />
    </div>
    {/* Text Section with adjusted rgba background */}
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.4)] p-8 rounded-3xl text-center transition-all duration-300">
      <h5 className="text-2xl font-bold text-white">Karvansaray</h5>
      <p className="text-white mt-1">Authentic Azerbaijani Cuisine</p>
      <p className="text-gray-300 mt-2">Old City</p>
      <p className="text-white font-semibold">Cost for Two: 2800</p>
      <button className="mt-4 secondary-button text-white font-semibold py-2 px-4 rounded-full transition-all hover:bg-blue-700">
        Send Enquiry
      </button>
    </div>
  </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 custom-bottom">
    {/* Restaurant Card 1 */}
    <div className="relative group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="h-full w-full relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/11905186/pexels-photo-11905186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Traditional Azerbaijani Cuisine"
          className="object-cover h-full w-full transition-all duration-300 transform hover:scale-110"
        />
      </div>
      {/* Text Section with adjusted rgba background */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.4)] p-8 rounded-3xl text-center transition-all duration-300">
        <h5 className="text-2xl font-bold text-white">Nargiz</h5>
        <p className="text-white mt-1">Azerbaijani and International</p>
        <p className="text-gray-300 mt-2">Fountains Square</p>
        <p className="text-white font-semibold">Cost for Two: 2400</p>
        <button className="mt-4 secondary-button text-white font-semibold py-2 px-4 rounded-full transition-all hover:bg-blue-700">
          Send Enquiry
        </button>
      </div>
    </div>

    {/* Restaurant Card 2 */}
    <div className="relative group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="h-full w-full relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/19335838/pexels-photo-19335838/free-photo-of-illuminated-shelves-with-bottles-of-alcohol-above-the-bar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fine Dining Experience"
          className="object-cover h-full w-full transition-all duration-300 transform hover:scale-110"
        />
      </div>
      {/* Text Section with adjusted rgba background */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.4)] p-8 rounded-3xl text-center transition-all duration-300">
        <h5 className="text-2xl font-bold text-white">Chinar</h5>
        <p className="text-white mt-1">Asian and Azerbaijani Fusion</p>
        <p className="text-gray-300 mt-2">Nizami Street</p>
        <p className="text-white font-semibold">Cost for Two: 3200</p>
        <button className="mt-4 secondary-button text-white font-semibold py-2 px-4 rounded-full transition-all hover:bg-blue-700">
          Send Enquiry
        </button>
      </div>
    </div>

    {/* Restaurant Card 3 */}
    <div className="relative group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="h-full w-full relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Culinary Delight"
          className="object-cover h-full w-full transition-all duration-300 transform hover:scale-110"
        />
      </div>
      {/* Text Section with adjusted rgba background */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.4)] p-8 rounded-3xl text-center transition-all duration-300">
        <h5 className="text-2xl font-bold text-white">Shirvanshah Mum Restaurant</h5>
        <p className="text-white mt-1">Traditional Azerbaijani Cuisine</p>
        <p className="text-gray-300 mt-2">Old City, Icherisheher</p>
        <p className="text-white font-semibold">Cost for Two: 2800</p>
        <button className="mt-4 secondary-button text-white font-semibold py-2 px-4 rounded-full transition-all hover:bg-blue-700">
          Send Enquiry
        </button>
      </div>
    </div>
  </div>

 
</div>

      </div>
    </div>
  );
};

export default TourPackage;
