import React, { useState,useEffect } from "react";
import { useFormik } from "formik";
import axios from 'axios';

import * as Yup from "yup";
import {Checkbox,Button,TextField,Stepper,Step,StepLabel,FormControlLabel,FormGroup,Typography,Box,Grid,Select,MenuItem,FormControl,InputLabel,FormLabel,FormHelperText,RadioGroup,Radio,Alert} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { InnerBoxStyles } from "./InnerBoxStyels";
import Row from "react-bootstrap/esm/Row";
import DownloadPDFButton from "./form_data/GeneratePDF";
import { CircularProgress } from '@mui/material';


import "./styles/form.css";
import { boxStyles } from "./BoxStyles";


import {
  step3InitialValues,
  step4InitialValues
} from "./FormComponents/InitialValues";
import FormInitialValues from "./FormComponents/InitialValues";

import Step1 from "./FormComponents/Step1"
import Step2 from "./FormComponents/Step2";


import { step1Validation } from "../../../Schemas/GEARegistraion/step1Validation";

import { step2Validation } from "../../../Schemas/GEARegistraion/step2Validation";
import { step3Validation } from "../../../Schemas/GEARegistraion/step3Validation";
import Step3 from "./FormComponents/Step3";
import Step4 from "./FormComponents/Step4";
import Container from "react-bootstrap/esm/Container";

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
const step3ValidationSchema = step3Validation

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
  const [isLoading, setIsLoading] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [isEditSnakbarOpen, setIsEditSnakbaropen] = useState(true);
  const [user,setUser] = useState();

  const [loading, setLoading] = useState(false);


  const { step1InitialValues, step2InitialValues } = FormInitialValues();


  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  const handleEditSnakbarClose = () => {
    setIsEditSnakbaropen(false);
  }



  const formik = useFormik({
    initialValues: {
      ...step1InitialValues,
      ...step2InitialValues,
      ...step3InitialValues,
      ...step4InitialValues
    },

    validationSchema: steps[activeStep].validationSchema,

    onSubmit: async (values) => {
      // window.scrollTo({ top: 0, behavior: "smooth" });


      if (activeStep === steps.length - 1) {

        // setLoading(true);

        
        const boolgender = values.gender === "male" ? true : false;
        const boolcivilStatus = values.civilstatus === "Single" ? true: false;
        const boolcitizen = values.citizenship === "Yes" ? true : false;

        
       
        try {

          const responseUserId = await axios.get(
            "http://localhost:3001/GEA_personal_details/userId",
            {
              headers: {
                accessTokenApplicant: localStorage.getItem(
                  "accessTokenApplicant"
                ),
              },
            }
          );

          const userId = responseUserId.data;
          setUser(userId);

        
    //       const personalDetailsResponse = await axios.put(`http://localhost:3001/GEA_personal_details/${userId}`,  {
    //         Title: values.salutation,
    //         NIC: values.nid,  //changed this
    //         NameInFull: values.fullname,
    //         Gender: boolgender,
    //         DOB: values.dob,
    //         CivilStatus: boolcivilStatus,
    //         SrilankaCitizenship: boolcitizen
         
    //       },
    //       {
    //         headers: {
    //           accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //         }
    //       });
          
    //       const newGEApplicantID = personalDetailsResponse.data.GEApplicantID;
         
    
    //       const contactResponse = await axios.put(`http://localhost:3001/GEA_contact/${userId}`, {
    //         ContactNumberMobile: values.contactnumber,
    //         ContactNumberResident: values.contactnumber2,
    //         Email: values.email,
    //       },
    //       {
    //         headers: {
    //           accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //         }
    //       });

    //       const address = [
    //         values.addressline1.trim(),
    //         values.addressline2.trim(),
    //         values.addressline3.trim()
    //       ].filter(Boolean).join(", ");



    //       const addressResponse = await axios.put(`http://localhost:3001/GEA_address/${userId}`, {
    //         PermanentAddress: address,
    //         Province: values.province,
    //         DistrictSecretariant: values.districtsecretariat,
    //         GramaNiladariDivision: values.gramaniladaridivision
    //       },{
    //         headers: {
    //           accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //         }
    //       });

          

    //       if (values.schema !== "none"){

    //         const boolSchema = values.schema === "new" ?  true : false;

    //         const alResponse = await axios.put(`http://localhost:3001/GEA_al/${userId}`, {

    //         Scheme: boolSchema,
    //         IndexNo: values.indexNo,
    //         Year: values.yearOfAL,
    //         Month: values.monthofAL,
    //         Medium: values.medium,
    //         TypeOfEdInstitute: values.educationInstitute
    //       },
    //       {
    //         headers: {
    //           accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //         }
    //       });

         

    //       }

    //       if (values.otherQulifications !== ""){

            
    //         const durationString = values.duration.toString();


    //         const alOtherQulificationResponse = await axios.put(`http://localhost:3001/GEA_other_qulification/${userId}`, {

    //         Category: values.otherQulifications,
    //         InstituteName: values.Institution,
    //         CourseDuration: durationString,
    //         YearOfCompletion: values.completionYear,
    //         IndexNo: values.otherQulificationIndex,
    //         Medium: values.otherQulificationMedium
    //       },
    //       {
    //         headers: {
    //           accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //         }
    //       });

    //       console.log(alOtherQulificationResponse)



    //       }


    //  if (values.schema === "new"){

    //   const existingALResults = await axios.get(`http://localhost:3001/GEA_al_results/${userId}`,{
    //     headers: {
    //       accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
    //     },
    //   }
    //   );

    //        const existingSub1 = existingALResults.data[0].SubjectNumber;
    //        const existingSub2 = existingALResults.data[1].SubjectNumber;
    //        const existingSub3 = existingALResults.data[2].SubjectNumber;

    
    //         const sub1 = values.subjectNumber1.toString();
    //         const sub2 = values.subjectNumber2.toString();
    //         const sub3 = values.subjectNumber3.toString();

    //         const existingSub = [existingSub1,existingSub2,existingSub3];

    //         const subjectsArr = [values.subject1, values.subject2,values.subject3];
    //         const subjectNumberArr = [sub1,sub2,sub3];
    //         const gradingArr = [values.grading1,values.grading2,values.grading3]

    //         for (let i = 0; i < 3; i++ )  {
    //         const alNewResults = await axios.put(`http://localhost:3001/GEA_al_results/${userId}/${existingSub[i]}`, {

    //         SubjectNumber: subjectNumberArr[i],
    //         Subject: subjectsArr[i],
    //         Grading: gradingArr[i],
    //       },
    //       {
    //         headers: {
    //           accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //         }
    //       }
    //       );

     
    //     }
    //       }

    //       if (values.schema === "old"){

    //         const existingALResultsold = await axios.get(`http://localhost:3001/GEA_al_results/${userId}`,{
    //           headers: {
    //             accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
    //           },
    //         }
    //         );

    //         const existingSub1 = existingALResultsold.data[0].SubjectNumber;
    //         const existingSub2 = existingALResultsold.data[1].SubjectNumber;
    //         const existingSub3 = existingALResultsold.data[2].SubjectNumber;
    //         const existingSub4 = existingALResultsold.data[3].SubjectNumber;

    //         const sub1 = values.subjectNumber1.toString();
    //         const sub2 = values.subjectNumber2.toString();
    //         const sub3 = values.subjectNumber3.toString();
    //         const sub4 = values.subjectNumber4.toString();

    //         const existingSub = [existingSub1,existingSub2,existingSub3,existingSub4];


    //         const subjectsArr = [values.subject1, values.subject2,values.subject3,values.subject4];
    //         const subjectNumberArr = [sub1,sub2,sub3,sub4,sub4];
    //         const gradingArr = [values.grading1,values.grading2,values.grading3,values.grading4]

    //         for (let i = 0; i < 4 ; i++){
             
    //         const alOldResults = await axios.put(`http://localhost:3001/GEA_al_results/${userId}/${existingSub[i]}`, {
    //         Subject: subjectsArr[i],
    //         Grading: gradingArr[i],
    //       },
    //       {
    //         headers: {
    //           accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //         }
    //       }
    //       );

    //         }

    //       }
    //       console.log("hello")

     

    //         if (values.educationInstituteEnglish != "none"){
            
    //           const olEnglishResponse = await axios.put(`http://localhost:3001/GEA_ol_english/${userId}`, {

    //           TypeOfEdInstitute: values.educationInstituteEnglish,
    //           Year: values.yearOfEnglish,
    //           Month: values.monthOfEnglish,
    //           IndexNo: values.indexEnglish,
    //           Result: values.gradingEnglish
    //         },
    //         {
    //           headers: {
    //             accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //           }
    //         });
    //       }
  
    //         if (values.educationInstituteSinhala != "none"){
              
    //           const olSinhalaResponse = await axios.put(`http://localhost:3001/GEA_ol_sinhala/${userId}`, {
              
    //           TypeOfEdInstitute: values.educationInstituteSinhala,
    //           Year: values.yearOfSinhala,
    //           Month: values.monthOfSinhala,
    //           IndexNo: values.indexSinhala,
    //           Result: values.gradingSinhala
    //         },{
    //           headers: {
    //             accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //           }
    //         }
    //         );
    //       }

  
    //         if (values.educationInstituteTamil != "none"){
              
    //           const olTamilResponse = await axios.put(`http://localhost:3001/GEA_ol_tamil/${userId}`, {

    //           TypeOfEdInstitute: values.educationInstituteTamil,
    //           Year: values.yearOfTamil,
    //           Month: values.monthOfTamil,
    //           IndexNo: values.indexTamil,
    //           Result: values.gradingTamil
    //         },{
    //           headers: {
    //             accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //           }
    //         }
    //         );
    //         }
            
    //     if (values.convicted === "yes"){
    //       const convictedResponse = await axios.put(`http://localhost:3001/GEA_convicted_offence/${userId}`, {
           
    //           Description: values.convictedDescription
    //         },{
    //           headers: {
    //             accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //           }
    //         }
    //         );
    //     }

    //     if (values.convictedFine === "yes"){
    //       const convictedFineResponse = await axios.put(`http://localhost:3001/GEA_convicted_fine/${userId}`, {
    //           GEApplicantID: newGEApplicantID,
    //           Description: values.convictedFineDescription
    //         },{
    //           headers: {
    //             accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //           }
    //         }
    //         );
    //     }


    //     if (values.previousSits != "no"){

          
     
    //       const previousSitsResponse = await axios.put(`http://localhost:3001/GEA_previous_sits/${userId}`, {
   
    //           PYear: values.yearOfPreviousSits,
    //           PIndexNo: values.indexOfPreviouSits,
    //           PMarksObtained: values.marksPreviousSits
    //         },  {
    //           headers: {
    //             accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //           }
    //         });

    //         if(values.yearOfPreviousSits2 != ""){
    //           const previousSitsResponse = await axios.put(`http://localhost:3001/GEA_previous_sits/${userId}`, {

    //             PYear: values.yearOfPreviousSits2,
    //             PIndexNo: values.indexOfPreviouSits2,
    //             PMarksObtained: values.marksPreviousSits2
    //           }, {
    //             headers: {
    //               accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //             }
    //           }
    //           );
    //         }
    //     }

    //     const languageSelectionResponse = await axios.put(`http://localhost:3001/GEA_language_selection/${userId}`, {
       
    //             GKMedium: values.gkpaper,
    //             LanguageMedium: values.lpaper
    //           }, {
    //             headers: {
    //               accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //             }
    //           });

    //   //   // await new Promise((resolve) => setTimeout(resolve, 3000));


             
               
    //     const refVal = `GEA ${formik.values.nid.toUpperCase().trimEnd()} ${formik.values.namei.toUpperCase().trimEnd()}`;
               
              
              

    //   const paymentResponse = await axios.put(`http://localhost:3001/GEA_payment/${userId}`, {
     
    //             ReferenceNumber: refVal,
    //             BankName: values.bank,
    //             BranchName: values.branchName,
    //             TypeOfPayment: values.paymentType,
    //             DateOfPayment: values.paymentDate

    //           },{
    //             headers: {
    //               accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
    //             }
    //           }
    //           );    
              
              // setLoading(false);

          
          // setIsSnackbarOpen(true);

          // setIsLoading(true);  //change this after 

        } catch (error) {
          console.log("error catched!", error)
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
            <Step3 formik={formik} />
          </>
        );
      case 3:
        return (
          <Step4 formik={formik} />

        );
      default:
        return null;
    }
  };


  if (!isLoading && !loading){

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
                disabled={isLoading}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button> 
            </div>
          </form>


          <Snackbar open={isEditSnakbarOpen} >
          <MuiAlert elevation={6} variant="filled" severity="error">
            You are on Edit mode...
          </MuiAlert>
        </Snackbar>



        </Box>
  
      </div>
    );

  } else {
    if (loading){
      return(
        <>
         <Box sx={InnerBoxStyles} style={{margin:"40px"}}>
          <Container  style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
      }}>
               <CircularProgress />

      </Container>
       </Box>
      </>);
    } else {
    return(
      <div>
        
         <Box sx={InnerBoxStyles} style={{margin:"40px"}}>
          <Container  style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
      }}>

         <CheckCircleIcon sx={{ fontSize: 55, color: 'green' }} /> 
  
      
            <Typography
              style={{
                fontSize: "25px",
                color: "rgba(0, 0, 0, 0.7)",
              }}
            >
              
              Form Submitted Successfully
             
              </Typography>
              <p>Please Download the PDF from below</p>
              <DownloadPDFButton values={formik.values} />

              
              </Container>
         </Box> 
         
      
      <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <MuiAlert elevation={6} variant="filled" severity="success">
            Form submitted successfully!
          </MuiAlert>
        </Snackbar>

       
      </div>
    )
            }
  }

};

export default MultiStepForm;

