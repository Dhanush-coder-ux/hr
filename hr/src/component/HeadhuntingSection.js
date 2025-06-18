import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionContainer = styled.div`
  text-align: center;
  padding: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 20px;
  font-family: 'Poppins';

`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: auto;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  background: #f7fafc;
  padding: 14px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: 500;
  color: #2d3748;
`;

const Icon = styled(FaCheckCircle)`
  color: #3182ce;
  margin-right: 12px;
  font-size: 1.2rem;
`;

const ContactButton = styled(Link)`
  display: inline-block;
  background: #3182ce;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 20px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #2b6cb0;
  }
`;

const HeadhuntingSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Who Needs Head Hunting?</SectionTitle>
      <List>
        <ListItem>
          <Icon />
          Growing businesses scaling their workforce.
        </ListItem>
        <ListItem>
          <Icon />
          Companies looking to cut HR costs while improving hiring.
        </ListItem>
        <ListItem>
          <Icon />
          Organizations struggling to find the right talent quickly.
        </ListItem>
        <ListItem>
          <Icon />
          Startups needing expert recruitment support.
        </ListItem>
        <ListItem>
          <Icon />
          Businesses with project-based or seasonal hiring needs.
        </ListItem>
      </List>
      <ContactButton to="/contact">Contact Us</ContactButton>
    </SectionContainer>
  );
};

export default HeadhuntingSection;
