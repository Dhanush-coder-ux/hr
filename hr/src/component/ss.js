
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Container } from "react-bootstrap";

// Hook to detect in-view
function useInView(threshold = 0.2) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

// Animations
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
`;

const fadeRight = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
`;

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const rotateIn = keyframes`
  from { opacity: 0; transform: rotate(-10deg) scale(0.8); }
  to { opacity: 1; transform: rotate(0) scale(1); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1; transform: translateY(0); }
`;

const animationMap = {
  fadeUp,
  fadeLeft,
  fadeRight,
  zoomIn,
  rotateIn,
  slideUp,
};

// Styled Components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 30px;
  width: 80%;
  margin-left: 7%;
  



  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled.div`
  border-radius: 12px;
    height: 300px; /* Set your desired height */

  padding: 20px;
  background: ${({ bgImage }) => `url(${bgImage}) center/cover no-repeat`};
  color: #f0f0f0;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  display: flex;
  flex-direction: column;
  align-items: center;



  ${({ animate, animType }) =>
    animate &&
    css`
      animation: ${animationMap[animType]} 0.8s ease forwards;
    `}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Darker overlay for better contrast */
    z-index: 0;
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  padding:10px
`;

const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.4;
  padding: 0 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    color: #f0f0f0;

`;

// Service Card Component
const ServiceCard = ({ imgSrc, title, description, animType, bgImage }) => {
  const [ref, inView] = useInView();

  return (
    <StyledCard ref={ref} animate={inView} animType={animType} bgImage={bgImage}>
      <IconWrapper>
        <img src={imgSrc} alt={title} />
      </IconWrapper>
      <i><Title>{title}</Title></i>
      <Description>{description}</Description>
    </StyledCard>
  );
};

// Data
const services = [
  {
    imgSrc: "https://img.icons8.com/color/48/resume.png",
    title: "Job Description (JD) Creation",
    description:
      "We craft precise and compelling JDs to attract the right talent, ensuring role clarity and better hiring outcomes.",
    animType: "fadeUp",
    bgImage:
      "https://images.unsplash.com/photo-1688646545293-2755ea04cd8e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    imgSrc: "https://img.icons8.com/color/48/agreement.png",
    title: "Drafting Working Terms",
    description:
      "Legally sound agreements that set clear expectations and maintain workplace harmony.",
    animType: "fadeLeft",
    bgImage:
      "https://images.unsplash.com/photo-1725181212976-69a13b9b64fe?q=80&w=2080&auto=format&fit=crop",
  },
  {
    imgSrc: "https://img.icons8.com/color/48/documents.png",
    title: "HR Document Management",
    description:
      "Compliant and organized record-keeping to streamline employee data and audits.",
    animType: "fadeRight",
    bgImage:
      "https://images.unsplash.com/photo-1630561535290-24c621d6b463?q=80&w=2070&auto=format&fit=crop",
  },
  {
    imgSrc: "https://img.icons8.com/color/48/conference.png",
    title: "Recruitment Strategies",
    description:
      "End-to-end hiring solutions for sourcing, assessing, and onboarding top talent.",
    animType: "zoomIn",
    bgImage:
      "https://images.unsplash.com/photo-1714974528833-a10e19a8f951?q=80&w=1932&auto=format&fit=crop",
  },
  {
    imgSrc: "https://img.icons8.com/color/48/task-completed.png",
    title: "Onboarding Advisory",
    description:
      "Smooth onboarding processes to help new hires integrate and boost productivity.",
    animType: "rotateIn",
    bgImage:
      "https://images.unsplash.com/photo-1613270335451-ffdf379db831?q=80&w=2070&auto=format&fit=crop",
  },
  {
    imgSrc: "https://img.icons8.com/color/48/sent.png",
    title: "Offer Letter Drafting",
    description:
      "Professionally crafted offer letters that boost credibility and candidate trust.",
    animType: "slideUp",
    bgImage:
      "https://images.unsplash.com/photo-1650978813673-df28319b04f5?q=80&w=2070&auto=format&fit=crop",
  },
];

// Main Component
const Services = () => {
  return (
    <Container>
      <GridContainer>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            imgSrc={service.imgSrc}
            title={service.title}
            description={service.description}
            animType={service.animType}
            bgImage={service.bgImage}
          />
        ))}
      </GridContainer>
    </Container>
  );
};

export default Services;
