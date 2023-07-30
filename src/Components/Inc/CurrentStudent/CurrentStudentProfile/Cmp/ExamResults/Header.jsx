import React from "react";
import './Header.css'
import { Container, Row } from "react-bootstrap";
import { Typography } from "@mui/material";
import MiddleNavBar from "../../../../MiddleNavBar";

const Registration1 = () => {
  return (
    <div>
      <div className="bg">
        <MiddleNavBar />
        <Container fluid>
          <Row className="justify-content-md-center caption mb-5">
          <p style={{marginBottom:"40px"}}> Exam Admissions</p>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Registration1;
