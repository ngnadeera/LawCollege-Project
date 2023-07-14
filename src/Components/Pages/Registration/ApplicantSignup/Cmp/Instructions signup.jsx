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
                <p style={{ textAlign: 'justify',    color: "rgba(0, 0, 0, 0.9)",
  }}>
                Students who have received their usernames and passwords through their email accounts can easily log into the system using the provided credentials. However, it is strongly recommended that students change their passwords immediately after the initial login for enhanced security.By accessing the system with the given username and password, students gain entry to the system's features and functionalities. This allows them to utilize various resources, such as course materials, online forums, grades, and other academic tools.                </p>
                 </Typography>

                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Instructions
