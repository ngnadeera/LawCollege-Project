

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Typography, Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";

import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { boxStyles } from "./BoxStyles";
import { InnerBoxStyles } from "./InnerBoxStyels";
import MainStepper from "./MainStepper";
import Instruction1 from "./BasicInstruction/Instruction1";
import Instruction2 from "./BasicInstruction/Instruction2";
import Instruction3 from "./BasicInstruction/Instruction3";
import Instruction4 from "./BasicInstruction/Instruction4";
import Instruction5 from "./BasicInstruction/Instruction5";
import Instruction6 from "./BasicInstruction/Instruction6";
import Instruction7 from "./BasicInstruction/Instruction7";

import GEAformValidation from "../../Schemas/GEAformValidation";
import "./styles/form.css";
import { width } from "@mui/system";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4; // Total number of steps in the form

  const nextStep = async () => {
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const renderStepContent = (formik) => {
    switch (step) {
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
                Please carefully read the following information and instructions
                before proceeding to fill out your application form.
              </Typography>

              <hr
                style={{
                  height: "0.5px",
                  backgroundColor: "#cacacd",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 30 },
                    "&.Mui-checked": {
                      color: "#3f51b5",
                    },
                  }}
                  required
                  name="instruction1Checkbox"
                  checked={formik.values.instruction1Checkbox}
                  onChange={formik.handleChange}
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
                {formik.touched.instruction1Checkbox &&
                  formik.errors.instruction1Checkbox && (
                    <div>{formik.errors.instruction1Checkbox}</div>
                  )}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 30 },
                    "&.Mui-checked": {
                      color: "#3f51b5",
                    },
                  }}
                  name="instruction2Checkbox"
                  checked={formik.values.instruction2Checkbox}
                  onChange={formik.handleChange}
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
                {formik.touched.instruction2Checkbox &&
                  formik.errors.instruction2Checkbox && (
                    <div>{formik.errors.instruction2Checkbox}</div>
                  )}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 30 },
                    "&.Mui-checked": {
                      color: "#3f51b5",
                    },
                  }}
                  name="instruction3Checkbox"
                  checked={formik.values.instruction3Checkbox}
                  onChange={formik.handleChange}
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
                    <Instruction3 />
                  </Typography>
                </Box>
              </div>
              <div className="checkbox-error">
                {formik.touched.instruction3Checkbox &&
                  formik.errors.instruction3Checkbox && (
                    <div>{formik.errors.instruction3Checkbox}</div>
                  )}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 30 },
                    "&.Mui-checked": {
                      color: "#3f51b5",
                    },
                  }}
                  name="instruction4Checkbox"
                  checked={formik.values.instruction4Checkbox}
                  onChange={formik.handleChange}
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
                {formik.touched.instruction4Checkbox &&
                  formik.errors.instruction4Checkbox && (
                    <div>{formik.errors.instruction4Checkbox}</div>
                  )}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 30 },
                    "&.Mui-checked": {
                      color: "#3f51b5",
                    },
                  }}
                  name="instruction5Checkbox"
                  checked={formik.values.instruction5Checkbox}
                  onChange={formik.handleChange}
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
                {formik.touched.instruction5Checkbox &&
                  formik.errors.instruction5Checkbox && (
                    <div>{formik.errors.instruction5Checkbox}</div>
                  )}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 30 },
                    "&.Mui-checked": {
                      color: "#3f51b5",
                    },
                  }}
                  name="instruction6Checkbox"
                  checked={formik.values.instruction6Checkbox}
                  onChange={formik.handleChange}
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
                {formik.touched.instruction6Checkbox &&
                  formik.errors.instruction6Checkbox && (
                    <div>{formik.errors.instruction6Checkbox}</div>
                  )}
              </div>

              <hr
                style={{
                  height: "0.5px",
                  backgroundColor: "#cacacd",
                  margin: "40px -20px 0px -20px",
                }}
              />

              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "rgba(0, 0, 0, 0.7)",
                  marginTop: "10px",
                }}
              >
                PAYMENT INSTRUCTION
              </Typography>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 30 },
                    "&.Mui-checked": {
                      color: "#3f51b5",
                    },
                  }}
                  name="instruction7Checkbox"
                  checked={formik.values.instruction7Checkbox}
                  onChange={formik.handleChange}
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
                {formik.touched.instruction7Checkbox &&
                  formik.errors.instruction7Checkbox && (
                    <div>{formik.errors.instruction7Checkbox}</div>
                  )}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "35px",
                  marginLeft: "45px",
                  marginRight: "-35px",
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
                      <p>
                        <b>How to create Payment Reference Number ?</b>
                      </p>
                    </Typography>

                    <div style={{ width: "100%" }}>
                      <hr
                        style={{
                          height: "0.5px",
                          backgroundColor: "#cacacd",
                          margin: "-10px -17px 0px -17px",
                        }}
                      />
                    </div>

                    <Grid container spacing={2} style={{ marginTop: "30px" }}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          variant="filled"
                          fullWidth
                          size="small"
                          id="NameWithInitials"
                          label="Name with Initials"
                          name="NameWithInitials"
                          {...formik.getFieldProps("NameWithInitials")}
                          error={
                            formik.touched.NameWithInitials &&
                            !!formik.errors.NameWithInitials
                          }
                          helperText={
                            formik.touched.NameWithInitials &&
                            formik.errors.NameWithInitials
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          variant="filled"
                          fullWidth
                          size="small"
                          style={{ color: "red" }}
                          id="nid"
                          label="National Identity Card Number"
                          name="nid"
                          {...formik.getFieldProps("nid")}
                          error={formik.touched.nid && !!formik.errors.nid}
                          helperText={formik.touched.nid && formik.errors.nid}
                        />
                      </Grid>
                    </Grid>

                    <Grid style={{ marginTop: "20px" }}>
                      <p>Payment Reference</p>
                      <TextField
                        hiddenLabel
                        fullWidth
                        
                        id="filled-hidden-label-small"
                        defaultValue="Small"
                        variant="filled"
                        size="small"
                      />
                    </Grid>
                  </div>
                </Box>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={{
        instruction1Checkbox: false,
        instruction2Checkbox: false,
        instruction3Checkbox: false,
        instruction4Checkbox: false,
        instruction5Checkbox: false,
        instruction6Checkbox: false,
        instruction7Checkbox: false,

        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        instruction1Checkbox: Yup.boolean().oneOf(
          [true],
          "Please check this box to proceed."
        ),
        instruction2Checkbox: Yup.boolean().oneOf(
          [true],
          "Please check this box to proceed."
        ),
        instruction3Checkbox: Yup.boolean().oneOf(
          [true],
          "Please check this box to proceed."
        ),
        instruction4Checkbox: Yup.boolean().oneOf(
          [true],
          "Please check this box to proceed."
        ),
        instruction5Checkbox: Yup.boolean().oneOf(
          [true],
          "Please check this box to proceed."
        ),
        instruction6Checkbox: Yup.boolean().oneOf(
          [true],
          "Please check this box to proceed."
        ),
        instruction7Checkbox: Yup.boolean().oneOf(
          [true],
          "Please check this box to proceed."
        ),

        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Required"),
      })}
      onSubmit={(values) => {
        alert("form has been submitted!");
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <MainStepper step={step} />

          <div>
            <Box sx={boxStyles}>
              {renderStepContent(formik)}

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginLeft: "auto",
                }}
              >
                {step > 1 && (
                  <Button
                    variant="outlined"
                    onClick={previousStep}
                    sx={{ color: "#3f51b5", margin: "10px 5px 1px 1px" }}
                  >
                    Previous
                  </Button>
                )}
                {step < totalSteps ? (
                  <Button
                    variant="contained"
                    onClick={nextStep}
                    sx={{ bgcolor: "#3f51b5", margin: "10px 1px 1px 1px" }}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ bgcolor: "#3f51b5", margin: "10px 1px 1px 1px" }}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </Box>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;