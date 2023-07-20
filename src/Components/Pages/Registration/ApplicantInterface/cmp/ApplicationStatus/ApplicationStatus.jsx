import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    label: 'Read the Instructions Carefully',
    description: `Following the instructions, you can register as a General applicant, LLB applicant, or State University applicant through the portal. We kindly invite you to carefully peruse and adhere to the following instructions, as they will guide you through a seamless and efficient application process.`,
  },
  {
    label: 'Registration Process',
    description:
      'Thoroughly navigate through the application process and diligently complete the application form to the best of your knowledge, ensuring all information provided is accurate and up-to-date. Additionally, please be aware that you will have only one opportunity to edit your application form. Therefore, it is crucial to review all details meticulously before submitting the final version.',
  },
  {
    label: 'Edit the Form if Needed',
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
  {
    label: 'Download the Admission Cards',
    description: `After verifying your eligibility to take the entrance exam, you will be able to download your admission card from here. It is essential to note that you must print this admission card and ensure you bring both the admission card and signature form to the examination hall on the day of the exam. These documents are mandatory for entry, and failure to present them may result in disqualification from the examination.`,
  },
  {
    label: 'Face the Entrance Exam',
    description: `On the day of the entrance exam, please ensure you are well-prepared and arrive at the examination center on time. Follow all instructions provided by the examination staff and give your best performance in the exam.`,
  },
  {
    label: 'View Results',
    description: `Upon the release of entrance exam results, you can view them here. Please note that this web copy does not serve as proof of your enrollment as an internal student of the law college. Printed pages of this information are not considered official documentation for enrollment status.`,
  },
];

const ApplicationStatus = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const handleGoBack = () => {
    setActiveStep(0);
    navigate("/Applicant_Registration")
  }


  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center" xs={12}>
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === steps.length - 1 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
                <Button variant='contained' onClick={handleGoBack} sx={{ mt: 1, mr: 1 }}>
                  Go Back
                </Button>
              </Paper>
            )}
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicationStatus;
