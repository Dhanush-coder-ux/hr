import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  background: #f4f7fc;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 40px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #1e3a4c;
  margin-bottom: 20px;
  font-family: 'Poppins';

`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
`;

const ListItem = styled.li`
  background: #1e3a4c;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
`;

const Bullet = styled.span`
  font-size: 18px;
`;

const ContactText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #1e3a4c;
  font-weight: bold;
`;

const PermanentStaffingSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Who Needs Permanent Staffing?</SectionTitle>
      <List>
        <ListItem>
          <Bullet>🔹</Bullet> Companies seeking long-term employees for sustained growth.
        </ListItem>
        <ListItem>
          <Bullet>🔹</Bullet> Businesses aiming to improve team dynamics and stability.
        </ListItem>
        <ListItem>
          <Bullet>🔹</Bullet> Startups looking to build a strong, reliable workforce.
        </ListItem>
        <ListItem>
          <Bullet>🔹</Bullet> Organizations wanting to reduce turnover and enhance efficiency.
        </ListItem>
      </List>
      <ContactText>
        Let <strong>Clarionix HR Solutions</strong> help you find the right talent to strengthen your team. Contact us today to build a future-ready workforce!
      </ContactText>
    </SectionContainer>
  );
};

export default PermanentStaffingSection;
