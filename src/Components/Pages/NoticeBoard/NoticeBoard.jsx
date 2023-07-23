// NoticeBoard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './NoticeBoard.css'; 
import { Box } from '@material-ui/core';

const NoticeBoard = () => {
  const [noticesList, setNoticesList] = useState([]);

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

  const description = "Welcome to the Notice Board of Law College Sri Lanka! Here, you will find all the latest updates and essential information regarding Law College registration, exam registration, and much more. We encourage you to stay connected and keep an eye on all the important announcements posted here. Our Notice Board serves as a vital source of information to keep you informed about upcoming events, deadlines, and any changes that may occur during your time at Law College. Whether you are a current student, a prospective student, or a member of our esteemed faculty, this platform is designed to ensure that you have access to all the necessary details that pertain to your academic journey.";

  const formatSpecialDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-GB", { day: "numeric", month: "short" });
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            className="d-flex justify-content-center"
          >
            <Typography style={{ color: "#292B2C", textAlign: "justify" }}>
              {description}
            </Typography>
          </Col>
        </Row>

        <Row style={{ padding: "100px"}}>
          {noticesList.map((notice) => (
            <Col md={{span:3}}  key={notice.NoticeID} style={{marginBottom:"70px"}}>
              <Link to={`/NoticeBoard/Notice/${notice.NoticeID}`} style={{ textDecoration: 'none' }}>
                <Card className="card-container" sx={{ maxWidth: 345, height: "100%" }}>
                <CardMedia sx={{ backgroundColor: "white", height: "140px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box
                        sx={{
                          width: 100,
                          height: 100,
                          backgroundColor: "#232f4e",
                          "&:hover": {
                            backgroundColor: "#232f3e",
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
                           {formatSpecialDate(notice.SpecialDate)}
                          </Typography>
                        </div>
                      </Box>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {notice.Heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {notice.SubHeading}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default NoticeBoard;
