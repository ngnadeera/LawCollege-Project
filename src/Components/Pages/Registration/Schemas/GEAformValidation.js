import * as Yup from "yup";

export const GEAformValidation = Yup.object({
  instruction1Checkbox: Yup.boolean().required("This field is required."),
  instruction2Checkbox: Yup.boolean().required("This field is required."),
  instruction3Checkbox: Yup.boolean().required("This field is required."),
  email: Yup.string().email("Invalid email address.").required("Email is required."),
  password: Yup.string().required("Password is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match.")
    .required("Confirm Password is required."),
});

export default GEAformValidation;