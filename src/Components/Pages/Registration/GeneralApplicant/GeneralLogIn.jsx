import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../Schemas";
import Axios from 'axios'
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

const defaultTheme = createTheme();

const Login = () => {

  const [userList,setUserList] = useState([]);
 
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/get").then((response)=>{
  //     setUserList(response.data);
  //   });
  // }, []);


  const handleSubmit = (values) => {
    // Axios.post("http://localhost:3001/api/insert", {
    //   username: values.username, 
    //   email: values.email
    // })
    //   setUserList([
    //     ...userList,
    //     { name:values.username, email:values.email},
    //   ]);
  
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
    },
   
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
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontFamily: "lora" }}>
            Log in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
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

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}  >
              Log in
            </Button>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Container style={{alignItems:'center', justifyContent:'center'}}>
        </Container>
    </ThemeProvider>
  );
};

export default Login;
