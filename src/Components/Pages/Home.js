import React, { useEffect, useState } from "react";
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
import { CurrentStudentInit } from "../Inc/CurrentStudent/CurrentStudentProfile/CurrentStudentInit";
import { AuthContext } from "../../helpers/AuthContext"
import axios from "axios";

const Home = () => {

  const [authState,setAuthState] = useState(false);

  useEffect(()=>{
   
    axios.get('http://localhost:3001/Student_login/auth', {headers: {
      accessToken: localStorage.getItem("accessToken")
    }})
      .then((response) => {
        setAuthState(true);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setAuthState(false);
          console.error("Request failed with status code 400");
        } else {
          // Handle other errors
          console.error("An error occurred:", error);
        }
      });
    
  }, [])

  return (
    <AuthContext.Provider value = {{authState, setAuthState}}>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomeCmp/>} />
        <Route path="/Alumni" element={<Alumni />} />
        <Route path="/CurrentStudent" element={<CurrentStudent />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/Unions" element={authState ? <Unions /> : null} />
        <Route path="/New_Student_Registration" element={<RegSelction/>}/>
        <Route path="/LLB_Student_SignUp" element={<LLBSignUp/>}/>
        <Route path="/General_Student_SignUp" element={<GeneralSignUpPage/>}/>
        <Route path="/GeneralLogInPage" element={<GeneralStudentLogInPage/>}/>
        <Route path="/Registration/GeneralApplicant" element={<GeneralAppRegForm/>}/>
        <Route path="/current-student" element={<CurrentStudentInit />} />


      </Routes>
    </div>
    </AuthContext.Provider>
  );
};

export default Home;

