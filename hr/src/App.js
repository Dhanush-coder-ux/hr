import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/Home";
import Contact from "./component/contact";
import About from "./component/About";
import Solutions from "./component/solution";
import Job from "./component/job";
import Work from "./component/rpo";
import Permentant from "./component/permanent-staffing";
import Hunting from "./hunt";
import ITIndustry from "./component/it";
import Digital from "./component/digital";
import Pharmaceutical from "./component/pharma";
import HealthcareIndustry from "./component/health";
import FinanceIndustry from "./component/finance";
import ManufacturingIndustry from "./component/manufacture";
import RetailIndustry from "./component/retail";
import IndustrialAutomation from "./component/industrial";
import ComputerVisionAI from "./component/computervisionai";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solution" element={<Solutions />} />
        <Route path="/job" element={<Job />} />
        <Route path="/rpo" element={<Work />} />
        <Route path="/permanent-staffing" element={<Permentant />} />
        <Route path="/hunt" element={<Hunting />} />
        <Route path ="/it" element={<ITIndustry/>}/>
        <Route path="/digital" element={<Digital/>}/>
        <Route path="/pharma" element={<Pharmaceutical/>}/>
        <Route path="/health" element={<HealthcareIndustry/>}/>
        <Route path="/finance" element={<FinanceIndustry/>}/>
        <Route path="/manufacture" element={<ManufacturingIndustry/>}/>
        <Route path="/retail" element={<RetailIndustry/>}/>
        <Route path="/industrial" element={<IndustrialAutomation/>}/>
        <Route path="computervisionai" element ={<ComputerVisionAI/>}/>

      </Routes>
    </Router>
  );
};
export default App;
