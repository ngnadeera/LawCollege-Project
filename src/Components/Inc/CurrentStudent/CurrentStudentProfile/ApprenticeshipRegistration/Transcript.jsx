import React from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StylesProvider } from "@material-ui/core";
import {
  Box,
  Typography,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { boxStyles } from "../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles";
import Registration1 from "../Cmp/Header";
import Footer from "../../../Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../Cmp/Sidebar";
import { useFormik } from "formik";
import Payment from "./Payment";
import { CoPresent } from "@mui/icons-material";
import { InnerBoxStyles } from "../../../../Pages/Registration/GeneralApplicant/Cmp/InnerBoxStyels";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import { useReactToPrint } from 'react-to-print';
import { useRef } from "react";
import './AdmissionCard.css';
import image from './Logo.png'
import ExamMedical from "../Cmp/ExamRegistration/ExamMedicals/ExamMedical";

const Transcript = () => {
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/CurrentStudent/ViewProfile" },
    { label: "Exam Admission", href: "/CurrentStudent/Admission" },
  ];

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Addmission Card'
    // onAfterPrint: () => alert('Print Success')
  });

 const RegNo = 39500;
  const [PreExamResults, setPreExamResults] = useState([]);
  const [PersonalDetails, setPersonalDetails] = useState({});
  const [Avg, setAvg] = useState(0);
  const [Apprenticeship, setApprenticeship] = useState();
  const [medical,setMedical] = useState(false);
  const [classValue,setClassValue]  = useState('');



//   if (Avg > 70) {
//     classValue = '1st Class Honours pass';
//   } else if (Avg >= 60 && result.Average <= 70) {
//     classValue = '2nd Class Honours pass';
//   } else {
//     classValue = 'General Class Pass';
//   }

  useEffect(() => {

     axios.get("http://localhost:3001/Student_Status/user",
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      ).then((response) => {
        const status = response.data.ApprenticeshipPass || false;
        setApprenticeship(status)
      })
      .catch((error) => {
        console.error(error);
      });



      axios.get("http://localhost:3001/Exam_Medicals/user/medical",
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      ).then((response) => {
        if (response.data){
            setMedical(true)
        } else {
            setMedical(false)
        }

      })
      .catch((error) => {
        console.error(error);
      });


    axios
      .get(`http://localhost:3001/Preliminary_exam_results/`,
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
    )
      .then((response) => {
        const filteredData = response.data.filter((applicant) => applicant.Grade === 'PASS');
        setPreExamResults(filteredData);
        setAvg(filteredData[0].Average)
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`http://localhost:3001/Student_personal_details/${RegNo}`,
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
    )
      .then((response) => {
        setPersonalDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
       
      });
  }, [RegNo]);


useEffect (() => {
 
    if (Avg){
       
        if (Avg > 70 && !medical){
   
            setClassValue('1st Class');
        } else if (Avg > 60) {
                setClassValue('2nd Class')
    
        } else {
            setClassValue('General')
        
        }
    }

},[medical,Avg])










  let Citizenship
  if (PersonalDetails.SrilankaCitizenship){
    Citizenship = 'yes'
  } else {
    Citizenship = 'no'
  }

 

  return (
    <div>
      <StylesProvider injectFirst>
        <div>
          <Registration1 />

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
             <Col>

             <Container>

                {Apprenticeship ? (
                

                <div>

                <div className="align-center">
                  <div ref={componentRef}>
                    <Box sx={{ width: '21cm', height: '29.7cm', boxShadow: 3 }}>
                        {/* <p>Electrically generated Document</p> */}
                      <div style={{ width: '21cm', height: '29.7cm', padding: '0.7cm' }}>
                      <div className="logo-container d-flex justify-content-end flex-column align-items-center">
      <img src={image} width={100} height={100} alt="Logo" />
      <Typography variant="h6">Sri Lanka Law College</Typography>
    </div>
    <Typography className="align-center" variant="h6">The Incorparated Council of Legal Education</Typography>
                        <Typography className="align-center" style={{marginTop:'30px', fontSize:'20px'}}><b>Auto-Generated Transcript</b></Typography>
                        
                        

                        <table>
                          <tr>
                            <td>This document has been generated electronically by the College's records. To verify the authenticity
of the information in this document you are advised to contact the University of Bath. Further information is provided on the
University website at https://www.lawcollege.lk/.</td>
                          </tr>
                        </table>


                        
                
                        <table>
                          <tr>
                            <td>Registration Number </td>
                            <td><b>{PersonalDetails.RegNo}</b></td>
                          </tr>
                          <tr>
                            <td>Full Name</td>
                            <td>
                              <b>{PersonalDetails.Title} {PersonalDetails.NameInFull}</b>
                            </td>
                          </tr>
                          <tr>
                            <td>NIC Number</td>
                            <td><b>{PersonalDetails.NIC}</b></td>
                          </tr>
                        </table>

                        <div style={{ width: '50%' }}>
      <table>
        <tr>
          <td>Started Date</td>
          <td><b>{PersonalDetails.StartedDate}</b></td>
        </tr>
        <tr>
          <td>Citizenship</td>
          <td><b>{Citizenship}</b></td>
        </tr>
        <tr>
          <td>Date of Birth</td>
          <td><b>{PersonalDetails.DOB}</b></td>
        </tr>
        <tr>
          <td>Awarded class</td>
          <td><b>{classValue}</b></td>
        </tr>
      </table> 
      {medical ? (
        <Typography style={{fontSize:'12px'}}><i>You have a medical submitted</i></Typography>
      ) : null}
      
    </div>
                
                
                   <Typography style={{marginTop:'30px', fontSize:'15px'}}><b>Preliminary Year Exam Results</b></Typography>
                
                        {PreExamResults.map((result) => (
                          <table key={result.IndexNo}>
                            <tr>
                              <td>LW101</td>
                              <td>Criminal Law</td>
                              <td>{result.LW101}</td>
                            </tr>
                            <tr>
                              <td>LW102</td>
                              <td>Legal History & Legal System</td>
                              <td>{result.LW102}</td>
                            </tr>
                            <tr>
                              <td>LW103</td>
                              <td>Law of Persons</td>
                              <td>{result.LW103}</td>
                            </tr>
                            <tr>
                              <td>LW106</td>
                              <td>Legislative Drafting and Statut3ory Interpretation</td>
                              <td>{result.LW106}</td>
                            </tr>
                            <tr>
                              <td>LW107</td>
                              <td>Law of Obligations - I</td>
                              <td>{result.LW107}</td>
                            </tr>
                            <tr>
                              <td>LW108</td>
                              <td>Industrial Law</td>
                              <td>{result.LW108}</td>
                            </tr>
                            <tr>
                              <td>LW109</td>
                              <td>Conflict of Laws</td>
                              <td>{result.LW109}</td>
                            </tr>
                            <tr>
                              <td>LW203</td>
                              <td>Constitutional Law</td>
                              <td>{result.LW203}</td>
                            </tr>
                            <tr>
                              <td>LW210</td>
                              <td>Environmental Law</td>
                              <td>{result.LW210}</td>
                            </tr>
                            <tr>
                              <td colSpan={2}>Total</td>
                              <td><b>{result.Total}</b></td>
                            </tr>
                            <tr>
                              <td colSpan={2}>Average</td>
                              <td><b>{result.Average}</b></td>
                            </tr>
                          </table>
                        ))}
                      </div>
                    </Box>
                    <Box sx={{ width: '21cm', height: '29.7cm', boxShadow: 3 }}>
                      <div style={{ width: '21cm', height: '29.7cm', padding: '0.7cm' }}>
                        <h3>Intermediate Year Exam Results</h3>
                
                        {PreExamResults.map((result) => (
                          <table key={result.IndexNo}>
                            <tr>
                              <td>LW101</td>
                              <td>Criminal Law</td>
                              <td>{result.LW101}</td>
                            </tr>
                            <tr>
                              <td>LW102</td>
                              <td>Legal History & Legal System</td>
                              <td>{result.LW102}</td>
                            </tr>
                            <tr>
                              <td>LW103</td>
                              <td>Law of Persons</td>
                              <td>{result.LW103}</td>
                            </tr>
                            <tr>
                              <td>LW106</td>
                              <td>Legislative Drafting and Statut3ory Interpretation</td>
                              <td>{result.LW106}</td>
                            </tr>
                            <tr>
                              <td>LW107</td>
                              <td>Law of Obligations - I</td>
                              <td>{result.LW107}</td>
                            </tr>
                            <tr>
                              <td>LW108</td>
                              <td>Industrial Law</td>
                              <td>{result.LW108}</td>
                            </tr>
                            <tr>
                              <td>LW109</td>
                              <td>Conflict of Laws</td>
                              <td>{result.LW109}</td>
                            </tr>
                            <tr>
                              <td>LW203</td>
                              <td>Constitutional Law</td>
                              <td>{result.LW203}</td>
                            </tr>
                            <tr>
                              <td>LW210</td>
                              <td>Environmental Law</td>
                              <td>{result.LW210}</td>
                            </tr>
                            <tr>
                              <td colSpan={2}>Total</td>
                              <td>{result.Total}</td>
                            </tr>
                            <tr>
                              <td colSpan={2}>Average</td>
                              <td>{result.Average}</td>
                            </tr>
                          </table>
                        ))}
                
                        <h3>Final Year Exam Results</h3>
                
                        {PreExamResults.map((result) => (
                          <table key={result.IndexNo}>
                            <tr>
                              <td>LW101</td>
                              <td>Criminal Law</td>
                              <td>{result.LW101}</td>
                            </tr>
                            <tr>
                              <td>LW102</td>
                              <td>Legal History & Legal System</td>
                              <td>{result.LW102}</td>
                            </tr>
                            <tr>
                              <td>LW103</td>
                              <td>Law of Persons</td>
                              <td>{result.LW103}</td>
                            </tr>
                            <tr>
                              <td>LW106</td>
                              <td>Legislative Drafting and Statut3ory Interpretation</td>
                              <td>{result.LW106}</td>
                            </tr>
                            <tr>
                              <td>LW107</td>
                              <td>Law of Obligations - I</td>
                              <td>{result.LW107}</td>
                            </tr>
                            <tr>
                              <td>LW108</td>
                              <td>Industrial Law</td>
                              <td>{result.LW108}</td>
                            </tr>
                            <tr>
                              <td>LW109</td>
                              <td>Conflict of Laws</td>
                              <td>{result.LW109}</td>
                            </tr>
                            <tr>
                              <td>LW203</td>
                              <td>Constitutional Law</td>
                              <td>{result.LW203}</td>
                            </tr>
                            <tr>
                              <td>LW210</td>
                              <td>Environmental Law</td>
                              <td>{result.LW210}</td>
                            </tr>
                            <tr>
                              <td colSpan={2}>Total</td>
                              <td>{result.Total}</td>
                            </tr>
                            <tr>
                              <td colSpan={2}>Average</td>
                              <td>{result.Average}</td>
                            </tr>
                          </table>
                        ))}
                      </div>
                    </Box>
                  </div>
                </div>
                <div className="align-center" style={{ marginTop: '1cm' }}>
                  <Button variant="contained" onClick={handlePrint}>
                    Print the Addmission Card
                  </Button>
                </div>
                </div>
                
                
            
                ): 
                (
                    <Box style={boxStyles}>
                <div>You are not qualified</div>
                </Box>)
                }


          







             </Container>



            
             </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </StylesProvider>
    </div>
  );
};

export default Transcript;
