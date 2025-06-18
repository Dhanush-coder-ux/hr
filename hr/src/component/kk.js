
import { useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for background moving from right to left
const moveBg = keyframes`
  from {
    background-position: 100% center;
  }
  to {
    background-position: 0% center;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px;
`;

const Card = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.bg}) no-repeat;
    background-size: cover;
    background-position: 100% center; /* Starts from the right */
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 0;
  }

  &:hover .background {
    opacity: 1;
    animation: ${moveBg} 3s linear forwards; /* Moves background slowly */
  }

  .content {
    position: relative;
    z-index: 1;
    text-align: center;
    transition: color 0.3s ease-in-out;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #333;
    transition: color 0.3s ease-in-out;
  font-family: 'Poppins';

  }

  p {
    font-size: 0.95rem;
    color: #555;
    transition: color 0.3s ease-in-out;
  }

  &:hover h3,
  &:hover p {
    color: #fff;
  }

  .learn-more {
    display: inline-block;
    margin-top: 15px;
    background: ${(props) => (props.isHovered ? "rgba(255, 255, 255, 0.3)" : "#2da5f3")};
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => (props.isHovered ? "#fff" : "#fff")};
    transition: background 0.3s ease-in-out;
    
    &:hover {
      background: rgba(255, 255, 255, 0.6);
    }
  }
`;

const features = [
  {
    bgImage: "https://html.themexriver.com/consulting/assets/images/news/1.jpg",
    icon: "assets/images/icon/f4.png",
    title: "Advanced Analytics",
    description: "Strategy experience and analytical expertise combine to enable decision making",
  },
  {
    bgImage: "assets/images/news/finance-bg2.jpg",
    icon: "assets/images/icon/f5.png",
    title: "Corporate Finance",
    description: "Linking corporate strategy, financial strategy, transactions, and capital markets",
  },
  {
    bgImage: "assets/images/news/finance-bg3.jpg",
    icon: "assets/images/icon/f6.png",
    title: "Information Technology",
    description: "A cross-functional effort to alter the financial, operational, and strategic trajectory",
  },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <CardContainer>
      {features.map((feature, index) => (
        <Card
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          bg={feature.bgImage}
        >
          <div className="background"></div>
          <div className="content">
            <img src={feature.icon} alt={feature.title} className="icon" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#" className="learn-more">LEARN MORE</a>
          </div>
        </Card>
      ))}
    </CardContainer>
  );
}
