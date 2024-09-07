import React from "react";
import './index.css';
// import HomePage from "../pages/HomePage";

function Header() {
  return (
    <div className="landing-page">
      <div className="content">
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
