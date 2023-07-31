import * as Yup from 'yup';
import axios from 'axios';


const checkboxerrormessage =
  "Please carefully  read the instructions and check the box to proceed.";
  const nicDuplicateErrorMessage = "NIC is already exist in the database.";


export const step1Validation = Yup.object().shape({
    checkbox1: Yup.bool().oneOf([true], checkboxerrormessage),
    checkbox2: Yup.bool().oneOf([true], checkboxerrormessage),
    checkbox3: Yup.bool().oneOf([true], checkboxerrormessage),
    checkbox4: Yup.bool().oneOf([true], checkboxerrormessage),
    checkbox5: Yup.bool().oneOf([true], checkboxerrormessage),
    checkbox6: Yup.bool().oneOf([true], checkboxerrormessage),
    checkbox7: Yup.bool().oneOf([true], checkboxerrormessage),
    checkbox8: Yup.bool().oneOf([true], checkboxerrormessage),
    namei: Yup.string().required("Name with initials is required").max(50, "Name with initials must be at most 50 characters"),

    nid: Yup.string()
    .required('ID Card Number is Required')
    .test('is-nid-valid', 'Invalid NIC Number', (value) => {
      // First type: "349358718V" or "585958489v" (9 numerics and one "v" or "V")
      const nidType1Regex = /^[0-9]{9}[Vv]$/;
      
      // Second type: "2345894534" (ten numerics)
      const nidType2Regex = /^[0-9]{10}$/;

      return nidType1Regex.test(value) || nidType2Regex.test(value);
    }),
    
  });
  