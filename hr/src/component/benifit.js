import React from "react";
import "./Benefits.css"; // Import the CSS file

const benefitsData = [
  {
    title: "Improved candidate quality",
    description: "Results in increased productivity and profitability",
    // icon: "🎯",
  },
  {
    title: "Enhanced employer branding",
    description: "Projects a powerful brand in the competitive market",
    // icon: "🏢",
  },
  {
    title: "Optimized in-house resource utilization",
    description: "Saves recruitment costs",
    // icon: "💰",
  },
  {
    title: "Access to an extensive talent pool",
    description: "Leads to identification of diverse talent",
    // icon: "🌍",
  },
  {
    title: "Enhanced employee engagement",
    description: "Increases productivity and builds brand value",
    // icon: "🤝",
  },
  {
    title: "Access to insightful hiring analytics",
    description: "Assists in providing real-time reports",
    // icon: "📊",
  },
  {
    title: "Assured compliance",
    description: "Formulates necessary guidelines for compliant hiring",
    // icon: "✔️",
  },
];

const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="benefits-image">
        <img src="/images/hiring-benefits.png" alt="Hiring Benefits" />
      </div>
      <div className="benefits-list">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="benefit-card">
            {/* <div className="benefit-icon">{benefit.icon}</div> */}
            <div className="benefit-content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
