import React from "react";
import "./HRSection.css"; // Import CSS file
import jj from "./image/jj.jpg"

const HRSection = () => {
  return (
    <div className="hr-container">
      <div className="hr-content">
        <h2>Structured, Data-Driven & Client-Centric</h2>
        <p>
          At <strong>Clarionix HR Solutions</strong>, we ensure seamless talent
          acquisition and workforce management through a structured, data-driven
          approach. Our methodology identifies, attracts, and onboards the best
          talent efficiently.
        </p>
      </div>

      <div className="hr-image">
        <img
          src={jj}
          alt="HR Solutions"
        />
      </div>
    </div>
  );
};

export default HRSection;
