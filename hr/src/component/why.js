import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 24px;
  text-align: center;
`;

const Heading = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 16px;
  font-family: 'Poppins';

`;

const PointContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  background: #f7fafc;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
`;

const Icon = styled(FaCheckCircle)`
  color: #3182ce;
  margin-right: 12px;
`;

const ContactButton = styled(motion(Link))`
  display: inline-block;
  background: #3182ce;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;

  &:hover {
    background: #2b6cb0;
  }
`;

const points = [
  "Growing businesses scaling their workforce.",
  "Companies looking to cut HR costs while improving hiring.",
  "Organizations struggling to find the right talent quickly.",
  "Startups needing expert recruitment support.",
  "Businesses with project-based or seasonal hiring needs."
];

export default function RPOSection() {
  return (
    <Container>
      <Heading initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Who Needs RPO?
      </Heading>
      <div>
        {points.map((point, index) => (
          <PointContainer
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <Icon />
            <span>{point}</span>
          </PointContainer>
        ))}
      </div>
      <ContactButton
        to="/contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Contact Us
      </ContactButton>
    </Container>
  );
}

