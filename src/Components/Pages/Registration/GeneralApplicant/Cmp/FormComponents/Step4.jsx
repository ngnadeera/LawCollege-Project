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




import "../styles/form.css";

import { InnerBoxStyles } from "../InnerBoxStyels";
import { InnerBoxStylesStep3 } from "../InnerBoxStyels";

import paymentTypeOptions from "../form_data/paymentTypeOptions";

import InputMask from "react-input-mask";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

const Step4 = ({ formik }) => {
    const fee = 6000;
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
          To the best of your knowledge, please ensure that you accurately fill
          out the following document with the most reliable and precise
          information available.
        </Typography>
        <hr
          style={{
            height: "1px",
            backgroundColor: "#cacacd",
            width: "100%",
            margin: "10px 0px 20px 0px",
          }}
        />
      </div>

      <Box sx={InnerBoxStylesStep3} style={{ marginLeft: "30px" }}>
        <Container fluid style={{ width: "100%" }}>
          <Row style={{ marginTop: "25px" }}>
            <Col xs={5} md={{ span: 10, offset: 1 }}>
              <Typography>
                Have you been convicted by any offense by any Court of Law? *
              </Typography>
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 3, offset: 4 }}>
              <FormGroup row>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="convicted"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.convicted === "yes"}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="convicted"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.convicted === "no"}
                  />
                </div>
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

          {formik.values.convicted === "yes" ? (
            <div>
              <Row style={{ marginTop: "25px" }}>
                <Col xs={5} md={{ span: 10, offset: 1 }}>
                  <Typography>
                    State the <b>date of conviction</b>,{" "}
                    <b>name of the Court</b>, <b>Case Number</b>, particular's{" "}
                    <b>offense and punishment:</b>
                  </Typography>
                </Col>
              </Row>

              <Row>
                <Col
                  xs={12}
                  md={{ span: 6, offset: 1 }}
                  style={{ marginTop: "10px" }}
                >
                  <TextField
                    id="convictedDescription"
                    name="convictedDescription"
                    variant="outlined"
                    multiline
                    rows={5}
                    fullWidth
                    value={formik.values.convictedDescription}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.convictedDescription &&
                      Boolean(formik.errors.convictedDescription)
                    }
                    helperText={
                      formik.touched.convictedDescription &&
                      formik.errors.convictedDescription
                    }
                  />
                </Col>
              </Row>
            </div>
          ) : (
            <div></div>
          )}

          {/* fine */}

          <Row style={{ marginTop: "25px" }}>
            <Col xs={5} md={{ span: 10, offset: 1 }}>
              <Typography>
                Have you been convicted of any fine by any Court of Law? *{" "}
              </Typography>
            </Col>
          </Row>

          {/* fine description */}

          <Row>
            <Col md={{ span: 3, offset: 4 }}>
              <FormGroup row>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="convictedFine"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.convictedFine === "yes"}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="convictedFine"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.convictedFine === "no"}
                  />
                </div>
                <div
                  className="checkbox-error"
                  style={{
                    fontSize: "12px",
                    marginLeft: "10px",
                    marginTop: "12px",
                  }}
                >
                  {formik.touched.convictedFine &&
                    formik.errors.convictedFine && (
                      <div>{formik.errors.convictedFine}</div>
                    )}
                </div>
              </FormGroup>
            </Col>
          </Row>

          {formik.values.convictedFine === "yes" ? (
            <div>
              <Row style={{ marginTop: "25px" }}>
                <Col xs={5} md={{ span: 10, offset: 1 }}>
                  <Typography>
                    Have you been ordered by a Court of Law to pay any sum of
                    money by way of fine or otherwise? if so give particulars:
                  </Typography>
                </Col>
              </Row>

              <Row>
                <Col
                  xs={12}
                  md={{ span: 6, offset: 1 }}
                  style={{ marginTop: "10px" }}
                >
                  <TextField
                    id="convictedFineDescription"
                    name="convictedFineDescription"
                    variant="outlined"
                    multiline
                    rows={5}
                    fullWidth
                    value={formik.values.convictedFineDescription}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.convictedFineDescription &&
                      Boolean(formik.errors.convictedFineDescription)
                    }
                    helperText={
                      formik.touched.convictedFineDescription &&
                      formik.errors.convictedFineDescription
                    }
                  />
                </Col>
              </Row>
            </div>
          ) : (
            <div></div>
          )}

          {/* previous sits */}

          <Row style={{ marginTop: "25px" }}>
            <Col xs={5} md={{ span: 10, offset: 1 }}>
              <Typography>
                Have tou previously sat for the Sri Lanka Law College Entrance
                Examination? *
              </Typography>
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 3, offset: 4 }}>
              <FormGroup row>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    name="previousSits"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.previousSits === "yes"}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    name="previousSits"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.previousSits === "no"}
                  />
                </div>
                <div
                  className="checkbox-error"
                  style={{
                    fontSize: "12px",
                    marginLeft: "10px",
                    marginTop: "12px",
                  }}
                >
                  {formik.touched.previousSits &&
                    formik.errors.previousSits && (
                      <div>{formik.errors.previousSits}</div>
                    )}
                </div>
              </FormGroup>
            </Col>
          </Row>

          {/* previous subjects  */}

          {formik.values.previousSits === "yes" ? (
            <div>
              <Row style={{ marginTop: "20px" }} spacing>
                <Col md={{ span: 3, offset: 1 }} xs={12}>
                  <InputMask
                    mask="9999"
                    maskChar=""
                    value={formik.values.yearOfPreviousSits} // Pass value prop from formik
                    onChange={formik.handleChange} // Pass onChange handler from formik
                    onBlur={formik.handleBlur}
                  >
                    {(inputProps) => (
                      <TextField
                        id="yearOfPreviousSits"
                        name="yearOfPreviousSits"
                        variant="outlined"
                        label="Year"
                        fullWidth
                        placeholder="YYYY"
                        value={inputProps.value} // Set value prop from inputProps
                        onChange={inputProps.onChange} // Set onChange prop from inputProps
                        onBlur={inputProps.handleBlur}
                        error={
                          formik.touched.yearOfPreviousSits &&
                          Boolean(formik.errors.yearOfPreviousSits)
                        }
                        helperText={
                          formik.touched.yearOfPreviousSits &&
                          formik.errors.yearOfPreviousSits
                        }
                      />
                    )}
                  </InputMask>
                </Col>

                <Col md={{ span: 3, offset: 0 }} xs={12}>
                  <TextField
                    id="indexOfPreviouSits"
                    name="indexOfPreviouSits"
                    label="Index Number"
                    variant="outlined"
                    fullWidth
                    value={formik.values.indexOfPreviouSits} // Set value prop from inputProps
                    onChange={(e) => {
                      const capitalizedValue = e.target.value.trimEnd();
                      formik.setFieldValue(
                        "indexOfPreviouSits",
                        capitalizedValue
                      );
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.indexOfPreviouSits &&
                      Boolean(formik.errors.indexOfPreviouSits)
                    }
                    helperText={
                      formik.touched.indexOfPreviouSits &&
                      formik.errors.indexOfPreviouSits
                    }
                  />
                </Col>
                <Col md={{ span: 3, offset: 0 }} xs={12}>
                  <TextField
                    id="marksPreviousSits"
                    name="marksPreviousSits"
                    variant="outlined"
                    type="number"
                    label="Marks obtained"
                    fullWidth
                    value={formik.values.marksPreviousSits}
                    onChange={(e) => {
                      const capitalizedValue = e.target.value
                        .toUpperCase()
                        .trimEnd();
                      formik.setFieldValue(
                        "marksPreviousSits",
                        capitalizedValue
                      );
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.marksPreviousSits &&
                      Boolean(formik.errors.marksPreviousSits)
                    }
                    helperText={
                      formik.touched.marksPreviousSits &&
                      formik.errors.marksPreviousSits
                    }
                  />
                </Col>
              </Row>

              {/* previous sit 2 */}

              <Row style={{ marginTop: "20px" }} spacing>
                <Col md={{ span: 3, offset: 1 }} xs={12}>
                  <InputMask
                    mask="9999"
                    maskChar=""
                    value={formik.values.yearOfPreviousSits2} // Pass value prop from formik
                    onChange={formik.handleChange} // Pass onChange handler from formik
                    onBlur={formik.handleBlur}
                  >
                    {(inputProps) => (
                      <TextField
                        id="yearOfPreviousSits2"
                        name="yearOfPreviousSits2"
                        variant="outlined"
                        label="Year"
                        fullWidth
                        placeholder="YYYY"
                        value={inputProps.value} // Set value prop from inputProps
                        onChange={inputProps.onChange} // Set onChange prop from inputProps
                        onBlur={inputProps.handleBlur}
                        error={
                          formik.touched.yearOfPreviousSits2 &&
                          Boolean(formik.errors.yearOfPreviousSits2)
                        }
                        helperText={
                          formik.touched.yearOfPreviousSits2 &&
                          formik.errors.yearOfPreviousSits2
                        }
                      />
                    )}
                  </InputMask>
                </Col>

                <Col md={{ span: 3, offset: 0 }} xs={12}>
                  <TextField
                    id="indexOfPreviouSits2"
                    name="indexOfPreviouSits2"
                    label="Index Number"
                    variant="outlined"
                    fullWidth
                    value={formik.indexOfPreviouSits2} // Set value prop from inputProps
                    onChange={(e) => {
                      const capitalizedValue = e.target.value.trimEnd();
                      formik.setFieldValue(
                        "indexOfPreviouSits2",
                        capitalizedValue
                      );
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.indexOfPreviouSits2 &&
                      Boolean(formik.errors.indexOfPreviouSits2)
                    }
                    helperText={
                      formik.touched.indexOfPreviouSits2 &&
                      formik.errors.indexOfPreviouSits2
                    }
                  />
                </Col>
                <Col md={{ span: 3, offset: 0 }} xs={12}>
                  <TextField
                    id="marksPreviousSits2"
                    name="marksPreviousSits2"
                    variant="outlined"
                    type="number"
                    label="Marks obtained"
                    fullWidth
                    value={formik.values.marksPreviousSits2}
                    onChange={(e) => {
                      const capitalizedValue = e.target.value
                        .toUpperCase()
                        .trimEnd();
                      formik.setFieldValue(
                        "marksPreviousSits2",
                        capitalizedValue
                      );
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.marksPreviousSits2 &&
                      Boolean(formik.errors.marksPreviousSits2)
                    }
                    helperText={
                      formik.touched.marksPreviousSits2 &&
                      formik.errors.marksPreviousSits2
                    }
                  />
                </Col>
              </Row>
            </div>
          ) : (
            <div></div>
          )}
        </Container>
      </Box>

      <Box
        sx={InnerBoxStylesStep3}
        style={{ marginLeft: "30px", marginTop: "30px" }}
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
    </>
  );
};
export default Step4;
