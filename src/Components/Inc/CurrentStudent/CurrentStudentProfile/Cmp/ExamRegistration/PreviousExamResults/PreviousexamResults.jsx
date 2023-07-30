
import Header from './Header'
import Footer from '../../../../../Footer';
import React from 'react'
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Chip, StylesProvider } from "@material-ui/core";
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { boxStyles } from '../../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles';
import {Box} from '@mui/material';
import { useFormik } from "formik";
import {FormControlLabel} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Sidebar from '../../Sidebar';
import { Tabs, Tab } from '@material-ui/core';
import PreliminaryExamComponent from './PreliminaryExamComponent';
import IntermediateExamComponent from './IntermediateExamComponent';
import FinalExamComponent from './FinalExamComponent';





const PreviousExamResults = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
      };

    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Profile", href: "/CurrentStudent/ViewProfile" },
        { label: "Exam Registration", href: "/CurrentStudent/ExamRegistration" },]
        

  return (
    <div>
      <StylesProvider injectFirst>
        <div>
          <Header />

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
                {/* Main Continer  */}

                        <Box style={boxStyles}>

                    <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary" centered>
                    <Tab label="Preliminary Year" />
                    <Tab label="Intermediate Year" />
                    <Tab label="Final Year" />
                  </Tabs>

                  {activeTab === 0 && (<>
                  <PreliminaryExamComponent/>
                  </>)}

                  {activeTab === 1 && (<>
                  <IntermediateExamComponent/>
                  </>)}

                  {activeTab === 2 && (<>
                  <FinalExamComponent/>
                  </>)}
        
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

export default PreviousExamResults
