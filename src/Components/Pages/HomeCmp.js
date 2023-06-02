import React from "react";
import Slider from "../Inc/Slider";
import MiddleNavBar from "../Inc/MiddleNavBar";
import MainCaption from "../Inc/MainCaption";
import "./css/HomeCmp.css";
import News from "../Inc/Home/News";
import Welcome1 from "../Inc/Home/Welcome1";
import Footer from "../Inc/Footer";


const HomeCmp = () => {
  return (
    <>
    <div >
      <div className="slider-container">
        <Slider />
        
        
        <div className="middle-nav-container">
          <MiddleNavBar />
        </div>
      </div>
      
    </div> 
    <di><MainCaption /></di>
   
    <div style={{padding:"90px 0px"}}><Welcome1/></div>
    <div style={{marginTop:"-40px"}}> <News/></div>
    <div><Footer/></div>
    
    </>
  );
};

export default HomeCmp;
