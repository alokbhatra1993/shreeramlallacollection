import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import TopBar from './components/Topbar';
import Sliderhome from './components/Sliderhome';
import ExploreIndia from './components/ExploreIndia';
import Internatinaldestination from './components/Internationaldestination';
import Romanticescape from './components/Romanticescape';
import Visaonarrival from './components/Visaonarrival';
import Whychooseus from './components/Whychooseus';
import HolidaysByTheme from './components/HolidaysByTheme';
import Testimonial from './components/Testimonial';
import TravelCategoriesSection from './components/TravelCategoriesSection';
import CallToAction from './components/CallToAction';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import Brand from './components/Brand';
import Login from './components/Login'; // Import your Login component
import TourPackage from './components/TourPackage'; // Import your TourPackage component
import Itinerary from './components/Itinerary';
// import SignUp from './components/SignUp'; // Import your SignUp component if you have it

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Navbar />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={
            <>
              <Sliderhome />
              <ExploreIndia />
              <Internatinaldestination />
              <Romanticescape />
              <Visaonarrival />
              <Whychooseus />
              <HolidaysByTheme />
              <Testimonial />
              <TravelCategoriesSection />
              <CallToAction />
              <GetInTouch />
    
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/tourpackage" element={
            <>
              <TourPackage />
              <Footer />  {/* Footer added here */}
            </>
          } />
           <Route path="/itinerary" element={
            <>
              <Itinerary />
              <Footer />  {/* Footer added here */}
            </>
          } />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
