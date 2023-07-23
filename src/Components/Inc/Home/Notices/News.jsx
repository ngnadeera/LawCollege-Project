import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import "./News.css";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Link } from 'react-router-dom';


const News = () => {
  const [noticesList, setNoticesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const[sortedNoticesList,setSortedNoticesList] =useState([]);

  const fetchNotices = async () => {
    try {
      const response = await axios.get("http://localhost:3001/Notices/listOfNotices");
      setNoticesList(response.data);
    } catch (error) {
      console.error("Error fetching notices:", error);
    } 
  };
  useEffect(() => {
    fetchNotices();
  }, []);

  useEffect(() => {
    try{if (noticesList.length > 0){
      setSortedNoticesList([...noticesList].sort((b, a) => a.NoticeID - b.NoticeID).slice(0, 3));
      setLoading(false)
    }
  }catch(e){
    console.log(e)
  } finally {

  }
    
  }, [noticesList]);


 

  // Check if the noticesList is empty or not
  const firstNoticeHeading = sortedNoticesList.length > 0 ? sortedNoticesList[0].Heading : "1st notice Heading";
  const secondNoticeHeading = sortedNoticesList.length > 0 ? sortedNoticesList[1].Heading : "2nd notice Heading";
  const thirdNoticeHeading = sortedNoticesList.length > 0 ? sortedNoticesList[2].Heading : "2nd notice Heading";

  const firstNoticeSubheading = sortedNoticesList.length > 0 ? sortedNoticesList[0].SubHeading : "1st notice Subheading";
  const secondNoticeSubheading = sortedNoticesList.length > 1 ? sortedNoticesList[1].SubHeading : "2nd notice Subheading";
  const thirdNoticeSubheading = sortedNoticesList.length > 2 ? sortedNoticesList[2].SubHeading : "3rd notice Subheading";

  const formatSpecialDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-GB", { day: "numeric", month: "short" });
  };

  // Additional constants for first, second, and third special dates
  const firstSpecialDate = sortedNoticesList.length > 0 ? sortedNoticesList[0].SpecialDate : "1st Special Date";
  const secondSpecialDate = sortedNoticesList.length > 1 ? formatSpecialDate(sortedNoticesList[1].SpecialDate) : "2nd Special Date";
  const thirdSpecialDate = sortedNoticesList.length > 2 ? formatSpecialDate(sortedNoticesList[2].SpecialDate) : "3rd Special Date";


 

  return (
    <div>
      {loading ? (
        // Show the spinner while loading is true
        <CircularProgress />
      ) : (
    
<div style={{ marginTop: "40px" }}>
      {loading ? (
        <Container fluid>
          <Row>
            <Col className="d-flex align-items-center justify-content-center" md={12}>
              <CircularProgress />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid>
          <Row>
            <Col className="d-flex align-items-start justify-content-start" md={{ offset: 2 }}>
              <Typography style={{ fontSize: "25px", marginLeft: "10px", fontWeight: "bolder" }}>
                Law College Notices
              </Typography>
            </Col>
          </Row>

          <Row style={{ marginTop: "20px" }}>
            <Col className="d-flex align-items-start justify-content-start" md={{ span: 4, offset: 2 }}>
            <Link to="/NoticeBoard" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="box main-box">
                <Container>
                  <Row>
                    <Col style={{ marginLeft: "7px", marginTop: "17px" }}>
                      <Chip
                        label={firstSpecialDate}
                        variant="contained"
                        style={{
                          backgroundColor: "#CBB58B",
                          fontStyle: "bold",
                          color: "white",
                          borderRadius: "5px",
                          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                        }}
                      />

                    </Col>
                  </Row>
                  <Row
                    className="d-flex align-items-end justify-content-start"
                    style={{ marginTop: "150px" }}
                  >
                    <Col>
                      <Typography
                        style={{
                          color: "white",
                          fontSize: "25px",
                          fontWeight: "500",
                          letterSpacing: "2px",
                        }}
                      >
                       {firstNoticeHeading}
                      </Typography>
                      <hr
                        style={{
                          width: "70px",
                          border: "2px solid white",
                          marginTop: "0px",
                          borderColor: "white",
                          opacity: 2,
                        }}
                      />
                      <Typography
                        style={{
                          color: "white",
                          fontSize: "12px",
                          marginTop: "-6px",
                        }}
                      >
                       {firstNoticeSubheading}
                      </Typography>
                    </Col>
                  </Row>
                  {/* Smaller Box 1 */}
                  <Row style={{ marginTop: "20px" }}>
                    <Col></Col>
                  </Row>
                </Container>
              </div>
              </Link>
            </Col>
            <Col md={{ span: 4 }} style={{ marginTop: "30px", marginLeft: "20px" }}>
              <Link to="/NoticeBoard" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="side-box">
                <Container>
                  <Row>
                    <Col md={{ span: 3 }}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          backgroundColor: "#665C7C",
                          "&:hover": {
                            backgroundColor: "#665C7C",
                            opacity: [0, 0, 0.9],
                          },
                          borderRadius: "5px",
                          position: "relative",
                        }}
                      >
                        {/* Smaller Box 2 */}
                        <div
                          className="smaller-box"
                          style={{
                            border: "1px dashed white",
                            padding: "5px",
                            width: "75px",
                            position: "absolute",
                            top: 10,
                            left: 10,
                            right: 10,
                            bottom: 10,
                            margin: "auto",
                          }}
                        >
                          <Typography
                            style={{
                              color: "white",
                              fontSize: "25px",
                              fontWeight: "bold",
                              textAlign: "center",
                              lineHeight: "25.5px",
                              marginTop: "8px",
                            }}
                          >
                           {secondSpecialDate}
                          </Typography>
                        </div>
                      </Box>
                    </Col>
                    <Col>
                      <Typography style={{ fontSize: "22px" }}>
                        <b>{secondNoticeHeading}</b>
                      </Typography>
                      <Typography style={{ fontSize: "15px" }}>
                      {secondNoticeSubheading}{" "}
                      </Typography>
                    </Col>
                  </Row>
                </Container>
              </div></Link>

              <Link to="/NoticeBoard" style={{ textDecoration: 'none', color: 'inherit' }}>

              <div className="side-box">
                <Container>
                  <Row>
                    <Col md={{ span: 3 }}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          backgroundColor: "#665C7C",
                          "&:hover": {
                            backgroundColor: "#665C7C",
                            opacity: [0, 0, 0.9],
                          },
                          borderRadius: "5px",
                          position: "relative",
                        }}
                      >
                        {/* Smaller Box 2 */}
                        <div
                          className="smaller-box"
                          style={{
                            border: "1px dashed white",
                            padding: "5px",
                            width: "75px",
                            position: "absolute",
                            top: 10,
                            left: 10,
                            right: 10,
                            bottom: 10,
                            margin: "auto",
                          }}
                        >
                          <Typography
                            style={{
                              color: "white",
                              fontSize: "25px",
                              fontWeight: "bold",
                              textAlign: "center",
                              lineHeight: "25.5px",
                              marginTop: "8px",
                            }}
                          >
                           {thirdSpecialDate}
                          </Typography>
                        </div>
                      </Box>
                    </Col>
                    <Col>
                      <Typography style={{ fontSize: "22px" }}>
                        <b>{thirdNoticeHeading}</b>
                      </Typography>
                      <Typography style={{ fontSize: "15px" }}>
                      {thirdNoticeSubheading}
                      </Typography>
                    </Col>
                  </Row>
                </Container>
              </div> </Link>
            </Col>
          </Row>
        </Container>
      )}
    </div>
      )}
    </div>
  );
};

export default News;