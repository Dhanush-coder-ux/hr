import React from "react";
import styled from "styled-components";

// Styled Components
const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  text-align: center;
  padding: 50px;
  max-width: 1200px;
  margin: auto;
    background-color: #f5f8fc;


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureImage = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
  font-family: 'Poppins';

`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #555;
  max-width: 300px;
`;

const Features = () => {
  const featureData = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331949.png",
      title: "Cost-effectiveness",
      description:
        "We offer affordable E-Learning solutions that help you reduce costs and improve your bottom line.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/4252/4252190.png",
      title: "Innovative Technology",
      description:
        "We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2910/2910784.png",
      title: "Industry Expertise",
      description:
        "We specialize in serving specific industries such as Education, Online Tutoring, and offer tailored solutions.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2306/2306178.png",
      title: "Scalability",
      description:
        "Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.",
    },
  ];

  return (
    <FeaturesContainer>
      {featureData.map((feature, index) => (
        <FeatureCard key={index}>
          <FeatureImage src={feature.image} alt={feature.title} />
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureDescription>{feature.description}</FeatureDescription>
        </FeatureCard>
      ))}
    </FeaturesContainer>
  );
};

export default Features;
