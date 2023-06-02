import React from "react";
import "./Header.css";
import MiddleNavBar from "../../../Inc/MiddleNavBar";
import { Container, Row } from "react-bootstrap";

const Registration1 = () => {
  return (
    <div>
      <div className="bg">
        <MiddleNavBar />
        <Container fluid>
          <Row className="justify-content-md-center caption">
            General Student 
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Registration1;
