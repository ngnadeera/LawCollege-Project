import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StylesProvider } from "@material-ui/core";
import Header from "../Header";
import Footer from "../../../../Footer";
import Sidebar from "../Sidebar";
import { Typography } from "@mui/material";
import ChangePasswordForm from "./ChangePasswordForm";
import { ChangeHistory } from "@material-ui/icons";

const ChangePassword = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <div>
          <Header />
          <Container fluid >
            <Row>
              <Col md={{ span: 3 }}>
                <Sidebar />
              </Col>
              <Col >
              <Container className="d-flex justify-content-center align-items-center" >
                <Row >

              <Col
                // className="d-flex justify-content-center"
              >
               
                <ChangePasswordForm />
              </Col>
              </Row>
              </Container>
              </Col>
            </Row>
          </Container>

          <Footer />
        </div>
      </StylesProvider>
    </>
  );
};

export default ChangePassword;
