import React from "react";
import GeneralLogIn from "./GeneralLogIn";
import Header from "./Header"
import Footer from "../../../Inc/Footer";

const GeneralStudentLogInPage = () => {
    return (
        <div style={{ backgroundColor: "#F3F3FE" }}>
            <Header name="General Student"/>
            <GeneralLogIn/> 
            <Footer/>
        </div>
    );
}

export default GeneralStudentLogInPage;
