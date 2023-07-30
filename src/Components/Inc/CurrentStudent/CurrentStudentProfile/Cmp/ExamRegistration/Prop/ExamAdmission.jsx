
import Registration1 from './Header';
import Footer from '../../../../../Footer';
import React from 'react'
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Chip, StylesProvider } from "@material-ui/core";
import axios from 'axios';
import { useEffect,useState } from 'react';
import Sidebar from '../../Sidebar';
import { Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { boxStyles } from '../../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles';
import {Box} from '@mui/material';


const ExamAdmission = () => {

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
                  <Col md={{ span: 3 }}>
                    <Sidebar />
                  </Col>
                  <Col md={{ span: 9 }}>
                   
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

export default ExamAdmission
