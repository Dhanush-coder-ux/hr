import React from "react";
import styled from "styled-components";
import retail from "./image/Retail.png"

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
  background: url(${retail}) 
              center/cover no-repeat;
  background-blend-mode: overlay;
  overflow: hidden;
`;

// Title Styling
const Title = styled.h1`
  font-size: 3.3rem;
  font-weight: bold;
  width: 83%;
  margin-bottom: 4%;
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
  margin-bottom: 10%;
  font-weight:bold;

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

const RetailIndustry = () => {
  return (
    <>
      {/* Hero Section with Wave Effect */}
      <HeroSection>
        <Title>
          <i>Retail Industry - Building High-Performing Retail Teams with Targeted Hiring</i>
        </Title>
        <Subtitle>
          ("Creating dynamic retail teams to enhance customer experience and sales performance.")
        </Subtitle>

        {/* SVG Wave Effect */}
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", bottom: "-150px", left: 0, width: "100%" }}>
          <path fill="#fff" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,165.3C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </HeroSection>

      {/* Content Section */}
      <ContentSection>
        <ContentTitle>The Retail Industry & Strategic Hiring</ContentTitle>
        <ContentText>
          Retail businesses thrive on customer experience, supply chain efficiency, and sales performance. 
          From store managers to digital marketing specialists, having the right people is essential. 
          Clarionix HR Solutions offers retail recruitment solutions to help businesses build strong, 
          customer-focused teams, ensuring sustained growth and brand success.
        </ContentText>
      </ContentSection>
    </>
  );
};

export default RetailIndustry;