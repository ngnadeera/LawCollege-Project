
import Registration1 from './Header';
import Footer from '../../../../../Footer';
import React from 'react'
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {  StylesProvider } from "@material-ui/core";
import axios from 'axios';
import { useEffect,useState } from 'react';
import Sidebar from '../../Sidebar';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { boxStyles } from '../../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles';

import { Box, Typography, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import TextField from '@mui/material/TextField';
import { storage } from '../../../../../FireBase/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { styled } from "@mui/material/styles";



const StyledInput = styled("input")({
    display: "none",
  });
  
  const UploadButton = styled(Button)({
    marginTop: "16px",
  });

const ExamMedical = () => {

    
    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Profile", href: "/CurrentStudent/ViewProfile" },
        { label: "Exam Admission", href: "/CurrentStudent/Admission" },
        
      ];

      const [isDialogOpen, setDialogOpen] = useState(false);
      const [loading, setLoading] = useState(false);
      const [preliminaryExam,setPreliminaryExam] = useState(false);
      const [intermeadiateExam,setIntermeadiateExam] = useState(false);
      const [finalExam,setFinalExam] = useState(false);
      const[notEligible,setNotEligible] = useState(false);
      const [indexNo,setIndexNo] = useState();
      const [withdrawalOpen,setWithdrawalOpen] = useState(true);
      const [dataExist,setDataExist] = useState(false);
      const [verifyStatus,setVerifyStatus] = useState("");

      const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [uploading, setUploading] = useState(false);


      const navigate = useNavigate();
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  
  useEffect (() => {
    const fetchData = async() => {
        setLoading(true);

        const responseIndexPre = axios.get(
            "http://localhost:3001/Preliminary_Exam_IndexNo/user",
            {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            }
          );
           
          const responseIndexInt = axios.get(
            "http://localhost:3001/Intermidiate_Exam_IndexNo/user",
            {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            }
          );
          

          const responseIndexFinal = axios.get("http://localhost:3001/Final_Exam_IndexNo/user",{
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          });
          

          if ((await responseIndexFinal).data) {
            
            setIndexNo((await responseIndexFinal).data.IndexNo);
            setFinalExam(true);
            setLoading(false);

          } else if ((await responseIndexInt).data) {
           
            setIndexNo((await responseIndexInt).data.IndexNo);
            setIntermeadiateExam(true);
            setLoading(false);

          } else if ((await responseIndexPre).data) {

            setIndexNo((await responseIndexPre).data.IndexNo);
            setPreliminaryExam(true);
            setLoading(false);

            }
              else {
                setLoading(false);
                setNotEligible(true)
              }
    }

    fetchData()
  }, [indexNo])


  useEffect (() => {
    const fetchData = async () => {
        setLoading(true);
       
        if (indexNo && !notEligible){
        
            const responseData = await axios.get(
                `http://localhost:3001/Exam_Medicals/${indexNo}`,
                {
                  headers: {
                    accessToken: localStorage.getItem("accessToken"),
                  },
                }
              );

             if (responseData.data) {
                setDataExist(true)
                if (responseData.data.VerifyStatus == null){
                    setVerifyStatus("pending")
                } else if (responseData.data.VerifyStatus == true){
                    setVerifyStatus("verified");
                } else if (responseData.data.VerifyStatus == false){
                    setVerifyStatus("rejected")
                }
              } else (
                setDataExist(false)
              )

        }
        setLoading(false)
       

    }
    fetchData();

  }, [indexNo])


  const exam = preliminaryExam
  ? "Preliminary Exam"
  : intermeadiateExam
  ? "Intermediate Exam"
  : finalExam
  ? "Final ExamReg"
  : null;

  const handleSubmit = async(values) => {
    handleDialogOpen();

    if (!file) {
        console.log("Please select a file to upload.");
        return;
      }
  
      const pdfRef = ref(storage, `MedicalUploads/${indexNo}/${file.name}`);
      setUploading(true);
  
      uploadBytes(pdfRef, file)
        .then(() => {
          getDownloadURL(pdfRef)
            .then((url) => {
              setUrl(url);
              setUploading(false);
            })
            .catch((error) => {
              console.log(error.message, "error getting the PDF URL");
              setUploading(false);
            });
          setFile(null);
        })
        .catch((error) => {
          console.log(error.message);
          setUploading(false);
        });

        const responseData = await axios.post(
            "http://localhost:3001/Exam_Medicals/",{
                IndexNo : indexNo,
                Description : values.text,
                Date : currentDate,
                Exam : exam,   
            },
            {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            }
          );

};

  const currentDate = new Date();

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
                  {/* Main container */}

                  <Box style={boxStyles}>
                  {!withdrawalOpen ? (
                    <div>
                      <Typography>Exam Withdrawal has been Closed...</Typography>{" "}
                    </div>
                  ) : !dataExist ? (
                    <>
                      {/* Formik form for medical request */}
                      <Formik
                        initialValues={{
                          reason: "",
                          agreeToTerms: false,
                        }}
                        onSubmit={handleSubmit}
                      >
                        {({ values, handleChange }) => (
                          <Form>
                            <Typography variant="h6">
                              Exam Medical Request:
                            </Typography>

                            <Typography
                              variant="body1"
                              style={{ marginTop: "10px" }}
                            >
                              Students who are currently registered for exams have the option to apply for medical accommodations, if needed. To initiate the process, students must submit relevant medical documents to support their exam medical requests. These documents will undergo a careful verification process to ensure the validity of the requests.

Once the verification is successfully completed, the necessary exam medical accommodations will be put in place for the student.
                            </Typography>

                            <div style={{ marginTop: "10px" }}>
                              <Typography variant="body1" component="span">
                                Your Currently Registered Exam :{" "}
                                <Chip
                                  color="primary"
                                  style={{ fontSize: "15px" }}
                                  label={
                                    preliminaryExam
                                      ? "Preliminary Exam"
                                      : intermeadiateExam
                                      ? "Intermediate Exam"
                                      : finalExam
                                      ? "Final ExamReg"
                                      : null
                                  }
                                />{" "}
                              </Typography>
                            </div>

                            <div style={{ marginTop: "20px" }}>
                              <TextField
                                id="text"
                                name="text"
                                label="Reason for the medical request"
                                onChange={handleChange}
                                multiline
                                required
                                sx={{ width: "50%" }}
                                maxRows={4}
                              />
                            </div>

                            <div style={{ marginTop: "30px" }}>
                              <Typography variant="body1" component="span">
                                Please upload relevant Documents to verify your Medical request :{' '}
                              </Typography>
                              <input type="file" accept=".pdf" onChange={handleFileChange} />
                            </div>

                            <Container>
                              <Box sx={{ marginTop: "30px" }}>
                                <StyledInput
                                  accept=".pdf"
                                  id="pdf-input"
                                  type="file"
                                  onChange={handleFileChange}
                                />

                                {file && <p>Selected file: {file.name}</p>}
                                {uploading && <p>Uploading...</p>}
                                {url && (
                                  <div>
                                    <p>Uploaded PDF URL:</p>
                                    <a href={url} target="_blank" rel="noreferrer">
                                      {url}
                                    </a>
                                  </div>
                                )}
                              </Box>
                            </Container>

                            <div style={{ marginTop: "20px" }}>
                              <Checkbox
                                name="agreeToTerms"
                                checked={values.agreeToTerms}
                                onChange={handleChange}
                                color="primary"
                              />
                              <Typography variant="body1" component="span">
                                I agree to the terms and conditions.
                              </Typography>
                            </div>

                            <div style={{ marginTop: "20px" }}>
                              <Button type="submit" variant="primary">
                                Submit Medical Request
                              </Button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </>
                  ) : verifyStatus === "pending" ? (
                    <>
                      <Typography>Exam Medical Request Approval is Pending...</Typography>
                    </>
                  ) : verifyStatus === "verified" ? (
                    <>
                      <Typography>your exam medical request has been approved!...</Typography>
                    </>
                  ) : verifyStatus === "rejected" ? (
                    <>
                      <Typography>your exam medical request has been rejected!...</Typography>
                    </>
                  ) : null}
                  </Box>
                </Col>
              </Row>
            </Container>

            <Footer />
          </div>
        </StylesProvider>

        <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to submit the exam withdrawal request?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            onClick={handleDialogClose}
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
}

export default ExamMedical
