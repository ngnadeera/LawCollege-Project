import Registration1 from "./Header";
import Footer from "../../../../../Footer";
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Chip, StylesProvider } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Sidebar from "../../Sidebar";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { boxStyles } from "../../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles";

import { useReactToPrint } from "react-to-print";
import { Box, Grid, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { Typography } from "@material-ui/core";
import { Container } from "react-bootstrap";

const ExamAdmission = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Addmission Card",
  });

  const [indexNo, setIndexNo] = useState(null);
  const [addmission, setAdmission] = useState([]);
  const [preliminaryExam, setPreliminaryExam] = useState(false);
  const [intermidiateExam, setIntermidiateExam] = useState(false);
  const [finalExam, setFinalExam] = useState(false);
  const [nodata, setNodata] = useState(false);

  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/CurrentStudent/ViewProfile" },
    { label: "Exam Admission", href: "/CurrentStudent/Admission" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const responseIndexPre = axios.get(
        "http://localhost:3001/Preliminary_Exam_IndexNo/user",
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      );

      const responseIndexInt = axios.get(
        "http://localhost:3001/Intermidiate_Exam_IndexNo/user",
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      );

      // const responseIndexFinal = axios.get("http://localhost:3001/Final_Exam_IndexNo/user",{
      //   headers: {
      //     accessToken: localStorage.getItem("accessToken"),
      //   },
      // });

      if ((await responseIndexPre).data) {
        console.log("intermeadiate");
        setIndexNo((await responseIndexPre).data.IndexNo);
        setPreliminaryExam(true);
        const responseAdmission = axios.get(
          `http://localhost:3001/Preliminary_exam_admission/${indexNo}`,
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        );
        setAdmission((await responseAdmission).data);
      } else if ((await responseIndexInt).data) {
        setIndexNo((await responseIndexPre).data.IndexNo);
        setIntermidiateExam(true);
        const responseAdmission = axios.get(
          `http://localhost:3001/Intermidiate_Exam_IndexNo/${indexNo}`,
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        );
        setAdmission((await responseAdmission).data);
      } else {
        setNodata(true);
      }
    };

    fetchData();
  }, [indexNo]);

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

                <Container fluid>
                  <Row>
                    <Col>
                      <Box style={boxStyles}>
                        {nodata ? (
                          <div>
                            {" "}
                            You are not Eligible or the Admission call is not
                            yet been done.{" "}
                          </div>
                        ) : (
                          <>
                            <Container>
                              {preliminaryExam ? (
                                <div>
                                  {" "}
                                  <Chip label="Preliminary Exam" />
                                </div>
                              ) : null}
                              {intermidiateExam ? (
                                <div>
                                  {" "}
                                  <Chip label="Intermediate Exam" />
                                </div>
                              ) : null}

                              <div className="align-center">
                                <Box
                                  sx={{
                                    width: "21cm",
                                    height: "29.7cm",
                                    boxShadow: 3,
                                    marginTop: "40px",
                                  }}
                                >
                                  <div
                                    ref={componentRef}
                                    style={{
                                      width: "21cm",
                                      height: "29.7cm",
                                      padding: "0.7cm",
                                    }}
                                  >
                                    <div
                                      style={{
                                        fontSize: "9pt",
                                        fontFamily:
                                          "Arial, Helvetica, sans-serif",
                                      }}
                                    >
                                      <p>
                                        You must bring this admission and
                                        signature form to the examination hall
                                        on the examination day. Do not write on
                                        this before an Invigilator/Supervisor
                                        gives instructions.
                                      </p>
                                    </div>
                                    <div></div>
                                    <div className="align-center">
                                      <b>
                                        The Incorparated Council of Legal
                                        Education
                                      </b>
                                    </div>
                                    <div className="align-center">
                                      <b>Sri Lanka Law College</b>
                                    </div>
                                    <div className="align-center">
                                      <b>
                                        {" "}
                                        Examination - 20xx(for the acedemic year
                                        20xx)
                                      </b>
                                    </div>
                                    <div className="align-center">
                                      <u>
                                        <b>Admission and Signature Form</b>
                                      </u>
                                    </div>
                                    <table>
                                      <tr>
                                        <td
                                          colSpan="2"
                                          style={{ width: "30%" }}
                                        >
                                          Index Number :<b>{indexNo}</b>{" "}
                                        </td>
                                      </tr>
                                    </table>

                                    <Container fluid>
                                      <table>
                                        <thead>
                                          <tr>
                                            <td style={{ width: "10%" }}>
                                              <b>Subject ID</b>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                              <b>Medium</b>
                                            </td>
                                            <td style={{ width: "20%" }}>
                                              <b>Date</b>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                              <b>Time</b>
                                            </td>{" "}
                                            <td style={{ width: "10%" }}>
                                              <b>Exam Center</b>
                                            </td>
                                            <td style={{ width: "15%" }}>
                                              <b>Signature</b>
                                            </td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {addmission.map((item, index) => (
                                            <tr key={index}>
                                              <td>
                                                <b>{item.SubjectID}</b>
                                              </td>
                                              <td>{item.Medium}</td>
                                              <td>{item.Date}</td>
                                              <td>{item.Time}</td>
                                              <td>{item.ExamCenter}</td>
                                              <td></td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </Container>
                                    {/* Rest of the code... */}
                                    <Row style={{ marginTop: "20px" }}>
                                      <Col xs={6}>
                                        <div style={{ paddingTop: "1cm" }}>
                                          DATE:
                                          ........./.........../..............
                                        </div>
                                      </Col>
                                      <Col xs={6}>
                                        <div className="align-center">
                                          <Box
                                            sx={{
                                              width: "7.5cm",
                                              height: "1.5cm",
                                              border: 1,
                                              marginBottom: "-0.05cm",
                                            }}
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col xs={6}></Col>
                                      <Col xs={6}>
                                        <div
                                          className="align-center"
                                          style={{
                                            fontSize: "9pt",
                                            marginTop: "-0.05cm",
                                          }}
                                        >
                                          SIGNATURE OF APPLICANT
                                        </div>
                                        <div
                                          className="align-center"
                                          style={{ fontSize: "7.5pt" }}
                                        >
                                          (Place your signature inside the box
                                          without touching border lines)
                                        </div>
                                      </Col>
                                    </Row>
                                    <hr />
                                    <p
                                      style={{
                                        fontSize: "10pt",
                                        fontFamily:
                                          "Arial, Helvetica, sans-serif",
                                        marginTop: "-0.05cm",
                                        marginBottom: "-0.05cm",
                                      }}
                                    >
                                      Certifying of Applicant's Signature (to be
                                      attested by an Attorney-at-Law /
                                      Commissioner for Oaths / Justice of the
                                      Peace)
                                    </p>
                                    <table>
                                      <tbody>
                                        <tr>
                                          <td>i.</td>
                                          <td>Name of Attestor</td>
                                          <td colSpan="2"></td>
                                        </tr>
                                        <tr>
                                          <td>ii.</td>
                                          <td>Profession or Occupation</td>
                                          <td colSpan="2"></td>
                                        </tr>
                                        <tr>
                                          <td>iii.</td>
                                          <td>
                                            Period of time he/she has known you
                                          </td>
                                          <td colSpan="2"></td>
                                        </tr>
                                        <tr>
                                          <td>iv.</td>
                                          <td>
                                            Address (<i>Official or Personal</i>
                                            )
                                          </td>
                                          <td colSpan="2"></td>
                                        </tr>
                                        <tr>
                                          <td>v.</td>
                                          <td>Contact Number/s</td>
                                          <td>i.</td>
                                          <td>ii.</td>
                                        </tr>
                                        <tr>
                                          <td>vi</td>
                                          <td>
                                            E-Mail Address(
                                            <i>if available only</i>)
                                          </td>
                                          <td colSpan="2"></td>
                                        </tr>
                                        <tr>
                                          <td colSpan="4">
                                            I hereby certify that
                                            Mr./Miss./Mrs./Dr./Rev.................................................................(name
                                            of applicant),
                                            .......................................(NIC
                                            number) placed his/her signature in
                                            my presence today.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Date: </td>
                                          <td>Signature of Attestor: </td>
                                          <td colSpan="2">Official Seal: </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    {/* Rest of the code... */}
                                  </div>
                                </Box>
                              </div>
                              <Container fluid>
                                <Row>
                                  <Col
                                    className="d-flex justify-content-center align-items-center"
                                    style={{ marginTop: "20px" }}
                                  >
                                    <Button
                                      variant="contained"
                                      onClick={handlePrint}
                                      style={{ marginBottom: "30px" }}
                                    >
                                      Print the Addmission Card
                                    </Button>
                                  </Col>
                                </Row>
                              </Container>
                            </Container>
                          </>
                        )}
                      </Box>
                    </Col>
                  </Row>
                </Container>

                {/* Main container */}
              </Col>
            </Row>
          </Container>

          <Footer />
        </div>
      </StylesProvider>
    </div>
  );
};

export default ExamAdmission;
