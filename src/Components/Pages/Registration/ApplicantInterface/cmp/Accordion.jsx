import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../../../../../helpers/AuthContext';
import { useContext } from "react";
import { Button } from '@mui/material';
import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={1} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,

  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));


const Logout = () => {
    const { authStateApplicant, setAuthStateApplicant } = useContext(AuthContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
  
    const handleLogout = () => {
      setOpen(true);
    };
  
    const handleClose = (confirm) => {
      setOpen(false);
      if (confirm) {
        localStorage.removeItem('accessTokenApplicant');
        setAuthStateApplicant(false);
        navigate('/New_Student_Registration/login');
      }
    };
  
    return (
      <>
        <Button variant="contained" size="small" onClick={handleLogout}>Log out</Button>
        <Dialog open={open} onClose={handleClose} disableBackdropClick disableEscapeKeyDown>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure you want to log out?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="success" onClick={() => handleClose(false)}>
              No
            </Button>
            <Button onClick={() => handleClose(true)}>Yes</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };



const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light'
      ? 'rgba(255, 255, 255, .02)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor:'rgba(0, 0, 0, .03)',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  function handleRegistration () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/Applicant_Registration/Selection')
}

function handlEditRequest () {
    window.scrollTo({ top: 0, behavior: "smooth" });

    navigate('/Applicant_Registration/Edit_Request')
}
const handleInstruction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

  navigate('/Applicant_Registration/Instructions')
}

const handleAdmission = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

navigate('/Applicant_Registration/Admission/Downloads')
}

const handleExamResults = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

navigate('/Applicant_Registration/Admission/Entrance_Exam_Results')
}

const handleApplicationStatus = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

navigate('/Applicant_Registration/Admission/Application_Status')
}

const navigate = useNavigate();

  return (
    <div>
    <div style={ {boxShadow: "2px 4px 23px -12px rgba(0,0,0,0.76)"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>INSTRUCTIONS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginBottom:"20px"}}>
          Following the instructions, you can register as a General applicant, LLB applicant, or State University applicant through the portal.We kindly invite you to carefully peruse and adhere to the following instructions, as they will guide you through a seamless and efficient application process.
          </Typography>
          <Button size='small' variant="contained" onClick={handleInstruction}>Instructions</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>REGISTRATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginBottom:"20px"}}>
          Thoroughly navigate through the application process and diligently complete the application form to the best of your knowledge, ensuring all information provided is accurate and up-to-date.Additionally, please be aware that you will have only one opportunity to edit your application form. Therefore, it is crucial to review all details meticulously before submitting the final version.
          </Typography>
          <Button size='small' variant="contained" onClick={handleRegistration}>Registration</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>EDIT REQUEST</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginBottom:"20px"}}>
          You have the option to edit your application form by submitting an edit request along with necessary payments. Once granted with edit access, you can easily view the already submitted application form below. After reviewing, you may make any necessary changes and submit the amended application form. Please note that you will have only one opportunity to access the edit feature, so it's essential to carefully review and finalize your application before proceeding
          </Typography>
          <Button size='small' variant="contained" onClick={handlEditRequest}>Edit request</Button>

        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>APPLICATION STATUS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginBottom:"20px"}}>
          You can view your application status from here. Please note that it may take some time for applications and payments to be verified. Once everything has been processed and released, you can check your status here
          </Typography>
          <Button size='small' variant="contained" onClick={handleApplicationStatus}>View Status</Button>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>ADMISSION CARDS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginBottom:"20px"}}>
          After verifying your eligibility to take the entrance exam, you will be able to download your admission card from here. It is essential to note that you must print this admission card and ensure you bring both the admission card and signature form to the examination hall on the day of the exam. These documents are mandatory for entry, and failure to present them may result in disqualification from the examination.
          </Typography>
          <Button size='small' variant="contained" onClick={handleAdmission}>Download</Button>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>EXAM RESULTS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginBottom:"20px"}}>
          Upon the release of entrance exam results, you can view them here. Please note that this web copy does not serve as proof of your enrollment as an internal student of the law college. Printed pages of this information are not considered official documentation for enrollment status.
          </Typography>
          <Button size='small' variant="contained" onClick={handleExamResults}>Exam Results</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>LOG OUT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginBottom:"20px"}}>
          You are about to log out. Please use your username and password to log back in for continued access and secure authentication. We value your privacy and recommend logging out when you have finished your session. Thank you. 
          </Typography>
          <Logout/>
        </AccordionDetails>
      </Accordion>

     
    </div>

   <Container>
    <Row>
      <Col>
   <p  style={{
                fontSize: "15px",
                color: "rgba(0, 0, 0, 0.7)",
                marginTop:"30px",
                marginBottom:"-40px"
              }}><i> Please note that this web copy does not serve as proof of your enrollment as an internal student of the law college.Other than the Admission card printed pages of this information are not considered official documentation for enrollment status. </i></p>
     </Col> </Row>
       </Container>   
    </div>
  );
}