import React from "react";
import { Button, Typography } from "@mui/material";
import Step1 from "./Instructions/cmp/Step1";
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../helpers/AuthContext";
import { useContext } from "react";
import CustomizedAccordions from "./Accordion";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { color } from "@mui/system";






export const Content = () => {



    
   
    
  return (
    <div style={{backgroundColor:"F3F3FE"}}>
      {/* <ButtonGroup>
       
        <Button variant="contained" onClick={handlEditRequest}>Edit Request</Button>
        <Button variant="contained">Exam Results and Admission</Button>
        <Button variant="contained" onClick={handleInstruction}>Instructions</Button>
      </ButtonGroup> */}
      {/* <div>
      <Logout/>
      </div> */}

        <div>


        <Container style={{marginBottom:"30px" , marginTop:"80px"}} >
          <Row>
            <Col className="d-flex justify-content-center align-items-center" md={{ span: 5, offset: 1}} xs={12}>
          <Typography sx={{ textAlign: 'justify' }}><b>Welcome to the registration portal of Sri Lankan Law College.</b> Following the instructions, you can register as a General applicant, LLB applicant, or State University applicant through the portal. Should you require any modifications, you can make a request accordingly. Upon successful registration, access the admission card download and view the entrance exam details through the portal.Please ensure to double-check all the entered information for accuracy. We wish you the best of luck in your journey at Sri Lankan Law College!</Typography>
      </Col>
      <Col className="d-flex justify-content-center align-items-center" md={{ span: 5, offset: 0}} xs={12}>
          <Typography sx={{ textAlign: 'justify' }}> <p><CheckCircleIcon style={{ color: '#CBB58B' }}/> &nbsp;  Carefully read instructions for a successful registration.</p>
          <p><CheckCircleIcon style={{ color: '#CBB58B' }}/> &nbsp;  Register as per your category for accurate enrollment.</p>
          <p><CheckCircleIcon style={{ color: '#CBB58B' }}/> &nbsp;  Submit necessary edit requests if any changes are required.</p>
          <p><CheckCircleIcon style={{ color: '#CBB58B' }}/> &nbsp; Download admission cards for the Entrance Exam.</p>
          <p><CheckCircleIcon style={{ color: '#CBB58B' }}/> &nbsp;  View entrance exam results and check pass status.</p>
          </Typography>
      </Col>
      </Row>
     </Container>


        <Container style={{marginBottom:"50px"}} >
          <Row>
            <Col className="d-flex justify-content-center align-items-center" md={{ span: 10, offset: 1}} xs={12}>
      <CustomizedAccordions/>
      </Col>
      </Row>
     </Container >
      </div>
    </div>
  );
};
