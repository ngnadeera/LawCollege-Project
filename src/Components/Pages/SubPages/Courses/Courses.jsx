import React from 'react'
import Header from './Header'
import Footer from '../../../Inc/Footer'
import { useEffect } from 'react'
import Sidebar from './Sidebar'
import { boxStyles } from '../../Registration/GeneralApplicant/Cmp/BoxStyles'
import { StylesProvider } from "@material-ui/core/styles";
import { Container } from 'react-bootstrap'
import { Box, Chip } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './law_college.jpg'


const Courses = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, [])
      const Description = `The Sri Lanka Law College plays a crucial role in the legal education system of Sri Lanka. Established under the Incorporated Council of Legal Education Ordinance No. 2 of 1900, the college operates as the sole institution responsible for administering legal education to individuals aspiring to become enrolled in the Bar of Sri Lanka. It is the primary gateway to the legal profession, and successful completion of the courses and examinations conducted by the Law College is a mandatory requirement for admission to practice law in the country.

      While there are other educational institutions in Sri Lanka, such as the University of Colombo, the Open University of Sri Lanka, University of Jaffna, and University of Peradeniya, offering academic courses and degrees in law, the Law College stands apart by providing a comprehensive and specialized curriculum designed specifically for legal practice. The academic institutions mentioned may confer law degrees or academic qualifications, but those seeking to practice law must still go through the Law College's rigorous process to become eligible for admission to the legal profession.
      
      This exclusivity ensures that only qualified individuals, who have undergone the prescribed legal education and training, can become attorneys-at-law in Sri Lanka. The title "Attorney-at-Law" is given to those who have successfully completed the necessary training and are officially recognized to practice law before the courts.
      
      The Incorporated Council of Legal Education sets the rules and standards for legal education, ensuring that aspiring attorneys receive a high-quality and standardized education. The council also oversees the examinations conducted by the Law College, which assess candidates' legal knowledge and practical skills.
      
      Overall, the Sri Lanka Law College holds a critical position in the legal landscape of the country, maintaining the standards of the legal profession and producing competent attorneys-at-law who can serve the nation's legal needs with integrity and expertise.`;
      
      // Split the Description into five paragraphs
      const paragraphs = Description.split('\n');
      const [description1, description2, description3, description4, description5] = paragraphs;


  return (
    <div>
         <StylesProvider injectFirst>
        <Header/>
        <Container fluid>
            <Row>
              <Col md={{ span: 3 }}>
                <Sidebar />
              </Col>
              <Col md={{ span: 8 }} style={{marginTop:"-20px"}}>
                <Box sx={boxStyles}>
                  <Container className="d-flex flex-column align-items-start justify-content-end">
                

                    <Row>
                      <Col>
                      <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '10px' }}>
            Sri Lanka Law College
          </h1>

          <h3 style={{ fontSize: '17px', marginBottom: '20px' }}>
          The Incorporated Council of Legal Education
          </h3>
          <p><Chip label="Introduction" /> </p> 

          <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={image} alt="Sri Lanka Law College" style={{ marginBottom: '10px', width:'100%'}} />
                      </div>
          

          <p style={{ fontSize: '17px', marginTop: "10px", textAlign: "justify" }}>
            {description1}
          </p>
          <p style={{ fontSize: '17px', marginTop: "10px", textAlign: "justify" }}>
            {description2}
          </p>
          <p style={{ fontSize: '17px', marginTop: "10px", textAlign: "justify" }}>
            {description3}
          </p>
          <p style={{ fontSize: '17px', marginTop: "10px", textAlign: "justify" }}>
            {description4}
          </p>
          <p style={{ fontSize: '17px', marginTop: "10px", textAlign: "justify" }}>
            {description5}
          </p>
                
                      </Col>
                    </Row>

                    {/* Change Image Button */}
                    <Row>
                      <Col>
                       
                      </Col>
                    </Row>

                    {/* Upload Button */}
                    <Row style={{ marginTop: "10px" }}>
                      <Col>
                      
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "20px" }}>
                     
                    </Row>

                    <Row style={{ marginTop: "30px", width: "70%" }}>
                      
                      <Col>
                       
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "30px", width: "70%" }}>
                      <Col>
                        
                      </Col>
                      <Col>
                       
                      </Col>
                    </Row>
                    <Row>
                    
                    </Row>
                  </Container>
                </Box>
              </Col>
            </Row>
          </Container>


        <Footer/>
        </StylesProvider>
    </div>
  )
}

export default Courses
