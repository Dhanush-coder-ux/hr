import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Animate from "./animate";

// Ken Burns keyframes
const kenBurns = keyframes`
  0% {
    transform: scale(1.1) translate(0, 0);
  }
  100% {
    transform: scale(1.2) translate(-5%, -5%);
  }
`;

// Styled Components
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 60vh;
    width:100%;

  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  z-index: ${(props) => (props.active ? 2 : 1)};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${kenBurns} 10s ease-in-out forwards;
  pointer-events: none;

  @media (max-width: 768px) {
    object-position: center top;
    width:100%;
    height:50%;
    animation:none;
  }

  @media (max-width: 480px) {
    object-position: center center;
    animation:none;
  }
`;


const TitleOverlay = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50px;
  width:80%;
  color: black;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.6);
  z-index: 4;
  font-family: 'Poppins';

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    left: 20px;
    top:25%;
    width:80%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    bottom: 20px;
    left: 15px;
  }
`;

const AnimateWrapper = styled.div`
  position: absolute;
  top: 70%;
  left: 20px;
  z-index: 5;

  @media (max-width: 768px) {
    top: 50%;
    left: 10px;
  }

  @media (max-width: 480px) {
    top: 80%;
    left: 5px;
  }
`;

// Component
const KenBurnsCarousel = ({ slides, interval = 5000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <>
      <AnimateWrapper>
        <Animate />
      </AnimateWrapper>

      <CarouselWrapper>
        {slides.map((slide, index) => (
          <Slide key={index} active={index === current}>
            <>
              <Image src={slide.image} alt={`slide-${index}`} />
              <i><TitleOverlay>“{slide.title}”</TitleOverlay></i>
            </>
          </Slide>
        ))}
      </CarouselWrapper>
    </>
  );
};

export default KenBurnsCarousel;
