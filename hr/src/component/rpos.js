import React from "react";
import styled, { keyframes } from "styled-components";
// Floating Animation
const floatAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const AboutUsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://html.ditsolution.net/dexon/assets/images/resource/inner-bg.jpg') no-repeat center center/cover;
  padding: 80px 20px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  background: rgba(255, 255, 255, 0.75);
  padding: 32px;
  border-radius: 10px;
`;

const AboutButton = styled.button`
  background-color: #FFC107;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
      font-family: 'Poppins';

`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 16px;
  line-height: 1.3;
  font-family: 'Poppins';

`;

const Description = styled.p`
  color: #4A4A4A;
  margin-top: 16px;
  font-size: 16px;
`;

const Shape = styled.img`
  position: absolute;
  opacity: 0.75;
  width: 40px;
  top:1px;

  &:nth-child(2) {
    top: 20px;
    left: 40px;
  }

  &:nth-child(3) {
    top: 40px;
    right: 40px;
    width: 48px;
  }
`;
const Section = styled.section`
  text-align: center;
  padding: 60px 20px;
  background: #faf9f6;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  max-width: 700px;
  margin: 0 auto 40px;
`;
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 200px); /* Set uniform row height */
  gap: 10px;
  max-width: 800px;
  margin: 0 auto;
          border: 5px solid var(--heading-color);



  img {
    width: 100%;
    height: 100%; /* Ensures all images take up the full height */
    object-fit: cover; /* Prevents distortion and keeps images looking natural */
    border-radius: 10px;
  }
`;



const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  max-width: 900px;
  margin: 0 auto;

  div {
    max-width: 400px;
    text-align: left;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #000;
  font-family: 'Poppins';

  }

  p {
    font-size: 16px;
    color: #555;
  }
`;
const Blob = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #ff9a9e, #fad0c4);
  border-radius: 50%;
  opacity: 0.6;
  animation: ${floatAnimation} 6s ease-in-out infinite;

  &:nth-child(1) {
    top: 20px;
    left: 50px;
  }

  &:nth-child(2) {
    bottom: 30px;
    right: 60px;
    background: linear-gradient(45deg, #a18cd1, #fbc2eb);
  }
`;

const SVGShape = styled.svg`
  position: absolute;
  width: 80px;
  height: 80px;
  fill: rgba(255, 193, 7, 0.5);
  animation: ${floatAnimation} 5s ease-in-out infinite;

  &:nth-child(3) {
    top: 40px;
    right: 30px;
  }

  &:nth-child(4) {
    bottom: 50px;
    left: 20px;
  }
`;
const Rpos = () => {
  return (
    <>
    <AboutUsContainer>
    <Blob />
        <Blob />
        <SVGShape>
          <polygon points="40,10 80,80 10,80" />
        </SVGShape>
        <SVGShape>
          <circle cx="40" cy="40" r="40" />
        </SVGShape>
     
      <ContentWrapper>
        <AboutButton>ABOUT US</AboutButton>
        <Title>At Clarionix HR Solutions, we are more than just an HR consultancy</Title>
        <Title>We are your trusted talent partner.</Title>
        <Description>
          Committed to delivering exceptional HR services that drive business success,
          we prioritize client satisfaction and guarantee 100% commitment to excellence.
          Human resources are the cornerstone of any successful organization, driving growth,
          innovation, and operational excellence. A skilled and strategic HR team not only strengthens
          workplace culture but also ensures sustained business success. In today’s competitive landscape,
          securing top HR talent is essential for maintaining a strong and agile workforce.
        </Description>
      </ContentWrapper>

      {/* Decorative Shapes */}
      <Shape src="https://html.ditsolution.net/dexon/assets/images/resource/inner-shp.png" alt="Star" />
      <Shape src="https://html.ditsolution.net/dexon/assets/images/resource/shap-2.png" alt="Shape" />
    </AboutUsContainer>
    <Section>
      <Title>Who are we?</Title>
      <Subtitle>
        We are a young energetic team of smart and engaging enthusiasts from different walks of life, bringing forth our unique experiences and expertise to the HR recruitment world. Our professionals have diverse knowledge in all industry types making us the right solution for your requirements.
      </Subtitle>
      <ImageGrid>
        <img src="https://aximo-react.vercel.app/assets/story4-CtwmxJh0.png" alt="Team Discussion" />
        <img src="https://aximo-react.vercel.app/assets/story3-LRTsmqAu.png" alt="Team Collaboration" />
        <img src="https://aximo-react.vercel.app/assets/story2-Cl4OWevI.png" alt="Team Work" />
        <img src="https://aximo-react.vercel.app/assets/story1-jc-ubBRb.png" alt="Brainstorming" />
      </ImageGrid>
      <TextWrapper>
        <div>
          <h2>Kindness</h2>
          <p>
            We believe in fostering a compassionate and respectful work culture where every interaction is built on empathy and understanding. By treating clients, candidates, and colleagues with genuine care, we create meaningful and lasting relationships. Our approach ensures a positive and supportive experience for everyone we engage with.
          </p>
        </div>
        <div>
          <h2>Loyalty</h2>
          <p>
            We are committed to building trustworthy and long-term partnerships with our clients, employees, and candidates. Our dedication to integrity and reliability ensures that we always act in the best interests of those we serve. At Clarionix HR Solutions, loyalty is more than just a value—it’s the foundation of everything we do.
          </p>
        </div>
      </TextWrapper>
    </Section>
    </>
  );
};

export default Rpos;
