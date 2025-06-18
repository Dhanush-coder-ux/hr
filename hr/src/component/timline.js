
import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import re from "./image/recruitment.png";
import ex from "./image/ceo.png";
import wr from "./image/cooperation.png";
import hrm from "./image/hrm.png";
import hr from "./image/policy.png";

// 👇 Data
const services = [
  {
    icon: re,
    title: "Recruitment and Talent Acquisition",
    text: "Efficiently sourcing, screening, and hiring the best talent to meet organisational needs and drive growth in Bangalore's competitive market.",
    position: "left",
  },
  {
    icon: wr,
    title: "Workforce Headcount Planning",
    text: "Our staffing agency is seamlessly integrated into your business culture and operations, resulting in a smooth recruitment process and maximum productivity.",
    position: "right",
  },
  {
    icon: ex,
    title: "Executive Search",
    text: "Specialized C-suite and leadership hiring to connect your business with high-caliber executives who drive success.",
    position: "left",
  },
  {
    icon: hrm,
    title: "HRM Services",
    text: "We streamline Human Resource Management (HRM) by optimizing policies, processes, and workforce strategies to enhance business efficiency.",
    position: "right",
  },
  {
    icon: hr,
    title: "HR Policy Creation",
    text: "Tailored HR policies that align with your company culture, ensuring compliance, clarity, and employee engagement.",
    position: "left",
  },
];

// 👇 Animations
const fadeInUpLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
`;

const fadeInUpRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
`;

const bounceIn = keyframes`
  0% { transform: translateY(-50%) scale(0.5); opacity: 0; }
  60% { transform: translateY(-50%) scale(1.1); opacity: 1; }
  80% { transform: translateY(-50%) scale(0.95); }
  100% { transform: translateY(-50%) scale(1); }
`;

// 👇 Custom Hook
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
}

// 👇 Styled Components
const TimelineContainer = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  padding: 50px 0;
font-family: 'Poppins';
 

`;

const TimelineWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: auto;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background: #2980b9;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
`;

const ContainerBox = styled.div`
  position: relative;
  background: #fff;
  border-radius: 10px;
  width: 45%;
  padding: 20px;
  margin: 40px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  ${({ position }) => (position === "right" ? "left: 55%;" : "left: -5%;")}
  opacity: ${({ animate }) => (animate ? 1 : 0)};
  transition: transform 0.3s ease;

  background-color: #f5f7fa;
  font-family: 'Poppins';

  ${({ animate, position }) =>
    animate &&
    css`
      animation: ${position === "right" ? fadeInUpRight : fadeInUpLeft} 0.8s ease-out;
    `};

  &:hover {
    transform: scale(1.03);
  }
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  animation: ${bounceIn} 1s ease-out;
  ${({ position }) => (position === "right" ? "left: 15%;" : "right: 15%;")}
`;

const Circle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 4px solid #2980b9;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  z-index: 1;
  ${({ position }) => (position === "right" ? "left: -53px;" : "right: -53px;")}
`;

// 👇 New Font Styled Components
const Title = styled.h2`
  font-size: 1.6rem;
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: 'Poppins';

  
`;
const Heading = styled.h1`
  color: black;
  font-size: 2.2rem;
  font-weight: bold;
  font-family: 'Poppins';

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 20px;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  font-family: 'Poppins';

`;

// 👇 Single Timeline Item Component
function TimelineItem({ icon, title, text, position }) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <Icon src={icon} alt={title} position={position} />
      <ContainerBox
        key={isInView}
        position={position}
        animate={isInView}
      >
        <Circle position={position} />
      <Title>{title}</Title>
        <Text>{text}</Text>
      </ContainerBox>
    </div>
  );
}

// 👇 Main Timeline Component
export default function Timeline() {
  return (
    <TimelineContainer>
       <Heading>Why Reach Out To HR Consultancy Services</Heading>
      <TimelineWrapper>
        {services.map((service, index) => (
          <TimelineItem
            key={index}
            icon={service.icon}
            title={service.title}
            text={service.text}
            position={service.position}
          />
        ))}
      </TimelineWrapper>
    </TimelineContainer>
  );
}
