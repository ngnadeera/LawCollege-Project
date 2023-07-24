import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
import './Link.css'

const Links = () => {
  return (
    <div style={{ backgroundColor: "#EDF2F5", padding: "90px" }}>
      <Container>
        <Row>
          <Col>
          <Link to={'/Courses'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Container className="container-zoom-in">
              <Row className="d-flex justify-content-start align-items-start">
                <hr
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    width: "90%",
                    marginLeft: "13px",
                  }}
                />
                <Col md={{ span: 3 }}>
                  <Typography
                    style={{
                      color: "#262428",

                      fontSize: " 22px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "29.401px",
                      letterSpacing: " -0.405px",
                    }}
                  >
                    Courses
                  </Typography>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                  <ArrowCircleRightIcon
                    style={{
                      color: "#94ADC3",
                      fontSize: 37,
                      marginRight: "10px",
                      marginTop: "-7px",
                    }}
                  />
                </Col>
              </Row>
              <Row style={{marginTop:"15px"}}>
                <Typography
                  style={{
                    color: "#262428",
                    fontSize: " 15px",
                    fontStyle: "normal",
                    lineHeight: "29.401px",
                    letterSpacing: " -0.405px",
                    marginTop: "27px",
                    marginRight:"15px"
                  }}
                >
                  Find the right course and see why studying with us is
                  different.
                </Typography>
              </Row>
            </Container>
            </Link>
          </Col>

          <Col>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Container className="container-zoom-in">
              <Row className="d-flex justify-content-start align-items-start">
                <hr
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    width: "90%",
                    marginLeft: "13px",
                  }}
                />
                <Col md={{ span: 3 }}>
                  <Typography
                    style={{
                      color: "#262428",

                      fontSize: " 22px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "29.401px",
                      letterSpacing: " -0.405px",
                    }}
                  >
                    Addmission
                  </Typography>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                  <ArrowCircleRightIcon
                    style={{
                      color: "#94ADC3",
                      fontSize: 37,
                      marginRight: "10px",
                      marginTop: "-7px",
                    }}
                  />
                </Col>
              </Row>
              <Row style={{marginTop:"15px"}}>
                <Typography
                  style={{
                    color: "#262428",
                    fontSize: " 15px",
                    fontStyle: "normal",
                    lineHeight: "29.401px",
                    letterSpacing: " -0.405px",
                    marginTop: "27px",
                    marginRight:"15px"
                  }}
                >
                  Find the right course and see why studying with us is
                  different.
                </Typography>
              </Row>
            </Container>
            </Link>
          </Col>
          <Col>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Container className="container-zoom-in">
              <Row className="d-flex justify-content-start align-items-start">
                <hr
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    width: "90%",
                    marginLeft: "13px",
                  }}
                />
                <Col md={{ span: 3 }}>
                  <Typography
                    style={{
                      color: "#262428",

                      fontSize: " 22px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "29.401px",
                      letterSpacing: " -0.405px",
                    }}
                  >
                    Courses
                  </Typography>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                  <ArrowCircleRightIcon
                    style={{
                      color: "#94ADC3",
                      fontSize: 37,
                      marginRight: "10px",
                      marginTop: "-7px",
                    }}
                  />
                </Col>
              </Row>
              <Row style={{marginTop:"15px"}}>
                <Typography
                  style={{
                    color: "#262428",
                    fontSize: " 15px",
                    fontStyle: "normal",
                    lineHeight: "29.401px",
                    letterSpacing: " -0.405px",
                    marginTop: "27px",
                    marginRight:"15px"
                  }}
                >
                  Find the right course and see why studying with us is
                  different.
                </Typography>
              </Row>
            </Container>
            </Link>
          </Col>
          <Col>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Container className="container-zoom-in">
              <Row className="d-flex justify-content-start align-items-start">
                <hr
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    width: "90%",
                    marginLeft: "13px",
                  }}
                />
                <Col md={{ span: 3 }}>
                  <Typography
                    style={{
                      color: "#262428",

                      fontSize: " 22px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "29.401px",
                      letterSpacing: " -0.405px",
                    }}
                  >
                    About
                  </Typography>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                  <ArrowCircleRightIcon
                    style={{
                      color: "#94ADC3",
                      fontSize: 37,
                      marginRight: "10px",
                      marginTop: "-7px",
                    }}
                  />
                </Col>
              </Row>
              <Row style={{marginTop:"15px"}}>
                <Typography
                  style={{
                    color: "#262428",
                    fontSize: " 15px",
                    fontStyle: "normal",
                    lineHeight: "29.401px",
                    letterSpacing: " -0.405px",
                    marginTop: "27px",
                    marginRight:"15px"
                  }}
                >
                  Find the right course and see why studying with us is
                  different.
                </Typography>
              </Row>
            </Container>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Links;
