

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

import '../LectureRegistration/form.css'
import { InnerBoxStylesStep3 } from "../../../../../Pages/Registration/GeneralApplicant/Cmp/InnerBoxStyels";
import paymentTypeOptions from "../../../../../Pages/Registration/GeneralApplicant/Cmp/form_data/paymentTypeOptions";
import InputMask from "react-input-mask";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import { border } from "@mui/system";




const PreliminaryExamRegistrationForm = ({formik}) => {

    
    const fee = 6000;

    const medium = [
        { value: 'sinhala', label: 'Sinhala' },
        { value: 'english', label: 'English' },
        { value: 'tamil', label: 'Tamil' },
      ];


      const [selectedCheckbox, setSelectedCheckbox] = useState(null);

      const handleCheckboxChange = (event) => {
        const checkboxName = event.target.name;
    
        // Toggle selection if the same checkbox is clicked again
        setSelectedCheckbox((prevSelected) =>
          prevSelected === checkboxName ? null : checkboxName
        );
    
        formik.handleChange(event);
      };


    return (
      <>

<Container
                                    fluid
                                    style={{ marginTop: "10px" }}
                                  >
    <table style={{ border: '1px  #333', borderCollapse: 'collapse' }}>

                                      <tr>
                                        <td style={{ width: "3%" }}>Select</td>
                                        <td style={{ width: "10%" }}>Code</td>
                                        <td style={{ width: "60%" }}>
                                          Subject
                                        </td>
                                        <td>Type</td>
                                        <td>Medium</td>
                                      </tr>

                                    {/* preliminary checkbox 1 */}

                                      <tr>
                                        <td style={{ textAlign: "center" }}>
                                          <FormControlLabel
                                            sx={{ mr: "0px" }}
                                            control={
                                              <Checkbox name="checkbox1" />
                                            }
                                            checked={formik.values.checkbox1}
                                            onChange={formik.handleChange}
                                            error={
                                              formik.touched.checkbox1 &&
                                              Boolean(
                                                formik.errors.checkbox1
                                              )
                                            }
                                            helperText={
                                              formik.touched.checkbox1 &&
                                              formik.errors.checkbox1
                                            }
                                          />
                                        </td>
                                        <td>LW 101</td>
                                        <td style={{ textAlign: "left", fontSize:'15px' }}>
                                          Criminal Law (English) {" "}
                                        </td>
                                        <td>C</td>
                                        <td>
                                          
                                          {" "}
                                          <Select
                                            id="subject1"
                                            name="subject1"
                                            size='small'
                                            sx={{fontSize:'15px'}}
                                            style={{ width: "100%" }}
                                            value="english"
                                            onChange={formik.handleChange}
                                            displayEmpty
                                            disabled
                                            error={
                                              formik.touched.subject1 &&
                                              Boolean(formik.errors.subject1)
                                            }
                                          >
                                            {medium.map((option) => (
                                              <MenuItem
                                                key={option.value}
                                                value={option.value}
                                              >
                                                {option.label}
                                              </MenuItem>
                                            ))}
                                          </Select>

                                        </td>
                                      </tr>
                                {/* preliminary checkbox 2 */}
                                 <tr>
                                        <td style={{ textAlign: "center" }}>
                                          <FormControlLabel
                                            sx={{ mr: "0px" }}
                                            control={
                                              <Checkbox name="checkbox2" />
                                            }
                                            checked={formik.values.checkbox2}
                                            onChange={formik.handleChange}
                                            error={
                                              formik.touched.checkbox2 &&
                                              Boolean(
                                                formik.errors.checkbox2
                                              )
                                            }
                                            helperText={
                                              formik.touched.checkbox2 &&
                                              formik.errors.checkbox2
                                            }
                                          />
                                        </td>
                                        <td>LW 102</td>
                                        <td style={{ textAlign: "left", fontSize:'15px' }}>
                                        Legal History & Legal Systems (English) {" "}
                                        </td>
                                        <td>C</td>
                                        <td>
                                          
                                          {" "}
                                          <Select
                                            id="subject2"
                                            name="subject2"
                                            size='small'
                                            sx={{fontSize:'15px'}}
                                            style={{ width: "100%" }}
                                            value='english'
                                            onChange={formik.handleChange}
                                            disabled
                                            error={
                                              formik.touched.salutation &&
                                              Boolean(formik.errors.salutation)
                                            }
                                          >
                                            {medium.map((option) => (
                                              <MenuItem
                                                key={option.value}
                                                value={option.value}
                                              >
                                                {option.label}
                                              </MenuItem>
                                            ))}
                                          </Select>

                                        </td>
                                      </tr>

                        {/* preliminary checkbox 3 */}

                                      <tr>
                                        <td style={{ textAlign: "center" }}>
                                          <FormControlLabel
                                            sx={{ mr: "0px" }}
                                            control={
                                              <Checkbox name="checkbox3" />
                                            }
                                            checked={formik.values.checkbox3}
                                            onChange={formik.handleChange}
                                            error={
                                              formik.touched.checkbox3 &&
                                              Boolean(
                                                formik.errors.checkbox3
                                              )
                                            }
                                            helperText={
                                              formik.touched.checkbox3 &&
                                              formik.errors.checkbox3
                                            }
                                          />
                                        </td>
                                        <td>LW 103</td>
                                        <td style={{ textAlign: "left", fontSize:'15px' }}>
                                        Law of Persons{" "}
                                        </td>
                                        <td>C</td>
                                        <td>
                                          
                                          {" "}
                                          <Select
                                            id="subject3"
                                            name="subject3"
                                            size='small'
                                            sx={{fontSize:'15px'}}
                                            style={{ width: "100%" }}
                                            value={formik.values.subject3}
                                            onChange={formik.handleChange}
                                     
                                            error={
                                              formik.touched.salutation &&
                                              Boolean(formik.errors.salutation)
                                            }
                                          >
                                            {medium.map((option) => (
                                              <MenuItem
                                                key={option.value}
                                                value={option.value}
                                              >
                                                {option.label}
                                              </MenuItem>
                                            ))}
                                          </Select>

                                        </td>
                                      </tr>


                                      <tr>
                                        <td style={{ textAlign: "center" }}>
                                          <FormControlLabel
                                            sx={{ mr: "0px" }}
                                            control={
                                              <Checkbox name="checkbox4" />
                                            }
                                            checked={formik.values.checkbox4}
                                            onChange={formik.handleChange}
                                            error={
                                              formik.touched.checkbox4 &&
                                              Boolean(
                                                formik.errors.checkbox4
                                              )
                                            }
                                            helperText={
                                              formik.touched.checkbox4 &&
                                              formik.errors.checkbox4
                                            }
                                          />
                                        </td>
                                        <td>LW 107</td>
                                        <td style={{ textAlign: "left", fontSize:'15px' }}>
                                        Law of Obligations – I (Contract)

                                        </td>
                                        <td>C</td>
                                        <td>
                                          
                                          {" "}
                                          <Select
                                            id="subject4"
                                            name="subject4"
                                            size='small'
                                            sx={{fontSize:'15px'}}
                                            style={{ width: "100%" }}
                                            value={formik.values.subject4}
                                            onChange={formik.handleChange}
                                     
                                            error={
                                              formik.touched.subject4 &&
                                              Boolean(formik.errors.subject4)
                                            }
                                          >
                                            {medium.map((option) => (
                                              <MenuItem
                                                key={option.value}
                                                value={option.value}
                                              >
                                                {option.label}
                                              </MenuItem>
                                            ))}
                                          </Select>

                                        </td>
                                      </tr>

                                      <tr>
                                        <td style={{ textAlign: "center" }}>
                                          <FormControlLabel
                                            sx={{ mr: "0px" }}
                                            control={
                                              <Checkbox name="checkbox5" />
                                            }
                                            checked={formik.values.checkbox5}
                                            onChange={formik.handleChange}
                                            error={
                                              formik.touched.checkbox5 &&
                                              Boolean(
                                                formik.errors.checkbox5
                                              )
                                            }
                                            helperText={
                                              formik.touched.checkbox5 &&
                                              formik.errors.checkbox5
                                            }
                                          />
                                        </td>
                                        <td>LW 108</td>
                                        <td style={{ textAlign: "left", fontSize:'15px' }}>
                                        Industrial Law (English)

                                        </td>
                                        <td>C</td>
                                        <td>
                                          
                                          {" "}
                                          <Select
                                            id="subject5"
                                            name="subject5"
                                            size='small'
                                            sx={{fontSize:'15px'}}
                                            style={{ width: "100%" }}
                                            value='english'
                                            onChange={formik.handleChange}
                                            disabled
                                            error={
                                              formik.touched.subject5 &&
                                              Boolean(formik.errors.subject5)
                                            }
                                          >
                                            {medium.map((option) => (
                                              <MenuItem
                                                key={option.value}
                                                value={option.value}
                                              >
                                                {option.label}
                                              </MenuItem>
                                            ))}
                                          </Select>

                                        </td>
                                      </tr>

                                      <tr>
                                        <td style={{ textAlign: "center" }}>
                                          <FormControlLabel
                                            sx={{ mr: "0px" }}
                                            control={
                                              <Checkbox name="checkbox6" />
                                            }
                                            checked={formik.values.checkbox6}
                                            onChange={formik.handleChange}
                                            error={
                                              formik.touched.checkbox6 &&
                                              Boolean(
                                                formik.errors.checkbox6
                                              )
                                            }
                                            helperText={
                                              formik.touched.checkbox6 &&
                                              formik.errors.checkbox6
                                            }
                                          />
                                        </td>
                                        <td>LW 203</td>
                                        <td style={{ textAlign: "left", fontSize:'15px' }}>
                                        Constitutional Law {" "}
                                        </td>
                                        <td>C</td>
                                        <td>
                                          
                                          {" "}
                                          <Select
                                            id="subject6"
                                            name="subject6"
                                            size='small'
                                            sx={{fontSize:'15px'}}
                                            style={{ width: "100%" }}
                                            value={formik.values.subject6}
                                            onChange={formik.handleChange}
                                     
                                            error={
                                              formik.touched.subject6 &&
                                              Boolean(formik.errors.subject6)
                                            }
                                          >
                                            {medium.map((option) => (
                                              <MenuItem
                                                key={option.value}
                                                value={option.value}
                                              >
                                                {option.label}
                                              </MenuItem>
                                            ))}
                                          </Select>

                                        </td>
                                      </tr>


                                      <tr>
                                        <td style={{ textAlign: "center" }}>
                                          <FormControlLabel
                                            sx={{ mr: "0px" }}
                                            control={
                                              <Checkbox name="checkbox7" />
                                            }
                                            checked={formik.values.checkbox7}
                                            onChange={formik.handleChange}
                                            error={
                                              formik.touched.checkbox7 &&
                                              Boolean(
                                                formik.errors.checkbox7
                                              )
                                            }
                                            helperText={
                                              formik.touched.checkbox7 &&
                                              formik.errors.checkbox7
                                            }
                                          />
                                        </td>
                                        <td>LW 106</td>
                                        <td style={{ textAlign: "left", fontSize:'15px' }}>
                                        Legislative Drafting and Statutory
                                        Interpretation
                                        {" "}
                                        </td>
                                        <td>C</td>
                                        <td>
                                          
                                          {" "}
                                          <Select
                                            id="subject7"
                                            name="subject7"
                                            size='small'
                                            sx={{fontSize:'15px'}}
                                            style={{ width: "100%" }}
                                            value={formik.values.subject7}
                                            onChange={formik.handleChange}
                                     
                                            error={
                                              formik.touched.subject7 &&
                                              Boolean(formik.errors.subject7)
                                            }
                                          >
                                            {medium.map((option) => (
                                              <MenuItem
                                                key={option.value}
                                                value={option.value}
                                              >
                                                {option.label}
                                              </MenuItem>
                                            ))}
                                          </Select>

                                        </td>
                                      </tr>


                                      <tr>
                                        <td style={{ textAlign: "center" }}>
                                          <FormControlLabel
                                            sx={{ mr: "0px" }}
                                            control={
                                              <Checkbox name="checkbox8" />
                                            }
                                            checked={formik.values.checkbox8}
                                            onChange={formik.handleChange}
                                            error={
                                              formik.touched.checkbox8 &&
                                              Boolean(
                                                formik.errors.checkbox8
                                              )
                                            }
                                            helperText={
                                              formik.touched.checkbox8 &&
                                              formik.errors.checkbox8
                                            }
                                          />
                                        </td>
                                        <td>LW 106</td>
                                        <td style={{ textAlign: "left", fontSize:'15px' }}>
                                        Legislative Drafting and Statutory
                                        Interpretation
                                        {" "}
                                        </td>
                                        <td>C</td>
                                        <td>
                                          
                                          {" "}
                                          <Select
                                            id="subject8"
                                            name="subject8"
                                            size='small'
                                            sx={{fontSize:'15px'}}
                                            style={{ width: "100%" }}
                                            value={formik.values.subject8}
                                            onChange={formik.handleChange}
                                     
                                            error={
                                              formik.touched.subject8 &&
                                              Boolean(formik.errors.subject8)
                                            }
                                          >
                                            {medium.map((option) => (
                                              <MenuItem
                                                key={option.value}
                                                value={option.value}
                                              >
                                                {option.label}
                                              </MenuItem>
                                            ))}
                                          </Select>

                                        </td>
                                      </tr>

                                      <td colSpan={5} style={{borderLeft:'none',borderRight:'none'}}>Please select only one from below optional subjects</td>


                                      <tr>
                                        <td style={{ textAlign: "center" }}>
                                          <FormControlLabel
                                            sx={{ mr: "0px" }}
                                            control={
                                              <Checkbox name="checkbox9" />
                                            }
                                            checked={formik.values.checkbox9}
                                            onChange={handleCheckboxChange}
                                            disabled={selectedCheckbox === "checkbox10"}
                                            error={
                                              formik.touched.checkbox9 &&
                                              Boolean(
                                                formik.errors.checkbox9
                                              )
                                            }
                                            helperText={
                                              formik.touched.checkbox9 &&
                                              formik.errors.checkbox9
                                            }
                                          />
                                        </td>
                                        <td>LW 210</td>
                                        <td style={{ textAlign: "left", fontSize:'15px' }}>
                                        Environmental Law
                                        {" "}
                                        </td>
                                        <td>C</td>
                                        <td>
                                          
                                          {" "}
                                          <Select
                                            id="subject9"
                                            name="subject9"
                                            size='small'
                                            sx={{fontSize:'15px'}}
                                            style={{ width: "100%" }}
                                            value={formik.values.subject9}
                                            onChange={formik.handleChange}
                                     
                                            error={
                                              formik.touched.subject9 &&
                                              Boolean(formik.errors.subject9)
                                            }
                                          >
                                            {medium.map((option) => (
                                              <MenuItem
                                                key={option.value}
                                                value={option.value}
                                              >
                                                {option.label}
                                              </MenuItem>
                                            ))}
                                          </Select>

                                        </td>
                                      </tr>




                                      <tr>
                                        <td style={{ textAlign: "center" }}>
                                          <FormControlLabel
                                            sx={{ mr: "0px" }}
                                            control={
                                              <Checkbox name="checkbox10" />
                                            }
                                            checked={formik.values.checkbox10}
                                            onChange={handleCheckboxChange}
                                            disabled={selectedCheckbox === "checkbox9"}
                                            error={
                                              formik.touched.checkbox10 &&
                                              Boolean(
                                                formik.errors.checkbox10
                                              )
                                            }
                                            helperText={
                                              formik.touched.checkbox10 &&
                                              formik.errors.checkbox10
                                            }
                                          />
                                        </td>
                                        <td>LW 109</td>
                                        <td style={{ textAlign: "left", fontSize:'15px' }}>
                                        Conflict of Laws

                                        {" "}
                                        </td>
                                        <td>C</td>
                                        <td>
                                          
                                          {" "}
                                          <Select
                                            id="subject10"
                                            name="subject10"
                                            size='small'
                                            sx={{fontSize:'15px'}}
                                            style={{ width: "100%" }}
                                            value={formik.values.subject10}
                                            onChange={formik.handleChange}
                                     
                                            error={
                                              formik.touched.subject10 &&
                                              Boolean(formik.errors.subject9)
                                            }
                                          >
                                            {medium.map((option) => (
                                              <MenuItem
                                                key={option.value}
                                                value={option.value}
                                              >
                                                {option.label}
                                              </MenuItem>
                                            ))}
                                          </Select>

                                        </td>
                                      </tr>




                                    </table>
                                  </Container>

       
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

export default PreliminaryExamRegistrationForm
