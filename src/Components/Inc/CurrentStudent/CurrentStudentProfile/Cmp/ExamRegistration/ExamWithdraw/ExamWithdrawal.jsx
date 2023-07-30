import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Box, Typography, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, Chip } from '@mui/material';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { StylesProvider } from '@material-ui/core';
import Footer from '../../../../../Footer';
import Registration1 from '../Header';
import Sidebar from '../../Sidebar';
import { boxStyles } from '../../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const ExamWithdrawal = () => {
  const breadcrumbLinks = [
    { label: 'Home', href: '/' },
    { label: 'Profile', href: '/CurrentStudent/ViewProfile' },
    { label: 'Exam Admission', href: '/CurrentStudent/Admission' },
  ];

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preliminaryExam,setPreliminaryExam] = useState(false);
  const [intermeadiateExam,setIntermeadiateExam] = useState(false);
  const [finalExam,setFinalExam] = useState(false);
  const[notEligible,setNotEligible] = useState(false);
  const [indexNo,setIndexNo] = useState();
  const [withdrawalOpen,setWithdrawalOpen] = useState(false);
  const [dataExist,setDataExist] = useState(false);
  

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

 

  useEffect (() => {
    const fetchData = async() => {
        setLoading(true);

        const response = axios.get("http://localhost:3001/Calling_withdrawals/user",
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        });

        if (( await response).data){
            if(((await response).data.Status)){
                setWithdrawalOpen(true)
            }else {
                setWithdrawalOpen(false);
            }
        }

       

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

  const exam = preliminaryExam
  ? "Preliminary Exam"
  : intermeadiateExam
  ? "Intermediate Exam"
  : finalExam
  ? "Final ExamReg"
  : null;

  const currentDate = new Date();


  const handleSubmit = async(values) => {
    handleDialogOpen();

    const response = await axios.post(
        "http://localhost:3001/Exam_Withdrawal/",{
            IndexNo: indexNo,
            Exam: exam,
            Description: values.text,
            Date: currentDate
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      );

    if (intermeadiateExam){
        const responseDel = await axios.delete(
            `http://localhost:3001/Intermidiate_exam_IndexNo/${indexNo}`,
            {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            }
          );
    }

    if (preliminaryExam){
        const responseDel = await axios.delete(
            `http://localhost:3001/Preliminary_Exam_IndexNo/${indexNo}`,
            {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            }
          );
    }

    if (finalExam){
        const responseDel = await axios.delete(
            `http://localhost:3001/Final_exam_IndexNo/${indexNo}`,
            {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            }
          );
    }

      alert("submitted")

  };

  
console.log(dataExist)
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

              <Col md={{ span: 9 }} style={{marginTop:'20px'}}>
                {/* Main container */}
                <Box style={boxStyles}>


                    {!withdrawalOpen ? (
                        <div><Typography>Exam Withdrawal has been Closed...</Typography> </div>
                    ) : (
                        <>
                        
                        <Formik
                    initialValues={{
                      reason: "",
                      agreeToTerms: false,
                    }}
                    onSubmit={handleSubmit}
                  >
                    {({ values, handleChange }) => (
                      <Form>
                        <Typography variant="h6" >
                          Exam Withdrawal Instructions:
                        </Typography>
                        
                        <Typography variant="body1" style={{ marginTop: "10px" }}>
                          In order to withdraw their application, any student
                          who wishes to do so shall have the flexibility to
                          initiate the process at any time, provided it is not
                          less than one week before the scheduled commencement
                          of the examination.
                        </Typography>

                        <div style={{ marginTop: "10px" }}>
                            <Typography variant="body1" component="span">Your Currently Registered Exam : <Chip color='primary' style={{fontSize:'15px'}} label={preliminaryExam ? "Preliminary Exam" : intermeadiateExam ? "Intermediate Exam" : finalExam ? "Final ExamReg" : null }/> </Typography>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                          <TextField
                            id="text"
                            name="text"
                            label="Description"
                            onChange={handleChange}
                            multiline
                            required
                            sx={{ width: "50%" }}
                            maxRows={4}
                          />
                        </div>

                        
                       

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
                            Submit Exam Withdrawal
                          </Button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                        
                        
                        
                        
                        </>
                    ) }
                 
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
};

export default ExamWithdrawal;
