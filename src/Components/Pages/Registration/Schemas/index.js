import * as yup from 'yup';

export const basicSchema = yup.object().shape({

  username: yup.string().required('Username is required').max(20, 'Username must be at most 20 characters'),
  password: yup
    .string()
    .required('Password is required')
    
  
});