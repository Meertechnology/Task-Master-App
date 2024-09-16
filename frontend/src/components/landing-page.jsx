import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleGetStarted = () => {
    navigate('/taskform'); // Navigate to TaskForm page when clicked
  };

  return (
    <div className="landing-page">
      <h1>Welcome</h1>
      <h2>To</h2>
      <h3>
        Task <span>Master</span> App
      </h3>
      <p>A Task Tracker Tool</p>
      <button onClick={handleGetStarted} className="btn btn-primary">
        Get Started
      </button>

      {/* Adding circles purely through CSS */}
      <div className="circle top-left"></div>
      <div className="circle bottom-right large"></div>
      <div className="circle bottom-right medium"></div>
      <div className="circle bottom-right small"></div>
    </div>
  );
};

export default LandingPage;
