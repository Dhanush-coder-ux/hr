import React, { useState } from "react";
import "./IndustryDropdown.css";

const industries = [
  { name: "Information Technology", color: "#3498db", content: "IT Industry Content" },
  { name: "Pharmaceutical", color: "#2ecc71", content: "Pharma Industry Content" },
  { name: "Health Care", color: "#e74c3c", content: "Healthcare Content" },
  { name: "Finance and Banking", color: "#f39c12", content: "Finance Content" },
  { name: "Engineering and R&D", color: "#9b59b6", content: "Engineering Content" },
  { name: "Manufacturing", color: "#1abc9c", content: "Manufacturing Content" }
];

const IndustryDropdown = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <div className="container" style={{ backgroundColor: selectedIndustry.color }}>
      <nav className="navbar">
        <ul className="menu">
          <li className="dropdown">
            <button className="dropbtn">Industry</button>
            <ul className="dropdown-content">
              {industries.map((industry, index) => (
                <li key={index} onClick={() => setSelectedIndustry(industry)}>
                  {industry.name}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      
      <div className="content">
        <h2>{selectedIndustry.name}</h2>
        <p>{selectedIndustry.content}</p>
      </div>
    </div>
  );
};

export default IndustryDropdown;