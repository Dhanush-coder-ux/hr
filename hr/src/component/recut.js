import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: #f5f8fc;
`;

const ContentBox = styled.div`
  background: #1e3a68;
  color: white;
  padding: 2.5rem;
  border-radius: 15px;
  max-width: 500px;
  position: relative;
  z-index: 3;
  margin-top:180px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  border-top-right-radius:50px;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  font-family: 'Poppins';

  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    color:white;
  }

  a {
    color: #ffd700;
    text-decoration: none;
    font-weight: bold;
  }
`;



const ImageWrapper = styled.div`
  position: relative;
  margin-left: -60px; /* Overlapping effect */

  .background-box {
    width: 100%;
    height: 450px;
    background-color: #a3c7c7;
    border-radius: 15px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 0;
  }

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 15px;
    position: relative;
    z-index: 1;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ServicesSection = () => {
  return (
    <Section>
      <ContentBox>
        <h2>Our Services</h2>
        <p>
       Recruitment Process Outsourcing (RPO) allows businesses to outsource part or all of their hiring to expert providers. RPO acts as an extension of your HR team, handling sourcing, screening, and onboarding efficiently. It helps companies find top talent faster, reduce hiring costs, and improve recruitment quality. With scalable and flexible solutions, RPO adapts to your hiring needs, whether for growth or seasonal demands. Partnering with Clarionix HR Solutions ensures a streamlined, cost-effective, and high-quality hiring process.
     </p>
      </ContentBox>

      <ImageWrapper>
        <div className="background-box"></div>
        <img src="https://img.freepik.com/free-vector/recruiting-agents-studying-candidate-profiles_1262-21403.jpg?t=st=1741236402~exp=1741240002~hmac=295cf1d59d4fdc7897f4cbdc6497d126adfbb1b8887d3f171334652fb5460aa2&w=1380" alt="Team collaboration" />
      </ImageWrapper>
    </Section>
  );
};

export default ServicesSection;
