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




  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  const handleEditSnakbarClose = () => {
    setIsEditSnakbaropen(false);
  }

  const [userId, setUserId] = useState(null);
  const[userId1,setUserId1] = useState(null);


  useEffect(() => {

    //Taking the userID
    const fetchData = async () => {
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

        //PersonalDetails

        const existingValuesPersonaldetails = await axios.get(
          `http://localhost:3001/GEA_personal_details/${userId}`,
          {
            headers: {
              accessTokenApplicant: localStorage.getItem(
                "accessTokenApplicant"
              ),
            },
          }
        );

        const personalDetails = existingValuesPersonaldetails.data;
        const gender = personalDetails.Gender ? "male" : "female";
        const civilstatus = personalDetails.CivilStatus ? "Single" : "Married";
        const citizenship = personalDetails.SrilankaCitizenship ? "Yes" : "No";

        //Contacts

        const existingValuesContacts = await axios.get(
          `http://localhost:3001/GEA_contact/${userId}`,
          {
            headers: {
              accessTokenApplicant: localStorage.getItem(
                "accessTokenApplicant"
              ),
            },
          }
        );

        const contacts = existingValuesContacts.data;

        //Address

        const existingValuesAddresses = await axios.get(
          `http://localhost:3001/GEA_address/${userId}`,
          {
            headers: {
              accessTokenApplicant: localStorage.getItem(
                "accessTokenApplicant"
              ),
            },
          }
        );

        const address = existingValuesAddresses.data;

        const PermanentAddress = address.PermanentAddress;
        const parts = PermanentAddress.split(",");
        const addressline1 = parts[0];
        const addressline2 = parts[1];
        let addressline3 = "";
        parts.length == 3 ? (addressline3 = parts[2]) : (addressline3 = "");

        //LanguageSelection

        const existingLanguageSelection = await axios.get(
          `http://localhost:3001/GEA_language_selection/${userId}`,
          {
            headers: {
              accessTokenApplicant: localStorage.getItem(
                "accessTokenApplicant"
              ),
            },
          }
        );

        const languageSelection = existingLanguageSelection.data;

        //ExistingAL

        const existingAL = await axios.get(
          `http://localhost:3001/GEA_al/${userId}`,
          {
            headers: {
              accessTokenApplicant: localStorage.getItem(
                "accessTokenApplicant"
              ),
            },
          }
        );

        const AL = existingAL.data;
        const schema = AL.Scheme == true ? "new" : "old";

        //Al results

        const existingALResults = await axios.get(
          `http://localhost:3001/GEA_al_results/${userId}`,
          {
            headers: {
              accessTokenApplicant: localStorage.getItem(
                "accessTokenApplicant"
              ),
            },
          }
        );

        const AlResults = existingALResults.data;
        const subject1 = AlResults[0];
        const subject2 = AlResults[1];
        const subject3 = AlResults[2];

        const subject4 = schema === "old" ? AlResults[3] : "";

        //Other Qulifications

        const existingOtherQulifications = await axios.get(
          `http://localhost:3001/GEA_other_qulification/${userId}`,
          {
            headers: {
              accessTokenApplicant: localStorage.getItem(
                "accessTokenApplicant"
              ),
            },
          }
        );

      const otherQulifications = existingOtherQulifications.data;

      //Existing English

      const existingEnglish = await axios.get(
        `http://localhost:3001/GEA_ol_english/${userId}`,
        {
          headers: {
            accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
          },
        }
      );

      const english = existingEnglish.data;

      //Existing Sinhala

      
      const existingSinhala = await axios.get(
        `http://localhost:3001/GEA_ol_sinhala/${userId}`,
        {
          headers: {
            accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
          },
        }
      );

      const sinhala = existingSinhala.data;

      //Existing Tamil
      const existingTamil = await axios.get(`http://localhost:3001/GEA_ol_tamil/${userId}`,{
        headers: {
          accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
        },
      }
      );

      const tamil = existingTamil.data;


      //Convicted Offence

      const existingConvictedOffence = await axios.get(
        `http://localhost:3001/GEA_convicted_offence/${userId}`,
        {
          headers: {
            accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
          },
        }
      );

      let convictedOffence;

      if (existingConvictedOffence) {
        convictedOffence = "yes";
      } else {
        convictedOffence = "no";
      }

const convictedDescription = existingConvictedOffence.data;
      
      //convicted Fine

      const existingConvictedFine = await axios.get(
        `http://localhost:3001/GEA_convicted_fine/${userId}`,
        {
          headers: {
            accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
          },
        }
      );

      let convictedFine;
      if (existingConvictedFine) {
        convictedFine = "yes";
      } else {
        convictedFine = "no";
      }

      const convictedFineDescription = existingConvictedFine.data;

      //previoius sits

      const existingPreviousSits = await axios.get(
        `http://localhost:3001/GEA_previous_sits/${userId}`,
        {
          headers: {
            accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
          },
        }
      );

      const PreviousSits = existingPreviousSits.data;

      let psit;
      let psit1;
      let psit2;

      if (existingPreviousSits.data) {
        psit = "yes";
        if (PreviousSits.length == 1) {
          psit1 = PreviousSits[0];
          psit2 = "";
        } else if (PreviousSits.length == 2) {
          psit1 = PreviousSits[0];
          psit2 = PreviousSits[1];
        }
      } else {
        psit = "no";
        psit1 = "";
        psit2 = "";
      }

      const existingpayment = await axios.get(
        `http://localhost:3001/GEA_payment/${userId}`,
        {
          headers: {
            accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
          },
        }
      );

      const payment = existingpayment.data;





        formik.setValues({
          ...formik.values,
          nid: personalDetails.NIC || "",
          dob: personalDetails.DOB || "",
          ref: payment.ReferenceNumber || "",
          fullname: personalDetails.NameInFull || "",
          salutation: personalDetails.Title || "",
          gender: gender,
          civilstatus: civilstatus,
          citizenship: citizenship,
          contactnumber: contacts.ContactNumberMobile,
          contactnumber2: contacts.ContactNumberResident,
          email: contacts.Email,
          addressline1: addressline1,
          addressline2: addressline2,
          addressline3: addressline3,
          province: address.Province,
          districtsecretariat: address.DistrictSecretariant,
          gramaniladaridivision: address.GramaNiladariDivision,
          gkpaper: languageSelection.GKMedium,
          lpaper: languageSelection.LanguageMedium,
          nic2: personalDetails.NIC || "",
          schema: schema,
          schema: schema,
          educationInstitute: AL.TypeOfEdInstitute,
          yearOfAL: AL.Year,
          monthofAL: AL.Month,
          indexNo: AL.IndexNo,
          medium: AL.Medium,
          subjectNumber1: subject1.SubjectNumber || "",
          subject1: subject1.Subject || "",
          grading1: subject1.Grading || "",
          subjectNumber2: subject2.SubjectNumber || "",
          subject2: subject2.Subject || "",
          grading2: subject2.Grading || "",
          subjectNumber3: subject3.SubjectNumber || "",
          subject3: subject3.Subject || "",
          grading3: subject3.Grading || "",
          //  subjectNumber4:subject4.SubjectNumber|| "",
          //  subject4:subject4.Subject|| "",
          //  grading4:subject4.Grading|| "",

          otherQulifications: otherQulifications?.Category || "",
          Institution: otherQulifications?.InstituteName || "",
          duration: otherQulifications?.CourseDuration || "",
          completionYear: otherQulifications?.YearOfCompletion || "",
          otherQulificationIndex: otherQulifications?.IndexNo || "",
          otherQulificationMedium: otherQulifications?.Medium || "",

          educationInstituteEnglish: english?.TypeOfEdInstitute || "",
          indexEnglish: english?.IndexNo || "",
          gradingEnglish: english?.Result || "",
          yearOfEnglish: english?.Year || "",
          monthOfEnglish: english?.Month || "",

          educationInstituteSinhala: sinhala?.TypeOfEdInstitute || "",
    gradingSinhala: sinhala?.Result || "",
    indexSinhala: sinhala?.IndexNo || "",
    yearOfSinhala: sinhala?.Year || "",
    monthOfSinhala: sinhala?.Month || "",

    educationInstituteTamil: tamil?.TypeOfEdInstitute || "",
    indexTamil: tamil?.IndexNo || "",
    gradingTamil: tamil?.Result || "",
    yearOfTamil: tamil?.Year || "",
    monthOfTamil: tamil?.Month || "",

    convicted:convictedOffence,
    convictedDescription: convictedDescription?.Description || "",

    convictedFine:convictedFine,
    convictedFineDescription:convictedFineDescription?.Description || "",

    previousSits:psit,
    yearOfPreviousSits:psit1?.PYear || "",
    indexOfPreviouSits:psit1?.PIndexNo || "",
    marksPreviousSits:psit1?.PMarksObtained || "",
    yearOfPreviousSits2:psit2?.PYear || "",
    indexOfPreviouSits2:psit2?.PIndexNo || "",
    marksPreviousSits2:psit2?.PMarksObtained || "",

    paymentType:payment.TypeOfPayment,
    branchName:payment.BranchName,
    bank:payment.BankName,
    paymentDate:payment.DateOfPayment,


        });



      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    fetchData();
  }, []);



  const formik = useFormik({
    initialValues: {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: true,
      checkbox5: true,
      checkbox6: true,
      checkbox7: true,
      checkbox8: true,
      namei: "",
      nid: userId  || "",
      ref: "",
      salutation: "",
      fullname: "",
      addressline1: "",
      addressline2: "",
      addressline3: "",
      province: "",
      districtsecretariat: "",
      gramaniladaridivision: "",
      contactnumber: "",
      contactnumber2: "",
      email: "",
      gender: "",
      dob: "",
      age: null,
      civilstatus: "",
      citizenship: "",
      nic2: null,
      gkpaper: "",
      lpaper: "",
      schema: "",
      educationInstitute: "",
      yearOfAL: "",
      monthofAL: "",
      indexNo: "",
      medium: "",
      subjectNumber1: 0,
      subject1: "",
      grading1: "",
      subjectNumber2: 0,
      subject2: "",
      grading2: "",
      subjectNumber3: 0,
      subject3: "",
      grading3: "",
      subjectNumber4: 0,
      subject4: "",
      grading4: "",
      otherQulifications: "",
      Institution: "",
      duration: 0,
      completionYear: "",
      otherQulificationIndex: "",
      otherQulificationMedium: "",


      educationInstituteEnglish: "",
      indexEnglish: "",
      gradingEnglish: "",
      yearOfEnglish: "",
      monthOfEnglish: "",
      educationInstituteSinhala: "",
      indexSinhala: "",
      gradingSinhala: "",
      yearOfSinhala: "",
      monthOfSinhala: "",
      educationInstituteTamil: "",
      indexTamil: "",
      gradingTamil: "",
      yearOfTamil: "",
      monthOfTamil: "",
      otherQulificationsOL: "",
      InstitutionOL: "",
      durationOL: 0,
      completionYearOL: "",
      otherQulificationIndexOL: "",
      otherQulificationMediumOL: "",
      convicted: "",
      convictedDescription: "",
      convictedFine: "",
      convictedFineDescription: "",
      previousSits: "",
      yearOfPreviousSits: "",
      indexOfPreviouSits: "",
      marksPreviousSits: "",
      yearOfPreviousSits2: "",
      indexOfPreviouSits2: "",
      marksPreviousSits2: "",
      paymentType: "",
      branchName: "",
      paidAmount: "",
      bank: "",
      paymentDate: "",
    },

    validationSchema: steps[activeStep].validationSchema,

    onSubmit: async (values) => {
      window.scrollTo({ top: 0, behavior: "smooth" });

      if (activeStep === steps.length - 1) {
        setLoading(true);

        const boolgender = values.gender === "male" ? true : false;
        const boolcivilStatus = values.civilstatus === "Single" ? true : false;
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
        
          
                const personalDetailsResponse = await axios.put(`http://localhost:3001/GEA_personal_details/${userId}`,  {
                  Title: values.salutation,
                  NIC: values.nid,  //changed this
                  NameInFull: values.fullname,
                  Gender: boolgender,
                  DOB: values.dob,
                  CivilStatus: boolcivilStatus,
                  SrilankaCitizenship: boolcitizen

                },
                {
                  headers: {
                    accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                  }
                });

                // const newGEApplicantID = personalDetailsResponse.data.GEApplicantID;

                const contactResponse = await axios.put(`http://localhost:3001/GEA_contact/${userId}`, {
                  ContactNumberMobile: values.contactnumber,
                  ContactNumberResident: values.contactnumber2,
                  Email: values.email,
                },
                {
                  headers: {
                    accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                  }
                });

                const address = [
                  values.addressline1.trim(),
                  values.addressline2.trim(),
                  values.addressline3.trim()
                ].filter(Boolean).join(", ");

                const addressResponse = await axios.put(`http://localhost:3001/GEA_address/${userId}`, {
                  PermanentAddress: address,
                  Province: values.province,
                  DistrictSecretariant: values.districtsecretariat,
                  GramaNiladariDivision: values.gramaniladaridivision
                },{
                  headers: {
                    accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                  }
                });

                if (values.schema !== "none"){ //Handle the NOne

                  const boolSchema = values.schema === "new" ?  true : false;

                  const alResponse = await axios.put(`http://localhost:3001/GEA_al/${userId}`, {

                  Scheme: boolSchema,
                  IndexNo: values.indexNo,
                  Year: values.yearOfAL,
                  Month: values.monthofAL,
                  Medium: values.medium,
                  TypeOfEdInstitute: values.educationInstitute
                },
                {
                  headers: {
                    accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                  }
                });

                }

                if (values.otherQulifications !== ""){

                  const durationString = values.duration.toString();

                  
                  const alOtherQulificationResponse = await axios.put(`http://localhost:3001/GEA_other_qulification/${userId}`, {
                    Category: values.otherQulifications, // *******change the otherqulification model string size bigger*****
                    ExamName: "Bachelor's Degree",
                    InstituteName: values.Institution,
                    CourseDuration: durationString,
                    YearOfCompletion: values.completionYear, 
                    IndexNo: "dfd",
                    Medium: values.otherQulificationMedium
                },
                {
                  headers: {
                    accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                  }
                });


                }

           if (values.schema === "new"){

            const existingALResults = await axios.get(`http://localhost:3001/GEA_al_results/${userId}`,{
              headers: {
                accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
              },
            }
            );

                 const existingSub1 = existingALResults.data[0].SubjectNumber;
                 const existingSub2 = existingALResults.data[1].SubjectNumber;
                 const existingSub3 = existingALResults.data[2].SubjectNumber;

                  const sub1 = values.subjectNumber1.toString();
                  const sub2 = values.subjectNumber2.toString();
                  const sub3 = values.subjectNumber3.toString();

                  const existingSub = [existingSub1,existingSub2,existingSub3];

                  const subjectsArr = [values.subject1, values.subject2,values.subject3];
                  const subjectNumberArr = [sub1,sub2,sub3];
                  const gradingArr = [values.grading1,values.grading2,values.grading3]

                  for (let i = 0; i < 3; i++ )  {

                  const alNewResults = await axios.put(`http://localhost:3001/GEA_al_results/${userId}/${existingSub[i]}`, {
                  
                  SubjectNumber: subjectNumberArr[i],
                  Subject: subjectsArr[i],
                  Grading: gradingArr[i],
                },
                {
                  headers: {
                    accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                  }
                }
                );

              }
                }

                if (values.schema === "old"){

                  const existingALResultsold = await axios.get(`http://localhost:3001/GEA_al_results/${userId}`,{
                    headers: {
                      accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
                    },
                  }
                  );

                  const existingSub1 = existingALResultsold.data[0].SubjectNumber;
                  const existingSub2 = existingALResultsold.data[1].SubjectNumber;
                  const existingSub3 = existingALResultsold.data[2].SubjectNumber;
                  const existingSub4 = existingALResultsold.data[3].SubjectNumber;

                  const sub1 = values.subjectNumber1.toString();
                  const sub2 = values.subjectNumber2.toString();
                  const sub3 = values.subjectNumber3.toString();
                  const sub4 = values.subjectNumber4.toString();

                  const existingSub = [existingSub1,existingSub2,existingSub3,existingSub4];

                  const subjectsArr = [values.subject1, values.subject2,values.subject3,values.subject4];
                  const subjectNumberArr = [sub1,sub2,sub3,sub4,sub4];
                  const gradingArr = [values.grading1,values.grading2,values.grading3,values.grading4]

                  for (let i = 0; i < 4 ; i++){

                  const alOldResults = await axios.put(`http://localhost:3001/GEA_al_results/${userId}/${existingSub[i]}`, {
                  Subject: subjectsArr[i],
                  Grading: gradingArr[i],
                },
                {
                  headers: {
                    accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                  }
                }
                );

                  }

                }
     
                  if (values.educationInstituteEnglish != "none"){

                    const olEnglishResponse = await axios.put(`http://localhost:3001/GEA_ol_english/${userId}`, {

                    TypeOfEdInstitute: values.educationInstituteEnglish,
                    Year: values.yearOfEnglish,
                    Month: values.monthOfEnglish,
                    IndexNo: values.indexEnglish,
                    Result: values.gradingEnglish
                  },
                  {
                    headers: {
                      accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                    }
                  });
                }

                  if (values.educationInstituteSinhala != "none"){

                    const olSinhalaResponse = await axios.put(`http://localhost:3001/GEA_ol_sinhala/${userId}`, {

                    TypeOfEdInstitute: values.educationInstituteSinhala,
                    Year: values.yearOfSinhala,
                    Month: values.monthOfSinhala,
                    IndexNo: values.indexSinhala,
                    Result: values.gradingSinhala
                  },{
                    headers: {
                      accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                    }
                  }
                  );
                }

                  if (values.educationInstituteTamil != "none"){

                    const olTamilResponse = await axios.put(`http://localhost:3001/GEA_ol_tamil/${userId}`, {

                    TypeOfEdInstitute: values.educationInstituteTamil,
                    Year: values.yearOfTamil,
                    Month: values.monthOfTamil,
                    IndexNo: values.indexTamil,
                    Result: values.gradingTamil
                  },{
                    headers: {
                      accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                    }
                  }
                  );
                  }

              if (values.convicted === "yes"){
                const convictedResponse = await axios.put(`http://localhost:3001/GEA_convicted_offence/${userId}`, {

                    Description: values.convictedDescription
                  },{
                    headers: {
                      accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                    }
                  }
                  );
              }

              if (values.convictedFine === "yes"){
                const convictedFineResponse = await axios.put(`http://localhost:3001/GEA_convicted_fine/${userId}`, {
                    Description: values.convictedFineDescription
                  },{
                    headers: {
                      accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                    }
                  }
                  );
              }

              if (values.previousSits != "no"){

                const previousSitsResponse = await axios.put(`http://localhost:3001/GEA_previous_sits/${userId}`, {

                    PYear: values.yearOfPreviousSits,
                    PIndexNo: values.indexOfPreviouSits,
                    PMarksObtained: values.marksPreviousSits
                  },  {
                    headers: {
                      accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                    }
                  });

                  if(values.yearOfPreviousSits2 != ""){
                    const previousSitsResponse = await axios.put(`http://localhost:3001/GEA_previous_sits/${userId}`, {

                      PYear: values.yearOfPreviousSits2,
                      PIndexNo: values.indexOfPreviouSits2,
                      PMarksObtained: values.marksPreviousSits2
                    }, {
                      headers: {
                        accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                      }
                    }
                    );
                  }
              }

              const languageSelectionResponse = await axios.put(`http://localhost:3001/GEA_language_selection/${userId}`, {

                      GKMedium: values.gkpaper,
                      LanguageMedium: values.lpaper
                    }, {
                      headers: {
                        accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                      }
                    });

            //   // await new Promise((resolve) => setTimeout(resolve, 3000));

              const refVal = `GEA ${formik.values.nid.toUpperCase().trimEnd()} ${formik.values.namei.toUpperCase().trimEnd()}`;

            const paymentResponse = await axios.put(`http://localhost:3001/GEA_payment/${userId}`, {

                      ReferenceNumber: refVal,
                      BankName: values.bank,
                      BranchName: values.branchName,
                      TypeOfPayment: values.paymentType,
                      DateOfPayment: values.paymentDate

                    },{
                      headers: {
                        accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
                      }
                    }
                    );

          setLoading(false);

          setIsSnackbarOpen(true);

         setIsLoading(true);  
        } catch (error) {
          console.log("error catched!", error);

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



        console.log(userId)
        async function updateAccess() {
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
    
            const userId1 = responseUserId.data;


            await axios.put(`http://localhost:3001/applicant_edit_request/${userId1}`, { EditAccess: "completed" }, {
              headers: {
                accessTokenApplicant: localStorage.getItem('accessTokenApplicant')
              }
            });
            console.log('Edit access updated successfully');
          } catch (error) {
            console.error('Error updating edit access:', error);
          }
        }
    
       
    updateAccess();
      
     

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
              
              Amended Form Submitted Successfully
             
              </Typography>
              <p>Please Download the PDF from below</p>
              <DownloadPDFButton values={formik.values} />

              
              </Container>
         </Box> 
         
      
      <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <MuiAlert elevation={6} variant="filled" severity="success">
            Amended form submitted successfully!
          </MuiAlert>
        </Snackbar>

       
      </div>
    )
            }
  }

};

export default MultiStepForm;

