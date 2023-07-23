import React from "react";
import Slider from "../Inc/Slider";
import MiddleNavBar from "../Inc/MiddleNavBar";
import MainCaption from "../Inc/MainCaption";
import "./css/HomeCmp.css";
import News from "../Inc/Home/Notices/News";
import Welcome1 from "../Inc/Home/Welcome1";
import Footer from "../Inc/Footer";

const HomeCmp = () => {
  return (
    <div>
      <div className="slider-container">
        <Slider />
        
          <div className="middleNavBar">
          <MiddleNavBar />
          </div>
          <div className="caption-container">
          <MainCaption />
        </div>
        
      </div>
      <div style={{ padding: "30px 0px 50px" }}>
        <Welcome1 />
      </div>
      <div style={{ marginTop: "-40px" }}>
        <News />
      </div >
      <div style={{marginTop:"70px"}}><Footer/></div>
     
    </div>
  );
};

export default HomeCmp;
