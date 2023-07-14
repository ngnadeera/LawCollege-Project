import React from 'react'
import Header from './Cmp/Header'
import GeneralSignUp from "./Cmp/GeneralSignUp"
import Instrctions from "./Cmp/Instructions signup.jsx"
import Footer from '../../../Inc/Footer'
export const ApplicantSignup = () => {
  return (
    <div style={{ backgroundColor: "#F3F3FE" }}>
        <Header/>
        <Instrctions/>
        <GeneralSignUp/>
        <Footer/>
    </div>
  )
}
