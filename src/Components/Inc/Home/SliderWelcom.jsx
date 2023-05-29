import React from "react";
import MiddleNavBar from "../MiddleNavBar";
import MainCaption from "../MainCaption";
import { Box, Grid } from "@mui/material";

const SliderWelcome = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <MiddleNavBar />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <MainCaption />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SliderWelcome;
