

import React from "react";
import styled from "styled-components";
import Footer from "./footer";

// Styled Components
const ContactSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 10%;
  background: #fff;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 400px;
  background: url('https://img.freepik.com/free-photo/business-people-using-computers-dark-office_74855-2617.jpg') center/cover no-repeat;
  border-top-left-radius: 200px;
  border-bottom-left-radius: 200px;
  margin-left: auto;
`;

const ContactBox = styled.div`
  position: absolute;
  top: 28%;
  left: 44px;
  transform: translateY(-50%);
  background: white;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  width: 200px;

  @media (max-width: 1024px) {
    position: static;
    transform: none;
    margin-top: 20px;
  }
`;

const ContactNumber = styled.p`
  background: navy;
  color: white;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
`;

const ContactText = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #333;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #000;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 48%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  height: 100px;
  resize: none;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background: navy;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #003366;
  }
`;

const Contact = () => {
  return (
    <div>
      <ContactSection>
        <FormContainer>
          <Title>Need any Business Touch Contact with me</Title>
          <Subtitle>
            We specialize in talent acquisition, workforce planning, and HR
            solutions, ensuring businesses find the right professionals to
            thrive.
          </Subtitle>

          <Form action="https://formspree.io/f/mqapwljd" method="POST">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="E-mail Address"
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <Textarea
              name="message"
              placeholder="Write Message"
              required
            />
            <Button type="submit">SEND MESSAGE →</Button>
          </Form>
        </FormContainer>

        <ImageContainer>
          <StyledImage />
          <ContactBox>
            <ContactNumber>9597351243</ContactNumber>
            <ContactText>Have any Question?</ContactText>
          </ContactBox>
        </ImageContainer>
      </ContactSection>

      <Footer />
    </div>
  );
};

export default Contact;
