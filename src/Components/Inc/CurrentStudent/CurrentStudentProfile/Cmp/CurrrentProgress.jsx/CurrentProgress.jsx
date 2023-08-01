
import Registration1 from './Header';
import Footer from '../../../../Footer';
import React from 'react'
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {  StylesProvider } from "@material-ui/core";

import Sidebar from '../Sidebar';


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { boxStyles } from '../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles';
import { Box, Typography, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ColorsTimeline from './ColorsTimeline';



const CurrentProgress = () => {

    
    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Profile", href: "/CurrentStudent/ViewProfile" },
        { label: "Exam Admission", href: "/CurrentStudent/Admission" },
        
      ];

     

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
                <Col md={{ span: 2 }}>
                  <Sidebar />
                </Col>
                <Col style={{ paddingLeft:'40px'}}md={{ span: 10,}}>


                  {/* Main container */}
                  <Box style={boxStyles}>
                  <Container fluid style={{marginTop:'50px'}}>
                    <Row >
                      <Col className='d-flex align-content-center justify-content-center'>
                      <Typography style={{color:'rgba(41, 43, 44, 0.75)', fontSize:'30px'}}><b>Progress Timeline</b></Typography>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={{span:12}} style={{marginTop:'30px'}}>
                        <ColorsTimeline/>
                      </Col>
                    </Row>
                  
                  </Container>

                  </Box>

                  
                </Col>
              </Row>
            </Container>

            <Footer />
          </div>
        </StylesProvider>

       
      </div>
    );
}

export default CurrentProgress
