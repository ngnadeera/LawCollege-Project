import React from "react";
import { Button } from "@mui/material";

import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../helpers/AuthContext";
import { useContext } from "react";
import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const Logout = () => {
    const { authStateApplicant, setAuthStateApplicant } = useContext(AuthContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
  
    const handleLogout = () => {
      setOpen(true);
    };
  
    const handleClose = (confirm) => {
      setOpen(false);
      if (confirm) {
        localStorage.removeItem('accessTokenApplicant');
        setAuthStateApplicant(false);
        navigate('/New_Student_Registration/login');
      }
    };
  
    return (
      <>
        <Button onClick={handleLogout}>Logout</Button>
        <Dialog open={open} onClose={handleClose} disableBackdropClick disableEscapeKeyDown>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure you want to log out?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="success" onClick={() => handleClose(false)}>
              No
            </Button>
            <Button onClick={() => handleClose(true)}>Yes</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  

  export default Logout;


export const Content = () => {

    const navigate = useNavigate();

    function handleRegistration () {
        navigate('/Applicant_Registration/Selection')
    }
    function handlEditRequest () {
        navigate('/Applicant_Registration/Edit_Request')
    }
  return (
    <div>
      <ButtonGroup>
        <Button variant="contained" onClick={handleRegistration}>Registration</Button>
        <Button variant="contained" onClick={handlEditRequest}>Edit Request</Button>
        <Button variant="contained">Exam Results and Admission</Button>
        <Button variant="contained">Instructions</Button>
      </ButtonGroup>
      <div>
      <Logout/>
      </div>
    </div>
  );
};
