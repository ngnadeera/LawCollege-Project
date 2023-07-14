import React from "react";
import Header from "./Header"
import Footer from "../../../Inc/Footer";
import RegistrationForm from "./Cmp/Form";
import Form from  "./Cmp/Form";


const GeneralSignUpPage = () => {
    return (
        <div style={{ backgroundColor: "#F3F3FE" }}>
            <Header/>
            <Form/>
            <Footer/>
       
        </div>
    );
}

export default GeneralSignUpPage;
