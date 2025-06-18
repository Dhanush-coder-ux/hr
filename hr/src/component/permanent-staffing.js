import React from "react";
import StaffingBenefits from "./pert"; // Adjust the path if needed
import EngineeringCompany from "./permant";
import Staffing from "./pret";
import PermanentStaffingSection from "./PermanentStaffingSection";
import Footer from "./footer"

function Permentant() {
  return (
    <div>
      <EngineeringCompany/>
      <StaffingBenefits />
      <Staffing/>
      <PermanentStaffingSection/>
      <Footer/>
    </div>
  );
}

export default Permentant;
