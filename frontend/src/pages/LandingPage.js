import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import backgroundImage from './LandPageimg.png'; // Import the image

const LandingPage = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleGetStarted = () => {
    navigate('/taskform'); // Navigate to TaskForm page when clicked
  };

  // Inline styles
  const pageStyles = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f2f7fd', // Light background color
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const textStyles = {
    margin: '0',
    padding: '0',
  };

  const buttonStyles = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const circleStyles = {
    position: 'absolute',
    borderRadius: '50%',
    zIndex: '-1',
  };

  const topLeftCircle = {
    ...circleStyles,
    width: '400px',
    height: '400px',
    top: '-150px',
    left: '-150px',
    backgroundColor: '#2979ff',
  };

  const largeCircle = {
    ...circleStyles,
    width: '600px',
    height: '600px',
    bottom: '-200px',
    right: '-200px',
    backgroundColor: '#2979ff',
  };

  const mediumCircle = {
    ...circleStyles,
    width: '400px',
    height: '400px',
    bottom: '-100px',
    right: '-100px',
    backgroundColor: '#3d91ff',
  };

  const smallCircle = {
    ...circleStyles,
    width: '200px',
    height: '200px',
    bottom: '-50px',
    right: '-50px',
    backgroundColor: '#5aa8ff',
  };

  return (
    <div style={pageStyles}>
      <h1 style={textStyles}>Welcome</h1>
      <h2 style={textStyles}>To</h2>
      <h3 style={textStyles}>
        Task <span style={{ color: '#007bff' }}>Master App</span>
      </h3>
      <br></br>
      <p>A Task Tracker Tool</p>
      <br></br>
      <button 
        onClick={handleGetStarted} 
        style={buttonStyles}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Get Started
      </button>

      {/* Circles */}
      <div style={topLeftCircle}></div>
      <div style={largeCircle}></div>
      <div style={mediumCircle}></div>
      <div style={smallCircle}></div>
    </div>
  );
};

export default LandingPage;
