import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background: #fff;
  position: relative;
`;

const Content = styled.div`
  max-width: 500px;
  text-align: left;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #1e3a4c;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const Button = styled.button`
  background: #1e3a4c;
  color: white;
  font-size: 16px;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: 0.3s;

  &:hover {
    background: #d97910;
  }
`;

const ImagesWrapper = styled.div`
  position: relative;
  margin-left: 60px;
`;

const MainImage = styled.img`
  width: 350px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const OverlayImage = styled.img`
  width: 220px;
  height: auto;
  position: absolute;
  bottom: -40px;
  right: -40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const BackgroundCircle = styled.div`
  width: 90px;
  height: 90px;
  background: #1e3a4c;
  border-radius: 50%;
  position: absolute;
  top: -40px;
  left: -50px;
  z-index: 0;
`;

const StrategicTalentSection = () => {
  return (
    <Section>
      <Content>
        <Title>Head Hunting or Executive search Service</Title>
        <Description>
          Finding the right talent for critical roles requires a strategic
          approach. At <strong>Clarionix HR Solutions</strong>, we specialize in
          identifying, attracting, and securing top-tier professionals who
          align with your business goals.
        </Description>
        <Button>Contact Us</Button>
      </Content>
      <ImagesWrapper>
        <BackgroundCircle />
        <MainImage src="https://assets.nicepagecdn.com/d2cc3eaa/429503/images/65876788.jpg" alt="Teamwork" />
        <OverlayImage src="https://assets.nicepagecdn.com/d2cc3eaa/429503/images/ewq3.jpg" alt="Happy Employee" />
      </ImagesWrapper>
    </Section>
  );
};

export default StrategicTalentSection;
