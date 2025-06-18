import React from "react";
import styled from "styled-components";

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
  padding-left: 13px;
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
  );
};

// New updated cards content
const updatedCardsData = [
  {
    image: "https://img.freepik.com/free-vector/businessman-social-chat_1284-4590.jpg?t=st=1741242854~exp=1741246454~hmac=445b5b53fcf381be901b9878fe295ff8b59ffece2d802974c47bbd7c3958387c&w=900",
    title: "Industry-Specific Expertise",
    description: "We understand market dynamics to attract the best professionals.",
    category: "Expertise",
  },
  {
    image: "https://img.freepik.com/free-vector/reviews-concept-landing-page_52683-18921.jpg?t=st=1741242833~exp=1741246433~hmac=3b8f781f7da335013c786fc776285923c51b6737439e906f75c52e58dab3d1a5&w=900",
    title: "Access to Passive Talent",
    description: "Reach top candidates who aren’t actively job-hunting.",
    category: "Talent Pool",
  },
  {
    image: "https://img.freepik.com/free-vector/patent-law-illustration_23-2148684285.jpg?t=st=1741242800~exp=1741246400~hmac=2ab8a23989d432aba251cc8315c9580533a8807cfe488b71dde044c56686c261&w=1380",
    title: "Confidential & Strategic Hiring",
    description: "Secure high-impact hires while maintaining discretion.",
    category: "Confidentiality",
  },
  {
    image: "https://img.freepik.com/free-vector/digital-presentation-abstract-concept-illustration-office-online-meeting-visual-data-representation-business-conference-education-digital-marketing-public-speaking_335657-56.jpg?t=st=1741241859~exp=1741245459~hmac=db37ab436868ef4c40a4dbeef4317702993828ef2c7bdb1f4947085e293f09b1&w=900",
    title: "Data-Driven Workforce Planning",
    description: "Optimize staffing, budgeting, and team efficiency.",
    category: "Strategy",
  },
  {
    image: "https://img.freepik.com/free-vector/brainstorming-concept-landing-page_23-2148310405.jpg?t=st=1741242740~exp=1741246340~hmac=df15ae1f2f7256372be81640c1b73b97087a75f1b99e60ce4c2e0477716d3a3e&w=900",
    title: "Faster & Targeted Hiring",
    description: "Reduce hiring time and ensure a perfect talent match.",
    category: "Efficiency",
  },
];

export default function HeadhuntingTechniques() {
  return (
    <CardGrid>
      {updatedCardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          category={card.category}
        />
      ))}
    </CardGrid>
  );
}
