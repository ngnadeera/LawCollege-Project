import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './AdmissionCard.css';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { Box, Grid, Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import { InnerBoxStyles } from '../../../GeneralApplicant/Cmp/InnerBoxStyels';

const AdmissionCard = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Addmission Card'
  });

  const [AdmissionDetails, setAdmissionDetails] = useState({});
  const [ExamTimeDate, setExamTimeDate] = useState({});
  const [indexNo,setIndexNo] = useState();
  const [userId,setUserId] = useState();


  useEffect(() => {

    axios.get("http://localhost:3001/GEA_personal_details/userId",
    {
      headers: {
        accessTokenApplicant: localStorage.getItem(
          "accessTokenApplicant"
        ),
      },
    }
    ).then((response) =>{ 
      setUserId(response.data)
    });

  },[userId])


  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:3001/View_entexmaddmilist/${userId}`).then((response) => {
        setAdmissionDetails(response.data);
      });
  
      axios.get(`http://localhost:3001/Entrance_exam_admission/${userId}`).then((response) => {
        setIndexNo(response.data.IndexNo);
      });
  
      axios.get(`http://localhost:3001/Entrance_exam_date_time/1`).then((response) => {
        setExamTimeDate(response.data);
      });
    }
  }, [userId]);
  

  return (
    <>
    {AdmissionDetails? (
    <div>

        <div className="align-center">
          <Box sx={{ width: '21cm', height: '29.7cm', boxShadow: 3 }}>
            <div ref={componentRef} style={{ width: '21cm', height: '29.7cm', padding: '0.7cm' }}>
              <div style={{ fontSize: '9pt', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                <p>
                  You must bring this admission and signature form to the examination hall on the examination day. Do not write on this
                  before an Invigilator/Supervisor gives instructions.
                </p>
              </div>
              <div></div>
              <div className="align-center">
                <b>The Incorparated Council of Legal Education</b>
              </div>
              <div className="align-center">
                <b>Sri Lanka Law College</b>
              </div>
              <div className="align-center">
                <b>General Entrance Examination - 20xx(for the acedemic year 20xx)</b>
              </div>
              <div className="align-center">
                <u>
                  <b>Admission and Signature Form</b>
                </u>
              </div>
              <table>
                <tr>
                  <td colSpan="3" rowSpan="2" style={{ width: '12.5cm' }}>
                    <div>Name of the Candidate:</div>
                    <div>
                      <b>{AdmissionDetails.NameInFull}</b>
                    </div>
                  </td>
                  <td colSpan="2">
                    Index Number:<b>{indexNo}</b>{' '}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    NIC Number: <b>{AdmissionDetails.NIC}</b>
                  </td>
                </tr>
                <tr>
                  <td colSpan="5">
                    Exam Center: <b>{AdmissionDetails.Name}</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '4cm', height: '1cm' }}>Date</td>
                  <td style={{ width: '5.5cm', height: '1cm' }}>Subject</td>
                  <td>Medium</td>
                  <td>Signature of Candidate</td>
                  <td>Initals of Invigilator</td>
                </tr>
                <tr>
                  <td style={{ width: '4cm', height: '1cm' }}>
                    <div className="align-center">
                      <b>{ExamTimeDate.Date}</b>
                    </div>
                    <div className="align-center">
                      <b>{ExamTimeDate.GKTime}</b>
                    </div>
                  </td>
                  <td style={{ width: '4cm', height: '1cm' }}>
                    <b>General Knowledge and General Intelligence Paper</b>
                  </td>
                  <td style={{ width: '2cm', height: '1cm' }}>
                    <b>{AdmissionDetails.GKMedium}</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style={{ width: '4cm', height: '1cm' }}>
                    <div className="align-center">
                      <b>{ExamTimeDate.Date}</b>
                    </div>
                    <div className="align-center">
                      <b>{ExamTimeDate.LangTime}</b>
                    </div>
                  </td>
                  <td style={{ width: '4cm', height: '1cm' }}>
                    <b>Language Paper</b>
                  </td>
                  <td style={{ width: '2cm', height: '1cm' }}>
                    <b>{AdmissionDetails.LanguageMedium}</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="2">Date:</td>
                  <td colSpan="3">Signature of Supervisor</td>
                </tr>
              </table>
              <div style={{ fontSize: '9pt', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                <div style={{ marginBottom: '-0.05cm', fontWeight: 'bold' }}>You must note:</div>
                <p style={{ marginTop: '-0.05cm' }}>
                  If any informatin given by you is found to be incorrect, false or intend to mislead the Council of Legal Education, you
                  are liable to be disqualified. If such information is discovered after admission, you are liable to be expelled form this
                  College. Legal action can be instituted under chapter XVIII of the Penal Code and/or any other statue against you.
                </p>
                <div style={{ marginBottom: '-0.05cm', fontWeight: 'bold' }}>Declaration:</div>
                <p style={{ marginTop: '-0.05cm', marginBottom: '-0.05cm' }}>I do hearby declare that;</p>
                <p style={{ marginTop: '-0.05cm', marginBottom: '-0.05cm' }}>
                  (i) I have read and understood the requirments for admission to the Sri Lnaka Lae College and I have the necessary
                  qualifications for admission as indicated in my application:
                </p>
                <p style={{ marginTop: '-0.05cm', marginBottom: '-0.05cm' }}>
                  (ii) I am fully aware that if any information given by me herein is found to be incorrect, false or intended to mislead
                  the Council of Legal Education, I am liable to be disqualified and if such information is discovered after admission, I am
                  liable to be expelled from the College.
                </p>
              </div>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div style={{ paddingTop: '1cm' }}>DATE: ........./.........../..............</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="align-center">
                    <Box sx={{ width: '7.5cm', height: '1.5cm', border: 1, marginBottom: '-0.05cm' }} />
                  </div>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <div className="align-center" style={{ fontSize: '9pt', marginTop: '-0.05cm' }}>
                    SIGNATURE OF APPLICANT
                  </div>
                  <div className="align-center" style={{ fontSize: '7.5pt' }}>
                    (Pace your signature inside the box without touching border lines)
                  </div>
                </Grid>
              </Grid>
              <hr />
              <p style={{ fontSize: '10pt', fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-0.05cm', marginBottom: '-0.05cm' }}>
                Certifying of Applicant s Sinature (to be attested by an Attorney-at-Law / Commissioner for Oaths / Justice of the Peace)
              </p>

              <table>
                <tr>
                  <td>i.</td>
                  <td>Name of Attestor</td>
                  <td colSpan="2"></td>
                </tr>
                <tr>
                  <td>ii.</td>
                  <td>Profession or Occupation</td>
                  <td colSpan="2"></td>
                </tr>
                <tr>
                  <td>iii.</td>
                  <td>Period of time he/she has know you</td>
                  <td colSpan="2"></td>
                </tr>
                <tr>
                  <td>iv.</td>
                  <td>
                    Address (<i>Official or Personal</i>)
                  </td>
                  <td colSpan="2"></td>
                </tr>
                <tr>
                  <td>v.</td>
                  <td>Contact Number/s</td>
                  <td>i.</td>
                  <td>ii.</td>
                </tr>
                <tr>
                  <td>vi</td>
                  <td>
                    E-Mail Address(<i>if available only</i>)
                  </td>
                  <td colSpan="2"></td>
                </tr>
                <tr>
                  <td colSpan="4">
                    I hereby certified that Mr./Miss./Mrs./Dr./Rev.................................................................(name of
                    applicant), .......................................(NIC number) placed his/her signature in my presence today.
                  </td>
                </tr>
                <tr>
                  <td>Date: </td>
                  <td>Signature of Attestor: </td>
                  <td colSpan="2">Official Seal: </td>
                </tr>
              </table>
            </div>
          </Box>
        </div>
        <div className="align-center" style={{ marginTop: '1cm' }}>
          <Button variant="contained" onClick={handlePrint} style={{marginBottom:"30px"}}>
            Print the Addmission Card
          </Button>
        </div>

    </div>
    ): (<div>

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
              
              Admission Cards has not yet been released.
             
              </Typography>
              <p>Once admission cards been released you can download it from here</p>
            

              
              </Container>
         </Box> 

    </div>)}
    </>
  );
};

export default AdmissionCard;
