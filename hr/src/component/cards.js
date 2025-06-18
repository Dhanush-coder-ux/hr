import React from "react";
import styled from "styled-components";
import RPOSection from "./why";

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
`;

const CardContainer = styled.div`
  width: calc(20% - 20px); /* 5 cards per row */
  background: #1e3a4c;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    width: calc(33.33% - 20px); /* 3 cards per row on tablets */
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px); /* 2 cards per row on mobile */
  }

  @media (max-width: 480px) {
    width: 100%; /* 1 card per row on smaller screens */
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 180px;
  padding-left:13px;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 10px 0px 0px 0px;
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: left;
`;

const CardCategory = styled.span`
  font-size: 12px;
  opacity: 0.7;
  display: block;
  margin-bottom: 5px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Poppins';

`;


const CardDescription = styled.p`
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 15px;
  color: white;
`;

const Card = ({ image, title, description, category }) => {
  return (
    <>
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={image} alt={title} />
      </CardImageWrapper>
      <CardContent>
        <CardCategory>📂 {category}</CardCategory>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
    
    </>
  );
};

// Sample data for the cards
const cardsData = [
  {
    image: "https://img.freepik.com/premium-vector/sales-growth-commerce-analytics-profit-analysis-business-analyst-marketing-plan-holding-clipboard_566886-2340.jpg",
    title: "Cost-Effective",
    description: "Reduce hiring costs while accessing top-tier talent.",
    category: "Efficiency",
  },
  {
    image: "https://img.freepik.com/free-vector/people-investing-money-watch-webpage_74855-2520.jpg?t=st=1741237310~exp=1741240910~hmac=c32a1cf3582a66a3569b1d1424040996e84cdee08233d1424d1570600d12f072&w=1060",
    title: "Time-Saving",
    description: "Speed up recruitment and focus on core business operations.",
    category: "Productivity",
  },
  {
    image: "https://img.freepik.com/free-vector/tiny-people-trying-get-golden-star-ladder-award-reward-flat-vector-illustration-competition-acknowledgement_74855-13260.jpg?t=st=1741237337~exp=1741240937~hmac=66135a63bb29d8ec347e5d857f8301c2c74bed5726b6857c07c507c936603a2c&w=900",
    title: "Access to Top Talent",
    description: "Reach candidates beyond traditional job boards.",
    category: "Talent Pool",
  },
  {
    image: "https://img.freepik.com/free-vector/scrum-method-concept-illustration_114360-13019.jpg?t=st=1741236266~exp=1741239866~hmac=a23fd9c288b6cb6852e3405dd921e57f278bbd02f403a5555b7c1cd2af10ef9e&w=1380",
    title: "Scalable Solutions",
    description: "Flexible hiring for any business size or project.",
    category: "Growth",
  },
  {
    image: "https://img.freepik.com/free-vector/recruitment-concept-illustration_114360-24595.jpg?t=st=1741237006~exp=1741240606~hmac=8a6dca138dafc5c02216607d98551d2e49b0ad61f8485445468c6d4ef89e5f9c&w=900",
    title: "Improved Quality of Hire",
    description: "Secure candidates who truly fit your company.",
    category: "Excellence",
  },
];

export default function HeadhuntingTechniques() {
  return (
    <>
    
    <CardGrid>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          category={card.category}
        />
      ))}
    </CardGrid>
    <RPOSection/>
    </>
  );
}
