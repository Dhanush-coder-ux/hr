
import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FiEye, FiTarget } from "react-icons/fi";
import vision from "./image/vision.webp";
import mission from "./image/mission.webp";

// Custom hook to detect visibility
function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}

// Animation
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const VisionMissionCards = () => {
  const [ref1, visible1] = useInView({ threshold: 0.2 });
  const [ref2, visible2] = useInView({ threshold: 0.2 });

  return (
    <StyledWrapper>
      <div className="container">
        {/* Vision Card */}
        <Card ref={ref1} animate={visible1}>
          <img src={vision} alt="vision" />
          <div className="card__content">
            <FiEye className="icon" />
            <i><p className="card__title">Vision</p></i>
            <p className="card__description">
              At Clarionix HR Solutions, our vision is to become a globally recognized 
              and trusted talent management consultancy, renowned for our unwavering 
              commitment to excellence, integrity, and innovation. We strive to empower 
              businesses with top-tier talent solutions, enabling them to build 
              high-performing teams that drive success.
            </p>
          </div>
        </Card>

        {/* Mission Card */}
        <Card ref={ref2} animate={visible2}>
          <img src={mission} alt="mission" />
          <div className="card__content">
            <FiTarget className="icon" />
            <i><p className="card__title">Mission</p></i>
            <p className="card__description">
              At Clarionix HR Solutions, our mission is to prioritize and fulfill 
              our clients' unique workforce needs with precision, integrity, and excellence. 
              We are dedicated to delivering tailored HR solutions that help businesses 
              attract, develop, and retain top-tier talent, ensuring long-term success and growth.
            </p>
          </div>
        </Card>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(203, 228, 253); 
  padding: 50px 0;


  .container {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

// Styled Card Component with animation
const Card = styled.div`
  position: relative;
  width: 350px;
  height: 320px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
  opacity: 0;
  transform: translateY(40px);

  ${({ animate }) =>
    animate &&
    css`
      animation: ${fadeUp} 0.8s ease forwards;
    `}

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.4s ease-in-out;
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #205781;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  }

  &:hover .card__content {
    opacity: 1;
    transform: translateY(0);
  }

  .icon {
    font-size: 40px;
    margin-bottom: 10px;
    color: white;
  }

  .card__title {
    font-size: 22px;
    font-weight: bold;
    margin: 5px 0;
    font-family: 'Poppins';
    color: white;
  }

  .card__description {
    font-size: 14px;
    margin-top: 10px;
    max-width: 85%;
    line-height: 1.4;
    padding: 5px;
    color: white;
  }
`;

export default VisionMissionCards;
