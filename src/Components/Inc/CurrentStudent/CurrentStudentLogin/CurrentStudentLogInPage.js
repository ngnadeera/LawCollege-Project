import React from "react";
import GeneralLogIn from "./GeneralLogIn"
import Header from "./Header"
import Instructions from "./Instructions.jsx"
import Footer from "../../Footer";

const CurrentStudentLogInPage = () => {
    return (
        <div style={{ backgroundColor: "#F3F3FE" }}>
            <Header />
            <Instructions/>
            <GeneralLogIn/> 
            <Footer/>
        </div>
    );
}

export default CurrentStudentLogInPage;
