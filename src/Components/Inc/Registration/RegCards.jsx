import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const shodowStyle = {
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
      <Grid
        container
        spacing={5}
        justifyContent="space-between"
        sx={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
            <Link to="./" style={{textDecoration:'none'}}>
          <Card sx={shodowStyle}>
            
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="LLB and State University Applicant"
            />
           
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Link>
        </Grid>


        <Grid item xs={12} sm={6} sx={{ alignItems: "center" }}>
        <Link to="./" style={{textDecoration:'none'}}>
          <Card
           sx={shodowStyle}
          >
            
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="General Applicant"
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Link>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default RegCards;
