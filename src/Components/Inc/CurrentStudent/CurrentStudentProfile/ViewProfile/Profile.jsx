import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Cmp/Header";
import Footer from "../../../Footer";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StylesProvider } from "@material-ui/core/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Sidebar from "../Cmp/Sidebar";
import Logout from "../CurrentStudentInit";
import { Avatar, Button, Typography } from "@mui/material";
import { storage } from "../../../FireBase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { styled } from "@mui/material/styles";
import Input from "@mui/material/Input";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TextField from "@mui/material/TextField";
import { boxStyles } from "../../../../Pages/Registration/GeneralApplicant/Cmp/BoxStyles";
import { Box } from "@material-ui/core";
import Chip from "@mui/material/Chip";

const StyledInput = styled("input")({
  display: "none",
});

const UploadButton = styled(Button)({
  marginTop: "16px",
});

const Profile = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Student_login/userId", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setStudentId(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!studentId) {
      console.log("Student ID not available.");
      return;
    }

    const imageRef = ref(storage, `ProfilePictures/${studentId}/image`);
    setUploading(true);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            setUploading(false);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
            setUploading(false);
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
        setUploading(false);
      });
  };

  // Breadcrumb data
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/CurrentStudent/ViewProfile" },
  ];

  return (
    <>
      <StylesProvider injectFirst>
        <div>
          <Header />
          {/* Breadcrumb */}
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
                  index === breadcrumbLinks.length - 1
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
              <Col md={{ span: 8 }} style={{marginTop:"-20px"}}>
                <Box sx={boxStyles}>
                  <Container className="d-flex flex-column align-items-center justify-content-end">
                    {/* Avatar */}

                    <Row>
                      <Col>
                        {uploading ? (
                          <CircularProgress />
                        ) : (
                          <Avatar
                            alt="profile pic"
                            src={url}
                            sx={{ width: 150, height: 150 }}
                          />
                        )}
                      </Col>
                    </Row>

                    {/* Change Image Button */}
                    <Row>
                      <Col>
                        <StyledInput
                          accept="image/*"
                          id="image-input"
                          type="file"
                          onChange={handleImageChange}
                        />
                        <label htmlFor="image-input">
                          <UploadButton
                            variant="outlined"
                            color="primary"
                            component="span"
                            size="small"
                          >
                            Change Image
                          </UploadButton>
                        </label>
                      </Col>
                    </Row>

                    {/* Upload Button */}
                    <Row style={{ marginTop: "10px" }}>
                      <Col>
                        <Button variant="contained" size="small" onClick={handleSubmit}>
                          Upload
                        </Button>
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "20px" }}>
                      <Col>
                        <Chip label="Level 1" color="error" />
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "30px", width: "70%" }}>
                      <Col>
                        <TextField
                          id="outlined-basic"
                          fullWidth
                          label="Full Name"
                          variant="outlined"
                        />
                      </Col>
                      <Col>
                        <TextField
                          id="outlined-basic"
                          fullWidth
                          label="Full Name"
                          variant="outlined"
                        />
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "30px", width: "70%" }}>
                      <Col>
                        <TextField
                          id="outlined-basic"
                          fullWidth
                          label="Full Name"
                          variant="outlined"
                        />
                      </Col>
                      <Col>
                        <TextField
                          id="outlined-basic"
                          fullWidth
                          label="Full Name"
                          variant="outlined"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ marginTop: "20px" }}>
                        {" "}
                        <Logout />
                      </Col>{" "}
                    </Row>
                  </Container>
                </Box>
              </Col>
            </Row>
          </Container>

          <Footer />
        </div>
      </StylesProvider>
    </>
  );
};

export default Profile;
