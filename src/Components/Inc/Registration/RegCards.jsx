import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import LLB from "./Images/LLB.jpg"
import GEA from "./Images/GEA.avif"

const shadowStyle = {
  maxWidth: 345,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  transition: "box-shadow 0.25s ease-in-out",
  "&:hover": {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.29)",
  },
};

const RegCards = () => {
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
                  <Button size="small">Enroll</Button>
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
            <Link to="/Registration/GeneralApplicant" style={{ textDecoration: "none" }}>
              <Card sx={shadowStyle}>
                <CardMedia
                  sx={{ height: 140 }}
                  image= {GEA}
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
                  <Button size="small">Enroll</Button>
        
                </CardActions>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RegCards;
