import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem;
  background-color: #f5f8fc ;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 45rem;
  display: flex;
  justify-content: center;
`;

const MainImage = styled.div`
  width: 17rem;
  height: 17rem;
  background: gray;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SmallCircle = styled.div`
  position: absolute;
  width: ${(props) => props.size || "4rem"};
  height: ${(props) => props.size || "4rem"};
  background: ${(props) => props.bg || "white"};
  border-radius: 50%;
  box-shadow: ${(props) => (props.shadow ? "0px 4px 6px rgba(0,0,0,0.1)" : "none")};
  overflow: hidden;
  top: ${(props) => props.top || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  font-family: 'Poppins';

`;

const Text = styled.p`
  color: gray;
  margin-top: 0.5rem;
  max-width: 30rem;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  background: black;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
`;

const EngineeringCompany = () => {
  return (
    <Container>
      <ImageWrapper>
        <MainImage>
          <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/977eb40f30105e6f863ffd1f/-min.jpg" alt="Main" />
        </MainImage>
        <SmallCircle size="7rem" bg="blue" top="0" left="15px" />
        <SmallCircle size="11rem" shadow bottom="2.5rem" left="1.25rem">
          <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/99060715fe2d5fb49126589a/rtttt.jpg?version=" alt="Team" />
        </SmallCircle>
        <SmallCircle size="10rem" shadow bottom="0" right="1.25rem">
          <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/958f80d603ea594c815d1462/727-min.jpg?version=" alt="Engineer" />
        </SmallCircle>
      </ImageWrapper>
      <Title>What is Permanent Staffing?</Title>
      <Text>
      Permanent Staffing focuses on hiring long-term employees who grow with your company and contribute to its success. Unlike temporary workers, they become an integral part of your team, enhancing stability and productivity.       </Text>
      <Text>
      At Clarionix HR Solutions, we go beyond skills—we find candidates who align with your company’s culture, values, and goals.      </Text>
      <Button>CONTACT US</Button>
    </Container>
  );
};

export default EngineeringCompany;
