import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
} from "@mui/material";
import Registration1 from "../../Inc/Registration/Registration1";
import Footer from "../../Inc/Footer";
import RegCards from "../../Inc/Registration/RegCards";
import { Container } from "@mui/system";
import Instructions from "../../Inc/Registration/Instructions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegSelction = () => {
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
        if (userExists) {
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
      <Stack gap="5">
        <Registration1 />
        <Instructions />
        <RegCards />
        <Footer />
      </Stack>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle color="error">You have already been registered.</DialogTitle>
        <DialogContent>
          <p>You have already been registered, you are unable to submit another application. If you wish to modify your previously submitted application form, please make an edit request.</p>
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={handleDialogClose}>Understood</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RegSelction;
