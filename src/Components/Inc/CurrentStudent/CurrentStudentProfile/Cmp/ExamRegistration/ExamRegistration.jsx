
import Header from './Header'
import Footer from '../../../../Footer'
import React from 'react'
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Chip, StylesProvider } from "@material-ui/core";
import axios from 'axios';
import { useEffect,useState } from 'react';
import Sidebar from '../Sidebar';
import { Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { boxStyles } from '../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles';
import {Box} from '@mui/material';
import { useFormik } from "formik";
import {FormControlLabel} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PreliminaryExamRegistrationForm from './PreliminaryExamRegistrationForm';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './ExamRegistration.css'
import IntermidiateExamRegistrationForm from './IntermidiateExamRegistrationForm';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const ExamRegistration = () => {

    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Profile", href: "/CurrentStudent/ViewProfile" },
        { label: "Exam Registration", href: "/CurrentStudent/ExamRegistration" },
        
      ];
      const [studentData, setStudentData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);


      const[preliminaryExamReg, setPreliminaryExamReg] = useState(false);
      const[intermediateExamReg, setIntermediateExamReg] = useState(false);
      const[finalExamReg, setFinalExamReg] = useState(false);
      const[examsDone,setExamsDone] = useState(false);
      const[notEligible,setNotEligible] = useState(false);
      const[preExamRegistred,setPreExamRegistred] = useState(false);
      const[intExamRegistred,setIntExamRegistred] = useState(false);
      const[finalExamRegistred,setFinalExamRegistred] = useState(false);
      const [dataNotFound, setDataNotFound] = useState(false);
      const [doneReg,setdoneReg] = useState(false);
      const [examCall,setExamCall] = useState(false);

      const [examcallData,setExamCallData] = useState(null);
  
      const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
      
        setIsSnackbarOpen(false);
      };
      
      


      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:3001/Student_Status/user", {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            });

              const responsePreliminary = await axios.get(`http://localhost:3001/Preliminary_Exam_Regisration/user`, {
                headers: {
                  accessToken: localStorage.getItem("accessToken"),
                },
              });


            const responseIntermediate = await axios.get("http://localhost:3001/Intermidiate_Exam_Regisration/user", {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            });

            const responseFinal = await axios.get("http://localhost:3001/Final_Exam_Regisration/user", {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            }); 

            const responseExamCalling = await axios.get("http://localhost:3001/Calling_Exam_Registration/user", {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            }); 

        
        if(responseExamCalling.data.Status === "open"){
          setExamCall(true);
          setExamCallData(responseExamCalling.data)
        }

         if (responsePreliminary.data){
      
          if(responsePreliminary.data.Year === responseExamCalling.data.Year && responsePreliminary.data.Montd === responseExamCalling.data.Montd){
        
            setPreExamRegistred(true);
          }
         }

         if (responseIntermediate.data){
          if(responseIntermediate.data.Year === responseExamCalling.data.Year && responseIntermediate.data.Montd === responseExamCalling.data.Montd){
            setIntExamRegistred(true);
          }
         }

         if (responseFinal.data){

          if(responseFinal.data.Year === responseExamCalling.data.Year && responseFinal.data.Montd === responseExamCalling.data.Montd){
            setFinalExamRegistred(true);
          }
         }

            if (response.data.dataNotFound) {
              setDataNotFound(true);
              setPreliminaryExamReg(true);
            } else {
              // If tde response doesn't contain tde flag, set tde studentData in tde state
              setStudentData(response.data);
            }

            setLoading(false); // Set loading to false as tde data is fetched
        
          } catch (error) {
            // If an error occurred during tde fetch or tde student data was not found (404), handle tde error here
            setError(error.message);
            setLoading(false); // Set loading to false as tde data fetching failed
          }
        };
    
        fetchData();
      }, []);

  const RegistrationForm = () => {

        if(!dataNotFound){
          if(studentData.FinalExamPass){
            setdoneReg(true);
          } else if (studentData.IntExamPass) {
              if (studentData.FinalAttempts <= 3){
                setFinalExamReg(true);
              } else {
                setNotEligible(true);
              }
          }else if (studentData.PreExamPass){
            if (studentData.IntAttempts <= 3){
              setIntermediateExamReg(true); 
            } else {
              setNotEligible(true);
            }
          } else if (studentData.PreAttempts <= 3)  {
            setPreliminaryExamReg(true)
          } else {
            setNotEligible(true);
          }
        }
      }
    
      useEffect(() => {
        if(studentData){
          RegistrationForm();
        }
        
      }, [studentData])

     

const formik = useFormik({
  initialValues:{
    bank:'',
    paymentType:'',
    paymentDate:'',
    branchName:'',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: '',
    subject6: '',
    subject7: '',
    subject8: '',
    subject9: '', 
    subject10: '', 
  },

  onSubmit: async (values) =>{



    if(preliminaryExamReg){
      const postResponsePre = await axios.post(
        "http://localhost:3001/Preliminary_Exam_Regisration/",
        {
          Month:examcallData.Month,
          Year: examcallData.Year,
          ReferenceNumber: "REG 200002701840",
          BankName: values.paymentType,
          BranchName: values.branchName,
          TypeOfPayment: values.bank,
          DateOfPayment: values.paymentDate,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        } 
      )
        const ApplicantId = postResponsePre.data.AppID;

        const checkboxpre = [values.checkbox1,values.checkbox2,values.checkbox3,values.checkbox4,values.checkbox5,values.checkbox6,values.checkbox7,values.checkbox8,values.checkbox9,values.checkbox10]
        const subjectspre = ['LW 101','LW 102' ,'LW 103','LW 107','LW 108','LW 203','LW 106','LW 207','LW 210','LW 109']
        const mediumpre = ['english', 'english',values.subject3,values.subject4,'english',values.subject6,values.subject7,values.subject8,values.subject9,values.subject10]

for (let i = 0; i < checkboxpre.length; i++) {
  if(checkboxpre[i]){

    const postResponsePreSubjects = await axios.post(
      "http://localhost:3001/Preliminary_Exam_Selected_Subjects/",
      {
        AppID:ApplicantId,
        SubjectID:subjectspre[i],
        Medium: mediumpre[i]
      },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      } 
    )
  }
}
    } else if (intermediateExamReg){
      const postresponseInt = await axios.post(
        "http://localhost:3001/Intermidiate_Exam_Regisration/",
        {
          Month:examcallData.Month,
          Year: examcallData.Year,
          ReferenceNumber: "REG 200002701840",
          BankName: values.paymentType,
          BranchName: values.branchName,
          TypeOfPayment: values.bank,
          DateOfPayment: values.paymentDate,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        } 
      )

      const ApplicantId = postresponseInt.data.AppID;

      const checkboxpre = [values.checkbox1,values.checkbox2,values.checkbox3,values.checkbox4,values.checkbox5,values.checkbox6,values.checkbox7,values.checkbox8,values.checkbox9,values.checkbox10]
      const subjectspre = ['LW 201','LW 202' ,'LW 203','LW 204','LW 205','LW 206','LW 210','LW 109','LW 207','LW 208']
      const mediumpre = [values.subject1, values.subject2 ,values.subject3,values.subject4,'english',values.subject6,values.subject7,values.subject8,values.subject9,values.subject10]

      for (let i = 0; i < checkboxpre.length; i++) {
        if(checkboxpre[i]){
      
          const postResponsePreSubjects = await axios.post(
            "http://localhost:3001/Intermidiate_Exam_Selected_Subjects/",
            {
              AppID:ApplicantId,
              SubjectID:subjectspre[i],
              Medium: mediumpre[i]
            },
            {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            } 
          )
        }
      }
    }


    setIsSnackbarOpen(true);
            window.location.reload();
  }
   
})

  return (
    <div>
      <StylesProvider injectFirst>
        <div>
          <Header />

          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ marginLeft: "340px", marginTop: "10px" }}
          >
            {breadcrumbLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                underline="hover"
                color={
                  index === breadcrumbLinks.lengtd - 1
                    ? "text.primary"
                    : "inherit"
                }
              >
                {link.label}
              </Link>
            ))}
          </Breadcrumbs>
          <Container fluid>
            <Row>
              <Col md={{ span: 3 }}>
                <Sidebar />
              </Col>
              <Col md={{ span: 9 }}>
                {/* Main Continer  */}
                <Container className="d-flex justify-content-center align-items-center">
                  <Container fluid>
                    <Box style={boxStyles}>
                      {examCall ? (
                        <div>
                          {" "}
                          {doneReg ? (
                            <div>
                              <p>Registration Done...</p>
                            </div>
                          ) : null}
                          {/* Preliminary year Exam Registration */}
                          {preliminaryExamReg ? (
                            <>
                              {!preExamRegistred ? (
                                <>
                                  <Chip label="preliminary year exam registration" />

                                 
                                <form onSubmit={formik.handleSubmit}>
                                  <PreliminaryExamRegistrationForm formik={formik} />
                                  <Button type='submit'>submit</Button>
                                  </form>
                                </>
                              ) : (
                                <div>
                                  <p>
                                    {" "}
                                    You have already been registered for tde
                                    Preliminary year Exams: {
                                      examCall.Year
                                    } - {examCall.Montd}{" "}
                                  </p>
                                </div>
                              )}
                            </>
                          ) : null}
                          {/* Intermediate year Exam Registration */}
                          {intermediateExamReg ? (
                            <>
                              {!intExamRegistred ? (
                                <>
                                <Chip label="Intermediate year exam registration" />
                                  <form onSubmit={formik.handleSubmit}>
                                  <IntermidiateExamRegistrationForm formik={formik} />
                                  <Button type='submit'>submit</Button>
                                  </form>
                               
                                 
                                </>
                              ) : (
                                <div>
                                  <p>
                                    {" "}
                                    You have already been registered for tde
                                    Intermediate year Exams: {
                                      examCall.Year
                                    } - {examCall.Month}{" "}
                                  </p>
                                </div>
                              )}
                            </>
                          ) : null}
                          {/* Final year exam registration */}
                          {finalExamReg ? (
                            <>
                              {!finalExamRegistred ? (
                                <>
                                  <Chip label="Final year exam registration" />
                                  {/* form */}
                                  <form onSubmit={formik.handleSubmit}>
                                  <IntermidiateExamRegistrationForm formik={formik} />
                                  <Button type='submit'>submit</Button>
                                  </form>
                               
                                </>
                              ) : (
                                <div>
                                  <p>
                                    {" "}
                                    You have already been registered for tde
                                    Final year Exams: {examCall.Year} -{" "}
                                    {examCall.Montd}{" "}
                                  </p>
                                </div>
                              )}
                            </>
                          ) : null}
                          {notEligible ? (
                            <div>
                              <p>Not Eligible</p>{" "}
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <div>
                          <p>Exam Registration has not yet being opened...</p>
                        </div>
                      )}
                    </Box>
                  </Container>
                </Container>
              </Col>
            </Row>
          </Container>

          <Footer />
        </div>
      </StylesProvider>



<Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
  <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="success">
    Successfully Registered!
  </MuiAlert>
</Snackbar>

    </div>
  );
}

export default ExamRegistration
