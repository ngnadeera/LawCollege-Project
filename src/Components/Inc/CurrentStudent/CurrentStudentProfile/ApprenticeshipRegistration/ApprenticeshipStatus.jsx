import React from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StylesProvider } from "@material-ui/core";
import {
  Box,
  Typography,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { boxStyles } from "../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles";
import Registration1 from "../Cmp/Header";
import Footer from "../../../Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../Cmp/Sidebar";
import { useFormik } from "formik";
import Payment from "./Payment";
import { CoPresent } from "@mui/icons-material";
import { InnerBoxStyles } from "../../../../Pages/Registration/GeneralApplicant/Cmp/InnerBoxStyels";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';


const ApprenticeshipStatus = () => {
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/CurrentStudent/ViewProfile" },
    { label: "Exam Admission", href: "/CurrentStudent/Admission" },
  ];


  const [dataExist,setDataExist] = useState(true);
  const [appPass, setAppPass] = useState(false);
  


  useEffect (()=> {

    const fetchData = async() => {

        const responseFinal = await axios.get("http://localhost:3001/Student_Status/user",
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      if (responseFinal.data.ApprenticeshipPass == null){
            setDataExist(false)
      } else if (responseFinal.data.ApprenticeshipPass == true){
            setAppPass(true)
      } else {
        setAppPass(false);
      }
      
    }

    fetchData();
  },[])






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
                  index === breadcrumbLinks.length - 1
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
             <Col>
             { !dataExist ? (
                <div>
        
                <Box sx={InnerBoxStyles} style={{margin:"40px"}}>
                 <Container  style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               height: '50vh',
             }}>
       
                <GppMaybeIcon sx={{ fontSize: 55, color: 'error' }} /> 
         
             
                   <Typography
                     style={{
                       fontSize: "25px",
                       color: "rgba(0, 0, 0, 0.7)",
                     }}
                   >
                     
                     Apprenticeship results has not yet been released!
                    
                     </Typography>
                     <p>Please Contact Apprenticeship Department for further details</p>
                     
                     </Container>
                </Box> 
                </div>
             ) : appPass ? (
                <div>
        
                <Box sx={InnerBoxStyles} style={{margin:"40px"}}>
                 <Container  style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               height: '50vh',
             }}>
       
                <CheckCircleIcon sx={{ fontSize: 55, color: 'green' }} /> 
         
             
                   <Typography
                     style={{
                       fontSize: "25px",
                       color: "rgba(0, 0, 0, 0.7)",
                     }}
                   >
                     
                     Apprenticeship Completed
                    
                     </Typography>
                     <p>You have successfully completed the Apprenticeship</p>
                     
                     </Container>
                </Box> 
                </div>

             ) : (
                <div>
        
                <Box sx={InnerBoxStyles} style={{margin:"40px"}}>
                 <Container  style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               height: '50vh',
             }}>
       
                <CancelIcon sx={{ fontSize: 55, color: 'error' }} /> 
         
             
                   <Typography
                     style={{
                       fontSize: "25px",
                       color: "rgba(0, 0, 0, 0.7)",
                     }}
                   >
                     
                     Apprenticeship Disqualified!
                    
                     </Typography>
                     <p>Please Contact Apprenticeship Department for further details</p>
                     
                     </Container>
                </Box> 
                </div>
             )
             }


      
             </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </StylesProvider>
    </div>
  );
};

export default ApprenticeshipStatus;
