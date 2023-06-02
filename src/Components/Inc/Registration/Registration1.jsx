import React from "react";
import "./Registration1.css";
import MiddleNavBar from "../MiddleNavBar";
import { Container,Row,Col } from "react-bootstrap";

const Registration1 = () => {
  return (
    <div>
      <div className="bg">
        <MiddleNavBar/>
        <Container fluid >
          <Row className="justify-content-md-center caption">
             New Students Registration<br/>Portal 
          </Row>
          </Container>
      </div>
    </div>
  );
};

export default Registration1;
