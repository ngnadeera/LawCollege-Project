import React from "react";
import Home from "./Components/Pages/Home";
import { BrowserRouter } from "react-router-dom";
import 'typeface-montserrat';
import { CssBaseline } from "@mui/material";



const App = () => {
  return (
    <BrowserRouter>
    <CssBaseline>
      <div>
        <Home />
      </div>
      </CssBaseline>
    </BrowserRouter>
  );
};

export default App;
