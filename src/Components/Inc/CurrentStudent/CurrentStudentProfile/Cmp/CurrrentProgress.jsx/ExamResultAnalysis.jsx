
import Registration1 from './Header';
import Footer from '../../../../Footer';
import React from 'react'
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {  StylesProvider } from "@material-ui/core";
import { Tabs, Tab } from '@mui/material';

import { useState } from 'react';


import Sidebar from '../Sidebar';


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { boxStyles } from '../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles';
import { Box, Typography, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import LineChartEx from './Charts/Charts';


const tabStyles = {
  root: {
    minWidth: 'auto',
    borderRadius: '90px', // Adjust the value to control the border radius
    textTransform: 'none',
    padding: '10px 16px',
    marginRight: '10px',
    '&:focus': {
      outline: 'none', // Remove the focus outline when clicking on the button
    },
  },
  selected: {
    color: '#ffffff', // Change this to the desired text color for the selected tab
    background: '#1976d2', // Change this to the desired background color for the selected tab
    boxShadow: '0 2px 4px rgba(25, 118, 210, 0.3)', // Add elevation (box shadow) to the selected button
    '&:hover': {
      boxShadow: '0 4px 8px rgba(25, 118, 210, 0.3)', // Add elevation on hover (optional)
    },
  },
};


const ExamResultAnalysis = () => {



    
    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Profile", href: "/CurrentStudent/ViewProfile" },
        { label: "Exam Admission", href: "/CurrentStudent/Admission" },
        
      ];

      const [selectedTab, setSelectedTab] = useState(0);

    
      const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
      };

     

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
                      <Typography style={{color:'rgba(41, 43, 44, 0.75)', fontSize:'30px'}}><b>Academic Dashboard</b></Typography>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                     <Container fluid>
                        <Row style={{marginTop:'30px'}}>
                              <Col>
                                <Tabs
                                  value={selectedTab}
                                  onChange={handleTabChange}
                                  variant="fullWidth"
                                  indicatorColor="primary"
                                  textColor="primary"
                                  aria-label="dashboard tabs"
                                >
                                  <Tab label="Preliminary Year" style={selectedTab === 0 ? tabStyles.selected : tabStyles.root} />
                                  <Tab label="Intermediate Year" style={selectedTab === 1 ? tabStyles.selected : tabStyles.root} />
                                  <Tab label="Final Year" style={selectedTab === 2 ? tabStyles.selected : tabStyles.root} />
                                </Tabs>
                                <div style={{marginTop:'50px'}}>
                            <LineChartEx/>
                            <Typography style={{color:'rgba(41, 43, 44, 0.75)', fontSize:'12px', marginLeft:'60px',marginTop:'10px'}}><i>Above chart depicts your results base on the average results that has been scored for each subject</i></Typography>
                            </div>
                            </Col>
                        </Row>
                       
                       </Container>
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

export default ExamResultAnalysis
