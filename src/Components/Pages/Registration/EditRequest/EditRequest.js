import React, { useEffect, useState } from "react";
import Header from './Cmp/Header'
import Footer from '../../../Inc/Footer'
import EditRequestForm from './Cmp/EditRequestForm/EditRequestForm'

import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
} from "@mui/material";


export const EditRequest = () => {

  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/GEA_personal_details",
          {
            headers: {
              accessTokenApplicant: localStorage.getItem(
                "accessTokenApplicant"
              ),
            },
          }
        );

        const users = response.data;
        const userExists = users.length > 0;
        if (!userExists) {
          setDialogOpen(true);
        }
      } catch (error) {
        console.error("Error checking user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleDialogClose = () => {
    setDialogOpen(false);
    navigate("/Applicant_Registration");
  };


  return (
    <div style={{ backgroundColor: "#F3F3FE" }}>
        <Header/>
        <EditRequestForm/>
        <Footer/>

        <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle color="error">Please get registered before submitting an Edit Request</DialogTitle>
        <DialogContent>
          <p>Please ensure that you have completed the registration process, Once you have successfully registered, you will gain access to the edit request feature.</p>
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={handleDialogClose}>Understood</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}
