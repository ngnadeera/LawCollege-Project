import { Typography } from '@mui/material'
import { color } from '@mui/system'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Instructions = () => {
  return (
    <div>
        <Container style={{marginTop:"30px"}}>
            <Row>
            <Col className="d-flex justify-content-center align-items-center" md={{ span: 6, offset: 3 }} xs={12} >

                <Typography>
                <p style={{ textAlign: 'justify'  }}>
                Please select the relevant box that corresponds to your category. If you are a General Applicant, please note that you will be required to participate in an entrance examination as part of the application process. LLB and State University applicant just have to fill out the application form with relevant information. If you are applying for the LLB (Bachelor of Laws) program or the State University, you will only need to fill out the application form with the relevant information. There is no entrance examination for these specific programs.Regardless of your category, it's crucial to provide accurate and complete information in your application form.If you have any further questions please make sure to contanct Law Collage Srilanka.
                </p>
                 </Typography>

                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Instructions
