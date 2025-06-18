import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageSection = styled.div`
  flex: 1;

  img {
      width: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    height: 64vh !important;
  }
`;

const ContentSection = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-family: 'Poppins';

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
`;

const HRConsultancy = () => {
  return (
    <Container>
      <ImageSection>
        <img
          src="https://img.freepik.com/free-photo/business-people-meeting-around-table-discussing-data_9975-23045.jpg?semt=ais_hybrid"
          alt="HR Consultancy Team"
        />
      </ImageSection>
      <ContentSection>
        <Title>The Leading HR Consultancy in India</Title>
        <Description>
          At Clarionix HR Solutions, we are committed to delivering innovative and 
          specialized HR services tailored to the evolving needs of businesses. 
          As one of the leading HR consultancies in Bangalore, India, we provide 
          cutting-edge recruitment outsourcing solutions to help organizations 
          build high-performing teams.
          <br />
          Our core expertise lies in sourcing top-tier talent in specialized 
          domains such as Computer Vision, Machine Learning, Deep Learning, 
          Automation, and other core development fields.
          <br />
          At Clarionix HR Solutions, we understand that every business is unique. 
          That’s why our tailored HR solutions ensure companies can focus on 
          growth while we handle the hiring process.
        </Description>
      </ContentSection>
    </Container>
  );
};

export default HRConsultancy;
