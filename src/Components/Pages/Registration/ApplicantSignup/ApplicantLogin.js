import React from 'react'
import GeneralLogin from "./Cmp/GeneralLogIn"
import Instructions from "./Cmp/Instructions.jsx"
import Header from "./Cmp/Header"
import Footer from '../../../Inc/Footer'

export const ApplicantLogin = () => {
  return (
    <div style={{ backgroundColor: "#F3F3FE" }}>
    <Header/>
    <Instructions/>
    <GeneralLogin/>
    <Footer/>
    </div>
  )
}
