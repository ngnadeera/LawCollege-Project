import React from "react";
import Home from "./Components/Pages/Home";
import { BrowserRouter } from "react-router-dom";
import 'typeface-montserrat';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Home />
      </div>
    </BrowserRouter>
  );
};

export default App;
