import React from "react";
import HeadhuntingProcess from "./component/recriut";
import StrategicTalentSection from "./hunts";
import HeadhuntingTechniques from "./component/HeadhuntingTechniques";
import HeadhuntingSection from "./component/HeadhuntingSection";
import Footer from "./component/footer";

function Hunting() {
  return (
    <div>
      <StrategicTalentSection/>
      <HeadhuntingProcess />
      <br></br>      <br></br>
      <br></br>

      <HeadhuntingTechniques/>
      <HeadhuntingSection/>
      <Footer/>
    </div>
  );
}

export default Hunting;