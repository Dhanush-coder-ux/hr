
import React from "react";
import styled from "styled-components";
import { FaSearch, FaUsers, FaHandshake, FaCheckCircle, FaFileSignature } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #fff;
  // padding: 30px;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #0b0033;
  font-family: 'Poppins';

`;

const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 200px;
  padding: 15px;
  // background: #ffeef5;
  border-radius: 20px;
  position: relative;
  margin: 10px;
  border: 2px solid #1e3a4c;
`;

const IconWrapper = styled.div`
  font-size: 30px;
  color:#1e3a4c;
  margin-bottom: 10px;
`;

const StepText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #0b0033;
`;

const Connector = styled.div`
  width: 50px;
  height: 2px;
  background: #1e3a4c;
  margin: 0 5px;
`;

const steps = [
  { text: "Competitor & Market Analysis – We research industry trends and target competitors to identify the best talent.", icon: <FaSearch /> },
  { text: "Proactive Talent Sourcing – Our team reaches out to high-performing professionals who fit your specific needs.", icon: <FaUsers /> },
  { text: "Personalized Engagement – We connect with candidates discreetly, ensuring confidentiality and a seamless approach.", icon: <FaHandshake /> },
  { text: "Evaluation & Selection – Rigorous screening and assessments ensure only the best candidates move forward.", icon: <FaCheckCircle /> },
  { text: "Offer Negotiation & Onboarding – We facilitate smooth hiring, handling negotiations and onboarding support.", icon: <FaFileSignature /> },
];

export default function HeadhuntingProcess() {
  return (
    <Container>
      <Title>Our Headhunting Process</Title>
      <StepsContainer>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Step>
              <IconWrapper>{step.icon}</IconWrapper>
              <StepText>{step.text}</StepText>
            </Step>
            {index < steps.length - 1 && <Connector />}
          </React.Fragment>
        ))}
      </StepsContainer>
    </Container>
  );
}
