
import React, { useState } from "react";

import * as Yup from "yup";
import {
  TextField,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
  Select,
  MenuItem,
  FormLabel,
  FormHelperText,
  Radio,
} from "@mui/material";

import './form.css'

import { InnerBoxStylesStep3 } from "../../../../../Pages/Registration/GeneralApplicant/Cmp/InnerBoxStyels";
import paymentTypeOptions from "../../../../../Pages/Registration/GeneralApplicant/Cmp/form_data/paymentTypeOptions";
import InputMask from "react-input-mask";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

const Preliminary_lecture_regisrations = ({formik}) => {
    const fee = 6000;
    return (
      <>

       
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
  
      </>
    );
}

export default Preliminary_lecture_regisrations;
