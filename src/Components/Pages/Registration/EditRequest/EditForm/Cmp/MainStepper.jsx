import React from "react";
import {
    Stepper,
    Step,
    StepLabel,
    Box,
    Typography,
    Grid,
  } from "@material-ui/core";

const MainStepper = (props) => {
    return( 
        <div>
        <Stepper
          activeStep={props.step - 1}
          alternativeLabel

        >
          <Step>
            <StepLabel >1. BASIC INSTRUCTIONS</StepLabel>
          </Step>
          <Step>
            <StepLabel>2. PERSONAL INFORMATION</StepLabel>
          </Step>
          <Step>
            <StepLabel>3. ACADEMIC QUALIFICATIONS</StepLabel>
          </Step>
          <Step>
            <StepLabel>4. DECELERATION </StepLabel>
          </Step>
        </Stepper>
      </div>
    );
}

export default MainStepper;