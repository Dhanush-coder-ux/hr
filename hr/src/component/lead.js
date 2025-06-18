import React from "react";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";

const Container = styled.div`
  background: url("https://static.vecteezy.com/system/resources/thumbnails/030/462/024/small_2x/futuristic-city-with-a-futuristic-skyline-in-the-background-generative-ai-photo.jpeg") center/cover no-repeat;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
//   min-height: 400px;

`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 700px;
  text-align: center;
  padding:50px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: 'Poppins';


  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  color:white;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
      margin-left: 30%;


  &:hover {
    background-color: #222;
  }

  svg {
    margin-left: 0.75rem;
  }
`;

export default function LeadershipHiringCTA() {
  return (
    <Container>
      <Overlay />
      <Content>
        <Title>Partner with us</Title>
        <Description>
          At Clarionix HR Solutions, our commitment is not just to fill positions but to build future-ready teams that drive long-term business success.
        </Description>
        <Button>
          Get In Touch
          <ArrowRight />
        </Button>
      </Content>
    </Container>
  );
}
