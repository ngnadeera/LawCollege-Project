import { Box } from '@mui/system';
import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap';
import { boxStyles } from '../../../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles';
import { Chip } from '@mui/material';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Typography } from '@material-ui/core';

const PreliminaryExamComponent = () => {

const[resultList,setResultList] = useState([]);
const[loading,setLoading] = useState(false);
const[noData,setNodata] = useState(false);



useEffect(() => {

    const fetchData = async() => {

        setLoading(true)

        const response = await axios.get('http://localhost:3001/Preliminary_exam_results',  {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          });
          if(response.data.length > 0) {
            setResultList(response.data)
            setLoading(false);
          }else {
            setNodata(true);
            setLoading(false);
          }
          
    }
fetchData();
},[])

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
      <Container fluid>
       
          {loading ? (
            <>
              <p>Loading....</p>
            </>
          ) : noData ? (
            <>
              <p>You have't completed any exam in Preliminary year</p>
            </>
          ) : resultList.length > 0 ? (
            <>
              <div>
                {resultList.map((result, index) => (
                   <Box style={boxStyles}>
                  <div key={index}>
                    <Container fluid>
                      <Row>
                        <Col className="d-flex justify-content-center align-items-center">
                          <Typography
                            style={{
                              color: "rgba(41, 43, 44, 0.75)",
                              fontSize: "20px",
                            }}
                          >
                            <b>Preliminary Exam Results - 20{resultList[index].IndexNo.substring(0, 2)}</b>
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
                              <div className="resultBox">
                                {resultList[index].IndexNo}
                              </div>
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
                                textAlign: "center",
                              }}
                            >
                              Registration No:
                            </Col>

                            <Col md={{ span: 6 }} className='d-flex align-items-end justify-content-end' >
                              <div className="resultBox">
                                {resultList[index].RegNo}
                              </div>
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
                          resultList[index][subject.code] !== null ? (
                            <tr key={subject.code}>
                              <td style={{ fontSize: "15px" }}>
                                {subject.code}
                              </td>
                              <td
                                style={{ textAlign: "left", fontSize: "15px" }}
                              >
                                {subject.name}
                              </td>
                              <td style={{ fontSize: "15px" }}>
                                <b>{resultList[index][subject.code]}</b>
                              </td>
                              <td></td>
                            </tr>
                          ) : null
                        )}
                      </tbody>
                    </table>
                    <Container fluid>
                      <Row
                     
                        style={{ marginTop: "40px" }}
                      >
                        <Col >
                          <Row>
                            <Col
                              style={{
                                marginTop: "10px",
                                textAlign: "end",
                              }}
                            >
                              Total:
                            </Col>

                            <Col>
                              <div className="resultBox">
                                {resultList[index].Total}
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          
                            <Col className='d-flex flex-row' style={{ marginTop: "10px" }}>Average:</Col>
                            
                              <div className="resultBox">
                                {" "}
                                {resultList[index].Average}
                              </div>
                            
                          
                        </Col>
                      </Row>

                      <Row style={{ marginTop: "30px" }}>
                        <Col
                          md={{ span: 12 }}
                          className="d-flex justify-content-center  align-items-center"
                        >
                          <Row className="d-flex justify-content-end">
                            <Col style={{ marginTop: "10px" }}>Grade:</Col>
                            <Col>
                              <Chip
                                label={resultList[index].Grade}
                                style={{
                                  fontSize: "15px",
                                  color: "white",
                                  backgroundColor: "green",
                                  marginTop: "6px",
                                }}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  </Box>
                ))}
                
              </div>
              
            </>
          ) : null}
      
      </Container>
    </div>
  );
}

export default PreliminaryExamComponent
