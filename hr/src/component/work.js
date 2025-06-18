
import React from "react";
import "./WorkProcess.css";
import { FaUsers, FaSearch, FaCheckCircle, FaUserPlus, FaSync } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Understanding Your Needs",
    icon: <FaUsers className="icon" />,
    description: "We analyze your hiring requirements, business goals, and company culture to find the perfect fit."
  },
  {
    id: 2,
    title: "Candidate Sourcing",
    icon: <FaSearch className="icon" />,
    description: "Using advanced tools and networks, we identify and connect with top talent efficiently."
  },
  {
    id: 3,
    title: "Screening & Interviewing",
    icon: <FaCheckCircle className="icon" />,
    description: "We handle initial assessments and interviews, ensuring only the best candidates reach you."
  },
  {
    id: 4,
    title: "Offer & Onboarding",
    icon: <FaUserPlus className="icon" />,
    description: "From job offers to onboarding, we ensure a smooth transition for new hires."
  },
  {
    id: 5,
    title: "Continuous Improvement",
    icon: <FaSync className="icon" />,
    description: "We refine hiring strategies to enhance results and optimize future recruitment."
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export default function WorkingProcess() {
  return (
    <section className="process-container">
      <h2 className="section-title">Work Process</h2>
      <h1 className="section-heading">Our Working Process</h1>
      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`step ${step.id % 2 === 0 ? "reverse" : ""}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <div className="icon-container">
              <div className="step-number">{step.id}</div>
              {step.icon}
            </div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
