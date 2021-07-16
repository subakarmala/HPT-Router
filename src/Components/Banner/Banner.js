import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="profileInfo">
        <p>Good Morning !!!</p>
        <h2>Aayansh</h2>
        <p>10:34 AM Monday, September 18, 2020</p>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Banner;
