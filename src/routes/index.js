// src/routes/Routing.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicy from '../components/PrivacyPolicy';

const Routing = () => {
  return (
    <Routes>
      <Route path="/privacypolicy" element={<PrivacyPolicy />} /> {/* Route to Privacy Policy page */}
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default Routing;
