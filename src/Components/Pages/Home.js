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
import GeneralSignUpPage from "./Registration/GeneralApplicant/GenerealSignUpPage";
import GeneralStudentLogInPage from "./Registration/GeneralApplicant/GeneralLogInPage";
import GeneralAppRegForm from "./Registration/GeneralApplicant/GeneralAppRegForm";
import { CurrentStudentInit } from "../Inc/CurrentStudent/CurrentStudentProfile/CurrentStudentInit";
import { AuthContext } from "../../helpers/AuthContext";
import axios from "axios";
import Footer from "../Inc/Footer";
import { ApplicantSignup } from "./Registration/ApplicantSignup/ApplicantSignup";
import { ApplicantLogin } from "./Registration/ApplicantSignup/ApplicantLogin";
import { Content } from "./Registration/ApplicantInterface/cmp/Content";
import { ApplicantInterface } from "./Registration/ApplicantInterface/ApplicantInterface";
import { EditRequest } from "./Registration/EditRequest/EditRequest";
import Instrctions from "./Registration/ApplicantInterface/cmp/Instructions/cmp/Instruction";
import Addmission from "./Registration/ApplicantInterface/cmp/Addmission/addmission";
import ExamresultPage from "./Registration/ApplicantInterface/cmp/ExamResults/ExamresultPage";
import ApplicationStatusPage from "./Registration/ApplicantInterface/cmp/ApplicationStatus/ApplicationStatusPage";
import Profile from "../Inc/CurrentStudent/CurrentStudentProfile/ViewProfile/Profile";
import ChangePassword from "../Inc/CurrentStudent/CurrentStudentProfile/Cmp/ChangePassword/ChangePassword";
import NoticeBoardPage from "./NoticeBoard/NoticeBoardPage";
import NoticeDetails from "./NoticeBoard/NoticeDetails";
import Courses from "./SubPages/Courses/Courses";
import Curriculum from "./SubPages/Curriculum/Curriculum";
import LectureRegistration from "../Inc/CurrentStudent/CurrentStudentProfile/Cmp/LectureRegistration/LectureRegistration";
import ExamRegistration from "../Inc/CurrentStudent/CurrentStudentProfile/Cmp/ExamRegistration/ExamRegistration";
import ExamAdmission from "../Inc/CurrentStudent/CurrentStudentProfile/Cmp/ExamRegistration/ExamAdmission/ExamAdmission";
import ExamResults from "../Inc/CurrentStudent/CurrentStudentProfile/Cmp/ExamResults/ExamResults";
import PreviousExamResults from "../Inc/CurrentStudent/CurrentStudentProfile/Cmp/ExamRegistration/PreviousExamResults/PreviousexamResults";
import ExamWithdrawal from "../Inc/CurrentStudent/CurrentStudentProfile/Cmp/ExamRegistration/ExamWithdraw/ExamWithdrawal";

const Home = () => {
  const [authState, setAuthState] = useState(false);
  const [authStateApplicant, setAuthStateApplicant] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Student_login/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
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

  }, [authState]);


  useEffect(() => {
    axios
      .get("http://localhost:3001/Applicant_signup/login", {
        headers: {
          accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
        },
      })
      .then((response) => {
        setAuthStateApplicant(true);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setAuthStateApplicant(false);
          console.error("Request failed with status code 400");
        } else {
          console.error("An error occurred:", error);
        }
      });
  }, []);



  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
        authStateApplicant,
        setAuthStateApplicant,
      }}
    >
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomeCmp />} />
          <Route path="/Alumni" element={<Alumni />} />
          <Route path="/NoticeBoard" element={<NoticeBoardPage/>}/>
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/Curriculum" element={<Curriculum/>}/>


          {/* //Current Student Routes */}
          <Route path="/NoticeBoard/Notice/:NoticeID" element={<NoticeDetails/>} />
          <Route
            path="/CurrentStudent"
            element={authState ? <Profile /> : <CurrentStudent />}
          />

          <Route
            path="/CurrentStudent/ViewProfile"
            element={authState ? <Profile /> : <CurrentStudent />}
          />

          <Route
            path="/CurrentStudent/ChangePassword"
            element={authState ? <ChangePassword /> : <CurrentStudent />}
          />

          <Route
            path="/CurrentStudent/LectureRegistration"
            element={authState ? <LectureRegistration /> : <CurrentStudent />}
          />

          <Route
            path="/CurrentStudent/ExamRegistration"
            element={authState ? <ExamRegistration /> : <CurrentStudent />}
          />

        <Route
            path="/CurrentStudent/Admission"
            element={authState ? <ExamAdmission /> : <CurrentStudent />}
          />

        <Route
            path="/CurrentStudent/ExamResults"
            element={authState ? < ExamResults/> : <CurrentStudent />}
          />

          <Route
            path="/CurrentStudent/PreviousExamResults"
            element={authState ? <PreviousExamResults/> : <CurrentStudent />}
          />  

           <Route
            path="/CurrentStudent/ExamWithdrawal"
            element={authState ? <ExamWithdrawal/> : <CurrentStudent />}
          /> 


          <Route path="/Staff" element={<Staff />} />
          <Route path="/Unions" element={<Unions />} />
          <Route
            path="/New_Student_Registration"
            element={
              authStateApplicant ? <ApplicantInterface /> : <ApplicantSignup />
            }
          />
          <Route path="/LLB_Student_SignUp" element={<LLBSignUp />} />
          <Route
            path="/General_Student_SignUp"
            element={<GeneralSignUpPage />}
          />
          <Route
            path="/GeneralLogInPage"
            element={<GeneralStudentLogInPage />}
          />
          <Route
            path="/New_Student_Registration/login"
            element={<ApplicantLogin />}
          />

          <Route
            path="/Applicant_Registration/Selection/GeneralApplicant"
            element={
              authStateApplicant ? <GeneralAppRegForm /> : <ApplicantLogin />
            }
          />

          <Route
            path="/Applicant_Registration/Edit_Request"
            element={authStateApplicant ? <EditRequest /> : <ApplicantLogin />}
          />

          <Route
            path="/Applicant_Registration/Instructions"
            element={authStateApplicant ? <Instrctions /> : <ApplicantLogin />}
          />

          <Route
            path="/Applicant_Registration/Admission/Downloads"
            element={authStateApplicant ? <Addmission /> : <ApplicantLogin />}
          />

          <Route
            path="/Applicant_Registration/Admission/Entrance_Exam_Results"
            element={
              authStateApplicant ? <ExamresultPage /> : <ApplicantLogin />
            }
          />

          <Route
            path="/Applicant_Registration/Admission/Application_Status"
            element={
              authStateApplicant ? (
                <ApplicationStatusPage />
              ) : (
                <ApplicantLogin />
              )
            }
          />

          <Route
            path="/Applicant_Registration"
            element={
              authStateApplicant ? <ApplicantInterface /> : <ApplicantLogin />
            }
          />

          <Route
            path="/Applicant_Registration/Selection"
            element={authStateApplicant ? <RegSelction /> : <ApplicantLogin />}
          />

          <Route
            path="*"
            element={
              <>
                <h1>404 page not found</h1>
              </>
            }
          />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
};

export default Home;
