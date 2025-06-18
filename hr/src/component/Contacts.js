import React from "react";
import styled from "styled-components";
import LazyMap from "./LazyMap";
const Section = styled.section`
  padding: 40px;
  background-color: rgb(203, 228, 253); 
  
`;

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ContactBox = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 300px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: #0056b3;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  min-width: 300px;
  iframe {
    width: 100%;
    height: 100%;
    min-height: 250px;
    border: none;
  }
`;

const ContactSection = () => {
  return (
    <Section>
      <ContactContainer>
        {/* Contact Form */}
        <ContactBox>
          <h3 style={{color:"black"}}>Contact Clarionix HR Solution</h3>
          <p>Enhancing your workforce solutions with Clarionix HR expertise.</p>
          <form action="https://formspree.io/f/mqapwljd" method="POST">
            <FormGroup>
              <Label>
                Name <span style={{ color: "red" }}>*</span>
              </Label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Number <span style={{ color: "red" }}>*</span>
              </Label>
              <Input
                type="tel"
                name="phone"
                placeholder="Enter your number"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Email <span style={{ color: "red" }}>*</span>
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <TextArea
                name="message"
                placeholder="Enter your message"
              ></TextArea>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
        </ContactBox>
        <MapContainer>
  <LazyMap />
</MapContainer>

        {/* Google Map
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62970.01160346825!2d77.75142300346339!3d9.454179599895825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cee43d812d0d%3A0x8ce12e9dcdaa2a2c!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1743050805671!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapContainer> */}
      </ContactContainer>
    </Section>
  );
};

export default ContactSection;
