import React from "react";


const FormInitialValues = () => {


  const step1InitialValues = {
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    checkbox4: true,
    checkbox5: true,
    checkbox6: true,
    checkbox7: true,
    checkbox8: true,
    namei: "",
    nid: "Hello",
    ref: "",
  };

  const step2InitialValues = {
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
  gender:"",
  dob: "",
  age: null,
  civilstatus: "",
  citizenship: "",
  nic2: null,
  gkpaper: "",
  lpaper: ""

}

return {
  step1InitialValues,
  step2InitialValues,
}

}

export default FormInitialValues;



// export const step1InitialValues = {
//   checkbox1: false,
//   checkbox2: false,
//   checkbox3: false,
//   checkbox4: false,
//   checkbox5: false,
//   checkbox6: false,
//   checkbox7: false,
//   checkbox8: false,
//   namei: "",
//   nid: "",
//   ref: ""
// };

// export const step2InitialValues = {
//   salutation: "",
//   fullname: "",
//   addressline1: "",
//   addressline2: "",
//   addressline3: "",
//   province: "",
//   districtsecretariat: "",
//   gramaniladaridivision: "",
//   contactnumber: "",
//   contactnumber2: "",
//   email: "",
//   gender:"",
//   dob: "",
//   age: null,
//   civilstatus: "",
//   citizenship: "",
//   nic2: null,
//   gkpaper: "",
//   lpaper: "",
// };

export const step3InitialValues = {
  
  schema: "",
  educationInstitute: "",
  yearOfAL:"",
  monthofAL:"",
  indexNo:"",
  medium:"",
  subjectNumber1:0,
  subject1:"",
  grading1:"",
  subjectNumber2:0,
  subject2:"",
  grading2:"",
  subjectNumber3:0,
  subject3:"",
  grading3:"",
  subjectNumber4:0,
  subject4:"",
  grading4:"",
  otherQulifications:"",
  Institution:"",
  duration:0,
  completionYear:"",
  otherQulificationIndex:"",
  otherQulificationMedium:"",
  educationInstituteEnglish:"",
  indexEnglish:"",
  gradingEnglish:"",
  yearOfEnglish:"",
  monthOfEnglish:"",
  educationInstituteSinhala:"",
  indexSinhala:"",
  gradingSinhala:"",
  yearOfSinhala:"",
  monthOfSinhala:"",
  educationInstituteTamil:"",
  indexTamil:"",
  gradingTamil:"",
  yearOfTamil:"",
  monthOfTamil:"",
  otherQulificationsOL:"",
  InstitutionOL:"",
  durationOL:0,
  completionYearOL:"",
  otherQulificationIndexOL:"",
  otherQulificationMediumOL:"",
};


export const step4InitialValues = {
  convicted:"",
  convictedDescription:"",
  convictedFine:"",
  convictedFineDescription:"",
  previousSits:"",
  yearOfPreviousSits:"",
  indexOfPreviouSits:"",
  marksPreviousSits:"",
  yearOfPreviousSits2:"",
  indexOfPreviouSits2:"",
  marksPreviousSits2:"",
  paymentType:"",
  branchName:"",
  paidAmount:"",
  bank:"",
  paymentDate:"",
 
};

