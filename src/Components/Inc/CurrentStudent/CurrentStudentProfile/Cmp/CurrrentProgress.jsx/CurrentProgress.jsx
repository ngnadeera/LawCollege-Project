
import Registration1 from './Header';
import Footer from '../../../../Footer';
import React from 'react'
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {  StylesProvider } from "@material-ui/core";
import axios from 'axios';
import { useEffect,useState } from 'react';
import Sidebar from '../Sidebar';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { boxStyles } from '../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles';
import { Box, Typography, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import TextField from '@mui/material/TextField';








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
                <Col style={{ paddingLeft:'90px'}}md={{ span: 10,}}>

Hello
                  {/* Main container */}

                  
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
