import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { basicSchema } from "../../Schemas";
import axios from 'axios'
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AuthContext } from "../../../../../helpers/AuthContext";


const defaultTheme = createTheme();

const Login = () => {

  const { setAuthStateApplicant } = useContext(AuthContext);


const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async(values) => {


    try {
       const response = await axios.post('http://localhost:3001/Applicant_signup/login', {
        username : values.username,
        password : values.password
      })

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setError("");
        localStorage.setItem("accessTokenApplicant", response.data)   
        setAuthStateApplicant(true)
        navigate('/Applicant_Registration'); 
      
      }

    } catch (error) {
      console.log("error catched!")
    }
  
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
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
            padding: "20px 30px 20px 30px",
            marginTop: 2,
            marginBottom: 5,
            display: "flex",
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
            <b>Log in</b>
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="username"
                  label="Username or email"
                  name="username"
                  {...formik.getFieldProps("username")}
                  error={touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  values={formik.values.password}
                  handleChange={formik.handleChange}
                  autoComplete="new-password"
                  {...formik.getFieldProps("password")}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
              </Grid>

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
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#CBB58B",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#A68C6B",
                },
              }}
            >
              Log in
            </Button> 
            

            <Grid container justifyContent="flex-end" flexDirection={"column"}>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
                </Grid>

                <Grid>
               Don't have an account ?   
                <Link href="/New_Student_Registration" variant="body2">
                  Sign Up
                </Link>
              </Grid>

            </Grid>
          </Box>
        </Box>
      </Container>
      <Container
        style={{ alignItems: "center", justifyContent: "center" }}
      ></Container>
    </ThemeProvider>
  );
};

export default Login;
