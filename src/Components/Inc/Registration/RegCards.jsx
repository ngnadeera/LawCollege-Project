import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Snackbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import LLB from "./Images/LLB.jpg";
import GEA from "./Images/GEA.avif";
import DialogContentText from '@mui/material/DialogContentText';
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const shadowStyle = {
  height: 320,
  maxWidth: 345,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  transition: "box-shadow 0.25s ease-in-out",
  "&:hover": {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.29)",
  },
};

const RegCards = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [subject1Value, setSubject1Value] = useState(''); // Default value for subject 1
  const [subject2Value, setSubject2Value] = useState(''); // Default value for subject 2
  const [subject3Value, setSubject3Value] = useState(''); // Default value for subject 3

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmitDialog = () => {
    // Validation for subjects
    if (selectedOption === "no") {
      navigate('/Applicant_Registration/Selection/GeneralApplicant');
    } else if (selectedOption === "yes") {
    const isAtLeastTwoCSubjects =
      [subject1Value, subject2Value, subject3Value].filter(
        (subject) => subject === "A" || subject === "B" || subject === "C"
      ).length >= 2;

    const isAtLeastOneSOrAboveSubject =
      [subject1Value, subject2Value, subject3Value].includes("S") ||
      [subject1Value, subject2Value, subject3Value].includes("A");

    const hasFSubject = [subject1Value, subject2Value, subject3Value].includes("F");


    if (isAtLeastTwoCSubjects && isAtLeastOneSOrAboveSubject && !hasFSubject) {
      setOpenDialog(false);
      navigate('/Applicant_Registration/Selection/GeneralApplicant');
    } else {
      const message = "You have not completed the minimum requirements.";
      handleSnackbarOpen(message);
    }
  }
  };

  return (
    <div>
      <Box sx={{ paddingTop: "20px", paddingBottom: "20px", justifyContent: "center" }}>
        <Grid container spacing={5} alignItems="stretch">
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "20px",
              "@media (max-width: 600px)": {
                justifyContent: "center",
              },
            }}
          >
            <Link to="/Registration/LLBApplicant" style={{ textDecoration: "none" }}>
              <Card sx={shadowStyle}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={LLB}
                  title="LLB and State University Applicant"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    LLB and State University
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={handleOpenDialog}>Enroll</Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              "@media (max-width: 600px)": {
                justifyContent: "center",
              },
            }}
          >
            <Card sx={shadowStyle}>
              <CardMedia
                sx={{ height: 140 }}
                image={GEA}
                title="General Applicant"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  General Applicant
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Register as a general applicant for the Law college entrance exam. Fill out the application form and get registered for the entrance exam.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleOpenDialog}>
                  Enroll
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Minimum Requirement Verification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
Before getting registered into the system by making necessary payments, please verify your minimum academic qualifications.
          </DialogContentText>

          <br />
          {selectedOption === '' ? (

            <FormControl component="fieldset">
            <DialogContentText>Do you have minimum AL qualifications ?</DialogContentText>
            <RadioGroup onChange={(event) => setSelectedOption(event.target.value)}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes I have" />
              <FormControlLabel value="no" control={<Radio />} label="No I have other Qualifications" />
            </RadioGroup>
          </FormControl>

          ) : null}
          
          {selectedOption === 'yes' ? (
            <>
              <DialogContentText style={{ marginTop: '20px', marginBottom: '10px' }}>Please Enter your AL qualifications below to verify ?</DialogContentText>
              <FormControl sx={{ width: '400px', marginBottom: '10px' }}>
                <InputLabel>First Subject</InputLabel>
                <Select
                  id="subject1"
                  value={subject1Value}
                  onChange={(event) => setSubject1Value(event.target.value)}
                >
                  <MenuItem value={'A'}>A</MenuItem>
                  <MenuItem value={'B'}>B</MenuItem>
                  <MenuItem value={'C'}>C</MenuItem>
                  <MenuItem value={'S'}>S</MenuItem>
                  <MenuItem value={'F'}>F</MenuItem>
                </Select>
              </FormControl>
              <br />
              <FormControl sx={{ width: '400px', marginBottom: '10px' }}>
                <InputLabel>Second Subject</InputLabel>
                <Select
                  id="subject2"
                  value={subject2Value}
                  onChange={(event) => setSubject2Value(event.target.value)}
                >
                  <MenuItem value={'A'}>A</MenuItem>
                  <MenuItem value={'B'}>B</MenuItem>
                  <MenuItem value={'C'}>C</MenuItem>
                  <MenuItem value={'S'}>S</MenuItem>
                  <MenuItem value={'F'}>F</MenuItem>
                </Select>
              </FormControl>
              <br />
              <FormControl sx={{ width: '400px', marginBottom: '10px' }}>
                <InputLabel>Third Subject</InputLabel>
                <Select
                  id="subject3"
                  value={subject3Value}
                  onChange={(event) => setSubject3Value(event.target.value)}
                >
                  <MenuItem value={'A'}>A</MenuItem>
                  <MenuItem value={'B'}>B</MenuItem>
                  <MenuItem value={'C'}>C</MenuItem>
                  <MenuItem value={'S'}>S</MenuItem>
                  <MenuItem value={'F'}>F</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : null}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitDialog} color="primary">
            Continue
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity="error" elevation={6} variant="filled">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default RegCards;
