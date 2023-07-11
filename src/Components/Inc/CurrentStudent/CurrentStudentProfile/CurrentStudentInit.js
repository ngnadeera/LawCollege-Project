import React from 'react';
import Header from './Cmp/Header.jsx';
import Sidebar from './Cmp/Sidebar.jsx';
import Footer from '../../Footer.jsx';
import NavBar from '../../NavBar.jsx';
import { positions } from '@mui/system';
import { Container,Row,Col } from 'react-bootstrap';
import { AuthContext } from '../../../../helpers/AuthContext.js';
import { useContext } from 'react';


export const CurrentStudentInit = () => {

  const { authState } = useContext(AuthContext);

  return (
    <div>
      <Header/> 
      <Container fluid>
        <Row>
          <Col>
        <Sidebar />
        </Col>
        <Col>
        {authState ? <h1>Hello</h1> : null}
        </Col>
        </Row>
        </Container>
      <Footer />
    </div>
  );
};

