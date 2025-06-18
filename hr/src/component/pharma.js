import React from "react";
import styled from "styled-components";
import pharma from "./image/Pharmaceutical.png";

// Hero Section Styling
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: white;
  padding: 20px;
  position: relative;
  background: url(${pharma})center/cover no-repeat;
  background-blend-mode: overlay;
  overflow: hidden;
`;

// Title Styling
const Title = styled.h1`
  font-size: 3.3rem;
  font-weight: bold;
  width: 83%;
  margin-bottom: 3%;
  font-family: 'Poppins';

  text-align: center;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

// Subtitle Styling
const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  font-family: "Syne", sans-serif;
  text-align: center;
  margin-bottom:10%;
  
  font-weight: bold;


  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Content Section Styling
const ContentSection = styled.div`
  background: white;
  color: #333;
  padding: 11px 20px;
  text-align: center;
`;

// Content Title Styling
const ContentTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: "Trebuchet MS", sans-serif;
  color: #222;
`;

// Content Text Styling
const ContentText = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: #555;
`;

const Pharmaceutical = () => {
  return (
    <>
      {/* Hero Section with Wave Effect */}
      <HeroSection>
        <Title>
          <i>Pharmaceutical Industry - Empowering Pharma Teams with Specialized HR Expertise</i>
        </Title>
        <Subtitle>
          ("Connecting pharmaceutical companies with skilled professionals to drive innovation and compliance.")
        </Subtitle>

        {/* SVG Wave Effect */}
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", bottom: "-150px", left: 0, width: "100%" }}>
          <path fill="#fff" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,165.3C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </HeroSection>

      {/* Content Section */}
      <ContentSection>
        <ContentTitle>The Pharmaceutical Industry & Specialized Hiring</ContentTitle>
        <ContentText>
          The pharma industry plays a crucial role in healthcare, driving advancements in drug discovery, research, and patient care. 
          However, finding professionals with specialized skills in R&D, regulatory affairs, and quality control can be difficult. 
          Clarionix HR Solutions bridges this gap by connecting pharma companies with top-tier scientists, researchers, and industry experts, 
          ensuring compliance, innovation, and operational excellence.
        </ContentText>
      </ContentSection>
    </>
  );
};

export default Pharmaceutical;
