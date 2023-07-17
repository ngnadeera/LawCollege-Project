import React, { useState } from "react";


import * as Yup from "yup";
import {TextField,FormControlLabel,FormGroup,Typography,Box,Select,MenuItem,FormLabel,FormHelperText,Radio} from "@mui/material";


import "../styles/form.css"

import { InnerBoxStyles } from "../InnerBoxStyels";
import { InnerBoxStylesStep3 } from "../InnerBoxStyels";

import monthOptions from "../form_data/months";
import mediumOptions from "../form_data/medium";
import otherQulificationOptions from "../form_data/otherQulification";


import InputMask from 'react-input-mask';





import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";







const Step3 = ({formik}) => {
    return (
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
        

        <Box sx={InnerBoxStylesStep3} style={{ marginLeft: "30px" }}>
          <container fluid style={{ width: "100%" }}>
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
                <p>Perfomence at the Advanced Level Examination</p>
              </Typography>

              <hr style={{ margin: "-10px -18px 25px -18px" }} />
            </div>

            {/* Schema */}
            <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Schema: *</Typography>
              </Col>
            </Row>

            <Row>
              <Col md={{ span: 3, offset: 2 }}>
                <FormGroup row>
                <FormControlLabel
                    value="none"
                    control={<Radio />}
                    label="None"
                    name="schema"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.schema === "none"}
                  />
                  <FormControlLabel
                    value="new"
                    control={<Radio />}
                    label="New (In the year 2000 or after)"
                    name="schema"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.schema === "new"}
                  />
                  <FormControlLabel
                    value="old"
                    control={<Radio />}
                    label="Old (In the year 1999 or before)"
                    name="schema"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.schema === "old"}
                  />
                  <div
                    className="checkbox-error"
                    style={{
                      fontSize: "12px",
                      marginLeft: "10px",
                      marginTop: "12px",
                    }}
                  >
                    {formik.touched.schema && formik.errors.schema && (
                      <div>{formik.errors.schema}</div>
                    )}
                  </div>
                </FormGroup>
              </Col>
            </Row>

            {/* Type of Education Institute: */}

            {formik.values.schema != "none" ? 
           <div>

            <Row style={{ marginTop: "25px" }}>
              <Col xs={10} md={{ span: 5, offset: 1 }}>
                <Typography>Type of Education Institute: *</Typography>
              </Col>
            </Row>

            <Row>
              <Col md={{ span: 4, offset: 2 }} style={{ marginTop: "5px" }}>
                <FormGroup>
                  <FormControlLabel
                    value="Government"
                    control={<Radio />}
                    label="Government institute in Sri Lanka"
                    name="educationInstitute"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstitute === "Government"}
                  />
                  <FormControlLabel
                    value="Private"
                    control={<Radio />}
                    label="Recognized private institute in Sri Lanka"
                    name="educationInstitute"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstitute === "Private"}
                  />
                  <FormControlLabel
                    value="Overseas"
                    control={<Radio />}
                    label="Overseas"
                    name="educationInstitute"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstitute === "Overseas"}
                  />
                  <div
                    className="checkbox-error"
                    style={{
                      fontSize: "12px",
                      marginLeft: "10px",
                      marginTop: "12px",
                    }}
                  >
                    {formik.touched.educationInstitute &&
                      formik.errors.educationInstitute && (
                        <div>{formik.errors.educationInstitute}</div>
                      )}
                  </div>
                </FormGroup>
              </Col>
            </Row>

            {/* Year and the month */}

            <Row style={{ marginTop: "25px" }}>
              <Col md={{ span: 5, offset: 1 }}>
                <Typography style={{ marginBottom: "5px" }}>Year: *</Typography>

                <InputMask
                  mask="9999"
                  maskChar=""
                  value={formik.values.yearOfAL} // Pass value prop from formik
                  onChange={formik.handleChange} // Pass onChange handler from formik
                  onBlur={formik.handleBlur}
                >
                  {(inputProps) => (
                    <TextField
                      id="yearOfAL"
                      name="yearOfAL"
                      variant="outlined"
                      fullWidth
                      placeholder="YYYY"

                      value={inputProps.value} // Set value prop from inputProps
                      onChange={inputProps.onChange} // Set onChange prop from inputProps
                      onBlur={inputProps.handleBlur}
                      error={
                        formik.touched.yearOfAL &&
                        Boolean(formik.errors.yearOfAL)
                      }
                      helperText={
                        formik.touched.yearOfAL && formik.errors.yearOfAL
                      }
                    />
                  )}
                </InputMask>
              </Col>
              <Col md={{ span: 5 }}>
                <Typography style={{ marginBottom: "5px" }}>
                  Month: *
                </Typography>

                <Select
                  id="monthofAL"
                  name="monthofAL"
                  fullWidth
                  value={formik.values.monthofAL}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onTouchEnd={() => {}}
                  displayEmpty
                  error={
                    formik.touched.monthofAL && Boolean(formik.errors.monthofAL)
                  }
                >
                  {monthOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>

                {formik.touched.monthofAL && formik.errors.monthofAL && (
                  <FormHelperText error>
                    &nbsp;{formik.errors.monthofAL}
                  </FormHelperText>
                )}
              </Col>
            </Row>

            <Row style={{ marginTop: "25px" }}>
              <Col md={{ span: 5, offset: 1 }}>
                <Typography style={{ marginBottom: "5px" }}>
                  Index No: *
                </Typography>

                <TextField
                  id="indexNo"
                  name="indexNo"
                  variant="outlined"
                  fullWidth
                  value={formik.values.indexNo} 
                  onChange={(e) => {
                    const capitalizedValue = e.target.value.trimEnd();
                    formik.setFieldValue("indexNo", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.indexNo && Boolean(formik.errors.indexNo)
                  }
                  helperText={formik.touched.indexNo && formik.errors.indexNo}
                />
              </Col>
              <Col md={{ span: 5 }}>
                <Typography style={{ marginBottom: "5px" }}>
                  Medium: *
                </Typography>

                <Select
                  id="medium"
                  name="medium"
                  fullWidth
                  value={formik.values.medium}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onTouchEnd={() => {}}
                  displayEmpty
                  error={formik.touched.medium && Boolean(formik.errors.medium)}
                >
                  {mediumOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>

                {formik.touched.medium && formik.errors.medium && (
                  <FormHelperText error>
                    &nbsp;{formik.errors.medium}
                  </FormHelperText>
                )}
              </Col>
            </Row>

            {/* subject 1 */}

            <Row style={{ marginTop: "20px" }} spacing>
              <Col md={{ span: 3, offset: 1 }} xs={12}>
                <TextField
                  id="subjectNumber1"
                  name="subjectNumber1"
                  type="number"
                  variant="outlined"
                  label="Subject Number"
                  fullWidth
                  value={formik.values.subjectNumber1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subjectNumber1 &&
                    Boolean(formik.errors.subjectNumber1)
                  }
                  helperText={
                    formik.touched.subjectNumber1 &&
                    formik.errors.subjectNumber1
                  }
                  InputProps={{
                    inputProps: {
                      min: 0,
                    },
                  }}
                />
              </Col>

              <Col md={{ span: 3, offset: 0 }} xs={12}>
                <TextField
                  id="subject1"
                  name="subject1"
                  variant="outlined"
                  label="Subject"
                  fullWidth
                  value={formik.values.subject1}
                  onChange={(e) => {
                    const capitalizedValue = e.target.value
                      .toUpperCase()
                      .trimEnd();
                    formik.setFieldValue("subject1", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subject1 && Boolean(formik.errors.subject1)
                  }
                  helperText={formik.touched.subject1 && formik.errors.subject1}
                />
              </Col>
              <Col md={{ span: 3, offset: 0 }} xs={12}>
              <TextField
                  id="grading1"
                  name="grading1"
                  variant="outlined"
                  label="Grading"
                  fullWidth
                  value={formik.values.grading1}
                  onChange={(e) => {
                    const capitalizedValue = e.target.value
                      .toUpperCase()
                      .trimEnd();
                    formik.setFieldValue("grading1", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.grading1 && Boolean(formik.errors.grading1)
                  }
                  helperText={formik.touched.grading1 && formik.errors.grading1}
                />
              </Col>
            </Row>


             {/* subject 2 */}

             <Row style={{ marginTop: "20px" }} spacing>
              <Col md={{ span: 3, offset: 1 }} xs={12}>
                <TextField
                  id="subjectNumber2"
                  name="subjectNumber2"
                  type="number"
                  variant="outlined"
                  label="Subject Number"
                  fullWidth
                  value={formik.values.subjectNumber2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subjectNumber2 &&
                    Boolean(formik.errors.subjectNumber2)
                  }
                  helperText={
                    formik.touched.subjectNumber2 &&
                    formik.errors.subjectNumber2
                  }
                  InputProps={{
                    inputProps: {
                      min: 0,
                    },
                  }}
                />
              </Col>

              <Col md={{ span: 3, offset: 0 }} xs={12}>
                <TextField
                  id="subject2"
                  name="subject2"
                  variant="outlined"
                  label="Subject"
                  fullWidth
                  value={formik.values.subject2}
                  onChange={(e) => {
                    const capitalizedValue = e.target.value
                      .toUpperCase()
                      .trimEnd();
                    formik.setFieldValue("subject2", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subject2 && Boolean(formik.errors.subject2)
                  }
                  helperText={formik.touched.subject2 && formik.errors.subject2}
                />
              </Col>
              <Col md={{ span: 3, offset: 0 }} xs={12}>
              <TextField
                  id="grading2"
                  name="grading2"
                  variant="outlined"
                  label="Grading"
                  fullWidth
                  value={formik.values.grading2}
                  onChange={(e) => {
                    const capitalizedValue = e.target.value
                      .toUpperCase()
                      .trimEnd();
                    formik.setFieldValue("grading2", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.grading2 && Boolean(formik.errors.grading2)
                  }
                  helperText={formik.touched.grading2 && formik.errors.grading2}
                />
              </Col>
            </Row>


             {/* subject 3 */}

             <Row style={{ marginTop: "20px" }} spacing>
              <Col md={{ span: 3, offset: 1 }} xs={12}>
                <TextField
                  id="subjectNumber3"
                  name="subjectNumber3"
                  type="number"
                  variant="outlined"
                  label="Subject Number"
                  fullWidth
                  value={formik.values.subjectNumber3}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subjectNumber3 &&
                    Boolean(formik.errors.subjectNumber3)
                  }
                  helperText={
                    formik.touched.subjectNumber3 &&
                    formik.errors.subjectNumber3
                  }
                  InputProps={{
                    inputProps: {
                      min: 0,
                    },
                  }}
                />
              </Col>

              <Col md={{ span: 3, offset: 0 }} xs={12}>
                <TextField
                  id="subject3"
                  name="subject3"
                  variant="outlined"
                  label="Subject"
                  fullWidth
                  value={formik.values.subject3}
                  onChange={(e) => {
                    const capitalizedValue = e.target.value
                      .toUpperCase()
                      .trimEnd();
                    formik.setFieldValue("subject3", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subject3 && Boolean(formik.errors.subject3)
                  }
                  helperText={formik.touched.subject3 && formik.errors.subject3}
                />
              </Col>
              <Col md={{ span: 3, offset: 0 }} xs={12}>
              <TextField
                  id="grading3"
                  name="grading3"
                  variant="outlined"
                  label="Grading"
                  fullWidth
                  value={formik.values.grading3}
                  onChange={(e) => {
                    const capitalizedValue = e.target.value
                      .toUpperCase()
                      .trimEnd();
                    formik.setFieldValue("grading3", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.grading3 && Boolean(formik.errors.grading3)
                  }
                  helperText={formik.touched.grading3 && formik.errors.grading3}
                />
              </Col>
            </Row>

            {/* subject 4 */}

            { formik.values.schema === "old" ? <div>

            <Row style={{ marginTop: "20px" }} spacing>
              <Col md={{ span: 3, offset: 1 }} xs={12}>
                <TextField
                  id="subjectNumber4"
                  name="subjectNumber4"
                  type="number"
                  variant="outlined"
                  label="Subject Number"
                  fullWidth
                  value={formik.values.subjectNumber4}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subjectNumber4 &&
                    Boolean(formik.errors.subjectNumber4)
                  }
                  helperText={
                    formik.touched.subjectNumber4 &&
                    formik.errors.subjectNumber4
                  }
                  InputProps={{
                    inputProps: {
                      min: 0,
                    },
                  }}
                />
              </Col>

              <Col md={{ span: 3, offset: 0 }} xs={12}>
                <TextField
                  id="subject4"
                  name="subject4"
                  variant="outlined"
                  label="Subject"
                  fullWidth
                  value={formik.values.subject4}
                  onChange={(e) => {
                    const capitalizedValue = e.target.value
                      .toUpperCase()
                      .trimEnd();
                    formik.setFieldValue("subject4", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subject4 && Boolean(formik.errors.subject4)
                  }
                  helperText={formik.touched.subject4 && formik.errors.subject4}
                />
              </Col>
              <Col md={{ span: 3, offset: 0 }} xs={12}>
              <TextField
                  id="grading4"
                  name="grading4"
                  variant="outlined"
                  label="Grading"
                  fullWidth
                  value={formik.values.grading4}
                  onChange={(e) => {
                    const capitalizedValue = e.target.value
                      .toUpperCase()
                      .trimEnd();
                    formik.setFieldValue("grading4", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.grading4 && Boolean(formik.errors.grading4)
                  }
                  helperText={formik.touched.grading4 && formik.errors.grading4}
                />
              </Col>
            </Row>
            </div> : <div> </div>
}
        </div> : <div></div>}
          </container>
        </Box>


        <Box sx={InnerBoxStylesStep3} style={{ marginLeft: "30px", marginTop:"30px" }}>
          <container fluid style={{ width: "100%" }}>
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
                <p>Other Qualifications - Please fill by only those who do not acquire the minimum  (A/L) qualifications</p>
              </Typography>

              <hr style={{ margin: "-10px -18px 25px -18px" }} />
            </div>

            

            {/* Schema */}
            <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Select the most suitable category of your other qualification: </Typography>
              </Col>
            </Row>

          

            {/* other qulification selection AL */}

            <Row>
              <Col xs={12} md={{ span: 6, offset: 1 }}>
              <Select
                  id="otherQulifications"
                  name="otherQulifications"
                  fullWidth
                  value={formik.values.otherQulifications}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onTouchEnd={() => {}}
                  displayEmpty
                  error={
                    formik.touched.otherQulifications && Boolean(formik.errors.otherQulifications)
                  }
                >
                  {otherQulificationOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>

                {formik.touched.otherQulifications && formik.errors.otherQulifications && (
                  <FormHelperText error>
                    &nbsp;{formik.errors.otherQulifications}
                  </FormHelperText>
                )}
              </Col>
            </Row>

            {/* Name of the Institution */}

            <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Name of the Institution:  </Typography>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={{ span: 6, offset: 1 }}>
              <TextField
                  id="Institution"
                  name="Institution"
                  variant="outlined"
                 
                  fullWidth
                  value={formik.values.Institution}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.Institution && Boolean(formik.errors.Institution)
                  }
                  helperText={formik.touched.Institution && formik.errors.Institution}
                />
              </Col>
            </Row>

            {/* Course Duration */}

            <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Course duration:  </Typography>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={{ span: 6, offset: 1 }}>
              <TextField
                  id="duration"
                  name="duration"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={formik.values.duration}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.duration &&
                    Boolean(formik.errors.duration)
                  }
                  helperText={
                    formik.touched.duration &&
                    formik.errors.duration
                  }
                  InputProps={{
                    inputProps: {
                      min: 0,
                    },
                  }}
                />
              </Col>
            </Row>

             {/* Year of completion */}

             <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Year of completion:  </Typography>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={{ span: 6, offset: 1 }}>
              <InputMask
                  mask="9999"
                  maskChar=""
                  value={formik.values.completionYear} // Pass value prop from formik
                  onChange={formik.handleChange} // Pass onChange handler from formik
                  onBlur={formik.handleBlur}
                >
                  {(inputProps) => (
                    <TextField
                      id="completionYear"
                      name="completionYear"
                      variant="outlined"
                      placeholder="YYYY"

                      fullWidth
                      value={inputProps.completionYear} // Set value prop from inputProps
                      onChange={inputProps.onChange} // Set onChange prop from inputProps
                      onBlur={inputProps.handleBlur}
                      error={
                        formik.touched.completionYear &&
                        Boolean(formik.errors.completionYear)
                      }
                      helperText={
                        formik.touched.completionYear && formik.errors.completionYear
                      }
                    />
                  )}
                </InputMask>
              </Col>
            </Row>


            <Row style={{ marginTop: "20px" }} spacing>
              <Col md={{ span: 3, offset: 1 }} xs={12}>
              <Typography>Index number:  </Typography>
              <TextField
                  id="otherQulificationIndex"
                  name="otherQulificationIndex"
                  variant="outlined"
                  fullWidth
                  value={formik.otherQulificationIndex} // Set value prop from inputProps
                  onChange={(e) => {
                    const capitalizedValue = e.target.value.trimEnd();
                    formik.setFieldValue("otherQulificationIndex", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.otherQulificationIndex && Boolean(formik.errors.otherQulificationIndex)
                  }
                  helperText={formik.touched.otherQulificationIndex && formik.errors.otherQulificationIndex}
                />
              </Col>

              <Col md={{ span: 3, offset: 0 }} xs={12}>
              <Typography>Medium:  </Typography>
              <Select
                  id="otherQulificationMedium"
                  name="otherQulificationMedium"
                  fullWidth
                  value={formik.values.otherQulificationMedium}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onTouchEnd={() => {}}
                  displayEmpty
                  error={formik.touched.otherQulificationMedium && Boolean(formik.errors.otherQulificationMedium)}
                >
                  {mediumOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>

                {formik.touched.otherQulificationMedium && formik.errors.otherQulificationMedium && (
                  <FormHelperText error>
                    &nbsp;{formik.errors.otherQulificationMedium}
                  </FormHelperText>
                )}
              </Col>
              
            </Row> 
            </container>
            </Box>

            {/* Ol examination */}

            <Box sx={InnerBoxStylesStep3} style={{ marginLeft: "30px", marginTop:"30px" }}>
          <container fluid style={{ width: "100%" }}>
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
                <p>Performance at <b>Ordinary Level examination</b>, N.C.G.E Examination, S.S.C Examination </p>
              </Typography>

              <hr style={{ margin: "-10px -18px 25px -18px" }} />
            </div>

            {/* English */}

            <Row style={{ marginTop: "20px" }} spacing>
              <Col md={{ span: 3, offset: 1 }} xs={12}>
              <Typography sx={{fontSize:"20px",  color: "rgba(0, 0, 0, 0.7)",}}>Language -  <b>English</b>  </Typography>
              </Col>

              </Row>
              <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Type of Education Institute:   </Typography>
              </Col>
            </Row>


              <Row>
              <Col md={{ span: 4, offset: 2 }} style={{ marginTop: "5px" }}>
                <FormGroup>
                <FormControlLabel
                    value="none"
                    control={<Radio />}
                    label="None"
                    name="educationInstituteEnglish"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteEnglish === "none"}
                  />
                  <FormControlLabel
                    value="Government"
                    control={<Radio />}
                    label="Government institute in Sri Lanka"
                    name="educationInstituteEnglish"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteEnglish === "Government"}
                  />
                  <FormControlLabel
                    value="Private"
                    control={<Radio />}
                    label="Recognized private institute in Sri Lanka"
                    name="educationInstituteEnglish"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteEnglish === "Private"}
                  />
                  <FormControlLabel
                    value="Overseas"
                    control={<Radio />}
                    label="Overseas"
                    name="educationInstituteEnglish"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteEnglish === "Overseas"}
                  />
                  <div
                    className="checkbox-error"
                    style={{
                      fontSize: "12px",
                      marginLeft: "10px",
                      marginTop: "12px",
                    }}
                  >
                    {formik.touched.educationInstituteEnglish &&
                      formik.errors.educationInstituteEnglish && (
                        <div>{formik.errors.educationInstituteEnglish}</div>
                      )}
                  </div>
                </FormGroup>
              </Col>
            </Row>

            {/* index number of English */}

            {formik.values.educationInstituteEnglish != "none" ? 
           <div>

            <Row style={{ marginTop: "20px" }} spacing>
              <Col md={{ span: 2, offset: 1 }} xs={12}>
              <Typography>Index number:  </Typography>
              <TextField
                  id="indexEnglish"
                  name="indexEnglish"
                  variant="outlined"
                  fullWidth
                  value={formik.indexEnglish} // Set value prop from inputProps
                  onChange={(e) => {
                    const capitalizedValue = e.target.value.trimEnd();
                    formik.setFieldValue("indexEnglish", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.indexEnglish && Boolean(formik.errors.indexEnglish)
                  }
                  helperText={formik.touched.indexEnglish && formik.errors.indexEnglish}
                />
              </Col>

              <Col md={{ span: 2 }} xs={12}>
              <Typography>Grading :  </Typography>
              <TextField
                id="gradingEnglish"
                name="gradingEnglish"
                variant="outlined"
                fullWidth
                value={formik.values.gradingEnglish}
                onChange={(e) => {
                    const capitalizedValue = e.target.value.toUpperCase().trimEnd();
                    formik.setFieldValue("gradingEnglish", capitalizedValue);
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.gradingEnglish && Boolean(formik.errors.gradingEnglish)}
                helperText={formik.touched.gradingEnglish && formik.errors.gradingEnglish}
/>

              </Col>

              <Col md={{ span: 2 }} xs={12}>
              <Typography>Year :  </Typography>
              <InputMask
                  mask="9999"
                  maskChar=""
                  value={formik.values.yearOfEnglish} // Pass value prop from formik
                  onChange={formik.handleChange} // Pass onChange handler from formik
                  onBlur={formik.handleBlur}
                >
                  {(inputProps) => (
                    <TextField
                      id="yearOfEnglish"
                      name="yearOfEnglish"
                      variant="outlined"
                      placeholder="YYYY"
                      value={inputProps.value} // Set value prop from inputProps
                      onChange={inputProps.onChange} // Set onChange prop from inputProps
                      onBlur={inputProps.handleBlur}
                      error={
                        formik.touched.yearOfEnglish &&
                        Boolean(formik.errors.yearOfEnglish)
                      }
                      helperText={
                        formik.touched.yearOfEnglish && formik.errors.yearOfEnglish
                      }
                    />
                  )}
                </InputMask>
              </Col>

              <Col md={{ span: 2}} xs={12}>
              <Typography>
                  Month: *
                </Typography>

                <Select
                  id="monthOfEnglish"
                  name="monthOfEnglish"
                  fullWidth
                  value={formik.values.monthOfEnglish}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onTouchEnd={() => {}}
                  displayEmpty
                  error={
                    formik.touched.monthOfEnglish && Boolean(formik.errors.monthOfEnglish)
                  }
                >
                  {monthOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>

                {formik.touched.monthOfEnglish && formik.errors.monthOfEnglish && (
                  <FormHelperText error>
                    &nbsp;{formik.errors.monthOfEnglish}
                  </FormHelperText>
                )}
              </Col>
              
            </Row> 
            </div> : <div></div>}


            {/* Sinhala */}

            <Row style={{ marginTop: "70px" }} spacing>
              <Col md={{ span: 3, offset: 1 }} xs={12}>
              <Typography sx={{fontSize:"20px",  color: "rgba(0, 0, 0, 0.7)",}}>Language -  <b>Sinhala</b>  </Typography>
              </Col>

              </Row>
              <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Type of Education Institute:   </Typography>
              </Col>
            </Row>


              <Row>
              <Col md={{ span: 4, offset: 2 }} style={{ marginTop: "5px" }}>
                <FormGroup>
                <FormControlLabel
                    value="none"
                    control={<Radio />}
                    label="None"
                    name="educationInstituteSinhala"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteSinhala === "none"}
                  />
                  <FormControlLabel
                    value="Government"
                    control={<Radio />}
                    label="Government institute in Sri Lanka"
                    name="educationInstituteSinhala"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteSinhala === "Government"}
                  />
                  <FormControlLabel
                    value="Private"
                    control={<Radio />}
                    label="Recognized private institute in Sri Lanka"
                    name="educationInstituteSinhala"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteSinhala === "Private"}
                  />
                  <FormControlLabel
                    value="Overseas"
                    control={<Radio />}
                    label="Overseas"
                    name="educationInstituteSinhala"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteSinhala === "Overseas"}
                  />
                  <div
                    className="checkbox-error"
                    style={{
                      fontSize: "12px",
                      marginLeft: "10px",
                      marginTop: "12px",
                    }}
                  >
                    {formik.touched.educationInstituteSinhala &&
                      formik.errors.educationInstituteSinhala && (
                        <div>{formik.errors.educationInstituteSinhala}</div>
                      )}
                  </div>
                </FormGroup>
              </Col>
            </Row>

            {/* index number of Sinhala */}

            { formik.values.educationInstituteSinhala != "none" ?
            <div>
            <Row style={{ marginTop: "20px" }} spacing>
              <Col md={{ span: 2, offset: 1 }} xs={12}>
              <Typography>Index number:  </Typography>
              <TextField
                  id="indexSinhala"
                  name="indexSinhala"
                  variant="outlined"
                  fullWidth
                  value={formik.indexSinhala} // Set value prop from inputProps
                  onChange={(e) => {
                    const capitalizedValue = e.target.value.trimEnd();
                    formik.setFieldValue("indexSinhala", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.indexSinhala && Boolean(formik.errors.indexSinhala)
                  }
                  helperText={formik.touched.indexSinhala && formik.errors.indexSinhala}
                />
              </Col>

              <Col md={{ span: 2 }} xs={12}>
              <Typography>Grading :  </Typography>
              <TextField
                id="gradingSinhala"
                name="gradingSinhala"
                variant="outlined"
                fullWidth
                value={formik.values.gradingSinhala}
                onChange={(e) => {
                    const capitalizedValue = e.target.value.toUpperCase().trimEnd();
                    formik.setFieldValue("gradingSinhala", capitalizedValue);
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.gradingSinhala && Boolean(formik.errors.gradingSinhala)}
                helperText={formik.touched.gradingSinhala && formik.errors.gradingSinhala}
/>

              </Col>

              <Col md={{ span: 2 }} xs={12}>
              <Typography>Year :  </Typography>
              <InputMask
                  mask="9999"
                  maskChar=""
                  value={formik.values.yearOfSinhala} // Pass value prop from formik
                  onChange={formik.handleChange} // Pass onChange handler from formik
                  onBlur={formik.handleBlur}
                >
                  {(inputProps) => (
                    <TextField
                      id="yearOfSinhala"
                      name="yearOfSinhala"
                      variant="outlined"
                      placeholder="YYYY"
                      value={inputProps.value} // Set value prop from inputProps
                      onChange={inputProps.onChange} // Set onChange prop from inputProps
                      onBlur={inputProps.handleBlur}
                      error={
                        formik.touched.yearOfSinhala &&
                        Boolean(formik.errors.yearOfSinhala)
                      }
                      helperText={
                        formik.touched.yearOfSinhala && formik.errors.yearOfSinhala
                      }
                    />
                  )}
                </InputMask>
              </Col>

              <Col md={{ span: 2}} xs={12}>
              <Typography>
                  Month: *
                </Typography>

                <Select
                  id="monthOfSinhala"
                  name="monthOfSinhala"
                  fullWidth
                  value={formik.values.monthOfSinhala}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onTouchEnd={() => {}}
                  displayEmpty
                  error={
                    formik.touched.monthOfSinhala && Boolean(formik.errors.monthOfSinhala)
                  }
                >
                  {monthOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>

                {formik.touched.monthOfSinhala && formik.errors.monthOfSinhala && (
                  <FormHelperText error>
                    &nbsp;{formik.errors.monthOfSinhala}
                  </FormHelperText>
                )}
              </Col>
              
            </Row> 
            </div> : <div></div>}


             {/* Tamil */}

             <Row style={{ marginTop: "70px" }} spacing>
              <Col md={{ span: 3, offset: 1 }} xs={12}>
              <Typography sx={{fontSize:"20px",  color: "rgba(0, 0, 0, 0.7)",}}>Language -  <b>Tamil</b>  </Typography>
              </Col>

              </Row>
              <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Type of Education Institute:   </Typography>
              </Col>
            </Row>


              <Row>
              <Col md={{ span: 4, offset: 2 }} style={{ marginTop: "5px" }}>
                <FormGroup>
                <FormControlLabel
                    value="none"
                    control={<Radio />}
                    label="None"
                    name="educationInstituteTamil"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteTamil === "none"}
                  />
                  <FormControlLabel
                    value="Government"
                    control={<Radio />}
                    label="Government institute in Sri Lanka"
                    name="educationInstituteTamil"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteTamil === "Government"}
                  />
                  <FormControlLabel
                    value="Private"
                    control={<Radio />}
                    label="Recognized private institute in Sri Lanka"
                    name="educationInstituteTamil"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteTamil === "Private"}
                  />
                  <FormControlLabel
                    value="Overseas"
                    control={<Radio />}
                    label="Overseas"
                    name="educationInstituteTamil"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.educationInstituteTamil === "Overseas"}
                  />
                  <div
                    className="checkbox-error"
                    style={{
                      fontSize: "12px",
                      marginLeft: "10px",
                      marginTop: "12px",
                    }}
                  >
                    {formik.touched.educationInstituteTamil &&
                      formik.errors.educationInstituteTamil && (
                        <div>{formik.errors.educationInstituteTamil}</div>
                      )}
                  </div>
                </FormGroup>
              </Col>
            </Row>

            {/* index number of English */}

            {formik.values.educationInstituteTamil != "none" ?
            <div>
            <Row style={{ marginTop: "20px" }} spacing>
              <Col md={{ span: 2, offset: 1 }} xs={12}>
              <Typography>Index number:  </Typography>
              <TextField
                  id="indexTamil"
                  name="indexTamil"
                  variant="outlined"
                  fullWidth
                  value={formik.indexTamil} // Set value prop from inputProps
                  onChange={(e) => {
                    const capitalizedValue = e.target.value.trimEnd();
                    formik.setFieldValue("indexTamil", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.indexTamil && Boolean(formik.errors.indexTamil)
                  }
                  helperText={formik.touched.indexTamil && formik.errors.indexTamil}
                />
              </Col>

              <Col md={{ span: 2 }} xs={12}>
              <Typography>Grading :  </Typography>
              <TextField
                id="gradingTamil"
                name="gradingTamil"
                variant="outlined"
                fullWidth
                value={formik.values.gradingTamil}
                onChange={(e) => {
                    const capitalizedValue = e.target.value.toUpperCase().trimEnd();
                    formik.setFieldValue("gradingTamil", capitalizedValue);
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.gradingTamil && Boolean(formik.errors.gradingTamil)}
                helperText={formik.touched.gradingTamil && formik.errors.gradingTamil}
/>

              </Col>

              <Col md={{ span: 2 }} xs={12}>
              <Typography>Year :  </Typography>
              <InputMask
                  mask="9999"
                  maskChar=""
                  value={formik.values.yearOfTamil} // Pass value prop from formik
                  onChange={formik.handleChange} // Pass onChange handler from formik
                  onBlur={formik.handleBlur}
                >
                  {(inputProps) => (
                    <TextField
                      id="yearOfTamil"
                      name="yearOfTamil"
                      variant="outlined"
                      placeholder="YYYY"
                      value={inputProps.value} // Set value prop from inputProps
                      onChange={inputProps.onChange} // Set onChange prop from inputProps
                      onBlur={inputProps.handleBlur}
                      error={
                        formik.touched.yearOfTamil &&
                        Boolean(formik.errors.yearOfTamil)
                      }
                      helperText={
                        formik.touched.yearOfTamil && formik.errors.yearOfTamil
                      }
                    />
                  )}
                </InputMask>
              </Col>

              <Col md={{ span: 2}} xs={12}>
              <Typography>
                  Month: *
                </Typography>

                <Select
                  id="monthOfTamil"
                  name="monthOfTamil"
                  fullWidth
                  value={formik.values.monthOfTamil}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onTouchEnd={() => {}}
                  displayEmpty
                  error={
                    formik.touched.monthOfTamil && Boolean(formik.errors.monthOfTamil)
                  }
                >
                  {monthOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>

                {formik.touched.monthOfTamil && formik.errors.monthOfTamil && (
                  <FormHelperText error>
                    &nbsp;{formik.errors.monthOfTamil}
                  </FormHelperText>
                )}
              </Col>
              
            </Row> 
            </div>: <div></div> }

            </container>
            </Box>


            {/* other qulifications OL */}



            <Box sx={InnerBoxStylesStep3} style={{ marginLeft: "30px", marginTop:"30px" }}>
          <container fluid style={{ width: "100%" }}>
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
                <p>Other Qualifications - Please fill by only those who do not acquire the minimum  (O/L) qualifications</p>
              </Typography>

              <hr style={{ margin: "-10px -18px 25px -18px" }} />
            </div>

            

            {/* Schema */}
            <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Select the most suitable category of your other qualification: </Typography>
              </Col>
            </Row>

          

            {/* other qulification selection AL */}

            <Row>
              <Col xs={12} md={{ span: 6, offset: 1 }}>
              <Select
                  id="otherQulificationsOL"
                  name="otherQulificationsOL"
                  fullWidth
                  value={formik.values.otherQulificationsOL}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onTouchEnd={() => {}}
                  displayEmpty
                  error={
                    formik.touched.otherQulificationsOL && Boolean(formik.errors.otherQulificationsOL)
                  }
                >
                  {otherQulificationOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>

                {formik.touched.otherQulificationsOL && formik.errors.otherQulificationsOL && (
                  <FormHelperText error>
                    &nbsp;{formik.errors.otherQulificationsOL}
                  </FormHelperText>
                )}
              </Col>
            </Row>

            {/* Name of the Institution */}

            <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Name of the Institution:  </Typography>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={{ span: 6, offset: 1 }}>
              <TextField
                  id="InstitutionOL"
                  name="InstitutionOL"
                  variant="outlined"
                 
                  fullWidth
                  value={formik.values.InstitutionOL}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.InstitutionOL && Boolean(formik.errors.InstitutionOL)
                  }
                  helperText={formik.touched.InstitutionOL && formik.errors.InstitutionOL}
                />
              </Col>
            </Row>

            {/* Course Duration */}

            <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Course duration:  </Typography>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={{ span: 6, offset: 1 }}>
              <TextField
                  id="durationOL"
                  name="durationOL"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={formik.values.durationOL}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.durationOL &&
                    Boolean(formik.errors.durationOL)
                  }
                  helperText={
                    formik.touched.durationOL &&
                    formik.errors.durationOL
                  }
                  InputProps={{
                    inputProps: {
                      min: 0,
                    },
                  }}
                />
              </Col>
            </Row>

             {/* Year of completion */}

             <Row style={{ marginTop: "25px" }}>
              <Col xs={5} md={{ span: 10, offset: 1 }}>
                <Typography>Year of completion:  </Typography>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={{ span: 6, offset: 1 }}>
              <InputMask
                  mask="9999"
                  maskChar=""
                  value={formik.values.completionYearOL} // Pass value prop from formik
                  onChange={formik.handleChange} // Pass onChange handler from formik
                  onBlur={formik.handleBlur}
                >
                  {(inputProps) => (
                    <TextField
                      id="completionYearOL"
                      name="completionYearOL"
                      variant="outlined"
                      placeholder="YYYY"

                      fullWidth
                      value={inputProps.completionYearOL} // Set value prop from inputProps
                      onChange={inputProps.onChange} // Set onChange prop from inputProps
                      onBlur={inputProps.handleBlur}
                      error={
                        formik.touched.completionYearOL &&
                        Boolean(formik.errors.completionYearOL)
                      }
                      helperText={
                        formik.touched.completionYearOL && formik.errors.completionYearOL
                      }
                    />
                  )}
                </InputMask>
              </Col>
            </Row>


            <Row style={{ marginTop: "20px" }} spacing>
              <Col md={{ span: 3, offset: 1 }} xs={12}>
              <Typography>Index number:  </Typography>
              <TextField
                  id="otherQulificationIndexOL"
                  name="otherQulificationIndexOL"
                  variant="outlined"
                  fullWidth
                  value={formik.otherQulificationIndexOL} // Set value prop from inputProps
                  onChange={(e) => {
                    const capitalizedValue = e.target.value.trimEnd();
                    formik.setFieldValue("otherQulificationIndexOL", capitalizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.otherQulificationIndexOL && Boolean(formik.errors.otherQulificationIndexOL)
                  }
                  helperText={formik.touched.otherQulificationIndexOL && formik.errors.otherQulificationIndexOL}
                />
              </Col>

              <Col md={{ span: 3, offset: 0 }} xs={12}>
              <Typography>Medium:  </Typography>
              <Select
                  id="otherQulificationMediumOL"
                  name="otherQulificationMediumOL"
                  fullWidth
                  value={formik.values.otherQulificationMediumOL}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onTouchEnd={() => {}}
                  displayEmpty
                  error={formik.touched.otherQulificationMediumOL && Boolean(formik.errors.otherQulificationMediumOL)}
                >
                  {mediumOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>

                {formik.touched.otherQulificationMediumOL && formik.errors.otherQulificationMediumOL && (
                  <FormHelperText error>
                    &nbsp;{formik.errors.otherQulificationMediumOL}
                  </FormHelperText>
                )}
              </Col>
              
            </Row> 
            </container>
            </Box>
            </div>
      </>
    );

}

export default Step3; 