import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routingo

const LandingPage = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleGetStarted = () => {
    navigate('/taskform'); // Navigate to TaskForm page when clicked
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Task Master App</h1>
      <p> <i> A Task Tracker Tool</i></p>
      <button onClick={handleGetStarted} className="btn btn-primary">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
