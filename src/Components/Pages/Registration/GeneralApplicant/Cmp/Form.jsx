import React, { useState } from "react";
import { useFormik } from "formik";
import { useRef } from "react";

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

// Step 1 validation schema

const stepLable = [
  "1. BASIC INSTRUCTIONS",
  "2. PERSONAL INFORMATION",
  "3. ACADEMIC QUALIFICATIONS",
  "4. DECELERATION ",
];

const checkboxerrormessage =
  "Please carefully  read the instructions and check the box to proceed.";

const step1ValidationSchema = Yup.object().shape({
  checkbox1: Yup.bool().oneOf([true], checkboxerrormessage),
  checkbox2: Yup.bool().oneOf([true], checkboxerrormessage),
  checkbox3: Yup.bool().oneOf([true], checkboxerrormessage),
  checkbox4: Yup.bool().oneOf([true], checkboxerrormessage),
  checkbox5: Yup.bool().oneOf([true], checkboxerrormessage),
  checkbox6: Yup.bool().oneOf([true], checkboxerrormessage),
  checkbox7: Yup.bool().oneOf([true], checkboxerrormessage),
  namei: Yup.string().required("Name with initials is required"),
  nid: Yup.string().required("Name with initials is required"),
});

// Step 2 validation schema
const step2ValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

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
  { label: "Step 1", validationSchema: step1ValidationSchema },
  { label: "Step 2", validationSchema: step2ValidationSchema },
  { label: "Step 3", validationSchema: step3ValidationSchema },
  { label: "Step 4", validationSchema: step4ValidationSchema },
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const inputRef = useRef(null);
  const [copyText, setCopyText] = useState('Copy');
  const [combinedValue, setCombinedValue] = useState('');



  const formik = useFormik({
    initialValues: {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      namei: "",
      nid: "",

      username: "",
      password: "",
      confirmPassword: "",
      name: "",
      age: "",
      agreeTerms: false,
    },
    validationSchema: steps[activeStep].validationSchema,

    onSubmit: (values) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (activeStep === steps.length - 1) {
        // Submit the final form data
        alert("form submitted");
        console.log("Form submitted:", values);
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    },
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
    document.execCommand('copy');
    setCopyText('Copied');
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
                    width: "100%",
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
                  marginTop: "10px",
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
            </FormGroup>

            {/* Reference Number */}

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                marginTop: "10px",
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
                        label="name with initials"
                        value={formik.values.namei}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.namei && Boolean(formik.errors.namei)
                        }
                        helperText={formik.touched.namei && formik.errors.namei}
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
                        label="National Identity Card"
                        value={formik.values.nid}
                        onChange={formik.handleChange}
                        error={formik.touched.nid && Boolean(formik.errors.nid)}
                        helperText={formik.touched.nid && formik.errors.nid}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12} lg={12} >

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

                        fullWidth
                        name="ref"
                        defaultValue={formik.values.namei + formik.values.nid}
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
          </>
        );

      case 1:
        return (
          <>
            <TextField
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              name="age"
              label="Age"
              type="number"
              value={formik.values.age}
              onChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
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
      <Stepper activeStep={activeStep} alternativeLabel>
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
              marginLeft: "auto",
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
