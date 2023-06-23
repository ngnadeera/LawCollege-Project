import React, { useState } from "react";
import { InnerBoxStyles } from "../InnerBoxStyels";
import { useRef } from "react";
import Instruction1 from "../BasicInstruction/Instruction1";
import Instruction2 from "../BasicInstruction/Instruction2";
import Instruction3 from "../BasicInstruction/Instruction3";
import Instruction4 from "../BasicInstruction/Instruction4";
import Instruction5 from "../BasicInstruction/Instruction5";
import Instruction6 from "../BasicInstruction/Instruction6";
import Instruction7 from "../BasicInstruction/Instruction7";
import Instruction8 from "../BasicInstruction/Instruction8";

import {
    Checkbox,
    Button,
    TextField,
    Stepper,
    Step,
    StepLabel,
    FormControlLabel,
    FormGroup,
    Typography,
    Box,
    Grid,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormLabel,
    FormHelperText,
    RadioGroup,
    Radio
  } from "@mui/material";

  import InputAdornment from "@mui/material/InputAdornment";

const Step1 = ({formik}) => {

    const [refValue, setRefValue] = useState("");
    const [copyText, setCopyText] = useState("Copy");
    const inputRef = useRef(null);


    const handleCopyClick = () => {
        inputRef.current.select();
        document.execCommand("copy");
        setCopyText("Copied");
      };


    return (
        <>
      <FormGroup>
        <div style={{ width: "100%" }}>
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
              color: "rgba(0, 0, 0, 0.7)",
              marginTop: "10px",
            }}
          >
            Please carefully read the following information and instructions before proceeding to fill out your application form.
          </Typography>
          <hr
            style={{
              height: "1px",
              backgroundColor: "#cacacd",
              margin: "10px 0 ",
            }}
          />
        </div>

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
              <Instruction1 />
            </Typography>
          </Box>
        </div>

        <div className="checkbox-error">
          {formik.touched.checkbox1 && formik.errors.checkbox1 && <div>{formik.errors.checkbox1}</div>}
        </div>


         {/* checkbox2 */}

         <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox2" />}
                  checked={formik.values.checkbox2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox2 && Boolean(formik.errors.checkbox2)
                  }
                  helperText={
                    formik.touched.checkbox2 && formik.errors.checkbox2
                  }
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
                    <Instruction2 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox2 && formik.errors.checkbox2 && (
                  <div>{formik.errors.checkbox2}</div>
                )}
              </div>

              {/* checkbox3 */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox3" />}
                  checked={formik.values.checkbox3}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox3 && Boolean(formik.errors.checkbox3)
                  }
                  helperText={
                    formik.touched.checkbox3 && formik.errors.checkbox3
                  }
                />

                <Box sx={InnerBoxStyles}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: "19px",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginTop: "10px",
                      textAlign: "justify",
                    }}
                  >
                    <Instruction3 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox3 && formik.errors.checkbox3 && (
                  <div>{formik.errors.checkbox3}</div>
                )}
              </div>

              {/*checkbox4*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "10px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox4" />}
                  checked={formik.values.checkbox4}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox4 && Boolean(formik.errors.checkbox4)
                  }
                  helperText={
                    formik.touched.checkbox4 && formik.errors.checkbox4
                  }
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
                    <Instruction4 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox4 && formik.errors.checkbox4 && (
                  <div>{formik.errors.checkbox4}</div>
                )}
              </div>

              {/*checkbox5*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox5" />}
                  checked={formik.values.checkbox5}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox5 && Boolean(formik.errors.checkbox5)
                  }
                  helperText={
                    formik.touched.checkbox5 && formik.errors.checkbox5
                  }
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
                    <Instruction5 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox5 && formik.errors.checkbox5 && (
                  <div>{formik.errors.checkbox5}</div>
                )}
              </div>

              {/*checkbox6*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox6" />}
                  checked={formik.values.checkbox6}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox6 && Boolean(formik.errors.checkbox6)
                  }
                  helperText={
                    formik.touched.checkbox6 && formik.errors.checkbox6
                  }
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
                    <Instruction6 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox6 && formik.errors.checkbox6 && (
                  <div>{formik.errors.checkbox6}</div>
                )}
              </div>

              {/*checkbox7*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox7" />}
                  checked={formik.values.checkbox7}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox7 && Boolean(formik.errors.checkbox7)
                  }
                  helperText={
                    formik.touched.checkbox7 && formik.errors.checkbox7
                  }
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
                    <Instruction7 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox7 && formik.errors.checkbox7 && (
                  <div>{formik.errors.checkbox7}</div>
                )}
              </div>
              

               {/* Reference Number */}

               <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  marginTop: "35px",
                }}
              >
                <Box sx={InnerBoxStyles}>
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
                      <b>How to create Payment Reference Number?</b>
                    </Typography>

                    <hr style={{ margin: "0px -18px 25px -18px" }} />

                    <Grid container spacing={5}>

                      

                      {/* National Identity Card */}

                      <Grid item xs={12} lg={6}>
                        <Typography
                          sx={{
                            ml: "5px",
                            mb: "8px",
                            color: "rgba(0, 0, 0, 0.7)",
                          }}
                        >
                          <b></b>National Identity Card Number: *{" "}
                        </Typography>
                        <TextField
                          name="nid"
                          value={formik.values.nid}
                          onChange={(e) => {
                            formik.handleChange(e);
                            setRefValue(
                              e.target.value.toUpperCase().trimEnd() +
                                " " +
                                formik.values.namei.toUpperCase().trimEnd()
                            );
                          }}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.nid && Boolean(formik.errors.nid)
                          }
                          helperText={formik.touched.nid && formik.errors.nid}
                          fullWidth
                        />
                      </Grid>

                        {/* Name with initials */}
                        <Grid item xs={12} lg={6}>
                        <Typography
                          sx={{
                            ml: "5px",
                            mb: "8px",
                            color: "rgba(0, 0, 0, 0.7)",
                          }}
                        >
                          <b></b>Name with Initials: *{" "}
                        </Typography>
                        <TextField
                          name="namei"
                          value={formik.values.namei.toUpperCase()}
                          onChange={(e) => {
                            formik.handleChange(e);
                            setRefValue(
                              formik.values.nid.toUpperCase().trimEnd() +
                                " " +
                                e.target.value.toUpperCase().trimEnd()
                            );
                          }}
                          onBlur={formik.handleBlur}

                          error={
                            formik.touched.namei && Boolean(formik.errors.namei)
                          }
                          helperText={
                            formik.touched.namei && formik.errors.namei
                          }
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <Typography
                          sx={{
                            ml: "5px",
                            mb: "10px",

                            color: "rgba(0, 0, 0, 0.7)",
                          }}
                        >
                          Reference Number:
                        </Typography>

                        <TextField
                          variant="filled"
                          fullWidth
                          name="ref"
                          value={"GEA " + refValue}
                          onChange={formik.handleChange}
                          helperText="GEA/NIC Number/Name with Initials"
                          InputProps={{
                            readOnly: true,
                            endAdornment: (
                              <InputAdornment position="end">
                                <span
                                  style={{
                                    cursor: "pointer",
                                    userSelect: "none",
                                  }}
                                  onClick={handleCopyClick}
                                >
                                  {copyText}
                                </span>
                              </InputAdornment>
                            ),
                          }}
                          inputRef={inputRef}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </Box>
              </div>

              {/* checkbox8 */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                <FormControlLabel
                  sx={{ mr: "0px" }}
                  control={<Checkbox name="checkbox8" />}
                  checked={formik.values.checkbox8}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.checkbox8 && Boolean(formik.errors.checkbox8)
                  }
                  helperText={
                    formik.touched.checkbox8 && formik.errors.checkbox8
                  }
                />

                <Box sx={InnerBoxStyles}>
                  <Typography
                    style={{
                      fontSize: "19px",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginTop: "10px",
                      textAlign: "justify",
                      lineHeight: "25px",
                    }}
                  >
                    <Instruction8 />
                  </Typography>
                </Box>
              </div>

              <div className="checkbox-error">
                {formik.touched.checkbox8 && formik.errors.checkbox8 && (
                  <div>{formik.errors.checkbox8}</div>
                )}
              </div>

      </FormGroup>
    </>
    )
}

export default Step1;

