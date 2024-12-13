import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assuming this is your landing page
import SurveyView from "./pages/SurveyView"; // Page where SurveyBuilder will be rendered
import SurveyBuilder from "./components/SurveyBuilder"; // Import the SurveyBuilder component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> // Route for Home page
        <Route path="/survey" element={<SurveyView />} /> // Route for SurveyView page
        <Route path="/create-survey" element={<SurveyBuilder />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
