
import React, { useState } from "react";
import styled from "styled-components";
import { FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./image/logo3.png";

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  flex-wrap: wrap;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;

  img {
    width: 100px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    margin: 0 auto 10px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  position: relative;
  flex-wrap: wrap;

  li {
    position: relative;
      text-transform: uppercase;

    font-family: 'Allerta', Helvetica, Arial, sans-serif;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
    font-family: var(--font-poppins), sans-serif;

    &:hover {
      color: #007bff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
 text-align:center;
    gap: 10px;


    a {
      padding: 10px 0;
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  min-width: 220px;
  z-index: 100;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  font-family: var(--font-poppins), sans-serif;
    text-transform: uppercase;


  a {
    display: block;
    padding: 10px;
    color: #333;
    transition: background 0.3s;

    &:hover {
      background: #007bff;
      color: white;
    }
  }

  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    border-radius: 0;
    background: transparent;

    a {
      padding-left: 20px;
    }
  }
`;

const HeaderContact = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 10px;
    align-self: flex-start;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const Icon = styled.div`
  color: blue;
  font-size: 24px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

// Component
const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Clarionix HR Solutions Logo" />
        <span>Clarionix HR Solutions</span>
      </Logo>

      <NavLinks>
        <li><Link to="/">Home</Link></li>

        {/* Services Dropdown */}
        <li 
          onMouseEnter={() => setServicesOpen(true)} 
          onMouseLeave={() => setServicesOpen(false)}
        >
          <span style={{ cursor: "pointer", fontWeight: "500" }}>Services</span>
          <Dropdown isOpen={servicesOpen}>
            <Link to="/rpo">Recruitment Process Outsourcing (RPO)</Link>
            <Link to="/permanent-staffing">Permanent Staffing</Link>
            <Link to="/hunt">Head Hunting / Executive Search</Link>
          </Dropdown>
        </li>

        <li><Link to="/solution">Solution</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* Industry Dropdown */}
        <li 
          onMouseEnter={() => setIndustryOpen(true)} 
          onMouseLeave={() => setIndustryOpen(false)}
        >
          <span style={{ cursor: "pointer", fontWeight: "500" }}>Industry</span>
          <Dropdown isOpen={industryOpen}>
            <Link to="/it">Information Technology</Link>
            <Link to="/digital">Digital transformation</Link>
            <Link to="/pharma">Pharmaceutical</Link>
            <Link to="/health">Health Care</Link>
            <Link to="/finance">Finance and Banking</Link>
            <Link to="/manufacture">Manufacturing Industry</Link>
            <Link to="/retail">Retail Industry</Link>
            <Link to="/industrial">Industrial Automation & Industry 4.0</Link>
            <Link to="/computervisionai">ComputerVisionAI</Link>
          </Dropdown>
        </li>
      </NavLinks>

      <HeaderContact>
        <Icon><FaCommentDots /></Icon>
        <Text>
          <span>Hiring Challenges?</span>
          <div>Let Us Solve Them!</div>
        </Text>
      </HeaderContact>
    </Nav>
  );
};

export default Navbar;
