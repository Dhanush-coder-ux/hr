import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f8fc ;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #16a34a;
  margin-bottom: 12px;
  font-family: 'Poppins';

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  max-width: 1200px;
  padding: 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  width: 240px;
  height: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  padding: 16px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  margin-bottom: 16px;
  border-radius: 50%;
`;

const Heading = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  color: #374151;
  font-family: 'Poppins';

`;

const Description = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 5px;
      padding: 15px;
`;

const Staffing = () => {
  const benefits = [
    { title: "Understanding Your Needs", description: "We assess your business goals, work culture, and hiring requirements to find the best match.", image: "https://www.shutterstock.com/image-photo/wooden-blocks-words-we-understand-260nw-2193787841.jpg" },
    { title: "Sourcing Candidates", description: "Using advanced search techniques, we identify and screen top talent for your team.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMs8NTsBy9vdgEtOBOSW_Hn6JeVvbB5TmOgg&s" },
    { title: "Hiring & Onboarding", description: "We manage paperwork, negotiations, and onboarding to ensure a smooth transition.", image: "https://www.techfunnel.com/wp-content/uploads/2021/04/onborading_process.png" },
    { title: "Follow-Up Support", description: "We stay connected post-hire to ensure long-term success for both you and the employee.", image: "https://img.freepik.com/free-vector/audience-attraction-follow-us-notification-sign-social-media-advertisement-online-marketing-promo-sticker-speech-bubble-with-typography_335657-3.jpg" },
  ];

  return (
    <Container>
      <Title>Permanent Staffing</Title>
      <Grid>
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <Image src={benefit.image} alt={benefit.title} />
            <Heading>{benefit.title}</Heading>
            <Description>{benefit.description}</Description>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Staffing;
