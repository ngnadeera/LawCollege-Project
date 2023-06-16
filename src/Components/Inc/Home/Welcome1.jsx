import React from 'react';
import { MDBTypography } from 'mdb-react-ui-kit';
import sign from "./sign.png";
import { fontWeight } from '@mui/system';

export default function Welcome1() {
  return (
    <figure className='text-center mb-0'>
      <MDBTypography blockquote>
        <p style={{fontFamily:'Lora', fontSize:'42px', fontWeight:'bold'}}>Welcome</p>
      </MDBTypography>
      <MDBTypography blockquote>
        <p style={{fontFamily:'Lora', fontSize:'20px', paddingTop:'10px', fontWeight:'normal'}}>"Welcome to Law Collage Srilanka, a prestigious institution dedicated to fostering excellence in legal education. <br/>
     Our college stands as a beacon of knowledge, integrity, and professional growth, <br/> preparing future legal professionals to uphold justice and contribute to society."</p>
      </MDBTypography>
      <MDBTypography blockquote>
        <p style={{paddingTop:"15px"}}> <img src={sign} width="10%" alt="Sign" /> </p>
      </MDBTypography>
      <figcaption className='blockquote-footer mb-0' style={{paddingTop:"15px"}}>
        Principle of Law Collage Srilanka
      </figcaption>
    </figure>
  );
} 