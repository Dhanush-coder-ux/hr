

import React, { useState } from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import bg from "./image/Header-LAL18.png";
import bg1 from "./image/Header-LAL12.png";
import bg2 from "./image/Header-LAL10.png";
import bg3 from "./image/Header-LAL15.png";
import bg4 from "./image/Header-LAL17.png";
import bg5 from "./image/Header-LAL19.png";

import KenBurnsCarousel from './KenBurnsSlideshow';






const WhatsappButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25d366;
  color: white;
  padding: 15px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;

  &:hover {
    background: #1ebe5d;
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 23px;
    padding: 12px;
    font-size: 20px;
  }
`;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  background: linear-gradient(135deg, #3c6382, #5a7e9e);
  padding: 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    border: 2px solid #00c6ff;
  }
     @media (max-width: 768px) {
    gap:20px;
    margin: -10px 0;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Arrow = styled.div`
  font-size: 20px;
`;
const Divider = styled.div`
 @media (max-width: 768px) {
   height:450px !important;
  }

`

const slides = [
  {
    image: bg,
    title: "Expert Talent Sourcing for AI, Automation & Industry Leaders",
  },
  {
    image: bg1,
    title: "Where Talent Meets Opportunity.",
  },
  {
    image: bg2,
    title: "Shaping Futures, One Hire at a Time.",

  },
  {
    image: bg3,
    title: "Find. Hire. Grow. Succeed.",

  },
  {
    image: bg4,
    title: "Driven by People, Defined by Talent.",

  },
  {
    image: bg5,
    title: "Your Growth, Our Mission.",

  },
 
];

const HeroSection = () => {

  return (
    <>
      {/* Carousel */}
      <Divider>
  <KenBurnsCarousel slides={slides} />
</Divider>


      {/* WhatsApp Floating Button */}
<WhatsappButton
  href="https://wa.me/919597351243"
  target="_blank"
  aria-label="Chat with us on WhatsApp"
>
  <FaWhatsapp />
</WhatsappButton>


    
    </>
  );
};
export default HeroSection;