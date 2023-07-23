import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { boxStyles } from '../../../GeneralApplicant/Cmp/BoxStyles';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from '@mui/joy/Table';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { InnerBoxStyles } from '../../../GeneralApplicant/Cmp/InnerBoxStyels';

const ExamResults = () => {
  const [userId, setUserId] = useState();
  const [personalDetails, setPersonalDetails] = useState({});
  const [entranceExamResults, setEntranceExamResults] = useState({});
  const [indexNumber, setIndexNo] = useState();
  const [status, setStatus] = useState();
  const [overallScore, setOverallScore] = useState();
  const threshold = 45;

  useEffect(() => {
    axios
      .get("http://localhost:3001/GEA_personal_details/userId", {
        headers: {
          accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
        },
      })
      .then((response) => {
        setUserId(response.data);
      });
  }, []);

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:3001/GEA_personal_details/${userId}`, {
          headers: {
            accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
          },
        })
        .then((response) => {
          setPersonalDetails(response.data);
        });

      axios.get(`http://localhost:3001/Entrance_exam_admission/${userId}`)
        .then((response) => {
          setIndexNo(response.data.IndexNo);
        });
    }

  }, [userId]);

  useEffect(() => {
    if (indexNumber) {
      axios.get(`http://localhost:3001/Entrance_exam_results/${indexNumber}`)
        .then((response) => {
          setEntranceExamResults(response.data);
        });
    }
  }, [indexNumber]);

  useEffect(() => {

    if (entranceExamResults){
    if (entranceExamResults.LangMarks && entranceExamResults.GKMarks) {
      const totalScore = (entranceExamResults.LangMarks + entranceExamResults.GKMarks) / 2;
      setOverallScore(totalScore);
    }
  
    if (overallScore) {
      if (entranceExamResults.LangMarks >= threshold && entranceExamResults.GKMarks >= threshold && overallScore >= threshold) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    }
}
  }, [entranceExamResults, overallScore]);

 



  const isentranceExamResultsempty = Object.keys(entranceExamResults).length === 0;




  return (
    <>

    {!isentranceExamResultsempty? (<div>
      <Box style={boxStyles}>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center align-items-center" >
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "rgba(0, 0, 0, 0.7)",
                  marginTop: "10px",
                  marginBottom: "20px"
                }}
              >
                Entrance Exam results
              </Typography>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center align-items-center" >
              <p>Full Name:<b> {personalDetails.NameInFull} </b></p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center align-items-center" >
              <p>IndexNo: <b>{entranceExamResults.IndexNo}</b></p>
            </Col>
          </Row>

          <Table aria-label="basic table">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Index No</th>
                <th>Language Paper</th>
                <th>General Knowledge Paper</th>
                <th>Overall Score</th>
                <th>Status&nbsp;(pass/fail)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{entranceExamResults.IndexNo}</td>
                <td>{entranceExamResults.LangMarks}</td>
                <td>{entranceExamResults.GKMarks}</td>
                <td>{overallScore}</td>
                <td>
                  {status ? (
                    <Chip
                      label="Qualified"
                      color="success"
                      avatar={<CheckCircleIcon style={{ color: 'white' }} />}
                    />
                  ) : (
                    <Chip
                      label="Disqualified"
                      color="error"
                      avatar={<CancelIcon style={{ color: 'white' }} />}
                    />
                  )}
                </td>
              </tr>
            </tbody>
          </Table>


{status ? (<Box  style={{margin:"40px"}}>
          <Container  style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
      }}>
      

         <CheckCircleIcon sx={{ fontSize: 55, color: 'green' }} /> 

            <Typography
              style={{
                fontSize: "25px",
                color: "rgba(0, 0, 0, 0.7)",
              }}
            >
              
              Congratulations 
             
              </Typography>
              <p>You have been qualified as an internal student of the Law college SriLanka</p>
    

              
              </Container>
         </Box> ):
         
         (<Box  style={{margin:"40px"}}>
          <Container  style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
      }}>
      

         <CancelIcon  color="error" sx={{ fontSize: 55 }} /> 

            <Typography
              style={{
                fontSize: "25px",
                color: "rgba(0, 0, 0, 0.7)",
              }}
            >
              
              Disqualified 
             
              </Typography>
              <p style={{marginBottom:"2px"}}>Unfortunately you have not been selected as an Internal student of Law College</p>
              <p>Good Luck.Thanks for applying</p>


    

              
              </Container>
         </Box> )}

         <p  style={{
                fontSize: "15px",
                color: "rgba(0, 0, 0, 0.7)",
              }}><i>Qualification Criteria : To meet the qualification criteria, the overall score must exceed {threshold}, with both the language paper and general knowledge paper marks surpassing {threshold}. Additionally, other relevant qualifications may also apply. </i></p>
          
        </Container>
      </Box>


    
    </div>) : (<div>

        <Box sx={InnerBoxStyles} style={{margin:"40px"}}>
          <Container  style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
      }}>

         <CancelIcon color='error' sx={{ fontSize: 55}} /> 
  
      
            <Typography
              style={{
                fontSize: "25px",
                color: "rgba(0, 0, 0, 0.7)",
              }}
            >
              
              Exam Results has not yet been released.
             
              </Typography>
              <p>Once Exam Results been released you can view it from here</p>
            

              
              </Container>
         </Box> 
    </div>)}
    
    </>
  )
}

export default ExamResults;
