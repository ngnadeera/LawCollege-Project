import React from "react";
import NavBar from "../Inc/NavBar";
import Slider from "../Inc/Slider";
import Alumni from "./Alumni";
import CurrentStudent from "./CurrentStudent";
import Staff from "./Staff";
import Unions from "./Unions";
import { Route, Routes } from "react-router-dom";
import MiddleNavBar from "../Inc/MiddleNavBar";
import HomeCmp from "./HomeCmp";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeCmp/>} />
        <Route path="/Alumni" element={<Alumni />} />
        <Route path="/CurrentStudent" element={<CurrentStudent />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/Unions" element={<Unions />} />
      </Routes>
    </div>
  );
};

export default Home;
