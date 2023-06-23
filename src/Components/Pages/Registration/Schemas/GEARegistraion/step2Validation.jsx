import * as Yup from 'yup';

export const step2Validation = Yup.object().shape({
    // salutation: Yup.string().required('Please select a salutation'),
    // fullname: Yup.string().required("Full Name is required"),
    // addressline1: Yup.string().required("Address is required"),
    // addressline2: Yup.string().required("Address is required"),
    // addressline3: Yup.string().required("Address is required"),
    // province: Yup.string().required('Please select a province'),
    // districtsecretariat: Yup.string().required('Please select a district secretariat'),
    // gramaniladaridivision: Yup.string().required('Please select a grama niladari division'),
    // contactnumber: Yup.string()
    // .matches(/^\d{3}-\d{3}-\d{4}$/, 'Contact number must be in the format XXX-XXX-XXXX')
    // .required('Contact number is required'),
    // contactnumber2: Yup.string()
    // .matches(/^\d{3}-\d{3}-\d{4}$/, 'Contact number must be in the format XXX-XXX-XXXX'),
    // email: Yup.string().email('Enter a valid email ex:- test@gamil.com').required('email is required'),
    // gender: Yup.string().required('Please select a gender'),
    // dob: Yup
    // .date('Invalid Date')
    // .nullable()
    // .transform((curr, orig) => (orig === '' ? null : curr))
    // .required('Date of Birth is required'),
    // age: Yup
    // .number()
    // .required('Age is required')
    // .positive('Age must be a positive number')
    // .integer('Age must be an integer')
    // .min(18, 'Age must be at least 18 years old')
    // .max(120, 'Age cannot exceed 120 years old'),
    // civilstatus: Yup.string().required('Please select a civil status'),
    // citizenship: Yup.string().required('Please select whether you are a sri lankan citizen'),
    // nic2: Yup.string()
    // .test('is-valid-id', 'Invalid ID Card number', (value) => {
    //   const isOldFormat = /^[0-9]{9}[vV]$/.test(value)
    //   const isNewFormat = /^[0-9]{12}$/.test(value)
    //   return isOldFormat || isNewFormat;
    // }),
    // gkpaper: Yup.string().required('Please select a language'),
    // lpaper: Yup.string().required('Please select a language'),
  });
  