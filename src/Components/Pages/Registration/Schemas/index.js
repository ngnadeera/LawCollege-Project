import * as yup from 'yup';

export const basicSchema = yup.object().shape({
  firstName: yup.string().required('First name is required').max(20, 'First name must be at most 20 characters'),
  lastName: yup.string().required('Last name is required').max(20, 'Last name must be at most 20 characters'),
  username: yup.string().required('Username is required').max(20, 'Username must be at most 20 characters'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});
