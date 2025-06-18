
import React from "react";
import styled from "styled-components";
import { FaUserCheck, FaChartLine, FaUserTie, FaCogs } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f4f4f4;
  padding: 50px;
  position: relative;
  height: 600px;
`;

const CenterCircle = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 12px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #ff7f00, transparent, #ffbe00, transparent, #0084ff, transparent, #d63384, transparent, #008080);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const Card = styled.div`
  width: 260px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.div`
  position: absolute;
  top: -15px;
  left: -15px;
  background: ${(props) => props.color};
  color: white;
  padding: 12px 15px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 30px;
  font-size: 16px;
  font-weight: bold;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
  font-weight: bold;
      font-family: 'Poppins';

`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

const IconWrapper = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  color: #333;
`;

const ProcessFlow = () => {
  return (
    <Container>
      <CenterCircle>
        <span>
          Recruitment & Talent Acquisition
        </span>
      </CenterCircle>
      
      <Card style={{ top: "10%", left: "25%" }}>
        <Number color="#0084ff">01</Number>
        <IconWrapper><FaUserCheck /></IconWrapper>
        <Title>Efficient Hiring</Title>
        <Description>Efficiently sourcing, screening, and hiring the best talent to meet organizational needs and drive growth.</Description>
      </Card>
      
      <Card style={{ top: "10%", right: "25%" }}>
        <Number color="#d63384" style={{left:"86%"}}>02</Number>
        <IconWrapper><FaChartLine /></IconWrapper>
        <Title>Workforce Planning</Title>
        <Description>Data-driven headcount analysis to optimize staffing, budget, and operational efficiency.</Description>
      </Card>
      
      <Card style={{ bottom: "10%", left: "25%" }}>
        <Number color="#ffbe00">03</Number>
        <IconWrapper><FaUserTie /></IconWrapper>
        <Title>Executive Search</Title>
        <Description>Specialized C-suite and leadership hiring to connect businesses with high-caliber executives.</Description>
      </Card>
      
      <Card style={{ bottom: "10%", right: "25%" }}>
        <Number color="#008080" style={{left:"86%"}}>04</Number>
        <IconWrapper><FaCogs /></IconWrapper>
        <Title>HRM Services</Title>
        <Description>Streamlining HRM by optimizing policies, processes, and workforce strategies to enhance business efficiency.</Description>
      </Card>
    </Container>
  );
};

export default ProcessFlow;
