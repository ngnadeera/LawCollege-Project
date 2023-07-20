import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../Schemas"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

const [error,setError] = useState("");


const handleSubmit = async (values) => {
  try {
    const response = await Axios.post(
      "http://localhost:3001/Applicant_signup",
      {
        email: values.email,
        username: values.username,
        password: values.password,
      }
    );

    if (response.data.error){
      setError(response.data.error)
    }else{
      setError("")
      navigate("/New_Student_Registration/login")
    }
  

  } catch (error) {
    setError(error);
  }
};

  const formik = useFormik({
    initialValues: {
      email: "",
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
            padding: "20px 20px 20px 20px",
            marginleft:"10px",
            marginTop: 2,
            marginBottom: 5,
            display: "flex",
            width:"430px",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
            boxShadow: "1px 2px 7px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "lora",
              fontSize: "35px",
              color: "rgba(0, 0, 0, 0.7)",
            }}
          >
           <b>Sign up </b> 
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
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

            <Grid>
            
            {error && (
                <Typography
                  component="p"
                  sx={{
                    color: "red",
                    marginTop: 1,
                    marginLeft:3,
                    fontSize:15,
                  }}
                >
                  {error}
                </Typography>
              )}
</Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,
                backgroundColor: "#CBB58B",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#A68C6B",
                },}}
              disabled={formik.isSubmitting}
              onBlur={() => document.activeElement.blur()} 
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                Already have an account?
                <Link to="/New_Student_Registration/login">Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
