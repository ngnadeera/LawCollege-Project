import React, { useState } from "react";
import { useFormik } from "formik";
import { useRef } from "react";
import axios from 'axios';

import * as Yup from "yup";
import {
  Checkbox,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormLabel,
  FormHelperText,
  RadioGroup,
  Radio
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import "./styles/form.css";
import { boxStyles } from "./BoxStyles";
import { InnerBoxStyles } from "./InnerBoxStyels";
import Instruction1 from "./BasicInstruction/Instruction1";
import Instruction2 from "./BasicInstruction/Instruction2";
import Instruction3 from "./BasicInstruction/Instruction3";
import Instruction4 from "./BasicInstruction/Instruction4";
import Instruction5 from "./BasicInstruction/Instruction5";
import Instruction6 from "./BasicInstruction/Instruction6";
import Instruction7 from "./BasicInstruction/Instruction7";
import Instruction8 from "./BasicInstruction/Instruction8";
import provinceOptions from "./form_data/province";
import salutationOptions from "./form_data/salutaion";
import districtsecretariatOptions from "./form_data/districtsecretariat";
import InputMask from 'react-input-mask';






import { step1Validation } from "../../Schemas/GEARegistraion/step1Validation";
import { step2Validation } from "../../Schemas/GEARegistraion/step2Validation";
import { Stack, width } from "@mui/system";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// Step 1 validation schema

const currentDate  = new Date();

const stepLable = [
  "1. BASIC INSTRUCTIONS",
  "2. PERSONAL INFORMATION",
  "3. ACADEMIC QUALIFICATIONS",
  "4. DECELERATION ",
];

const step1ValidationSchema = step1Validation;
// Step 2 validation schema
const step2ValidationSchema = step2Validation;

// Step 3 validation schema
const step3ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),
});

// Step 4 validation schema
const step4ValidationSchema = Yup.object().shape({
  agreeTerms: Yup.bool().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

const steps = [
  {  validationSchema: step1ValidationSchema },
  { validationSchema: step2ValidationSchema },
  { validationSchema: step3ValidationSchema },
  {  validationSchema: step4ValidationSchema },
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const inputRef = useRef(null);
  const [copyText, setCopyText] = useState("Copy");
  const [refValue, setRefValue] = useState("");

  const [gkpaperLanguage, setGKPaperLanguage] = useState('');
  const [lpaperLanguage, setLPaperLanguage] = useState('');

  const formik = useFormik({
    initialValues: {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      namei: "",
      nid: "",
      refValue: "",

      // step 2 inital values

      salutation: "",
      fullname: "",
      addressline1: "",
      addressline2: "",
      addressline3: "",
      province:"",
      districtsecretariat: "",
      gramaniladaridivision: "",
      contactnumber: "",
      contactnumber2: "",
      email: "",
      gender:"",
      dob: "", 
      age: null,
      civilstatus:"",
      citizenship:"",
      nic2:"",
      gkpaper: "",
      lpaper: "",
      
    // step3initial values
      username: "",
      password: "",
      confirmPassword: "",
      name: "",
      age: "",
      agreeTerms: false,
    },
    validationSchema: steps[activeStep].validationSchema,

    onSubmit: async (values) => {
      window.scrollTo({ top: 0, behavior: "smooth" });

      if (activeStep === steps.length - 1) {
        // Submit the final form data
        try {
          await axios.post('http://localhost:3001/applicants', values);
          alert("Form submitted successfully");
          console.log("Form submitted:", values);
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Error submitting form");
        }
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    },

    onBlur: () => {},

  });

  const handleNext = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setActiveStep((prevStep) => prevStep + 1);
      }
    });
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleCopyClick = () => {
    inputRef.current.select();
    document.execCommand("copy");
    setCopyText("Copied");
  };

  const handleGKPaperLanguageChange = (event) => {

    const value = event.target.value;
    formik.setFieldValue('gkpaper', value);

    if (value === 'Sinhala' || value === 'Tamil') {
      formik.setFieldValue('lpaper','English');
    }
    if (value === 'English'){
      formik.setFieldValue('lpaper','');
    }
  };

  const handleLPaperLanguageChange = (event) => {
    
    const value = event.target.value;
    formik.setFieldValue('lpaper', value);

    if (value === 'Sinhala' || value === 'Tamil') {
      formik.setFieldValue('gkpaper','English');
    }
    if (value === 'English'){
      formik.setFieldValue('gkpaper','');
    }
  
  };

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <FormGroup>
              <div style={{ width: "100%" }}>
                <Typography
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    color: "rgba(0, 0, 0, 0.7)",
                    marginTop: "10px",
                  }}
                >
                  Please carefully read the following information and
                  instructions before proceeding to fill out your application
                  form.
                </Typography>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#cacacd",

                    margin: "10px 0 ",
                  }}
                />
              </div>

              {/* checkbox1 */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox1" />}
                  checked={formik.values.checkbox1}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox1 && Boolean(formik.errors.checkbox1)
                  }
                  helperText={
                    formik.touched.checkbox1 && formik.errors.checkbox1
                  }
                />

                <Box sx={InnerBoxStyles}>
                  <Typography
                    style={{
                      fontSize: "19px",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginTop: "10px",
                      textAlign: "justify",
                    }}
                  >
                    <Instruction1 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox1 && formik.errors.checkbox1 && (
                  <div>{formik.errors.checkbox1}</div>
                )}
              </div>

              {/* checkbox2 */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox2" />}
                  checked={formik.values.checkbox2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox2 && Boolean(formik.errors.checkbox2)
                  }
                  helperText={
                    formik.touched.checkbox2 && formik.errors.checkbox2
                  }
                />

                <Box sx={InnerBoxStyles}>
                  <Typography
                    style={{
                      fontSize: "19px",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginTop: "10px",
                      textAlign: "justify",
                    }}
                  >
                    <Instruction2 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox2 && formik.errors.checkbox2 && (
                  <div>{formik.errors.checkbox2}</div>
                )}
              </div>

              {/* checkbox3 */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox3" />}
                  checked={formik.values.checkbox3}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox3 && Boolean(formik.errors.checkbox3)
                  }
                  helperText={
                    formik.touched.checkbox3 && formik.errors.checkbox3
                  }
                />

                <Box sx={InnerBoxStyles}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: "19px",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginTop: "10px",
                      textAlign: "justify",
                    }}
                  >
                    <Instruction3 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox3 && formik.errors.checkbox3 && (
                  <div>{formik.errors.checkbox3}</div>
                )}
              </div>

              {/*checkbox4*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "10px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox4" />}
                  checked={formik.values.checkbox4}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox4 && Boolean(formik.errors.checkbox4)
                  }
                  helperText={
                    formik.touched.checkbox4 && formik.errors.checkbox4
                  }
                />

                <Box sx={InnerBoxStyles}>
                  <Typography
                    style={{
                      fontSize: "19px",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginTop: "10px",
                      textAlign: "justify",
                    }}
                  >
                    <Instruction4 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox4 && formik.errors.checkbox4 && (
                  <div>{formik.errors.checkbox4}</div>
                )}
              </div>

              {/*checkbox5*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox5" />}
                  checked={formik.values.checkbox5}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox5 && Boolean(formik.errors.checkbox5)
                  }
                  helperText={
                    formik.touched.checkbox5 && formik.errors.checkbox5
                  }
                />

                <Box sx={InnerBoxStyles}>
                  <Typography
                    style={{
                      fontSize: "19px",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginTop: "10px",
                      textAlign: "justify",
                    }}
                  >
                    <Instruction5 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox5 && formik.errors.checkbox5 && (
                  <div>{formik.errors.checkbox5}</div>
                )}
              </div>

              {/*checkbox6*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox6" />}
                  checked={formik.values.checkbox6}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox6 && Boolean(formik.errors.checkbox6)
                  }
                  helperText={
                    formik.touched.checkbox6 && formik.errors.checkbox6
                  }
                />

                <Box sx={InnerBoxStyles}>
                  <Typography
                    style={{
                      fontSize: "19px",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginTop: "10px",
                      textAlign: "justify",
                    }}
                  >
                    <Instruction6 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox6 && formik.errors.checkbox6 && (
                  <div>{formik.errors.checkbox6}</div>
                )}
              </div>

              {/*checkbox7*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox7" />}
                  checked={formik.values.checkbox7}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox7 && Boolean(formik.errors.checkbox7)
                  }
                  helperText={
                    formik.touched.checkbox7 && formik.errors.checkbox7
                  }
                />

                <Box sx={InnerBoxStyles}>
                  <Typography
                    style={{
                      fontSize: "19px",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginTop: "10px",
                      textAlign: "justify",
                    }}
                  >
                    <Instruction7 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox7 && formik.errors.checkbox7 && (
                  <div>{formik.errors.checkbox7}</div>
                )}
              </div>

              {/* Reference Number */}

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  marginTop: "35px",
                }}
              >
                <Box sx={InnerBoxStyles}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "19px",
                        color: "rgba(0, 0, 0, 0.7)",
                        marginTop: "10px",
                        textAlign: "justify",
                      }}
                    >
                      <b>How to create Payment Reference Number?</b>
                    </Typography>

                    <hr style={{ margin: "0px -18px 25px -18px" }} />

                    <Grid container spacing={5}>
                      <Grid item xs={12} lg={6}>
                        <Typography
                          sx={{
                            ml: "5px",
                            mb: "8px",
                            color: "rgba(0, 0, 0, 0.7)",
                          }}
                        >
                          <b></b>Name with Initials: *{" "}
                        </Typography>
                        <TextField
                          name="namei"
                          value={formik.values.namei.toUpperCase()}
                          onChange={(e) => {
                            formik.handleChange(e);
                            setRefValue(
                              formik.values.nid.toUpperCase().trimEnd() +
                                " " +
                                e.target.value.toUpperCase().trimEnd()
                            );
                          }}
                          error={
                            formik.touched.namei && Boolean(formik.errors.namei)
                          }
                          helperText={
                            formik.touched.namei && formik.errors.namei
                          }
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <Typography
                          sx={{
                            ml: "5px",
                            mb: "8px",
                            color: "rgba(0, 0, 0, 0.7)",
                          }}
                        >
                          <b></b>National Identity Card Number: *{" "}
                        </Typography>
                        <TextField
                          name="nid"
                          value={formik.values.nid}
                          onChange={(e) => {
                            formik.handleChange(e);
                            setRefValue(
                              e.target.value.toUpperCase().trimEnd() +
                                " " +
                                formik.values.namei.toUpperCase().trimEnd()
                            );
                          }}
                          error={
                            formik.touched.nid && Boolean(formik.errors.nid)
                          }
                          helperText={formik.touched.nid && formik.errors.nid}
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <Typography
                          sx={{
                            ml: "5px",
                            mb: "10px",

                            color: "rgba(0, 0, 0, 0.7)",
                          }}
                        >
                          Reference Number:
                        </Typography>

                        <TextField
                          variant="filled"
                          fullWidth
                          name="ref"
                          value={"GEA " + refValue}
                          onChange={formik.han}
                          helperText="GEA/NIC Number/Name with Initials"
                          InputProps={{
                            readOnly: true,
                            endAdornment: (
                              <InputAdornment position="end">
                                <span
                                  style={{
                                    cursor: "pointer",
                                    userSelect: "none",
                                  }}
                                  onClick={handleCopyClick}
                                >
                                  {copyText}
                                </span>
                              </InputAdornment>
                            ),
                          }}
                          inputRef={inputRef}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </Box>
              </div>

              {/* checkbox8 */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox8" />}
                  checked={formik.values.checkbox8}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox8 && Boolean(formik.errors.checkbox8)
                  }
                  helperText={
                    formik.touched.checkbox8 && formik.errors.checkbox8
                  }
                />

                <Box sx={InnerBoxStyles}>
                  <Typography
                    style={{
                      fontSize: "19px",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginTop: "10px",
                      textAlign: "justify",
                      lineHeight: "25px",
                    }}
                  >
                    <Instruction8 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox8 && formik.errors.checkbox8 && (
                  <div>{formik.errors.checkbox8}</div>
                )}
              </div>
            </FormGroup>
          </>
        );

        {
          /*second step*/
        }

      case 1:
        return (
          <>
            <div style={{ width: "100%" }}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "rgba(0, 0, 0, 0.7)",
                  marginTop: "10px",
                }}
              >
                To the best of your knowledge, please ensure that you accurately
                fill out the following document with the most reliable and
                precise information available.
              </Typography>
              <hr
                style={{
                  height: "1px",
                  backgroundColor: "#cacacd",
                  width: "100%",
                  margin: "10px 0px 20px 0px",
                }}
              />

              <FormGroup>
                <Box sx={InnerBoxStyles} style={{ marginLeft: "30px" }}>
                  <Container fluid style={{ marginTop: "25px" }}>
                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Salutation : *</FormLabel>
                      </Col>
                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <Select
                          id="salutation"
                          name="salutation"
                          style={{ width: "50%" }}
                          value={formik.values.salutation}
                          onChange={(event) => {
                            formik.handleChange(event);

                            [
                              "fullname",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={formik.handleBlur}
                          onTouchEnd={() => {}}
                          displayEmpty
                          error={
                            formik.touched.salutation &&
                            Boolean(formik.errors.salutation)
                          }
                        >
                          {salutationOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>

                        {formik.touched.salutation &&
                          formik.errors.salutation && (
                            <FormHelperText error>
                              &nbsp;{formik.errors.salutation}
                            </FormHelperText>
                          )}
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Name in full : *</FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        md={8}
                        xs={12}
                      >
                        <TextField
                          name="fullname"
                          multiline
                          fullWidth
                          maxRows={3}
                          value={formik.values.fullname}
                          style={{ width: "75%" }}
                          onChange={(event) => {
                            formik.handleChange(event);
                            [
                              "salutation",
                              "addressline2",
                              "addressline1",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            [
                              "salutation",
                              "addressline2",
                              "addressline1",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.fullname &&
                            Boolean(formik.errors.fullname)
                          }
                          helperText={
                            formik.touched.fullname && formik.errors.fullname
                          }
                        />
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Permanent Address : *</FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="addressline1"
                          value={formik.values.addressline1}
                          placeholder="Address Line 1"
                          onChange={(event) => {
                            formik.handleChange(event);
                            ["salutation", "addressline2", "fullname"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            ["salutation", "addressline2", "fullname"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.addressline1 &&
                            Boolean(formik.errors.addressline1)
                          }
                          helperText={
                            formik.touched.addressline1 &&
                            formik.errors.addressline1
                          }
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: "30px" }}>
                      <Col></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="addressline2"
                          value={formik.values.addressline2}
                          placeholder="Address Line 2"
                          onChange={(event) => {
                            formik.handleChange(event);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.addressline2 &&
                            Boolean(formik.errors.addressline2)
                          }
                          helperText={
                            formik.touched.addressline2 &&
                            formik.errors.addressline2
                          }
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: "30px" }}>
                      <Col></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="addressline3"
                          value={formik.values.addressline3}
                          placeholder="Address Line 3"
                          onChange={(event) => {
                            formik.handleChange(event);
                            [
                              "fullname",
                              "salutation",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            [
                              "fullname",
                              "salutation",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.addressline3 &&
                            Boolean(formik.errors.addressline3)
                          }
                          helperText={
                            formik.touched.addressline3 &&
                            formik.errors.addressline3
                          }
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    {/* province */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Province : *</FormLabel>
                      </Col>
                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <Select
                          id="province"
                          name="province"
                          style={{ width: "50%" }}
                          value={formik.values.province}
                          onChange={(event) => {
                            formik.handleChange(event);

                            [
                              "fullname",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={formik.handleBlur}
                          displayEmpty
                          error={
                            formik.touched.province &&
                            Boolean(formik.errors.province)
                          }
                        >
                          {provinceOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>

                        {formik.touched.province && formik.errors.province && (
                          <FormHelperText error>
                            &nbsp;{formik.errors.province}
                          </FormHelperText>
                        )}
                      </Col>
                    </Row>

                    {/* District secretariat */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>District secretariat : *</FormLabel>
                      </Col>
                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <Select
                          id="districtsecretariat"
                          name="districtsecretariat"
                          style={{ width: "50%" }}
                          value={formik.values.districtsecretariat}
                          onChange={(event) => {
                            formik.handleChange(event);

                            [
                              "fullname",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={formik.handleBlur}
                          displayEmpty
                          error={
                            formik.touched.districtsecretariat &&
                            Boolean(formik.errors.districtsecretariat)
                          }
                        >
                          {districtsecretariatOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>

                        {formik.touched.districtsecretariat &&
                          formik.errors.districtsecretariat && (
                            <FormHelperText error>
                              &nbsp;{formik.errors.districtsecretariat}
                            </FormHelperText>
                          )}
                      </Col>
                    </Row>

                    {/* Grama Niladari Devision */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Grama Niladari Division : *</FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="gramaniladaridivision"
                          value={formik.values.gramaniladaridivision}
                          onChange={(event) => {
                            formik.handleChange(event);
                            [
                              "fullname",
                              "salutation",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            [
                              "fullname",
                              "salutation",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.gramaniladaridivision &&
                            Boolean(formik.errors.gramaniladaridivision)
                          }
                          helperText={
                            formik.touched.gramaniladaridivision &&
                            formik.errors.gramaniladaridivision
                          }
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    {/* contact number (mobile) */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Contact Number(mobile) : *</FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <InputMask
                          mask="999-999-9999"
                          maskChar=""
                          value={formik.values.contactnumber} // Pass value prop from formik
                          onChange={formik.handleChange} // Pass onChange handler from formik
                          onBlur={formik.handleBlur}
                        >
                          {(inputProps) => (
                            <TextField
                              id="contactnumber"
                              name="contactnumber"
                              placeholder="Enter your contact number in 000-000-0000 format"
                              variant="outlined"
                              style={{ width: "75%" }}
                              value={inputProps.value} // Set value prop from inputProps
                              onChange={inputProps.onChange} // Set onChange prop from inputProps
                              onBlur={inputProps.handleBlur}
                              error={
                                formik.touched.contactnumber &&
                                Boolean(formik.errors.contactnumber)
                              }
                              helperText={
                                formik.touched.contactnumber &&
                                formik.errors.contactnumber
                              }
                            />
                          )}
                        </InputMask>
                      </Col>
                    </Row>

                    {/* contact number (home) */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Contact Number(residence) : </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <InputMask
                          mask="999-999-9999"
                          maskChar=""
                          value={formik.values.contactnumber2} // Pass value prop from formik
                          onChange={formik.handleChange} // Pass onChange handler from formik
                        >
                          {(inputProps) => (
                            <TextField
                              id="contactnumber2"
                              name="contactnumber2"
                              placeholder="Enter your contact number in 000-000-0000 format"
                              variant="outlined"
                              style={{ width: "75%" }}
                              value={inputProps.value} // Set value prop from inputProps
                              onChange={inputProps.onChange} // Set onChange prop from inputProps
                              onBlur={inputProps.handleBlur}
                              error={
                                formik.touched.contactnumber2 &&
                                Boolean(formik.errors.contactnumber2)
                              }
                              helperText={
                                formik.touched.contactnumber2 &&
                                formik.errors.contactnumber2
                              }
                            />
                          )}
                        </InputMask>
                      </Col>
                    </Row>

                    {/* email */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Email : </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="email"
                          value={formik.values.email}
                          onChange={(event) => {
                            formik.handleChange(event);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    {/* Gender */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Gender : * </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                            name="gender"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gender === "male"}
                          />
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                            name="gender"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gender === "female"}
                          />
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "10px",
                              marginTop: "12px",
                            }}
                          >
                            {formik.touched.gender && formik.errors.gender && (
                              <div>{formik.errors.gender}</div>
                            )}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    {/* Date of Birth */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Date of Birth : * </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          id="dob"
                          name="dob"
                          type="date"
                          variant="outlined"
                          style={{ width: "75%" }}
                          value={formik.values.dob}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.dob && Boolean(formik.errors.dob)
                          }
                          helperText={formik.touched.dob && formik.errors.dob}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            max: new Date().toISOString().split("T")[0],
                          }}
                        
                        />
                      </Col>
                    </Row>

                    {/* Age */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>
                          Age as at ({currentDate.toDateString()}) : *{" "}
                        </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="age"
                          value={formik.values.age}
                          onChange={(event) => {
                            formik.handleChange(event);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.age && Boolean(formik.errors.age)
                          }
                          helperText={formik.touched.age && formik.errors.age}
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    {/* Civil status */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Civil Status : * </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            value="Single"
                            control={<Radio />}
                            label="Single"
                            name="civilstatus"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.civilstatus === "Single"}
                          />
                          <FormControlLabel
                            value="Married"
                            control={<Radio />}
                            label="Married"
                            name="civilstatus"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.civilstatus === "Married"}
                          />
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "10px",
                              marginTop: "12px",
                            }}
                          >
                            {formik.touched.civilstatus &&
                              formik.errors.civilstatus && (
                                <div>{formik.errors.civilstatus}</div>
                              )}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    {/* Citizenship */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Sri Lankan Citizenship : * </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                            name="citizenship"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.citizenship === "Yes"}
                            style={{ marginRight: "32px" }}
                          />
                          <FormControlLabel
                            value="No"
                            control={<Radio />}
                            label="No"
                            name="citizenship"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.citizenship === "No"}
                          />
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "45px",
                              marginTop: "12px",
                            }}
                          >
                            {formik.touched.citizenship &&
                              formik.errors.citizenship && (
                                <div>{formik.errors.citizenship}</div>
                              )}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    {/* Nic number */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>NIC Number : </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="nic2"
                          value={formik.values.nic2}
                          onChange={(event) => {
                            const trimmedValue = event.target.value.trim();
                            formik.setFieldValue("nic2", trimmedValue);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.nic2 && Boolean(formik.errors.nic2)
                          }
                          helperText={formik.touched.nic2 && formik.errors.nic2}
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    {/* Instructions  */}

                    {/* Nic number */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end"></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <Typography
                          style={{
                            fontSize: "19px",
                            color: "rgba(0, 0, 0, 0.7)",
                            textAlign: "justify",
                            width: "75%",
                          }}
                        >
                          <p>
                            {" "}
                            A candidate may elect to answer the General
                            Knowledge and General Intelligence Paper in Sinhala,
                            Tamil, or English Language. Suppose the candidate
                            chooses to answer the General Knowledge and General
                            Intelligence Paper in either the Sinhala Language or
                            the Tamil Language. In that case, the candidate
                            should elect to sit for the English Language Paper.
                            II the candidate chooses to answer, the General
                            knowledge and General Intelligence Paper in the
                            English Language. the candidate should elect to sit
                            for either the Sinhala Language or the Tamil
                            Language Paper{" "}
                          </p>{" "}
                          <br />
                          <p>
                            (i) Medium in which you wish to sit the General
                            Knowledge and General Intelligence Paper at the
                            Entrance Examination?: *{" "}
                          </p>
                        </Typography>
                      </Col>
                    </Row>

                    {/* {General Intelligence paper} */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end"></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            value="Sinhala"
                            control={<Radio />}
                            label="Sinhala"
                            name="gkpaper"
                            onChange={handleGKPaperLanguageChange}                            onBlur={formik.handleBlur}
                            checked={formik.values.gkpaper === "Sinhala"}
                            style={{ marginRight: "32px" }}
                          />
                          <FormControlLabel
                            value="Tamil"
                            control={<Radio />}
                            label="Tamil"
                            name="gkpaper"
                            onChange={handleGKPaperLanguageChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gkpaper === "Tamil"}
                          />

                          <FormControlLabel
                            value="English"
                            control={<Radio />}
                            label="English"
                            name="gkpaper"
                            onChange={handleGKPaperLanguageChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gkpaper === "English"}
                            style={{ marginRight: "32px" }}
                            disabled={formik.values.lpaper === 'English'}

                          />
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "45px",
                              marginTop: "12px",
                            }}
                          >
                            {formik.touched.gkpaper &&
                              formik.errors.gkpaper && (
                                <div>{formik.errors.gkpaper}</div>
                              )}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end"></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <Typography
                          style={{
                            fontSize: "19px",
                            color: "rgba(0, 0, 0, 0.7)",
                            textAlign: "justify",
                            width: "75%",
                          }}
                        >
                          <p>
                            (i) Medium in which you wish to sit the Language Paper at the
                            Entrance Examination?: *{" "}
                          </p>
                        </Typography>
                      </Col>
                    </Row>

                    {/* Language paper */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end"></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            value="Sinhala"
                            control={<Radio />}
                            label="Sinhala"
                            name="lpaper"
                            onChange={handleLPaperLanguageChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.lpaper === "Sinhala"}
                            style={{ marginRight: "32px" }}
                          />
                          <FormControlLabel
                            value="Tamil"
                            control={<Radio />}
                            label="Tamil"
                            name="lpaper"
                            onChange={handleLPaperLanguageChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.lpaper === "Tamil"}
                          />

                          <FormControlLabel
                            value="English"
                            control={<Radio />}
                            label="English"
                            name="lpaper"
                            onChange={handleLPaperLanguageChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.lpaper === "English"}
                            style={{ marginRight: "32px" }}
                            disabled={formik.values.gkpaper === 'English'}
                          />
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "45px",
                              marginTop: "12px",
                            }}
                          >
                            {formik.touched.lpaper &&
                              formik.errors.lpaper && (
                                <div>{formik.errors.lpaper}</div>
                              )}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>



                  </Container>
                </Box>
              </FormGroup>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <TextField
            required
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
             
            />
            <TextField
            required
              name="age"
              label="Age"
              type="number"
              value={formik.values.age}
              onChange={formik.handleChange}
              
            />
          </>
        );
      case 3:
        return (
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="agreeTerms" />}
              label="I agree to the terms and conditions"
              checked={formik.values.agreeTerms}
              onChange={formik.handleChange}
              error={
                formik.touched.agreeTerms && Boolean(formik.errors.agreeTerms)
              }
              helperText={formik.touched.agreeTerms && formik.errors.agreeTerms}
            />
          </FormGroup>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ marginTop: "20px" }}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{stepLable[index]}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={boxStyles}>
        <form onSubmit={formik.handleSubmit}>
          {renderStepContent(activeStep)}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginLeft: "auto",
              marginTop: "10px",
            }}
          >
            <Button
              variant="outlined"
              size="large"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: "20px" }}
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default MultiStepForm;




