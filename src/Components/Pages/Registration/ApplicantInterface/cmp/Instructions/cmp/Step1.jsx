import React, { useState } from "react";
import { useEffect } from "react";
import { InnerBoxStyles } from "../../../../GeneralApplicant/Cmp/InnerBoxStyels";
import { useRef } from "react";


import Instruction1 from "../../../../GeneralApplicant/Cmp/BasicInstruction/Instruction1";
import Instruction2 from "../../../../GeneralApplicant/Cmp/BasicInstruction/Instruction2";
import Instruction3 from "../../../../GeneralApplicant/Cmp/BasicInstruction/Instruction3";
import Instruction4 from "../../../../GeneralApplicant/Cmp/BasicInstruction/Instruction4";
import Instruction5 from "../../../../GeneralApplicant/Cmp/BasicInstruction/Instruction5";
import Instruction6 from "../../../../GeneralApplicant/Cmp/BasicInstruction/Instruction6";
import Instruction8 from "../../../../GeneralApplicant/Cmp/BasicInstruction/Instruction7";
import Instruction7 from "../../../../GeneralApplicant/Cmp/BasicInstruction/Instruction8";
import { boxStyles } from "../../../../GeneralApplicant/Cmp/BoxStyles";




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
import { useNavigate } from "react-router-dom";

const Step1 = () => {

   const navigate = useNavigate()

    const handleGoBack = () => {
      navigate("/Applicant_Registration");
    }
    return (
        <>

<Box sx={boxStyles}>
      <FormGroup>
        <div style={{ }}>
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

       

         {/* checkbox2 */}

         <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                

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

            

              {/* checkbox3 */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
               

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

            

              {/*checkbox4*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "10px",
                }}
              >
               
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

            

              {/*checkbox5*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
               

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

              
              {/*checkbox6*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
                

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


              {/*checkbox7*/}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
               
              
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

           

               {/* Reference Number */}

            

              {/* checkbox8 */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "35px",
                }}
              >
              

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
            
              <Button onClick={handleGoBack}>
                Go Back
              </Button>
              
      </FormGroup>
      </Box>
    </>
    )
}

export default Step1;

