import React from "react";
import styled from "styled-components";
import HRSection from "./jf";
import Footer from "./footer"

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
  color: #333;
  font-family: 'Poppins';

`;

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  
  flex-direction: ${({ isEven }) => (isEven ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StepContent = styled.div`
  max-width: 500px;
`;

const StepIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
   font-family: 'Poppins';

`;

const StepList = styled.ul`
  list-style-type: none;
  padding: 0;
  color: #555;
`;

const StepItem = styled.li`
  margin-bottom: 8px;
`;

const StepImage = styled.img`
  width: 350px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

// Steps Data
const steps = [
  {
    title: "Understanding Client Needs",
 
    image: "https://img.freepik.com/free-vector/feedback-loop-concept-illustration_114360-21826.jpg",
    description: [
      "In-depth consultation to understand your business goals and hiring requirements.",
      "Defining clear objectives and success metrics for a streamlined recruitment process."
    ]
  },
  {
    title: "Market Research & Talent Mapping",
   
    image: "https://img.freepik.com/premium-vector/concept-businessman-analysis-digital-data-illustrate_71983-1253.jpg",
    description: [
      "Identifying high-potential talent pools through data insights, networking, and research.",
      "Leveraging AI-driven tools, industry databases, and competitive analysis."
    ]
  },
  {
    title: "Candidate Sourcing & Identification",
 
    image: "https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg",
    description: [
      "Deploying advanced sourcing techniques to reach top talent.",
      "Utilizing social media, job boards, referrals, and professional networks to attract the best candidates."
    ]
  },
  {
    title: "Screening & Evaluation",

    image: "https://img.freepik.com/premium-vector/questionnaire-form-clipboard-survey-test-with-isometric-characters_108855-2300.jpg",
    description: [
      "Conducting competency-based interviews to assess skills and cultural fit.",
      "Implementing behavioral assessments to evaluate leadership and problem-solving abilities."
    ]
  },
  {
    title: "Shortlisting & Candidate Presentation",
   
    image: "https://img.freepik.com/premium-vector/business-presentation_375422-13.jpg",
    description: [
      "Creating a refined shortlist of the most qualified candidates.",
      "Presenting detailed candidate profiles, including skill assessment reports and suitability analysis."
    ]
  },
  {
    title: "Client Interviews & Feedback",
  
    image: "https://img.freepik.com/premium-vector/two-professionals-are-discussing-about-their-business-flat-illustration_7087-3558.jpg",
    description: [
      "Coordinating and scheduling interviews efficiently.",
      "Collecting structured feedback from both the client and candidate for an optimal hiring decision."
    ]
  },
  {
    title: "Reference & Background Checks",
   
    image: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595843.jpg",
    description: [
      "Conducting comprehensive reference verification to ensure credibility.",
      "Validating candidate credentials, work history, and past performance."
    ]
  },
  {
    title: "Offer Management & Negotiation",
  
    image: "https://img.freepik.com/free-vector/business-deal_52683-6262.jpg",
    description: [
      "Assisting in crafting competitive job offers that attract and retain top talent.",
      "Managing negotiations to ensure a win-win situation for both parties."
    ]
  },
  {
    title: "Onboarding & Post-Hiring Support",

    image: "https://img.freepik.com/free-vector/woman-man-holding-welcome-sign_52683-23950.jpg",
    description: [
      "Providing seamless onboarding support for a smooth transition.",
      "Conducting follow-ups to ensure candidate satisfaction and long-term success."
    ]
  },
  {
    title: "Continuous Improvement & Client Partnership",
  
    image: "https://img.freepik.com/free-vector/constructive-business-confrontation-flat-composition-poster_98292-2806.jpg",
    description: [
      "Gathering feedback from clients and candidates to enhance our recruitment strategies.",
      "Adapting to market changes and technological advancements to refine our approach."
    ]
  }
];

const SearchMethodology = () => {
  return (
    <>
      <HRSection />
      <Container>
        <Title>Our Search Methodology</Title>

        {steps.map((step, index) => (
          <StepContainer key={index} isEven={index % 2 === 1}>
            {/* Image (left for even, right for odd) */}
            <StepImage 
              src={step.image} 
              alt={step.title} 
              onError={(e) => e.target.style.display = 'none'} 
            />

            {/* Content (right for even, left for odd) */}
            <StepContent>
             
              <StepTitle>{step.title}</StepTitle>
              <StepList>
                {step.description.map((item, idx) => (
                  <StepItem key={idx}>{item}</StepItem>
                ))}
              </StepList>
            </StepContent>
          </StepContainer>
        ))}
      </Container>
      <Footer/>
    </>
  );
};

export default SearchMethodology;









// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
// import "./SearchMethodology.css";
// import HRSection from "./jf";

// const SearchMethodology = () => {
//   const steps = [
//     {
//       title: "Understanding Client Needs",
//       icon: "\ud83d\udcc8", // Chart icon
//       description: [
//         "In-depth consultation to understand your business goals and hiring requirements.",
//         "Defining clear objectives and success metrics for a streamlined recruitment process."
//       ]
//     },
//     {
//       title: "Market Research & Talent Mapping",
//       icon: "\ud83d\udd0d", // Magnifying glass icon
//       description: [
//         "Identifying high-potential talent pools through data insights, networking, and research.",
//         "Leveraging AI-driven tools, industry databases, and competitive analysis."
//       ]
//     },
//     {
//       title: "Candidate Sourcing & Identification",
//       icon: "\ud83d\udc65", // People icon
//       description: [
//         "Deploying advanced sourcing techniques to reach top talent.",
//         "Utilizing social media, job boards, referrals, and professional networks to attract the best candidates."
//       ]
//     },
//     {
//       title: "Screening & Evaluation",
//       icon: "\ud83d\udcdd", // Clipboard icon
//       description: [
//         "Conducting competency-based interviews to assess skills and cultural fit.",
//         "Implementing behavioral assessments to evaluate leadership and problem-solving abilities."
//       ]
//     },
//     {
//       title: "Shortlisting & Candidate Presentation",
//       icon: "\ud83d\udcc4", // Document icon
//       description: [
//         "Creating a refined shortlist of the most qualified candidates.",
//         "Presenting detailed candidate profiles, including skill assessment reports and suitability analysis."
//       ]
//     },
//     {
//       title: "Client Interviews & Feedback",
//       icon: "\ud83d\udcac", // Speech bubble icon
//       description: [
//         "Coordinating and scheduling interviews efficiently.",
//         "Collecting structured feedback from both the client and candidate for an optimal hiring decision."
//       ]
//     },
//     {
//       title: "Reference & Background Checks",
//       icon: "\ud83d\udd12", // Lock icon
//       description: [
//         "Conducting comprehensive reference verification to ensure credibility.",
//         "Validating candidate credentials, work history, and past performance."
//       ]
//     },
//     {
//       title: "Offer Management & Negotiation",
//       icon: "\ud83d\udcb0", // Money bag icon
//       description: [
//         "Assisting in crafting competitive job offers that attract and retain top talent.",
//         "Managing negotiations to ensure a win-win situation for both parties."
//       ]
//     },
//     {
//       title: "Onboarding & Post-Hiring Support",
//       icon: "\ud83c\udfe2", // Office building icon
//       description: [
//         "Providing seamless onboarding support for a smooth transition.",
//         "Conducting follow-ups to ensure candidate satisfaction and long-term success."
//       ]
//     },
//     {
//       title: "Continuous Improvement & Client Partnership",
//       icon: "\ud83d\udcaa", // Flexed biceps icon
//       description: [
//         "Gathering feedback from clients and candidates to enhance our recruitment strategies.",
//         "Adapting to market changes and technological advancements to refine our approach."
//       ]
//     }
//   ];

//   return (
//     <>
//        <HRSection/>
//     <div className="search-methodology">
//       <h2 className="title">Our Search Methodology</h2>
   
//            <Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={20}
//         slidesPerView={3}
//         className="swiper-container"
//       >
//         {steps.map((step, index) => (
//           <SwiperSlide key={index} className="slide">
//             <div className="slide-icon">{step.icon}</div>
//             <h3 className="slide-title">{step.title}</h3>
//             <ul className="slide-list">
//               {step.description.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>
//           </SwiperSlide>
//         ))}
//       </Swiper>
      
//     </div>
//     </>

//   );

// };

// export default SearchMethodology;