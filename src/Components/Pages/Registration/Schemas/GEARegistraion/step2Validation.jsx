import * as Yup from 'yup';

export const step2Validation = Yup.object().shape({
    salutation: Yup.string().required('Please select a salutation'),
    fullname: Yup.string().required("Full Name is required"),
    addressline1: Yup.string().required("Address is required"),
    addressline2: Yup.string().required("Address is required"),
    addressline3: Yup.string().required("Address is required"),
    province: Yup.string().required('Please select a province'),
    districtsecretariat: Yup.string().required('Please select a district secretariat'),
    gramaniladaridivision: Yup.string().required('Please select a grama niladari division'),
    contactnumber: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'Contact number must be in the format XXX-XXX-XXXX')
    .required('Contact number is required'),
    contactnumber2: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'Contact number must be in the format XXX-XXX-XXXX'),
    email: Yup.string().email('Enter a valid email ex:- test@gamil.com').required('email is required'),
    gender: Yup.string().required('Please select a gender'),
    dob: Yup
    .date('Invalid Date')
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .required('Date of Birth is required'),
    age: Yup.number()
    .integer('Age must be a positive integer')
    .min(18, 'Age must be above 18')
    .positive('Age must be a positive integer')
    .required('Age is required'),
    civilstatus: Yup.string().required('Please select a civil status'),
    citizenship: Yup.string().required('Please select whether you are a sri lankan citizen'),
    nic2: Yup.string()
    .required('ID Card Number is Required')
    .test('is-nid-valid', 'Invalid NIC Number', (value) => {
      // First type: "349358718V" or "585958489v" (9 numerics and one "v" or "V")
      const nidType1Regex = /^[0-9]{9}[Vv]$/;
      
      // Second type: "2345894534" (ten numerics)
      const nidType2Regex = /^[0-9]{10}$/;

      return nidType1Regex.test(value) || nidType2Regex.test(value);
    }),
    gkpaper: Yup.string().required('Please select a language'),
    lpaper: Yup.string().required('Please select a language'),
  });
  