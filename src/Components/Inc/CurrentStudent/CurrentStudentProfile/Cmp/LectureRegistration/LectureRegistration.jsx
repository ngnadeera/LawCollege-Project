import React from 'react'
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Chip, StylesProvider } from "@material-ui/core";
import Header from './Header'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Sidebar from '../Sidebar';
import { Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Footer from '../../../../Footer';
import { boxStyles } from '../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles';
import {Box} from '@mui/material';
import { useFormik } from "formik";
import Preliminary_lecture_regisrations from './Preliminary_lecture_regisrations'

const LectureRegistration = () => {

    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Profile", href: "/CurrentStudent/ViewProfile" },
        { label: "Lecture Registration", href: "/CurrentStudent/LectureRegistration" },
        
      ];

      //UseStates

      const [studentData, setStudentData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [dataNotFound, setDataNotFound] = useState(false);
      const [preliminaryLecReg,setPreliminaryLecReg] = useState(false);
      const [intermediateLecReg,setIntermediateLecReg] = useState(false);
      const [finalLecReg,setFinalLecReg] = useState(false);
      const [doneReg,setdoneReg] = useState(false);
      const [notEligible,setNotEligible] = useState(false);
      const [preliminaryLecRegistred,setPreliminaryLecRegistred] = useState(false);
      const [intermediateLecRegistred,setIntermediateLecRegistred] = useState(false);
      const [FinalYearRegistred,setFinalYearRegistred] = useState(false);


      // registration call
      const [registrationCall, setRegistrationCall] = useState(true);

      const currentYear = new Date().getFullYear();


      //UseEffects

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:3001/Student_Status/user", {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            });

            const responsePreliminary = await axios.get("http://localhost:3001/Preliminary_Lecture_Regisration/user", {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            });

            const responseIntermediate = await axios.get("http://localhost:3001/Intermidiate_Lecture_Regisration/user", {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            });

            const responseFinal = await axios.get("http://localhost:3001/Final_Lecture_Regisration/user", {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            }); 

         if (responsePreliminary.data){
          if(responsePreliminary.data.Year === currentYear){
            setPreliminaryLecRegistred(true);
          }
         }

         if (responseIntermediate.data){
          if(responseIntermediate.data.Year == currentYear){
            setIntermediateLecRegistred(true);
          }
         }

         if (responseFinal.data){
          if(responseFinal.data.Year == currentYear){
            console.log(responseFinal.data.Year)
            setFinalYearRegistred(true);
          }
         }

            if (response.data.dataNotFound) {
              setDataNotFound(true);
              setPreliminaryLecReg(true);
            } else {
              // If the response doesn't contain the flag, set the studentData in the state
              setStudentData(response.data);
            }

            setLoading(false); // Set loading to false as the data is fetched
          } catch (error) {
            // If an error occurred during the fetch or the student data was not found (404), handle the error here
            setError(error.message);
            setLoading(false); // Set loading to false as the data fetching failed
          }
        };
    
        fetchData();
      }, []);


      const RegistrationForm = () => {

        if(!dataNotFound){
          if(studentData.FinalYearReg){
           if (studentData.FinalExamPass){
            setdoneReg(true);
           }else {
            setFinalLecReg(true);
           }
            
          } else if (studentData.IntYearReg) {
              if (studentData.IntAttempts <= 1 || studentData.IntExamPass){
                setFinalLecReg(true);
        
              } else {
                setNotEligible(true);
            
              }
          }else if(studentData.PreYearReg){
            if (studentData.PreAttempts <= 1 || studentData.PreExamPass){
              setIntermediateLecReg(true);
              
            } else {
              setNotEligible(true);
        
            }
          } else {
            setPreliminaryLecReg(true)
         
          }
        }
      }

      useEffect(() => {
        if(studentData){
          RegistrationForm();
        }
        
      }, [studentData])

      
  const formik = useFormik({
    initialValues: {
   
      BankName:'',
      BranchName:'',
      TypeOfPayment:'',
      DateOfPayment:''
    },



    onSubmit: async (values) => {
      try {
            if (preliminaryLecReg) {
              const postResponsePre = await axios.post(
                "http://localhost:3001/Preliminary_Lecture_Regisration/",
                {
                  Year: currentYear,
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
              ;
            } else if (intermediateLecReg) {
              const postResponseInt = await axios.post(
                "http://localhost:3001/Intermidiate_Lecture_Regisration/",
                {
                  Year: currentYear,
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
              );
            } else if (finalLecReg) {
              const postResponseInt = await axios.post(
                "http://localhost:3001/Final_Lecture_Regisration/",
                {
                  Year: currentYear,
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
              );
            }
                    


      }catch {

      }
      
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
                  index === breadcrumbLinks.length - 1
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
                      {registrationCall ? (
                        <>
                          {doneReg ? (
                            <div>
                              <p>Registration Done..</p>
                            </div>
                          ) : null}

                          {/* Preliminary Year Lec Registration */}

                          {preliminaryLecReg ? (
                            <>
                              {!preliminaryLecRegistred ? (
                                <>
                                  <Chip label="Preliminary Year" />
                                  <form onSubmit={formik.handleSubmit}>
                                  <Preliminary_lecture_regisrations
                                    formik={formik}
                                  />
                                  <div className='d-flex justify-content-end align-items-end' style={{marginTop:"20px"}}>
                                  <Button type='submit'>Register</Button>
                                  </div>
                                </form>
                                </>
                              ) : (
                                <div>
                                  <p>
                                    You have already been registered for the
                                    Preliminary year: {currentYear}
                                  </p>
                                </div>
                              )}
                            </>
                          ) : null}

                          {/* Intermediate Year Lec Registration */}

                          { intermediateLecReg ? (
                            <>
                              {!intermediateLecRegistred ? (
                                <>
                                  <Chip label="Intermediate Year" />
                                  <form onSubmit={formik.handleSubmit}>
                                  <Preliminary_lecture_regisrations
                                    formik={formik}
                                  />
                                  <div className='d-flex justify-content-end align-items-end' style={{marginTop:"20px"}}>
                                  <Button type='submit'>Register</Button>
                                  </div>
                                </form>
                                </>
                              ) : (
                                <div>
                                  <p>
                                    You have already been registered for the
                                    Intermediate year: {currentYear}
                                  </p>
                                </div>
                              )}
                            </>
                          ) : null}

                        { finalLecReg ? (
                            <>
                              {!FinalYearRegistred ? (
                                <>
                                  <Chip label="Final Year" />
                                  <form onSubmit={formik.handleSubmit}>
                                  <Preliminary_lecture_regisrations
                                    formik={formik}
                                  />
                                  <div className='d-flex justify-content-end align-items-end' style={{marginTop:"20px"}}>
                                  <Button type='submit'>Register</Button>
                                  </div>
                                </form>
                                </>
                              ) : (
                                <div>
                                  <p>
                                    You have already been registered for the
                                    Final year: {currentYear}
                                  </p>
                                </div>
                              )}
                            </>
                          ) : null}

                          {notEligible ? ( <div><p>Not Eligible</p> </div>) : null}


                        </>
                      ) : (
                        <p>Registration has not been opened yet....</p>
                      )}
                    </Box>
                  </Container>
                </Container>

                {/* Main Continer  */}
              </Col>
            </Row>
          </Container>

          <Footer />
        </div>
      </StylesProvider>
    </div>
  );
}

export default LectureRegistration
