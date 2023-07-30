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

const ApprenticeshipRegistration = () => {
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/CurrentStudent/ViewProfile" },
    { label: "Exam Admission", href: "/CurrentStudent/Admission" },
  ];

  const initialValues = {
    WorkshopMedium: "",
    LegalClinicLocation: "",
    bank:'',
    paymentType:'',
    paymentDate:'',
    branchName:'',
  };

  const [dataExist,setDataExist] = useState(false);
  const [finalExamPass, setFinalExamPass] = useState(false);


  useEffect (()=> {

    const fetchData = async() => {

        const responseFinal = await axios.get("http://localhost:3001/Student_Status/user",
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      setFinalExamPass(responseFinal.data.FinalExamPass)


      const responseApp = await axios.get("http://localhost:3001/Apprenticeship_registration/user",
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
    )
    if (responseApp.data) {
        setDataExist(true)
    } else {
        setDataExist(false)
    }
      
    }

    fetchData();
  },[])

  const onSubmit = async(values) => {

    const response = await axios.post("http://localhost:3001/Apprenticeship_registration/",
    {   
        ReferenceNumber: "REG 200002701840",
        BankName: values.paymentType,
        BranchName: values.branchName,
        TypeOfPayment: values.bank,
        DateOfPayment: values.paymentDate,
        LegalClinic : values.LegalClinicLocation,
        WorkshopMedium : values.WorkshopMedium
    },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
    

  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });



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
              <Col md={{ span: 2 }}>
                <Sidebar />
              </Col>
              <Col style={{ paddingLeft: "40px" }} md={{ span: 10 }}>
                {/* Main container */}
                <Box style={boxStyles}>
                    {!finalExamPass ? (
                        <>
                        <Typography>You are not qualified to Register for the Apprenticeship Program</Typography>
                        </>
                    ) : !dataExist ? (<>
                    
                    <Container fluid style={{ marginTop: "30px" }}>
                    <Row>
                      <Col className="d-flex align-content-center justify-content-center">
                        <Typography
                          style={{
                            color: "rgba(41, 43, 44, 0.75)",
                            fontSize: "30px",
                          }}
                        >
                          <b>Apprenticeship Registration</b>
                        </Typography>
                      </Col>
                    </Row>
                    <Row>
                      <Col  style={{ marginTop: "20px",marginBottom:'20px' }}>
                        {" "}
                        <Typography variant="body1" gutterBottom>
                          Instructions on how to register for the
                          apprenticeship. Add any relevant instructions or
                          information here.Instructions on how to register for
                          the apprenticeship. Add any relevant instructions or
                          information here.Instructions on how to register for
                          the apprenticeship. Add any relevant instructions or
                          information here.
                        </Typography>{" "}
                      </Col>
                    </Row>
                    <Row className="d-flex">
                      <form onSubmit={formik.handleSubmit}>
                      <Typography variant="body1" gutterBottom>
                          Workshop Medium : 
                        </Typography>
                        <Col className="d-flex" md={{ span: 4 }} style={{marginBottom:'20px'}} >
                       
                          <select
                            name="WorkshopMedium"
                            className="form-select"
                            value={formik.values.WorkshopMedium}
                            onChange={formik.handleChange}
                          >
                            <option value="">Select Workshop Medium</option>
                            <option value="Sinhala">Sinhala</option>
                            <option value="Tamil">Tamil</option>
                            <option value="English">English</option>
                          </select>
                          </Col>
                          <Typography variant="body1" gutterBottom>
                          Please Enter a Legal Clinic Location : 
                        </Typography>
                          <Col md={{ span: 4 }} >
                          <input
                            type="text"
                            name="LegalClinicLocation"
                            placeholder="Enter Legal Clinic Location"
                            className="form-control"
                            value={formik.values.LegalClinicLocation}
                            onChange={formik.handleChange}
                          />

                        
                        </Col>

                        <Col style={{marginTop:'30px',marginBottom:'20px'}} className="d-flex align-items-end justify-content-center">
                        <Payment formik={formik} />
                          <Button type="submit">Submit</Button>
                        </Col>
                      </form>

                      <Col></Col>
                    </Row>
                  </Container>


                    </>) :                         <Typography>You have already been registered!..</Typography>
}

                 
                </Box>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </StylesProvider>
    </div>
  );
};

export default ApprenticeshipRegistration;
