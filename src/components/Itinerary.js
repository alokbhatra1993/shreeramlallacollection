import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { NextArrow, PrevArrow } from "./CustomArrows"; // Adjust the import path
import Bali from "../images/bali.jpg";
import vietnam from "../images/vietnam.jpg";
import thailand from "../images/thailand.jpg";
import mauritius from "../images/mauritius.png";
import Seychelles from "../images/mauritius.png";
import malasyia from "../images/malaysia.jpg";
import bhutan from "../images/bhutan.jpeg";
import Maldives from "../images/maldives.jpg";
import kashmir from "../images/kashmir.png";
import kerala from "../images/kerla.jpg";
import andaman from "../images/andman.jpg";
import Turkey from "../images/turkey.png";

const ItineraryPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary-color">
              Overview & Highlights
            </h3>
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed">
                Escape to a paradise like no other with our Fairytale Honeymoon
                Vacation at Dhigufaru Island Maldives! This enchanting 5-day
                journey is designed to make your honeymoon an unforgettable
                experience, offering countless opportunities for quality time,
                romance, and fun. From the moment you land at Male International
                Airport and glimpse the stunning azure ocean,
                <span id="dots">...</span>
                <span id="more" className="hidden">
                  Escape to a paradise like no other with our Fairytale
                  Honeymoon Vacation at Dhigufaru Island Maldives! This
                  enchanting 5-day journey is designed to make your honeymoon an
                  unforgettable experience, offering countless opportunities for
                  quality time, romance, and fun. From the moment you land at
                  Male International Airport and glimpse the stunning azure
                  ocean, you'll feel the magic of the Maldives. Your transfer to
                  Dhigufaru Island by speedboat provides a scenic introduction
                  to the breathtaking beauty that awaits you. Upon arrival, our
                  warm and welcoming representative will assist with your
                  check-in, ensuring that your stay is as comfortable as it is
                  luxurious. The island is a haven of romance, where you can
                  spend your days exactly as you wish. Begin with leisurely
                  mornings, enjoying breakfast together before exploring the
                  resort’s lush surroundings. Whether it’s relaxing on beach
                  loungers, indulging in spa treatments, or sharing a picnic on
                  a secluded sandbank, every moment is crafted for intimacy and
                  connection. For couples seeking adventure, Dhigufaru offers a
                  range of exhilarating water sports, from scuba diving and jet
                  skiing to kayaking and surfing. Create memories together as
                  you dive into the crystal-clear waters or race across the
                  waves. Your final day offers a choice: relax in the serene
                  beauty of the resort or embark on an island-hopping adventure.
                  Visit nearby local islands, enjoy a sunset cruise, or spot
                  playful dolphins. As the sun sets on your last evening, relish
                  the romantic atmosphere and the unforgettable experiences
                  you’ve shared. As you bid farewell to this tropical paradise,
                  you’ll leave with cherished memories and a deeper bond. Book
                  your Fairytale Honeymoon Vacation at Dhigufaru Island Maldives
                  today, and let your love story unfold in paradise!
                </span>
              </p>
              <button
                id="readMoreBtn"
                className="mt-2 text-blue-600 hover:underline focus:outline-none"
                onClick={() => {
                  const moreText = document.getElementById("more");
                  const dots = document.getElementById("dots");
                  const btn = document.getElementById("readMoreBtn");

                  if (moreText.style.display === "none") {
                    moreText.style.display = "inline";
                    dots.style.display = "none";
                    btn.innerHTML = "Read Less";
                  } else {
                    moreText.style.display = "none";
                    dots.style.display = "inline";
                    btn.innerHTML = "Read More";
                  }
                }}
              >
                Read More
              </button>
            </div>

            {/* Existing accordion content */}
            <div className="accordion" id="overviewAccordion">
              {/* Day 1 */}
              <div className="accordion-item border-b border-gray-300">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button py-4 text-lg font-semibold text-left text-primary-color hover:text-secondary-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Day 1: Arrival in Maldives | Transfer to the resort
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#overviewAccordion"
                >
                  <div className="accordion-body text-gray-700">
                    Arrive at the Male International Airport after a scenic
                    flight over the blue ocean. Complete immigration and
                    transfer to Baa Atoll. Relax and explore the resort.
                    Overnight stay at Dhigufaru Island Resort.
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="accordion-item border-b border-gray-300">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button py-4 text-lg font-semibold text-left text-primary-color hover:text-secondary-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Day 2: Day at leisure in the resort
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#overviewAccordion"
                >
                  <div className="accordion-body text-gray-700">
                    Enjoy breakfast and spend the day exploring the resort,
                    indulging in spa treatments, yoga, and more. Overnight at
                    Dhigufaru.
                  </div>
                </div>
              </div>

              {/* Day 3 */}
              <div className="accordion-item border-b border-gray-300">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button py-4 text-lg font-semibold text-left text-primary-color hover:text-secondary-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Day 3: Day at leisure by the beach
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#overviewAccordion"
                >
                  <div className="accordion-body text-gray-700">
                    Spend the day by the beach and take part in exciting water
                    sports like scuba diving, snorkeling, or jet skiing.
                    Overnight stay at Dhigufaru.
                  </div>
                </div>
              </div>

              {/* Day 4 */}
              <div className="accordion-item border-b border-gray-300">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button py-4 text-lg font-semibold text-left text-primary-color hover:text-secondary-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Day 4: Island hopping or relaxation
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#overviewAccordion"
                >
                  <div className="accordion-body text-gray-700">
                    You can either relax at the resort or go for an island
                    hopping adventure, visiting local islands and experiencing
                    the culture. Overnight stay at Dhigufaru.
                  </div>
                </div>
              </div>

              {/* Day 5 */}
              <div className="accordion-item border-b border-gray-300">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button py-4 text-lg font-semibold text-left text-primary-color hover:text-secondary-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Day 5: Departure | Take back cherished memories
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#overviewAccordion"
                >
                  <div className="accordion-body text-gray-700">
                    Bid farewell to the Maldives and transfer back to Male
                    International Airport for your flight home.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "itinerary":
        return (
          <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary-color">
              Itinerary
            </h3>
            <div className="accordion" id="itineraryAccordion">
              {/* Day 1 */}
              <div className="accordion-item border-b border-gray-300">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button py-4 text-lg font-semibold text-left text-primary-color hover:text-secondary-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Day 1: Arrival in Maldives
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#itineraryAccordion"
                >
                  <div className="accordion-body text-gray-700">
                    Arrive at Male International Airport and transfer to
                    Dhigufaru Island. Settle into your accommodation and relax.
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="accordion-item border-b border-gray-300">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button py-4 text-lg font-semibold text-left text-primary-color hover:text-secondary-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Day 2: Explore Dhigufaru Island
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#itineraryAccordion"
                >
                  <div className="accordion-body text-gray-700">
                    Spend your day at leisure, exploring the resort's facilities
                    or enjoying the beach.
                  </div>
                </div>
              </div>

              {/* Day 3 */}
              <div className="accordion-item border-b border-gray-300">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button py-4 text-lg font-semibold text-left text-primary-color hover:text-secondary-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Day 3: Water sports and adventure
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#itineraryAccordion"
                >
                  <div className="accordion-body text-gray-700">
                    Take part in thrilling water sports or relax by the beach.
                  </div>
                </div>
              </div>

              {/* Day 4 */}
              <div className="accordion-item border-b border-gray-300">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button py-4 text-lg font-semibold text-left text-primary-color hover:text-secondary-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Day 4: Island hopping
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#itineraryAccordion"
                >
                  <div className="accordion-body text-gray-700">
                    Go on an island hopping adventure to explore nearby islands
                    and experience local culture.
                  </div>
                </div>
              </div>

              {/* Day 5 */}
              <div className="accordion-item border-b border-gray-300">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button py-4 text-lg font-semibold text-left text-primary-color hover:text-secondary-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Day 5: Departure
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#itineraryAccordion"
                >
                  <div className="accordion-body text-gray-700">
                    Transfer back to Male International Airport for your flight
                    home.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "inclusions":
        return (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Inclusions</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Breakfast, lunch, and dinner</li>
              <li>Transfers to and from the airport</li>
              <li>Stay at luxury resorts</li>
              <li>Complimentary water sports activities</li>
            </ul>
          </div>
        );
      case "exclusions":
        return (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Exclusions</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Anything not mentioned in the inclusions.</li>
              <li>Any extra services or meals or drinks.</li>
              <li>
                Any water sports activity/excursion other than complimentary
                services.
              </li>
              <li>Tips, room service, laundry, phone calls, etc.</li>
              <li>
                Any other costs involved due to natural calamities or forced
                circumstances out of control.
              </li>
              <li>Green Tax.</li>
              <li>GST (5%) is applicable extra.</li>
              <li>TCS (5%) is applicable extra.</li>
            </ul>
          </div>
        );
      case "otherInfo":
        return (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Other Info</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-secondary">
                  Must Carry
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Authentic Government ID Card</li>
                  <li>
                    Comfortable warm clothing (e.g., woolen socks, cap, fleece
                    jackets)
                  </li>
                  <li>Sunscreen & lip balm, UV-protected sunglasses</li>
                  <li>Personal medicines (if any)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-secondary">
                  Travel Essentials
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>A rucksack bag and a day pack</li>
                  <li>3-litre water bladder or water bottle</li>
                  <li>A sun cap and a woolen cap</li>
                  <li>UV-protected sunglasses</li>
                  <li>One cotton long sleeve and 2 short sleeve t-shirts</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const Itinerary = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-primary-color text-center mb-4">
          Fairytale Honeymoon Vacation
        </h1>
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 font-semibold text-sm rounded-lg ${
              activeTab === "overview"
                ? "bg-primary-color text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`ml-2 px-4 py-2 font-semibold text-sm rounded-lg ${
              activeTab === "itinerary"
                ? "bg-primary-color text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("itinerary")}
          >
            Itinerary
          </button>
        </div>
        {renderContent()}
      </div>
    );
  };

  const destinations = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1690960644375-6f2399a08ebc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Destination 1",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1719955779443-4c22893486ab?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Destination 2",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1556225496-ff493e20d9a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Destination 3",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1606625379124-3882167b827b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Destination 4",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1704997983693-5b41300cf124?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Destination 5",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1533280385001-c32ffcbd52a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHZpZXRuYW0lMjBmcmVlfGVufDB8fDB8fHww", // Replace with your image path
      title: "Destination 6",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1700548155535-f004f755f579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHZpZXRuYW0lMjBmcmVlfGVufDB8fDB8fHww", // Replace with your image path
      title: "Destination 7",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1700548155419-98c87424bbbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHZpZXRuYW0lMjBmcmVlfGVufDB8fDB8fHww", // Replace with your image path
      title: "Destination 8",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1704997983693-5b41300cf124?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Destination 9",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1704997983693-5b41300cf124?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Destination 10",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1704997983693-5b41300cf124?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Destination 11",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1700548159327-69b3b1b24dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHZpZXRuYW0lMjBmcmVlfGVufDB8fDB8fHww", // Replace with your image path
      title: "Destination 12",
    },
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1704997983693-5b41300cf124?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
      title: "Destination 13",
    },
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHZpZXRuYW0lMjBmcmVlfGVufDB8fDB8fHww", // Replace with your image path
      title: "Destination 14",
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1700548160362-687ad6cf0257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHZpZXRuYW0lMjBmcmVlfGVufDB8fDB8fHww", // Replace with your image path
      title: "Destination 15",
    },
  ];

  const trips = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1549221523-a7e676dff376?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dreamy Maldives Honeymoon at Adaaran Club Rannalhi",
      duration: "4N/5D",
      location: "Male",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1588626711118-e7f0b70ce077?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Adaaran Hudhuranfushi Resort, Maldives",
      duration: "5N/6D",
      location: "Male",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1588627123518-51d01930af2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Royal Island Resort, Maldives",
      duration: "5N/6D",
      location: "Male",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1588625874552-68e99243aa81?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Luxury Stay in Maldives",
      duration: "5N/6D",
      location: "Male",
    },
    // Add more trips as needed
  ];


  return (
    <section className="container w-full py-10 px-0">
      <div className="d-flex justify-content-center align-items-center w-100 gap-2">
        {/* Left Side Images */}
        <div className="d-flex flex-column justify-content-between">
          {/* Destination Image */}
          <div className="relative mb-2 w-100 h-[200px] rounded-tl-[30px] rounded-br-[30px] shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://images.pexels.com/photos/18070815/pexels-photo-18070815/free-photo-of-ho-chi-minh-city-at-night.jpeg"
              alt="Vietnam Destination 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary-color)] bg-opacity-80 text-[var(--secondary-color)] text-center py-2">
              Destination
            </div>
          </div>

          {/* Stay Image */}
          <div className="relative w-100 h-[200px] rounded-bl-[30px] rounded-tr-[30px] shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://images.pexels.com/photos/5932468/pexels-photo-5932468.jpeg"
              alt="Vietnam Stay"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary-color)] bg-opacity-80 text-[var(--secondary-color)] text-center py-2">
              Stay
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="mx-2 d-flex justify-content-center">
          <div className="relative w-100 h-[500px] rounded-[60px] shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://images.pexels.com/photos/19981178/pexels-photo-19981178.jpeg"
              alt="Vietnam Center Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary-color)] bg-opacity-80 text-[var(--secondary-color)] text-center py-2">
              All Images
            </div>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="d-flex flex-column justify-content-between">
          {/* Activity Image */}
          <div className="relative mb-2 w-100 h-[200px] rounded-tl-[30px] rounded-br-[30px] shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://images.pexels.com/photos/17327394/pexels-photo-17327394.jpeg"
              alt="Vietnam Activity"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary-color)] bg-opacity-80 text-[var(--secondary-color)] text-center py-2">
              Activity
            </div>
          </div>

          {/* Destination Image 4 */}
          <div className="relative w-100 h-[200px] rounded-bl-[30px] rounded-tr-[30px] shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://images.pexels.com/photos/24771664/pexels-photo-24771664.jpeg"
              alt="Vietnam Destination 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary-color)] bg-opacity-80 text-[var(--secondary-color)] text-center py-2">
              Destination
            </div>
          </div>
        </div>
      </div>

      {/* Tour Package Details Section */}
      <div className="flex flex-col md:flex-row w-full gap-4 mt-10">
        {/* Left Column (Tour Package Details) */}
        <div className="md:w-8/12 w-full">
          <div className="bg-white text-black p-5 rounded-lg shadow-lg">
            <h2 className="text-3xl font-extrabold text-[var(--primary-color)] mb-4 text-left">
              Vietnam Tour Package from Delhi with Bana Hills
            </h2>

            <div className="flex items-center mb-4">
              <i className="fas fa-plane-departure text-[var(--primary-color)] mr-3 text-xl"></i>
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold text-[var(--primary-color)]">
                  Pickup & Drop
                </h4>
                <p className="text-gray-600">Delhi Airport - Delhi Airport</p>
              </div>
            </div>

            <div className="flex items-center">
              <i className="fas fa-clock text-[var(--primary-color)] mr-3 text-xl"></i>
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold text-[var(--primary-color)]">
                  Duration
                </h4>
                <p className="text-gray-600">5N - 6D</p>
              </div>
            </div>
          </div>

          {/* Tab Section */}
          <div className="mt-6">
            <div className="flex justify-around mb-4">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 
                  ${
                    activeTab === "overview"
                      ? "bg-[var(--primary-color)] text-[var(--secondary-color)]"
                      : "bg-white text-gray-700"
                  }
                  shadow-lg hover:shadow-xl`}
              >
                Overview & Highlights
              </button>
              <button
                onClick={() => setActiveTab("itinerary")}
                className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 
                  ${
                    activeTab === "itinerary"
                      ? "bg-[var(--primary-color)] text-[var(--secondary-color)]"
                      : "bg-white text-gray-700"
                  }
                  shadow-lg hover:shadow-xl`}
              >
                Itinerary
              </button>
              <button
                onClick={() => setActiveTab("inclusions")}
                className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 
                  ${
                    activeTab === "inclusions"
                      ? "bg-[var(--primary-color)] text-[var(--secondary-color)]"
                      : "bg-white text-gray-700"
                  }
                  shadow-lg hover:shadow-xl`}
              >
                Inclusions
              </button>
              <button
                onClick={() => setActiveTab("exclusions")}
                className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 
                  ${
                    activeTab === "exclusions"
                      ? "bg-[var(--primary-color)] text-[var(--secondary-color)]"
                      : "bg-white text-gray-700"
                  }
                  shadow-lg hover:shadow-xl`}
              >
                Exclusions
              </button>
              <button
                onClick={() => setActiveTab("otherInfo")}
                className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 
                  ${
                    activeTab === "otherInfo"
                      ? "bg-[var(--primary-color)] text-[var(--secondary-color)]"
                      : "bg-white text-gray-700"
                  }
                  shadow-lg hover:shadow-xl`}
              >
                Other Info
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white p-5 rounded-lg shadow-lg">
              {renderContent()}
            </div>
          </div>
        </div>

        {/* Right Column (Sticky Form) */}
        <div className="md:w-4/12 w-full md:sticky top-10">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">
              Wanderlust Calling? Allow Us to Call You Back!
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
              />
              <button
                type="submit"
                className="bg-[var(--primary-color)] text-white py-2 rounded-lg hover:bg-blue-900 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
  <h2 className="text-left text-3xl font-bold mb-6 text-primary-color">Popular Destinations</h2>
  <div
    id="destinationCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000" // Set the interval for auto sliding (in milliseconds)
    data-bs-pause="hover" // Pause on hover
  >
    <div className="carousel-inner">
      {Array.from({ length: Math.ceil(destinations.length / 4) }).map((_, index) => (
        <div
          key={index}
          className={`carousel-item ${index === 0 ? 'active' : ''}`}
        >
          <div className="flex justify-center">
            {destinations.slice(index * 4, index * 4 + 4).map((dest) => (
              <div className="w-full sm:w-1/2 md:w-1/4 p-2" key={dest.id}>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={dest.image}
                    className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                    alt={dest.name}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  <h5 className="absolute bottom-0 left-0 right-0 text-white text-center text-lg p-2 bg-opacity-50 bg-primary-color">
                    {dest.name}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Duplicate the first slide for seamless transition */}
      <div className="carousel-item">
        <div className="flex justify-center">
          {destinations.slice(0, 4).map((dest) => (
            <div className="w-full sm:w-1/2 md:w-1/4 p-2" key={dest.id}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={dest.image}
                  className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                  alt={dest.name}
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                <h5 className="absolute bottom-0 left-0 right-0 text-white text-center text-lg p-2 bg-opacity-50 bg-primary-color">
                  {dest.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#destinationCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#destinationCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
<div className="container mx-auto py-8">
      <h2 className="text-left text-3xl font-bold mb-6" style={{ color: 'var(--primary-color)' }}>Similar Trips</h2>
      <div
        id="tripsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000" // Set the interval for auto sliding (in milliseconds)
        data-bs-pause="hover" // Pause on hover
      >
        <div className="carousel-inner">
          {Array.from({ length: Math.ceil(trips.length / 4) }).map((_, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="row">
                {trips.slice(index * 4, index * 4 + 4).map((trip) => (
                  <div className="col-md-3 mb-4" key={trip.id}>
                    <div className="card" style={{
                      border: 'none',
                      height: '350px',
                      borderRadius: '0.5rem',
                      overflow: 'hidden',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                      <img
                        src={trip.image}
                        className="card-img-top"
                        alt={trip.title}
                        style={{ height: '200px', objectFit: 'cover', borderRadius: '0.5rem 0.5rem 0 0' }}
                      />
                      <div className="card-body d-flex flex-column justify-content-between" style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '0 0 0.5rem 0.5rem',
                        padding: '1rem',
                      }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>{trip.title}</h5>
                        <p className="mb-1" style={{ color: 'gray' }}>{trip.duration}</p>
                        <p className="mb-0" style={{ color: 'gray' }}>{trip.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* Duplicate the first slide for seamless transition */}
          <div className="carousel-item">
            <div className="row">
              {trips.slice(0, 4).map((trip) => (
                <div className="col-md-3 mb-4" key={trip.id}>
                  <div className="card" style={{
                    border: 'none',
                    height: '350px',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                  }}>
                    <img
                      src={trip.image}
                      className="card-img-top"
                      alt={trip.title}
                      style={{ height: '200px', objectFit: 'cover', borderRadius: '0.5rem 0.5rem 0 0' }}
                    />
                    <div className="card-body d-flex flex-column justify-content-between" style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '0 0 0.5rem 0.5rem',
                      padding: '1rem',
                    }}>
                      <h5 className="font-semibold mb-2" style={{ color: 'var(--primary-color)' }}>{trip.title}</h5>
                      <p className="mb-1" style={{ color: 'gray' }}>{trip.duration}</p>
                      <p className="mb-0" style={{ color: 'gray' }}>{trip.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#tripsCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#tripsCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    </section>
  );
};

export default ItineraryPage;
