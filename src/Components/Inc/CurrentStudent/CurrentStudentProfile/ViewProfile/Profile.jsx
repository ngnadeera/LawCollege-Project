import React from 'react'
import Header from "../Cmp/Header"
import Footer from '../../../Footer'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { StylesProvider } from '@material-ui/core'
import Sidebar from '../Cmp/Sidebar'
import Logout from '../CurrentStudentInit'

const Profile = () => {
  return (
    <>
    <StylesProvider injectFirst>
      <div>
        <Header />
        <Container fluid>
          <Row>
            <Col>
              <Sidebar />
            </Col>
            <Col><Logout/></Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </StylesProvider>
  </>
  )
}

export default Profile;
