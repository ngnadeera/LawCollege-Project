import React, { useState } from "react";
import { useFormik } from "formik";
import axios from 'axios';

import * as Yup from "yup";
import {Checkbox,Button,TextField,Stepper,Step,StepLabel,FormControlLabel,FormGroup,Typography,Box,Grid,Select,MenuItem,FormControl,InputLabel,FormLabel,FormHelperText,RadioGroup,Radio} from "@mui/material";


import "./styles/form.css";
import { boxStyles } from "./BoxStyles";


import {
  step1InitialValues,
  step2InitialValues,
  step3InitialValues,
} from "./FormComponents/InitialValues";

import Step1 from "./FormComponents/Step1"
import Step2 from "./FormComponents/Step2";


import { step1Validation } from "../../Schemas/GEARegistraion/step1Validation";
import { step2Validation } from "../../Schemas/GEARegistraion/step2Validation";


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

  const formik = useFormik({
    initialValues: {
      ...step1InitialValues,
      ...step2InitialValues,
      ...step3InitialValues,
    },

    validationSchema: steps[activeStep].validationSchema,

    onSubmit: async (values) => {
      window.scrollTo({ top: 0, behavior: "smooth" });

      if (activeStep === steps.length - 1) {
        // Submit the final form data
        try {
          // await axios.post('http://localhost:3001/applicants', values);
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

  

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {

      case 0:
        return (
          <> 
          <Step1 formik={formik} />

          </>
        );

      case 1:
        return (
          <>
          <Step2 formik={formik} />
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




