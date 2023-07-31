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
import { Box, useForkRef } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import { Formik, useFormik } from "formik";
import InputMask from 'react-input-mask';
import { fontStyle, width } from "@mui/system";
import { FormLabel } from "@mui/material";
import {FormControlLabel,FormGroup,Select,MenuItem,FormHelperText,Radio,Alert} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import defaultImage from './defaultImage.jpg'


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
  const [EditProfile, setEditProfile] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [userId,setUserId] = useState(null);
  const [student,setStudent] = useState([]);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  
  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/Student_login/userId", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setStudentId(response.data);
        const imageRef = ref(storage, `ProfilePictures/${response.data}/image`);
        getDownloadURL(imageRef)
          .then((url) => {
            setImageUrl(url);
          }).catch((error) => {
            setImageUrl('');
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


useEffect(() =>{

    axios.get("http://localhost:3001/Student_personal_details/ById", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response) => {
     
      setStudent(response.data)
      
    }).catch((e)=> {
      console.log("error" , e)
    })

  }, []);

const formik = useFormik({
  initialValues: {
    ContactNumberMobile:'',
    ContactNumberResident:'',
    Email:'',
    PermanentAddress:'',
    Province:'',
    CivilStatus:'',
    SrilankaCitizenship:'',
  },

  // validationSchema: ,

  onSubmit: async(values) => {

    const boolcivilStatus = values.CivilStatus == "Single" ? true : false;
    const boolsrilankaCitizenship = values.SrilankaCitizenship == "Yes" ? true : false;

    const response = await axios.put(
    'http://localhost:3001/Student_personal_details/',
      {
        ContactNumberMobile:values.ContactNumberMobile,
    ContactNumberResident:values.ContactNumberResident,
    Email:values.Email,
    PermanentAddress:values.PermanentAddress,
    Province:values.Province,
    CivilStatus:boolcivilStatus,
    SrilankaCitizenship:boolsrilankaCitizenship,
      },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
    );

    setIsSnackbarOpen(true);
    setEditProfile(false);
  }

});



useEffect(() => {

  const boolcivilStatus = student.CivilStatus ? "Single" : "Married";
  const boolcitizenship = student.SrilankaCitizenship ? "Yes" : "No";
  formik.setValues({ 
    ...formik.values,
    ContactNumberMobile: student.ContactNumberMobile,
    ContactNumberResident:"" || student.ContactNumberResident,
    Email: "" || student.Email,
    PermanentAddress: "" || student.PermanentAddress,
    CivilStatus: "" || boolcivilStatus,
    SrilankaCitizenship: "" || boolcitizenship,
  });
}, [student])



  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleEditToggle = () => {
    setEditProfile(true); //after edit done make it false
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
        console.log("error");
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
            {!EditProfile ? (

            <Col md={{ span: 9 }} style={{marginTop:"-20px"}}>
              <Box sx={boxStyles}>
                <Container className="d-flex flex-column align-items-center justify-content-end">
                  {/* Avatar */}

        <Container fluid >
                  <Row >
                    <Col md={{offset:1, span:3}} style={{marginTop:"20px"}}className="d-flex align-items-start justify-content-start">
                     
                        <Avatar
                          alt="profile pic"
                          src={imageUrl}
                          sx={{ width: 150, height: 150 }}
                        />
                      
                    </Col>
          
                    <Col md={{ span:6}}  style={{marginTop:"20px"}}className="d-flex flex-column align-items-start justify-content-start">
                    
                   

                    <h1 style={{ fontSize: '35px', fontWeight: 'bold', marginBottom: '10px' }}>
                    {student.NameInFull}</h1>
                    <p style={{marginBottom:"8px"}}> Level 1 </p>
                    <Chip size="small" sx={{fontSize:"12px",marginBottom:"15px"}}label={student.RegNo} variant="outlined" color="success" icon={<HowToRegRoundedIcon />} />
                      <Button size="small" variant="contained" onClick={handleEditToggle}>Edit Profile</Button>
                    </Col>
        

              
                    <Col>
                     
                    </Col>
                  </Row>
        

                  </Container>          
                  <Container fluid >
                  <Row style={{ marginTop: "30px", width: "80%" }}>
                  <Box sx={boxStyles}>

                  <Container>
      <Row style={{marginBottom:"10px"}}>
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1">NIC: </Typography>
        </Col>
        <Col>
          <Chip label={student.NIC} />
        </Col>
      </Row>

      {/* Secondary Fields */}
      <Row style={{marginBottom:"10px"}}>
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1">Name in Full: </Typography>
        </Col>
        <Col>
          <Chip label={student.NameInFull} />
        </Col>
      </Row>

      <Row style={{marginBottom:"10px"}}> 
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1"> Gender:  </Typography>
        </Col>
        <Col>
          <Chip label={student.Gender ? "Male" : "Female"} />
        </Col>
      </Row>

      <Row style={{marginBottom:"10px"}}>
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1"> DOB:  </Typography>
        </Col>
        <Col>
          <Chip label={student.DOB} />
        </Col>
      </Row>

      <Row style={{marginBottom:"10px"}}>
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1"> Contact Number (Mobile):  </Typography>
        </Col>
        <Col>
          <Chip label={student.ContactNumberMobile} />
        </Col>
      </Row>

      <Row style={{marginBottom:"10px"}}>
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1"> Contact Number (Resident):  </Typography>
        </Col>
        <Col>
          <Chip label={student.ContactNumberResident} />
        </Col>
      </Row>

      <Row style={{marginBottom:"10px"}}>
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1"> Email:  </Typography>
        </Col>
        <Col>
          <Chip label={student.Email} />
        </Col>
      </Row>

      <Row style={{marginBottom:"10px"}}> 
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1"> Permanent Address:  </Typography>
        </Col>
        <Col>
          <Chip label={student.PermanentAddress} />
        </Col>
      </Row>

      

      <Row style={{marginBottom:"10px"}}>
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1"> Civil Status:  </Typography>
        </Col>
        <Col>
          <Chip label={student.CivilStatus ? "Married" : "Single"} />
        </Col>
      </Row>

      <Row style={{marginBottom:"10px"}}>
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1"> Sri Lanka Citizenship:  </Typography>
        </Col>
        <Col>
          <Chip label={student.SrilankaCitizenship ? "Yes" : "No"} />
        </Col>
      </Row>

      <Row style={{marginBottom:"10px"}}>
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1"> Started Date:  </Typography>
        </Col>
        <Col>
          <Chip label={student.StartedDate} />
        </Col>
      </Row>

      <Row style={{marginBottom:"10px"}}>
        <Col md={{ span: 4, offset: 1 }} className="d-flex flex-column align-items-end justify-content-center">
          <Typography variant="body1"> Type:  </Typography>
        </Col>
        <Col>
          <Chip label={student.Type ? "General Applicants" : "LLB or State University Applicant"} />
        </Col>
      </Row>
    </Container>
                    </Box>
                  </Row>
                  </Container>
                  <Row>
                    <Col style={{ marginTop: "20px" }}>
                      {" "}
                      <Logout />
                    </Col>{" "}
                  </Row>
                </Container>
              </Box>
            </Col> ) :
            
            //Edit form 

            (
      
<Col md={{ span: 9 }} style={{marginTop:"-20px"}}>
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
                          src={url || imageUrl}
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
                      
                    </Col>
                  </Row>
              <form onSubmit={formik.handleSubmit}>

                  <Row style={{ marginTop: "30px", width: "70%" }}>
                  <Col className="d-flex align-items-center justify-content-end" md={{span:8}}>
                        <FormLabel>Contact Number(mobile) : *</FormLabel>
                      </Col>
                    <Col md={{span:4}}>
                       <InputMask
                          mask="999-999-9999"
                          maskChar=""
                          value={formik.values.ContactNumberMobile} // Pass value prop from formik
                          onChange={formik.handleChange} // Pass onChange handler from formik
                          onBlur={formik.handleBlur}
                        >
                          {(inputProps) => (
                            <TextField
                              id="ContactNumberMobile"
                              name="ContactNumberMobile"
                              placeholder=" 000-000-0000"
                              variant="outlined"
                              style={{width:"300px"}}
                              value={inputProps.value} // Set value prop from inputProps
                              onChange={inputProps.onChange} // Set onChange prop from inputProps
                              onBlur={inputProps.handleBlur}
                              error={
                                formik.touched.ContactNumberMobile &&
                                Boolean(formik.errors.ContactNumberMobile)
                              }
                              helperText={
                                formik.touched.ContactNumberMobile &&
                                formik.errors.ContactNumberMobile
                              }
                            />
                          )}
                        </InputMask>
                    </Col>
                    
                  </Row>

                  <Row style={{ marginTop: "30px", width: "70%" }}>
                  <Col className="d-flex align-items-center justify-content-end" md={{span:8}}>
                        <FormLabel>Contact Number(resident) : *</FormLabel>
                      </Col>
                    <Col md={{span:4}}>
                       <InputMask
                          mask="999-999-9999"
                          maskChar=""
                          value={formik.values.ContactNumberResident} // Pass value prop from formik
                          onChange={formik.handleChange} // Pass onChange handler from formik
                          onBlur={formik.handleBlur}
                        >
                          {(inputProps) => (
                            <TextField
                              id="ContactNumberResident"
                              name="ContactNumberResident"
                              placeholder=" 000-000-0000"
                              variant="outlined"
                              style={{width:"300px"}}
                              value={inputProps.value} // Set value prop from inputProps
                              onChange={inputProps.onChange} // Set onChange prop from inputProps
                              onBlur={inputProps.handleBlur}
                              error={
                                formik.touched.ContactNumberResident &&
                                Boolean(formik.errors.ContactNumberResident)
                              }
                              helperText={
                                formik.touched.ContactNumberResident &&
                                formik.errors.ContactNumberResident
                              }
                            />
                          )}
                        </InputMask>
                    </Col>
                    
                  </Row>


                  <Row style={{ marginTop: "30px", width: "70%" }}>
                  <Col className="d-flex align-items-center justify-content-end" md={{span:8}}>
                  <FormLabel>Email : * </FormLabel>
                      </Col>
                    <Col md={{span:4}}>
                    <TextField
                          name="Email"
                          value={formik.values.Email}
                          style={{width:"300px"}}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.Email && Boolean(formik.errors.Email)
                          }
                          helperText={
                            formik.touched.Email && formik.errors.Email
                          }
                        />
                    </Col>
                    
                  </Row>


                  <Row style={{ marginTop: "30px", width: "70%" }}>
                  <Col className="d-flex align-items-center justify-content-end" md={{span:8}}>
                  <FormLabel>Permanent Address : * </FormLabel>
                      </Col>
                    <Col md={{span:4}}>
                    <TextField
                          name="PermanentAddress"
                          value={formik.values.PermanentAddress}
                          style={{width:"300px"}}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.PermanentAddress && Boolean(formik.errors.PermanentAddress)
                          }
                          helperText={
                            formik.touched.PermanentAddress && formik.errors.PermanentAddress
                          }
                        />
                    </Col>
                    
                  </Row>

                  <Row style={{ marginTop: "30px", width: "100%" }}>
                  <Col className="d-flex align-items-center justify-content-end" md={{span:6}} style={{marginLeft:"-13px"}}>
                  <FormLabel>Civil Status : * </FormLabel>
                      </Col>
                    <Col md={{span:2}} >
                   
                          <FormControlLabel
                            value="Single"
                            control={<Radio />}
                            label="Single"
                            name="CivilStatus"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.CivilStatus === "Single"}
                          />
                          </Col>
                          <Col md={{span:2}} >
                          <FormControlLabel
                            value="Married"
                            control={<Radio />}
                            label="Married"
                            name="CivilStatus"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.CivilStatus === "Married"}
                          />
                         
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "10px",
                              marginTop: "12px",
                            }}
                          >
                             
                            {formik.touched.CivilStatus &&
                              formik.errors.CivilStatus && (
                                <div>{formik.errors.CivilStatus}</div>
                              )}
                          </div>
                        
                       
                    </Col>
                    
                  </Row>

                  <Row style={{ marginTop: "30px", width: "100%" }}>
                  <Col className="d-flex align-items-center justify-content-end" md={{span:6}} style={{marginLeft:"-13px"}}>
                  <FormLabel>Citizenship : * </FormLabel>
                      </Col>
                    <Col md={{span:2}}>
                    
                          <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                            name="SrilankaCitizenship"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.SrilankaCitizenship === "Yes"}
                            style={{ marginRight: "32px" }}
                          />
                          </Col> 
                          <Col md={{span:2}}>

                          <FormControlLabel
                            value="No"
                            control={<Radio />}
                            label="No"
                            name="SrilankaCitizenship"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.SrilankaCitizenship === "No"}
                          />
                          
                       
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "45px",
                              marginTop: "12px",
                            }}
                          >
                            {formik.touched.SrilankaCitizenship &&
                              formik.errors.SrilankaCitizenship && (
                                <div>{formik.errors.SrilankaCitizenship}</div>
                              )}
                          </div>
                 
                    </Col>
                    
                  </Row>

                  <Row>
                    <Col style={{ marginTop: "20px", marginLeft:"90px" }} className="d-flex align-items-center justify-content-center">
                      <Button variant="outlined" type="submit">Save Changes</Button>
                    </Col>
                  </Row>


                  </form>
                </Container>
              </Box>
            </Col> 
      

    )}

<Snackbar open={isSnackbarOpen} autoHideDuration={2000} onClose={handleSnackbarClose}>
  <MuiAlert elevation={6} variant="filled" severity="success">
    Changes have been saved...
  </MuiAlert>
</Snackbar>


          </Row>
        </Container>

        <Footer />
      </div>
    </StylesProvider>

    
      
    </>
  );
};

export default Profile;
