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



// New cards from BenefitList
const additionalCardsData = [
  {
    image: "https://img.freepik.com/free-vector/directing-arrow-up-concept-illustration_114360-8865.jpg?t=st=1741241206~exp=1741244806~hmac=1f43331915bd0dc7b147c3120de068b8982c943510ac99cf4021ceff5e92dae0&w=900",
    title: "Long-Term Stability",
    description: "Build a dedicated, engaged, and loyal workforce.",
    category: "Commitment",
  },
  {
    image: "https://img.freepik.com/premium-vector/one-teammate-huddled-had-fun-office-celebrating-success-successful-project_923732-259.jpg?w=900",
    title: "Better Culture Fit",
    description: "Hire employees who align with your values and team dynamics.",
    category: "Work Culture",
  },
  {
    image: "https://img.freepik.com/free-vector/project-management-concept-with-blue-businessman_23-2147783509.jpg?t=st=1741241270~exp=1741244870~hmac=fc913fe5078b154a4775a6f47e6111d631ce31e8e94da1d18e618e4947b888ab&w=900",
    title: "Reduced Turnover Costs",
    description: "Minimize hiring expenses by selecting the right candidates from the start.",
    category: "Cost Efficiency",
  },
  {
    image: "https://img.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg?t=st=1741241304~exp=1741244904~hmac=64ddf5df284a26c40a3a38fdbe715990afe0f9b5e89ffa6ba2b0e373905d69c0&w=1060",
    title: "Increased Productivity",
    description: "A committed team drives efficiency and business growth.",
    category: "Performance",
  },
  {
    image: "https://img.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg?t=st=1741241331~exp=1741244931~hmac=19190847d3ec711e39065e8e414bbe86dc63657e8873464fd2c4ab63f885a8c5&w=1380",
    title: "Access to Top Talent",
    description: "Gain exclusive access to skilled professionals who match your hiring needs.",
    category: "Talent Acquisition",
  },
];

export default function HeadhuntingTechniques() {
  return (
    <>
      <CardGrid>
        {[ ...additionalCardsData].map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            category={card.category}
          />
        ))}
      </CardGrid>


    </>
  );
}
