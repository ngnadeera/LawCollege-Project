import React from "react";
import NavBar from "../Inc/NavBar";
import Alumni from "./Alumni";
import CurrentStudent from "./CurrentStudent";
import Staff from "./Staff";
import Unions from "./Unions";
import { Route, Routes } from "react-router-dom";
import HomeCmp from "./HomeCmp";
import RegSelction from "./Registration/RegSelection";
import LLBSignUp from "./Registration/LlbApplicant/LLBSignUp";
import GeneralSignUpPage from "./Registration/GeneralApplicant/GenerealSignUpPage"
import GeneralStudentLogInPage from "./Registration/GeneralApplicant/GeneralLogInPage";
import GeneralAppRegForm from "./Registration/GeneralApplicant/GeneralAppRegForm";


const Home = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomeCmp/>} />
        <Route path="/Alumni" element={<Alumni />} />
        <Route path="/CurrentStudent" element={<CurrentStudent />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/Unions" element={<Unions />} />
        <Route path="/New_Student_Registration" element={<RegSelction/>}/>
        <Route path="/LLB_Student_SignUp" element={<LLBSignUp/>}/>
        <Route path="/General_Student_SignUp" element={<GeneralSignUpPage/>}/>
        <Route path="/GeneralLogInPage" element={<GeneralStudentLogInPage/>}/>
        <Route path="/Registration/GeneralApplicant" element={<GeneralAppRegForm/>}/>
      </Routes>
    </div>
  );
};

export default Home;

