import React from "react";
import './index.css'; // Ensure your CSS is imported correctly


function Header() {
  return (
    <div className="landing-page">
      <div className="content">
        <img src="src/pages/back.webp" alt="Task Master App" className="landing-image" />
        <h1>Welcome</h1>
        <h2>To</h2>
        <h3>
          Task <span>Master</span> App
        </h3>
        <p>A Task Tracker Tool</p>
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
}

export default Header;
