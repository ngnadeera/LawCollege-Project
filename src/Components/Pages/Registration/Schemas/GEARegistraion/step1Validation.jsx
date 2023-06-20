import * as Yup from 'yup';

const checkboxerrormessage =
  "Please carefully  read the instructions and check the box to proceed.";

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
    // nid: Yup.string().required("National Identity Card number is required"),
  });
  