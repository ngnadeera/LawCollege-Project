import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { InnerBoxStyles } from "../../../GeneralApplicant/Cmp/InnerBoxStyels";
import { boxStyles } from "../../../GeneralApplicant/Cmp/BoxStyles";
import {
  Checkbox,
  Button,
  TextField,
  FormControlLabel,
  Typography,
  Box,
  Select,
  MenuItem,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';


import { InnerBoxStylesStep3 } from "../../../GeneralApplicant/Cmp/InnerBoxStyels";
import paymentTypeOptions from "../../../GeneralApplicant/Cmp/form_data/paymentTypeOptions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";



const EditRequestForm = () => {
  const navigate = useNavigate();
  const fee = 2000;
  const [userId, setUserId] = useState(null);
  const [userRef, setUserRef] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [userExist,setUserExist] = useState(false);


  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseUserId = await axios.get(
          "http://localhost:3001/GEA_personal_details/userId",
          {
            headers: {
              accessTokenApplicant: localStorage.getItem(
                "accessTokenApplicant"
              ),
            },
          }
        );
        const userId = responseUserId.data;
        setUserId(userId);

        const responseRefNumber = await axios.get(
          `http://localhost:3001/GEA_payment/${userId}`,
          {
            headers: {
              accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
            },
          }
        );
          
        setUserRef(responseRefNumber.data.ReferenceNumber);

        const response = await axios.get(`http://localhost:3001/Applicant_edit_request/${userId}`,
        {
          headers: {
            accessTokenApplicant: localStorage.getItem("accessTokenApplicant"),
          },
        }
        );
    
        const applicant = response.data;
        if (applicant) {
          setUserExist(true);
        } else {
 
          setUserExist(false);
        }

      } catch (error) {
        console.error("Error checking user:", error);
      }
    };

    fetchUser();

    
    const checkValueExists = async () => {
      try {
        
      } catch (error) {
    
        console.error('Error:', error);
      }
    };

    checkValueExists();


  }, []);

  console.log(userRef);

  const formik = useFormik({
    initialValues: {
      checkbox1: false,
      checkbox2: false,
      paymentDate: "",
      bank:"",
      paidAmount:"",
      paymentType:"",
    },
    // validationSchema: {},
    onSubmit: async (values) => {

          try {
            const responseUserId = await axios.post("http://localhost:3001/Applicant_edit_request",{
                PaymentDate: values.paymentDate,
                BankName: values.bank,
                PaymentType: values.paymentType,
                ReferenceNumber: userRef
              },
              {
                headers: {
                  accessTokenApplicant: localStorage.getItem(
                    "accessTokenApplicant"
                  ),
                },
              }
            );
            setIsLoading(true);
            setIsSnackbarOpen(true)

            await new Promise((resolve) => setTimeout(resolve, 2000)); 
            navigate('/Applicant_Registration')

          } catch (error) {
            console.error("Error checking user:", error);
          }

        }
  
  });



if (!userExist){

  return (
    <div>
      <Box sx={boxStyles}>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ width: "100%" }}>
        <Typography
          style={{
            fontSize: "20px",
            fontWeight: "bolder",
            color: "rgba(0, 0, 0, 0.7)",
            marginTop: "10px",
          }}
        >
          Please carefully read the following information and instructions
          before proceeding to fill out your application form for submitting an Edit Request.
        </Typography>
        <hr
            style={{
              height: "1px",
              backgroundColor: "#cacacd",
              margin: "10px 0 ",
            }}
          />

           {/* checkbox1 */}

        <div style={{ display: "flex", alignItems: "flex-start", marginTop: "35px" }}>
          <FormControlLabel
            sx={{ mr: "0px" }}
            control={<Checkbox name="checkbox1" />}
            checked={formik.values.checkbox1}
            onChange={formik.handleChange}
            error={formik.touched.checkbox1 && Boolean(formik.errors.checkbox1)}
            helperText={formik.touched.checkbox1 && formik.errors.checkbox1}
          />

          <Box sx={InnerBoxStyles}>
            <Typography
              style={{
                fontSize: "19px",
                color: "rgba(0, 0, 0, 0.7)",
                marginTop: "10px",
                textAlign: "justify",
              }}
            >
              <p>On receipt of your application, you are entitled to make corrections if any, on or before October 21,2022. Send us your edit request through the web portal by filling out the enclosed application form. A fee of <b>LKR 2,000.00</b> will be charged for amending the application. </p>
              <p> <br/> Amendment fee can be made online. <br/> </p>
              <p>Details are as follows: </p>
              <p>The payment for the above could be made at any branch of the Hatton National Bank to the credit of <b>A/C No. 063020073300, Hatton National Bank Hulftsdorp Branch or Bank of Ceylon to the credit of A/C No. 0001369779, Bank of Ceylon Hulftsdorp Branch</b> in favour of the Incorporated Council of Legal Education. </p>

              <p>Enter the payment details with your payment reference number in the last atep of this application form. </p>
              <p><b>Your Reference Number:<span style={{fontSize:"19px"}}> {userRef} </span>  </b></p>


            </Typography>
          </Box>
        </div>

        <div className="checkbox-error">
          {formik.touched.checkbox1 && formik.errors.checkbox1 && <div>{formik.errors.checkbox1}</div>}
        </div>


         {/* checkbox2 */}

         <div style={{ display: "flex", alignItems: "flex-start", marginTop: "35px" }}>
          <FormControlLabel
            sx={{ mr: "0px" }}
            control={<Checkbox name="checkbox2" />}
            checked={formik.values.checkbox2}
            onChange={formik.handleChange}
            error={formik.touched.checkbox2 && Boolean(formik.errors.checkbox2)}
            helperText={formik.touched.checkbox2 && formik.errors.checkbox2}
          />

          <Box sx={InnerBoxStyles}>
            <Typography
              style={{
                fontSize: "19px",
                color: "rgba(0, 0, 0, 0.7)",
                marginTop: "10px",
                textAlign: "justify",
              }}
            >
              <p>Once your payments have been successfully verified, and if you meet the eligibility criteria for making amendments to the already submitted application form, you will be granted access to edit the application form within a period of 2 to 3 days from the time of payment confirmation.</p>
              <p>Please note that access to edit the application form will be granted only once per payment. It's important to ensure that all necessary changes are made during this edit session. Additionally, it's crucial to keep in mind that after the deadline, you will no longer be able to make any further edits to the application form. Therefore, it is recommended to review and make all desired modifications within the specified timeframe to ensure your application is up to date and accurate. <br/> </p>
              
            </Typography>
          </Box>
        </div>

        <div className="checkbox-error">
          {formik.touched.checkbox2 && formik.errors.checkbox2 && <div>{formik.errors.checkbox2}</div>}
        </div>

        {/* Payment  */}


        <Box
        sx={InnerBoxStylesStep3}
        style={{ marginLeft: "15px", marginTop: "30px", paddingLeft: "20px" }}
      >
        <Container fluid style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              
            }}
          >
            <Typography
              style={{
                fontSize: "19px",
                color: "rgba(0, 0, 0, 0.7)",
                marginTop: "10px",
                textAlign: "justify",
              }}
            >
              <p>Payment</p>
            </Typography>

            <hr style={{ margin: "-10px -30px 25px -30px" }} />
          </div>

          {/* payment */}

          <Row style={{ marginTop: "20px" }} spacing>
            <Col md={{ span: 3, offset: 1 }} xs={12}>
              <FormLabel>Bank Name: *</FormLabel>
              <Select
                id="paymentType"
                name="paymentType"
                fullWidth
                value={formik.values.paymentType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onTouchEnd={() => {}}
                displayEmpty
                error={
                  formik.touched.paymentType &&
                  Boolean(formik.errors.paymentType)
                }
              >
                <MenuItem value="">Select Bank</MenuItem>
                <MenuItem value="haton-national-bank">
                  Haton National Bank
                </MenuItem>
                <MenuItem value="bank-of-ceylon">Bank of Ceylon</MenuItem>
              </Select>

              {formik.touched.paymentType && formik.errors.paymentType && (
                <FormHelperText error>
                  &nbsp;{formik.errors.paymentType}
                </FormHelperText>
              )}
            </Col>

            <Col md={{ span: 3, offset: 0 }} xs={12}>
              <FormLabel>Branch Name: *</FormLabel>

              <TextField
                id="branchName"
                name="branchName"
                variant="outlined"
                fullWidth
                value={formik.values.branchName} // Set value prop from inputProps
                onChange={(e) => {
                  const capitalizedValue = e.target.value.toUpperCase();
                  formik.setFieldValue("branchName", capitalizedValue);
      
                }}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.branchName && Boolean(formik.errors.branchName)
                }
                helperText={
                  formik.touched.branchName && formik.errors.branchName
                }
              />
            </Col>
            <Col md={{ span: 3, offset: 0 }} xs={12}>
              <FormLabel>Paid Amount (LKR) </FormLabel>
              <TextField
                id="paidAmount"
                name="paidAmount"
                variant="outlined"
                fullWidth
                value={formik.values.paidAmount || fee}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.paidAmount && Boolean(formik.errors.paidAmount)
                }
                helperText={
                  formik.touched.paidAmount && formik.errors.paidAmount
                }
                disabled
              />
            </Col>
          </Row>

          <Row style={{ marginTop: "20px" }} spacing>
            <Col md={{ span: 4, offset: 1 }} xs={12}>
              <FormLabel>Type of Payment: *</FormLabel>
              <Select
                id="bank"
                name="bank"
                fullWidth
                value={formik.values.bank}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onTouchEnd={() => {}}
                displayEmpty
                error={formik.touched.bank && Boolean(formik.errors.bank)}
              >
                {paymentTypeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>

              {formik.touched.bank && formik.errors.bank && (
                <FormHelperText error>
                  &nbsp;{formik.errors.bank}
                </FormHelperText>
              )}
            </Col>

            <Col md={{ span: 4, offset: 0 }} xs={12}>
              <FormLabel>Date of Payment: *</FormLabel>
              <TextField
                id="paymentDate"
                name="paymentDate"
                type="date"
                variant="outlined"
                fullWidth
                value={formik.values.paymentDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.paymentDate && Boolean(formik.errors.paymentDate)}
                helperText={formik.touched.paymentDate && formik.errors.paymentDate}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  max: new Date().toISOString().split("T")[0],
                }}
              />
            </Col>
          </Row>
        </Container>
      </Box>

    <div style={{display:"flex", alignItems:"flex-end",justifyContent:"flex-end", marginLeft:"18px", marginTop:"28px"}}>
      <Button
      variant="contained"
      type="submit"
      disabled={isLoading}
      >Place an Edit Request
      
      </Button>

      </div>
        </div>
        </form>
      </Box>


      <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <MuiAlert elevation={6} variant="filled" severity="success">
            Edit Request Has Submitted Successfully!
          </MuiAlert>
        </Snackbar>
    </div>
  );

} else {
  return(
  <div>
             
        <Box sx={InnerBoxStyles} style={{margin:"40px"}}>
         <Container  style={{
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center',
       height: '50vh',
     }}>

        <ErrorIcon sx={{ fontSize: 55, color: '#cc3300' }} /> 
 
     
           <Typography
             style={{
               fontSize: "25px",
               color: "rgba(0, 0, 0, 0.7)",
             }}
           >
             
             Edit Request is Pending...
            
             </Typography>
             <p>You have not yet received edit access</p>
             <Button variant="contained" onClick={()=>{ navigate('/New_Student_Registration')}}>Go Back</Button>
             

             
             </Container>
        </Box> 
        
    



  </div>
  );
}
 
};

export default EditRequestForm;
