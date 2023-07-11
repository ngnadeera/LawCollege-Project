import * as Yup from 'yup';
import axios from 'axios';


const checkboxerrormessage =
  "Please carefully  read the instructions and check the box to proceed.";
  const nicDuplicateErrorMessage = "NIC is already exist in the database.";


export const step1Validation = Yup.object().shape({
    // checkbox1: Yup.bool().oneOf([true], checkboxerrormessage),
    // checkbox2: Yup.bool().oneOf([true], checkboxerrormessage),
    // checkbox3: Yup.bool().oneOf([true], checkboxerrormessage),
    // checkbox4: Yup.bool().oneOf([true], checkboxerrormessage),
    // checkbox5: Yup.bool().oneOf([true], checkboxerrormessage),
    // checkbox6: Yup.bool().oneOf([true], checkboxerrormessage),
    // checkbox7: Yup.bool().oneOf([true], checkboxerrormessage),
    // checkbox8: Yup.bool().oneOf([true], checkboxerrormessage),
    // namei: Yup.string().required("Name with initials is required"),
    //  nid: Yup.string().required('ID Card Number is Required')
    // .test('is-valid-id', 'Invalid ID Card number', (value) => {
    //   const isOldFormat = /^[0-9]{9}[vV]$/.test(value)
    //   const isNewFormat = /^[0-9]{12}$/.test(value)
    //   return isOldFormat || isNewFormat;
    // })
    // .test('unique-nic', nicDuplicateErrorMessage, async (value) => {
    //   try {
    //     const response = await axios.post('/check-unique-nic', { NIC: value });
    //     return response.data.isUnique;
    //   } catch (error) {
    //     console.error('Error checking uniqueness:', error);
    //     return false;
    //   }
    // }),
  });
  