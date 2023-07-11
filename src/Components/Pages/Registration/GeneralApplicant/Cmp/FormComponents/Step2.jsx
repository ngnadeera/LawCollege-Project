import React, { useState } from "react";


import * as Yup from "yup";
import {TextField,FormControlLabel,FormGroup,Typography,Box,Select,MenuItem,FormLabel,FormHelperText,Radio} from "@mui/material";


import "../styles/form.css"
import { InnerBoxStyles } from "../InnerBoxStyels";


import InputMask from 'react-input-mask';

import provinceOptions from "../form_data/province";
import salutationOptions from "../form_data/salutaion";
import districtsecretariatOptions from "../form_data/districtsecretariat";




import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Step2 = ({formik}) => {
    const currentDate  = new Date();


    const handleGKPaperLanguageChange = (event) => {

        const value = event.target.value;
        formik.setFieldValue('gkpaper', value);
    
        if (value === 'Sinhala' || value === 'Tamil') {
          formik.setFieldValue('lpaper','English');
        }
        if (value === 'English'){
          formik.setFieldValue('lpaper','');
        }
      };
    
      const handleLPaperLanguageChange = (event) => {
        
        const value = event.target.value;
        formik.setFieldValue('lpaper', value);
    
        if (value === 'Sinhala' || value === 'Tamil') {
          formik.setFieldValue('gkpaper','English');
        }
        if (value === 'English'){
          formik.setFieldValue('gkpaper','');
        }
      
      };
    
    return(
        <>


<div style={{ width: "100%" }}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "rgba(0, 0, 0, 0.7)",
                  marginTop: "10px",
                }}
              >
                To the best of your knowledge, please ensure that you accurately
                fill out the following document with the most reliable and
                precise information available.
              </Typography>
              <hr
                style={{
                  height: "1px",
                  backgroundColor: "#cacacd",
                  width: "100%",
                  margin: "10px 0px 20px 0px",
                }}
              />

              <FormGroup>
                <Box sx={InnerBoxStyles} style={{ marginLeft: "30px" }}>
                  <Container fluid style={{ marginTop: "25px" }}>
                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Salutation : *</FormLabel>
                      </Col>
                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <Select
                          id="salutation"
                          name="salutation"
                          style={{ width: "50%" }}
                          value={formik.values.salutation}
                          onChange={(event) => {
                            formik.handleChange(event);

                            [
                              "fullname",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={formik.handleBlur}
                          onTouchEnd={() => {}}
                          displayEmpty
                          error={
                            formik.touched.salutation &&
                            Boolean(formik.errors.salutation)
                          }
                        >
                          {salutationOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>

                        {formik.touched.salutation &&
                          formik.errors.salutation && (
                            <FormHelperText error>
                              &nbsp;{formik.errors.salutation}
                            </FormHelperText>
                          )}
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Name in full : *</FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        md={8}
                        xs={12}
                      >
                        <TextField
                          name="fullname"
                          multiline
                          fullWidth
                          maxRows={3}
                          value={formik.values.fullname}
                          style={{ width: "75%" }}
                          onChange={(event) => {
                            formik.handleChange(event);
                            [
                              "salutation",
                              "addressline2",
                              "addressline1",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            [
                              "salutation",
                              "addressline2",
                              "addressline1",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.fullname &&
                            Boolean(formik.errors.fullname)
                          }
                          helperText={
                            formik.touched.fullname && formik.errors.fullname
                          }
                        />
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Permanent Address : *</FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="addressline1"
                          value={formik.values.addressline1}
                          placeholder="Address Line 1"
                          onChange={(event) => {
                            formik.handleChange(event);
                            ["salutation", "addressline2", "fullname"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            ["salutation", "addressline2", "fullname"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.addressline1 &&
                            Boolean(formik.errors.addressline1)
                          }
                          helperText={
                            formik.touched.addressline1 &&
                            formik.errors.addressline1
                          }
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: "30px" }}>
                      <Col></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="addressline2"
                          value={formik.values.addressline2}
                          placeholder="Address Line 2"
                          onChange={(event) => {
                            formik.handleChange(event);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.addressline2 &&
                            Boolean(formik.errors.addressline2)
                          }
                          helperText={
                            formik.touched.addressline2 &&
                            formik.errors.addressline2
                          }
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: "30px" }}>
                      <Col></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="addressline3"
                          value={formik.values.addressline3}
                          placeholder="Address Line 3"
                          onChange={(event) => {
                            formik.handleChange(event);
                            [
                              "fullname",
                              "salutation",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            [
                              "fullname",
                              "salutation",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.addressline3 &&
                            Boolean(formik.errors.addressline3)
                          }
                          helperText={
                            formik.touched.addressline3 &&
                            formik.errors.addressline3
                          }
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    {/* province */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Province : *</FormLabel>
                      </Col>
                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <Select
                          id="province"
                          name="province"
                          style={{ width: "50%" }}
                          value={formik.values.province}
                          onChange={(event) => {
                            formik.handleChange(event);

                            [
                              "fullname",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={formik.handleBlur}
                          displayEmpty
                          error={
                            formik.touched.province &&
                            Boolean(formik.errors.province)
                          }
                        >
                          {provinceOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>

                        {formik.touched.province && formik.errors.province && (
                          <FormHelperText error>
                            &nbsp;{formik.errors.province}
                          </FormHelperText>
                        )}
                      </Col>
                    </Row>

                    {/* District secretariat */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>District secretariat : *</FormLabel>
                      </Col>
                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <Select
                          id="districtsecretariat"
                          name="districtsecretariat"
                          style={{ width: "50%" }}
                          value={formik.values.districtsecretariat}
                          onChange={(event) => {
                            formik.handleChange(event);

                            [
                              "fullname",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={formik.handleBlur}
                          displayEmpty
                          error={
                            formik.touched.districtsecretariat &&
                            Boolean(formik.errors.districtsecretariat)
                          }
                        >
                          {districtsecretariatOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>

                        {formik.touched.districtsecretariat &&
                          formik.errors.districtsecretariat && (
                            <FormHelperText error>
                              &nbsp;{formik.errors.districtsecretariat}
                            </FormHelperText>
                          )}
                      </Col>
                    </Row>

                    {/* Grama Niladari Devision */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Grama Niladari Division : *</FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="gramaniladaridivision"
                          value={formik.values.gramaniladaridivision}
                          onChange={(event) => {
                            formik.handleChange(event);
                            [
                              "fullname",
                              "salutation",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            [
                              "fullname",
                              "salutation",
                              "addressline1",
                              "addressline2",
                            ].forEach((field) =>
                              formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.gramaniladaridivision &&
                            Boolean(formik.errors.gramaniladaridivision)
                          }
                          helperText={
                            formik.touched.gramaniladaridivision &&
                            formik.errors.gramaniladaridivision
                          }
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    {/* contact number (mobile) */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Contact Number(mobile) : *</FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <InputMask
                          mask="999-999-9999"
                          maskChar=""
                          value={formik.values.contactnumber} // Pass value prop from formik
                          onChange={formik.handleChange} // Pass onChange handler from formik
                          onBlur={formik.handleBlur}
                        >
                          {(inputProps) => (
                            <TextField
                              id="contactnumber"
                              name="contactnumber"
                              placeholder="Enter your contact number in 000-000-0000 format"
                              variant="outlined"
                              style={{ width: "75%" }}
                              value={inputProps.value} // Set value prop from inputProps
                              onChange={inputProps.onChange} // Set onChange prop from inputProps
                              onBlur={inputProps.handleBlur}
                              error={
                                formik.touched.contactnumber &&
                                Boolean(formik.errors.contactnumber)
                              }
                              helperText={
                                formik.touched.contactnumber &&
                                formik.errors.contactnumber
                              }
                            />
                          )}
                        </InputMask>
                      </Col>
                    </Row>

                    {/* contact number (home) */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Contact Number(residence) : </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <InputMask
                          mask="999-999-9999"
                          maskChar=""
                          value={formik.values.contactnumber2} // Pass value prop from formik
                          onChange={formik.handleChange} // Pass onChange handler from formik
                        >
                          {(inputProps) => (
                            <TextField
                              id="contactnumber2"
                              name="contactnumber2"
                              placeholder="Enter your contact number in 000-000-0000 format"
                              variant="outlined"
                              style={{ width: "75%" }}
                              value={inputProps.value} // Set value prop from inputProps
                              onChange={inputProps.onChange} // Set onChange prop from inputProps
                              onBlur={inputProps.handleBlur}
                              error={
                                formik.touched.contactnumber2 &&
                                Boolean(formik.errors.contactnumber2)
                              }
                              helperText={
                                formik.touched.contactnumber2 &&
                                formik.errors.contactnumber2
                              }
                            />
                          )}
                        </InputMask>
                      </Col>
                    </Row>

                    {/* email */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Email : </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="email"
                          value={formik.values.email}
                          onChange={(event) => {
                            formik.handleChange(event);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            ["fullname", "salutation", "addressline1",].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    {/* Gender */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Gender : * </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                            name="gender"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gender === "male"}
                          />
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                            name="gender"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gender === "female"}
                          />
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "10px",
                              marginTop: "12px",
                            }}
                          >
                            {formik.touched.gender && formik.errors.gender && (
                              <div>{formik.errors.gender}</div>
                            )}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    {/* Date of Birth */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Date of Birth : * </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          id="dob"
                          name="dob"
                          type="date"
                          variant="outlined"
                          style={{ width: "75%" }}
                          value={formik.values.dob}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.dob && Boolean(formik.errors.dob)
                          }
                          helperText={formik.touched.dob && formik.errors.dob}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            max: new Date().toISOString().split("T")[0],
                          }}
                        
                        />
                      </Col>
                    </Row>

                    {/* Age */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>
                          Age as at ({currentDate.toDateString()}) : *{" "}
                        </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="age"
                          value={formik.values.age}
                          onChange={(event) => {
                            formik.handleChange(event);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.age && Boolean(formik.errors.age)
                          }
                          helperText={formik.touched.age && formik.errors.age}
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    {/* Civil status */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Civil Status : * </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            value="Single"
                            control={<Radio />}
                            label="Single"
                            name="civilstatus"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.civilstatus === "Single"}
                          />
                          <FormControlLabel
                            value="Married"
                            control={<Radio />}
                            label="Married"
                            name="civilstatus"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.civilstatus === "Married"}
                          />
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "10px",
                              marginTop: "12px",
                            }}
                          >
                            {formik.touched.civilstatus &&
                              formik.errors.civilstatus && (
                                <div>{formik.errors.civilstatus}</div>
                              )}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    {/* Citizenship */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>Sri Lankan Citizenship : * </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                            name="citizenship"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.citizenship === "Yes"}
                            style={{ marginRight: "32px" }}
                          />
                          <FormControlLabel
                            value="No"
                            control={<Radio />}
                            label="No"
                            name="citizenship"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.citizenship === "No"}
                          />
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "45px",
                              marginTop: "12px",
                            }}
                          >
                            {formik.touched.citizenship &&
                              formik.errors.citizenship && (
                                <div>{formik.errors.citizenship}</div>
                              )}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    {/* Nic number */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end">
                        <FormLabel>NIC Number : </FormLabel>
                      </Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <TextField
                          name="nic2"
                          value={formik.values.nic2}
                          onChange={(event) => {
                            const trimmedValue = event.target.value.trim();
                            formik.setFieldValue("nic2", trimmedValue);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          onBlur={(event) => {
                            formik.handleBlur(event);
                            ["fullname", "salutation", "addressline1"].forEach(
                              (field) => formik.setFieldTouched(field, false)
                            );
                          }}
                          error={
                            formik.touched.nic2 && Boolean(formik.errors.nic2)
                          }
                          helperText={formik.touched.nic2 && formik.errors.nic2}
                          style={{ width: "75%" }}
                        />
                      </Col>
                    </Row>

                    {/* Instructions  */}

                    {/* Nic number */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end"></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <Typography
                          style={{
                            fontSize: "19px",
                            color: "rgba(0, 0, 0, 0.7)",
                            textAlign: "justify",
                            width: "75%",
                          }}
                        >
                          <p>
                            {" "}
                            A candidate may elect to answer the General
                            Knowledge and General Intelligence Paper in Sinhala,
                            Tamil, or English Language. Suppose the candidate
                            chooses to answer the General Knowledge and General
                            Intelligence Paper in either the Sinhala Language or
                            the Tamil Language. In that case, the candidate
                            should elect to sit for the English Language Paper.
                            II the candidate chooses to answer, the General
                            knowledge and General Intelligence Paper in the
                            English Language. the candidate should elect to sit
                            for either the Sinhala Language or the Tamil
                            Language Paper{" "}
                          </p>{" "}
                          <br />
                          <p>
                            (i) Medium in which you wish to sit the General
                            Knowledge and General Intelligence Paper at the
                            Entrance Examination?: *{" "}
                          </p>
                        </Typography>
                      </Col>
                    </Row>

                    {/* {General Intelligence paper} */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end"></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            value="Sinhala"
                            control={<Radio />}
                            label="Sinhala"
                            name="gkpaper"
                            onChange={handleGKPaperLanguageChange}                            onBlur={formik.handleBlur}
                            checked={formik.values.gkpaper === "Sinhala"}
                            style={{ marginRight: "32px" }}
                          />
                          <FormControlLabel
                            value="Tamil"
                            control={<Radio />}
                            label="Tamil"
                            name="gkpaper"
                            onChange={handleGKPaperLanguageChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gkpaper === "Tamil"}
                          />

                          <FormControlLabel
                            value="English"
                            control={<Radio />}
                            label="English"
                            name="gkpaper"
                            onChange={handleGKPaperLanguageChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gkpaper === "English"}
                            style={{ marginRight: "32px" }}
                            disabled={formik.values.lpaper === 'English'}

                          />
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "45px",
                              marginTop: "12px",
                            }}
                          >
                            {formik.touched.gkpaper &&
                              formik.errors.gkpaper && (
                                <div>{formik.errors.gkpaper}</div>
                              )}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end"></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <Typography
                          style={{
                            fontSize: "19px",
                            color: "rgba(0, 0, 0, 0.7)",
                            textAlign: "justify",
                            width: "75%",
                          }}
                        >
                          <p>
                            (i) Medium in which you wish to sit the Language Paper at the
                            Entrance Examination?: *{" "}
                          </p>
                        </Typography>
                      </Col>
                    </Row>

                    {/* Language paper */}

                    <Row style={{ marginBottom: "30px" }}>
                      <Col className="d-flex align-items-center justify-content-end"></Col>

                      <Col
                        className="d-flex align-items-center justify-content-start"
                        xs={8}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            value="Sinhala"
                            control={<Radio />}
                            label="Sinhala"
                            name="lpaper"
                            onChange={handleLPaperLanguageChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.lpaper === "Sinhala"}
                            style={{ marginRight: "32px" }}
                          />
                          <FormControlLabel
                            value="Tamil"
                            control={<Radio />}
                            label="Tamil"
                            name="lpaper"
                            onChange={handleLPaperLanguageChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.lpaper === "Tamil"}
                          />

                          <FormControlLabel
                            value="English"
                            control={<Radio />}
                            label="English"
                            name="lpaper"
                            onChange={handleLPaperLanguageChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.lpaper === "English"}
                            style={{ marginRight: "32px" }}
                            disabled={formik.values.gkpaper === 'English'}
                          />
                          <div
                            className="checkbox-error"
                            style={{
                              fontSize: "12px",
                              marginLeft: "45px",
                              marginTop: "12px",
                            }}
                          >
                            {formik.touched.lpaper &&
                              formik.errors.lpaper && (
                                <div>{formik.errors.lpaper}</div>
                              )}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>



                  </Container>
                </Box>
              </FormGroup>
        
        
        </div>
        </>
    )
}

export default Step2;