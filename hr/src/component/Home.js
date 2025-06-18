import HeroSection from "./hero";
import Services from "./ss";
import Timeline from "./timline";
import VisionMissionCards from "./vision";
import ContactSection from "./Contacts";
import Footer from "./footer";
import styled from "styled-components";

const Homes = styled.div`
  background-color: rgb(203, 228, 253); 
  color: white; 
`;

const Home = () => (
  <Homes>
    <HeroSection />
    <Timeline />
    <VisionMissionCards />
    <Services />
    <ContactSection />
    <Footer />
  </Homes>
);

export default Home;
