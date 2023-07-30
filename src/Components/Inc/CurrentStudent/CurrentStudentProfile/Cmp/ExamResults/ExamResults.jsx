
import Registration1 from './Header';
import Footer from '../../../../Footer';
import React from 'react'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Chip, StylesProvider } from "@material-ui/core";
import axios from 'axios';
import { useEffect,useState,useRef } from 'react';
import Sidebar from '../Sidebar';
import './ExamResults.css'

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { boxStyles } from '../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles';

import { useReactToPrint } from 'react-to-print';
import { Box, Grid, Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import { fontSize } from '@mui/system';

const ExamResults = () => {

  const [indexNo,setIndexNo] = useState();
  const [results,setResults] = useState();
  const [preliminaryExam,setPreliminaryExam] = useState(false);
  const [intermeadiateExam,setIntermeadiateExam] = useState(false);
  const [finalExam,setFinalExam] = useState(false);
  const[nodata,setNodata] = useState(false);
  const [loading,setLoading] = useState(false);

  
    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Profile", href: "/CurrentStudent/ViewProfile" },
        { label: "Exam Admission", href: "/CurrentStudent/Admission" },
        
      ];
     

      useEffect(() => {

         
        const fetchData = async () => {

          setLoading(true);
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
          

          const responseIndexFinal = axios.get("http://localhost:3001/Final_Exam_IndexNo/user",{
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          });

    

          if ((await responseIndexFinal).data) {
            
            setIndexNo((await responseIndexFinal).data.IndexNo);
            setFinalExam(true);

              const responseResultsfinal = axios.get(
              `http://localhost:3001/Final_exam_results/${indexNo}`,
              {
                headers: {
                  accessToken: localStorage.getItem("accessToken"),
                },
              }
            );
            setResults((await responseResultsfinal).data);
            setLoading(false);

          } else if ((await responseIndexInt).data) {
           
            setIndexNo((await responseIndexInt).data.IndexNo);
            setIntermeadiateExam(true);

     
            const responseResultsint = axios.get(
              `http://localhost:3001/Intermidiate_exam_results/${indexNo}`,
              {
                headers: {
                  accessToken: localStorage.getItem("accessToken"),
                },
              }
            );
            setResults((await responseResultsint).data);
            setLoading(false);

          } else if ((await responseIndexPre).data) {

            setIndexNo((await responseIndexPre).data.IndexNo);
            setPreliminaryExam(true);

            const responseResultspre = axios.get(
              `http://localhost:3001/Preliminary_exam_results/${indexNo}`,
              {
                headers: {
                  accessToken: localStorage.getItem("accessToken"),
                },
              }
            );
       
            setResults((await responseResultspre).data);
            setLoading(false);

            }
              else {
               setLoading(false);
               setNodata(true);  
          }
        }; 
        
        fetchData();
      }, [indexNo]);



const Preliminarysubjects = [
  { code: 'LW101', name: 'Criminal Law' },
  { code: 'LW102', name: 'Legal History & Legal System' },
  { code: 'LW103', name: 'Law of Persons' },
  { code: 'LW106', name: 'Criminal Law' },
  { code: 'LW107', name: 'Legislative Drafting and Statutory Interpretation' },
  { code: 'LW108', name: 'Law of Obligations - I' },
  { code: 'LW109', name: 'Industrial Law' },
  { code: 'LW203', name: 'Conflict of Laws' },
  { code: 'LW210', name: 'Jurisprudence' },
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
                  {/* Main Container */}

                  <Container fluid>
  {loading ? (
    <div>Loading...</div>
  ) : (
    <>
      {nodata ? (
        <>
          <Box style={boxStyles}>
            <p>No Exam Result has been found...</p>
          </Box>
        </>
      ) : (
        <>
          {results ? (
            preliminaryExam ? (
              // Preliminary Exam
              <div>
                <Box style={boxStyles}>
                  <Container fluid>
                    <Row>
                      <Col className="d-flex justify-content-center align-items-center">
                        <Typography
                          style={{
                            color: "rgba(41, 43, 44, 0.75)",
                            fontSize: "20px",
                          }}
                        >
                          <b>Preliminary Exam Results</b>
                        </Typography>
                      </Col>
                    </Row>

                    <Row
                      className="d-flex justify-content-between align-items-start"
                      style={{ marginTop: "40px" }}
                    >
                      <Col md={{ span: 6 }}>
                        <Row className="flex-row">
                          <Col
                            style={{
                              marginTop: "10px",
                              textAlign: "end",
                            }}
                          >
                            Index No:
                          </Col>

                          <Col>
                            <div className="resultBox">{results.IndexNo}</div>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        className="d-flex justify-content-end align-items-end"
                        md={{ span: 6 }}
                      >
                        <Row className="d-flex justify-content-end">
                          <Col style={{ marginTop: "10px" }}>Month:</Col>
                          <Col>
                            <div className="resultBox">Oct</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row
                      className="d-flex justify-content-between align-items-start"
                      style={{ marginTop: "20px", marginBottom: "40px" }}
                    >
                      <Col md={{ span: 6 }}>
                        <Row className="flex-row">
                          <Col
                            style={{
                              marginTop: "10px",
                              textAlign: "end",
                            }}
                          >
                            Registration No:
                          </Col>

                          <Col>
                            <div className="resultBox">{results.RegNo}</div>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        className="d-flex justify-content-center align-items-center"
                        md={{ span: 6 }}
                      ></Col>
                      <hr
                        style={{
                          marginTop: "40px",
                          height: "1px",
                          border: "1px solid rgba(0, 0, 0, 0.5)",
                        }}
                      />
                    </Row>
                  </Container>
                  <table
                    style={{
                      width: "100%",
                      marginTop: "10px",
                    }}
                  >
                    <thead>
                      <tr>
                        <td style={{ fontSize: "15px" }}>
                          <b>Subjects</b>
                        </td>
                        <td style={{ fontSize: "15px" }}>
                          <b>Subject Name</b>
                        </td>
                        <td style={{ fontSize: "15px" }}>
                          <b>Grade</b>
                        </td>
                        <td style={{ fontSize: "15px" }}>
                          <b>Note</b>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {Preliminarysubjects.map((subject) =>
                        // Filter out subjects with null grades
                        results[subject.code] !== null ? (
                          <tr key={subject.code}>
                            <td style={{ fontSize: "15px" }}>{subject.code}</td>
                            <td style={{ textAlign: "left", fontSize: "15px" }}>
                              {subject.name}
                            </td>
                            <td style={{ fontSize: "15px" }}>
                              <b>{results[subject.code]}</b>
                            </td>
                            <td></td>
                          </tr>
                        ) : null
                      )}
                    </tbody>
                  </table>
                  <Container fluid>
                    <Row
                      className="d-flex justify-content-center align-items-"
                      style={{ marginTop: "40px" }}
                    >
                      <Col md={{ span: 6 }}>
                        <Row className="flex-row">
                          <Col
                            style={{
                              marginTop: "10px",
                              textAlign: "end",
                            }}
                          >
                            Total:
                          </Col>

                          <Col>
                            <div className="resultBox">{results.Total}</div>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        className="d-flex justify-content-end align-items-end"
                        md={{ span: 6 }}
                      >
                        <Row className="d-flex justify-content-center">
                          <Col style={{ marginTop: "10px" }}>Average:</Col>
                          <Col>
                            <div className="resultBox"> {results.Average}</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "30px" }}>
                      <Col md={{ span: 12 }} className="d-flex justify-content-center  align-items-center">
                        <Row className="d-flex justify-content-end">
                          <Col style={{ marginTop: "10px" }}>Grade:</Col>
                          <Col>
                            <Chip label={results.Grade} style={{ fontSize: "15px", color: "white", backgroundColor: "green", marginTop: "6px" }} />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </Box>
              </div>
            ) : {intermeadiateExam} ? (
              <>
                 {/* Intermidiate Exam Results */}

                 <div>
                <Box style={boxStyles}>
                  <Container fluid>
                    <Row>
                      <Col className="d-flex justify-content-center align-items-center">
                        <Typography
                          style={{
                            color: "rgba(41, 43, 44, 0.75)",
                            fontSize: "20px",
                          }}
                        >
                          <b>Intermediate Exam Results</b>
                        </Typography>
                      </Col>
                    </Row>

                    <Row
                      className="d-flex justify-content-between align-items-start"
                      style={{ marginTop: "40px" }}
                    >
                      <Col md={{ span: 6 }}>
                        <Row className="flex-row">
                          <Col
                            style={{
                              marginTop: "10px",
                              textAlign: "end",
                            }}
                          >
                            Index No:
                          </Col>

                          <Col>
                            <div className="resultBox">{results.IndexNo}</div>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        className="d-flex justify-content-end align-items-end"
                        md={{ span: 6 }}
                      >
                        <Row className="d-flex justify-content-end">
                          <Col style={{ marginTop: "10px" }}>Month:</Col>
                          <Col>
                            <div className="resultBox">Oct</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row
                      className="d-flex justify-content-between align-items-start"
                      style={{ marginTop: "20px", marginBottom: "40px" }}
                    >
                      <Col md={{ span: 6 }}>
                        <Row className="flex-row">
                          <Col
                            style={{
                              marginTop: "10px",
                              textAlign: "end",
                            }}
                          >
                            Registration No:
                          </Col>

                          <Col>
                            <div className="resultBox">{results.RegNo}</div>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        className="d-flex justify-content-center align-items-center"
                        md={{ span: 6 }}
                      ></Col>
                      <hr
                        style={{
                          marginTop: "40px",
                          height: "1px",
                          border: "1px solid rgba(0, 0, 0, 0.5)",
                        }}
                      />
                    </Row>
                  </Container>
                  <table
                    style={{
                      width: "100%",
                      marginTop: "10px",
                    }}
                  >
                    <thead>
                      <tr>
                        <td style={{ fontSize: "15px" }}>
                          <b>Subjects</b>
                        </td>
                        <td style={{ fontSize: "15px" }}>
                          <b>Subject Name</b>
                        </td>
                        <td style={{ fontSize: "15px" }}>
                          <b>Grade</b>
                        </td>
                        <td style={{ fontSize: "15px" }}>
                          <b>Note</b>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {Preliminarysubjects.map((subject) =>
                        // Filter out subjects with null grades
                        results[subject.code] !== null ? (
                          <tr key={subject.code}>
                            <td style={{ fontSize: "15px" }}>{subject.code}</td>
                            <td style={{ textAlign: "left", fontSize: "15px" }}>
                              {subject.name}
                            </td>
                            <td style={{ fontSize: "15px" }}>
                              <b>{results[subject.code]}</b>
                            </td>
                            <td></td>
                          </tr>
                        ) : null
                      )}
                    </tbody>
                  </table>
                  <Container fluid>
                    <Row
                      className="d-flex justify-content-center align-items-"
                      style={{ marginTop: "40px" }}
                    >
                      <Col md={{ span: 6 }}>
                        <Row className="flex-row">
                          <Col
                            style={{
                              marginTop: "10px",
                              textAlign: "end",
                            }}
                          >
                            Total:
                          </Col>

                          <Col>
                            <div className="resultBox">{results.Total}</div>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        className="d-flex justify-content-end align-items-end"
                        md={{ span: 6 }}
                      >
                        <Row className="d-flex justify-content-center">
                          <Col style={{ marginTop: "10px" }}>Average:</Col>
                          <Col>
                            <div className="resultBox"> {results.Average}</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "30px" }}>
                      <Col md={{ span: 12 }} className="d-flex justify-content-center  align-items-center">
                        <Row className="d-flex justify-content-end">
                          <Col style={{ marginTop: "10px" }}>Grade:</Col>
                          <Col>
                            <Chip label={results.Grade} style={{ fontSize: "15px", color: "white", backgroundColor: "green", marginTop: "6px" }} />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </Box>
              </div>

              </>
            ) : finalExam ? (
              <>
                  {/* Final Exam Results */}
              <div>
                <Box style={boxStyles}>
                  <Container fluid>
                    <Row>
                      <Col className="d-flex justify-content-center align-items-center">
                        <Typography
                          style={{
                            color: "rgba(41, 43, 44, 0.75)",
                            fontSize: "20px",
                          }}
                        >
                          <b>Final Exam Results</b>
                        </Typography>
                      </Col>
                    </Row>

                    <Row
                      className="d-flex justify-content-between align-items-start"
                      style={{ marginTop: "40px" }}
                    >
                      <Col md={{ span: 6 }}>
                        <Row className="flex-row">
                          <Col
                            style={{
                              marginTop: "10px",
                              textAlign: "end",
                            }}
                          >
                            Index No:
                          </Col>

                          <Col>
                            <div className="resultBox">{results.IndexNo}</div>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        className="d-flex justify-content-end align-items-end"
                        md={{ span: 6 }}
                      >
                        <Row className="d-flex justify-content-end">
                          <Col style={{ marginTop: "10px" }}>Month:</Col>
                          <Col>
                            <div className="resultBox">Oct</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row
                      className="d-flex justify-content-between align-items-start"
                      style={{ marginTop: "20px", marginBottom: "40px" }}
                    >
                      <Col md={{ span: 6 }}>
                        <Row className="flex-row">
                          <Col
                            style={{
                              marginTop: "10px",
                              textAlign: "end",
                            }}
                          >
                            Registration No:
                          </Col>

                          <Col>
                            <div className="resultBox">{results.RegNo}</div>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        className="d-flex justify-content-center align-items-center"
                        md={{ span: 6 }}
                      ></Col>
                      <hr
                        style={{
                          marginTop: "40px",
                          height: "1px",
                          border: "1px solid rgba(0, 0, 0, 0.5)",
                        }}
                      />
                    </Row>
                  </Container>
                  <table
                    style={{
                      width: "100%",
                      marginTop: "10px",
                    }}
                  >
                    <thead>
                      <tr>
                        <td style={{ fontSize: "15px" }}>
                          <b>Subjects</b>
                        </td>
                        <td style={{ fontSize: "15px" }}>
                          <b>Subject Name</b>
                        </td>
                        <td style={{ fontSize: "15px" }}>
                          <b>Grade</b>
                        </td>
                        <td style={{ fontSize: "15px" }}>
                          <b>Note</b>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {Preliminarysubjects.map((subject) =>
                        // Filter out subjects with null grades
                        results[subject.code] !== null ? (
                          <tr key={subject.code}>
                            <td style={{ fontSize: "15px" }}>{subject.code}</td>
                            <td style={{ textAlign: "left", fontSize: "15px" }}>
                              {subject.name}
                            </td>
                            <td style={{ fontSize: "15px" }}>
                              <b>{results[subject.code]}</b>
                            </td>
                            <td></td>
                          </tr>
                        ) : null
                      )}
                    </tbody>
                  </table>
                  <Container fluid>
                    <Row
                      className="d-flex justify-content-center align-items-"
                      style={{ marginTop: "40px" }}
                    >
                      <Col md={{ span: 6 }}>
                        <Row className="flex-row">
                          <Col
                            style={{
                              marginTop: "10px",
                              textAlign: "end",
                            }}
                          >
                            Total:
                          </Col>

                          <Col>
                            <div className="resultBox">{results.Total}</div>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        className="d-flex justify-content-end align-items-end"
                        md={{ span: 6 }}
                      >
                        <Row className="d-flex justify-content-center">
                          <Col style={{ marginTop: "10px" }}>Average:</Col>
                          <Col>
                            <div className="resultBox"> {results.Average}</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "30px" }}>
                      <Col md={{ span: 12 }} className="d-flex justify-content-center  align-items-center">
                        <Row className="d-flex justify-content-end">
                          <Col style={{ marginTop: "10px" }}>Grade:</Col>
                          <Col>
                            <Chip label={results.Grade} style={{ fontSize: "15px", color: "white", backgroundColor: "green", marginTop: "6px" }} />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </Box>
              </div>


              </>
            ) : null
          ) : (
            <Typography>
              No Exam Result found for the given index number.
            </Typography>
          )}
        </>
      )}
    </>
  )}
</Container>
</Col>
</Row>
</Container>


            <Footer />
          </div>
        </StylesProvider>
      </div>
    );
}

export default ExamResults
