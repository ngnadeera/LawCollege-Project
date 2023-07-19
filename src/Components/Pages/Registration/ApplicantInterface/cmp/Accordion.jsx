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
      ? 'rgba(255, 255, 255, .05)'
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

const navigate = useNavigate();

  return (
    <div style={ {boxShadow: "2px 4px 23px -12px rgba(0,0,0,0.76)"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>INSTRUCTIONS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginBottom:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          <Button variant="contained" onClick={handleInstruction}>Instructions</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>REGISTRATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginBottom:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          <Button variant="contained" onClick={handleRegistration}>Registration</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>EDIT REQUEST</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginBottom:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          <Button variant="contained" onClick={handlEditRequest}>Edit request</Button>

        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>APPLICATION STATUS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>ADMISSION CARDS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginBottom:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          <Button variant="contained" onClick={handleAdmission}>Download</Button>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>EXAM RESULTS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
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
  );
}