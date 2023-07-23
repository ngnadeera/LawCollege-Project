import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import axios from 'axios'
import { basicSchema } from "../../../../../Pages/Registration/Schemas";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";



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
import { Label } from "@material-ui/icons";
import { FormLabel } from "react-bootstrap";


const defaultTheme = createTheme();

const ChangePasswordForm = () => {



const navigate = useNavigate();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);


  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const handleSubmit = async(values) => {


    try {
      const response = await axios.post(
        "http://localhost:3001/Student_login/change-password",
        {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      );
      

      if (response.data.error) {
        setError(response.data.error);
        console.log(response.data.error)
      } else {
        setError("");
        setOpen(true);
        formik.resetForm();

      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
    },

    // validationSchema: basicSchema,
   
    onSubmit: handleSubmit,
  });

  const { handleChange, handleBlur, values, touched, errors } = formik;

 
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm"  >
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
            <b>Change Password</b>
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="currentPassword"
                  label="Current Password"
                  type="password"
                  name="currentPassword"
                  {...formik.getFieldProps("currentPassword")}
                  error={touched.currentPassword && !!errors.currentPassword}
                  helperText={touched.currentPassword && errors.currentPassword}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="newPassword"
                  label="New Password"
                  type="password"
                  id="newPassword"
                  values={formik.values.newPassword}
                  handleChange={formik.handleChange}
                  autoComplete="new-password"
                  {...formik.getFieldProps("newPassword")}
                  error={touched.newPassword && !!errors.newPassword}
                  helperText={touched.newPassword && errors.newPassword}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="confirmNewPassword"
                  label="Confirm New Password"
                  type="password"
                  id="confirmNewPassword"
                  values={formik.values.confirmNewPassword}
                  handleChange={formik.handleChange}
                  autoComplete="new-password"
                  {...formik.getFieldProps("confirmNewPassword")}
                  error={touched.confirmNewPassword && !!errors.confirmNewPassword}
                  helperText={touched.confirmNewPassword && errors.confirmNewPassword}
                />

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
                <p><i>Please make sure to change your password after the initial login</i></p>
              </Grid>

            </Grid>
          </Box>
        </Box>
      </Container>
      <Container
        style={{ alignItems: "center", justifyContent: "center" }}
      ></Container>

<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert severity="success" onClose={handleClose}  elevation={6} variant="filled">
        Password Changed Successfully!
      </MuiAlert>
    </Snackbar>

    </ThemeProvider>
  );
};

export default ChangePasswordForm;
