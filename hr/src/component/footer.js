
import React, { useEffect } from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  padding: 60px 20px 30px;
  background: radial-gradient(circle at top left, #1e3a4c, #2c5364, #a0c4ff);
  color: #f8f8f8;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  text-align: left;
  padding: 40px 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Column = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 15px;
   font-family: 'Poppins';
    color:Black;
  }

  p,
  a {
    font-size: 1.2rem;
 color:white;
    text-decoration: none;
    margin: 6px 0;
    display: block;

    &:hover {
      color: #00d4ff;
    }
  }
`;

const IconText = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 6px 0;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const IconLink = styled.a`
  color: #f8f8f8;
  font-size: 20px;
  transition: 0.3s;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 50%;

  &:hover {
    background: #00d4ff;
    color: white;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 20px;
  font-size: 13px;
`;

const Footer = () => {
  useEffect(() => {
    const canvas = document.getElementById("networkCanvas");
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const nodes = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      angle: Math.random() * 2 * Math.PI,
      speed: 0.3 + Math.random() * 0.7,
      radius: 1.5 + Math.random() * 1.5
    }));

    const center = { x: width / 2, y: height / 2 };

    const draw = () => {
      ctx.fillStyle = "rgba(30, 58, 76, 0.15)";
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((node, i) => {
        node.angle += node.speed * 0.01;
        node.x = center.x + Math.cos(node.angle) * 200 + Math.sin(i) * 50;
        node.y = center.y + Math.sin(node.angle) * 200 + Math.cos(i) * 50;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#00d4ff";
        ctx.shadowColor = "#00d4ff";
        ctx.shadowBlur = 10;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = node.x - nodes[j].x;
          const dy = node.y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${1 - dist / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      center.x = width / 2;
      center.y = height / 2;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FooterContainer>
      <Canvas id="networkCanvas" />
      <FooterContent>
        <FooterGrid>
          <Column>
            <h3>About Us</h3>
            <p>
              We specialize in talent acquisition, workforce planning, and HR solutions,
              ensuring businesses find the right professionals to thrive.
            </p>
          </Column>

          <Column>
            <h3>Contact Info</h3>
            <IconText><FaUser /> Thangmalai Gopal M</IconText>
            <IconText><FaPhone /> 9597351243</IconText>
            <IconText><FaMapMarkerAlt /> Sivakasi, Tamil Nadu, India, 626189</IconText>
          </Column>

          <Column>
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">Our Services</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
          </Column>
        </FooterGrid>

        <SocialIcons>
          <IconLink href="#"><FaFacebookF /></IconLink>
          <IconLink href="#"><FaInstagram /></IconLink>
          <IconLink href="#"><FaLinkedinIn /></IconLink>
          <IconLink href="#"><FaWhatsapp /></IconLink>
        </SocialIcons>

        <FooterBottom>
          © 2025 Clarionix HR Solutions. All Rights Reserved. Developed By Anuja ❤.
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
