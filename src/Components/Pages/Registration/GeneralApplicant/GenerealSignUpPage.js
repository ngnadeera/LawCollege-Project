import React from "react";
import GeneralSignUp from './GeneralSignUp'
import Header from "./Header"
import Footer from "../../../Inc/Footer";

const GeneralSignUpPage = () => {
    return (
        <div style={{ backgroundColor: "#F3F3FE" }}>
            <Header/>
            <GeneralSignUp/> 
            <Footer/>
        </div>
    );
}

export default GeneralSignUpPage;
