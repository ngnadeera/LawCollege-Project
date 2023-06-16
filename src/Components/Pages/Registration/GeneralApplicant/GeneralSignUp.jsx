import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../Schemas";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import Axios from "axios";

const defaultTheme = createTheme();

const SignUp = () => {

const navigate = useNavigate();
const handleSubmit = async (values) => {
  try {
    const response = await Axios.post(
      "http://localhost:3001/api/generalSignUp",
      {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        username: values.username,
        password: values.password,
      }
    );
    alert(response.data);
    navigate("/GeneralLogInPage"); // Use navigate to navigate
  } catch (error) {
    console.error(error);
  }
};

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: false,
    },
    validationSchema: basicSchema,
    onSubmit: handleSubmit,
  });

  const { handleChange, handleBlur, values, touched, errors } = formik;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontFamily: "lora" }}>
            Sign up
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...formik.getFieldProps("firstName")}
                  error={touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="familyName"
                  {...formik.getFieldProps("lastName")}
                  error={touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...formik.getFieldProps("email")}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  {...formik.getFieldProps("username")}
                  error={touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...formik.getFieldProps("password")}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  {...formik.getFieldProps("confirmPassword")}
                  error={touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...formik.getFieldProps("termsAndConditions")}
                      color="primary"
                      required
                    />
                  }
                  label="I agree with the terms and conditions."
                  error={
                    touched.termsAndConditions && !!errors.termsAndConditions
                  }
                />
                {touched.termsAndConditions && errors.termsAndConditions && (
                  <Typography color="error" variant="caption">
                    {errors.termsAndConditions}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={formik.isSubmitting}
              onBlur={() => document.activeElement.blur()} 
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                Already have an account?
                <Link to="/GeneralLogInPage">Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
