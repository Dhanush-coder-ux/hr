
import React from "react";
import styled from "styled-components";

// Hero Section Styling with Dark Overlay
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
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') 
              center/cover no-repeat;
  overflow: hidden;
`;

// Title Styling with Higher Contrast
const Title = styled.h1`
  font-size: 3.3rem;
  font-weight: bold;
  width: 83%;
  margin-bottom: 10px;
  font-family: 'Poppins';
  text-align: center;
  color: #ffffff; // Pure white for best contrast

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

// Subtitle Styling with Brighter Text
const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #f8f8f8; // Brighter off-white for better contrast
  font-family: 'Poppins';
  text-align: center;

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
  font-family: 'Poppins';
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

const ITIndustry = () => {
  return (
    <>
      {/* Hero Section with Wave Effect */}
      <HeroSection>
        <Title>
          <i>Information Technology (IT) Industry - Transforming IT Recruitment with Smarter Hiring Solutions</i>
        </Title>
        <Subtitle>
          Partner with us to find top IT talent, enhance employee satisfaction, and build a skilled, future-ready workforce.
        </Subtitle>

        {/* SVG Wave Effect */}
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", bottom: "-150px", left: 0, width: "100%" }}>
          <path fill="#fff" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,165.3C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </HeroSection>

      {/* Content Section */}
      <ContentSection>
        <ContentTitle>The IT Industry & Smart Hiring</ContentTitle>
        <ContentText>
          The IT industry is the backbone of modern business, driving digital transformation and innovation. 
          Companies rely on skilled professionals for software development, AI, cybersecurity, and data management. 
          However, the fast-paced nature of technology makes hiring the right talent a challenge. 
          Clarionix HR Solutions helps businesses build high-performing IT teams by sourcing and recruiting 
          top-tier professionals, ensuring your company stays ahead in the digital era.
        </ContentText>
      </ContentSection>
    </>
  );
};

export default ITIndustry;

