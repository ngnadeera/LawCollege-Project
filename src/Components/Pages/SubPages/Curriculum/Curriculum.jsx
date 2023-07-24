import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Header from '../Courses/Header';
import Footer from '../../../Inc/Footer';
import { StylesProvider } from "@material-ui/core/styles";
import { boxStyles } from '../../Registration/GeneralApplicant/Cmp/BoxStyles';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../Courses/Sidebar';
import { Chip } from '@mui/material';

const Curriculum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const description = `
  The Attorneys- at- Law course consists of 3 years  of lectures for those who gain admission through the 
  Entrance Examination.Prescribed courses are required to be taken in the first, second and third years.
 
  Law graduates are entitled to certain exemptions.
  `;

  const firstYearSubjects = [
    { code: 'LW001', name: 'Legal History and Legal Systems of Sri Lanka, including Roman Law', type: 'Compulsory' },
    { code: 'LW002', name: 'Criminal Law', type: 'Compulsory' },
    { code: 'LW003', name: 'Law of Persons including Personal Laws', type: 'Compulsory' },
    { code: 'LW004', name: 'Constitutional law', type: 'Compulsory' },
    { code: 'LW005', name: 'Industrial Law', type: 'Compulsory' },
    { code: 'LW006', name: 'Law of Obligations-I (Contract)', type: 'Compulsory' },
    { code: 'LW007', name: 'Legislative Drafting and Statutory Interpretation', type: 'Optional' },
    { code: 'LW008', name: 'Environmental Law or Conflict of Laws', type: 'Optional' },
  ];
  
  const secondYearSubjects = [
    { code: 'LW011', name: 'Law of Property (Paper I)', type: 'Compulsory' },
    { code: 'LW012', name: 'Law of Property (Paper II)', type: 'Compulsory' },
    { code: 'LW013', name: 'Law of Obligations -II (Delicts)', type: 'Compulsory' },
    { code: 'LW014', name: 'Jurisprudence', type: 'Compulsory' },
    { code: 'LW015', name: 'Law of Trusts', type: 'Compulsory' },
    { code: 'LW016', name: 'Administrative Law', type: 'Optional' },
    { code: 'LW017', name: 'International Law or Revenue Law or Intellectual Property Law or Construction Law and Arbitration Law', type: 'Optional' },
  ];
  
  const thirdYearSubjects = [
    { code: 'LW018', name: 'Commercial Law (Paper I)', type: 'Compulsory' },
    { code: 'LW019', name: 'Commercial Law (Paper II)', type: 'Compulsory' },
    { code: 'LW020', name: 'Civil Procedure and Pleadings (Paper I)', type: 'Compulsory' },
    { code: 'LW021', name: 'Civil Procedure and Pleadings (Paper II)', type: 'Compulsory' },
    { code: 'LW022', name: 'Law of Evidence', type: 'Compulsory' },
    { code: 'LW023', name: 'Criminal Procedure', type: 'Compulsory' },
    { code: 'LW024', name: 'Conveyancing', type: 'Compulsory' },
    { code: 'LW025', name: 'Trust Accounts Book Keeping and Professional Ethics', type: 'Compulsory' },
  ];
  
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <StylesProvider injectFirst>
      <div>
        <Header />
        <Container fluid>
          <Row>
            <Col md={{ span: 3 }}>
              <Sidebar />
            </Col>
            <Col md={{ span: 8 }} style={{ marginTop: "-20px" }}>
              <Box sx={boxStyles}>
                <Container className="d-flex flex-column align-items-start justify-content-end">
                  <Row>
                    <Col>
                      <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '10px' }}>
                        The Attorneys- at- Law Curriculum
                      </h1>
                      <h3 style={{ fontSize: '17px', marginBottom: '20px' }}>
                        The Attorneys- at- Law course consists of 3 years of lectures for those who gain admission through the Entrance Examination.
                      </h3>
                      <p><Chip label="Curriculum" /> </p>
                      <pre style={{ fontSize: '17px', marginTop: '10px' }}>
                        <Typography>
                          {description}
                        </Typography>
                      </pre>
                    </Col>
                  </Row>
                  <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary" centered>
                    <Tab label="Preliminary Year" />
                    <Tab label="Intermediate Year" />
                    <Tab label="Final Year" />
                  </Tabs>
                  {activeTab === 0 && (
                    <Box sx={boxStyles}>
                      <Typography variant="h6">Subjects for the First Year</Typography>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Course Code</TableCell>
                              <TableCell>Course Name</TableCell>
                              <TableCell>Type</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {firstYearSubjects.map((subject) => (
                              <TableRow key={subject.code}>
                                <TableCell>{subject.code}</TableCell>
                                <TableCell>{subject.name}</TableCell>
                                <TableCell>{subject.type}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  )}
                  {activeTab === 1 && (
                    <Box sx={boxStyles}>
                      <Typography variant="h6">Subjects for the Intermediate Year</Typography>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Course Code</TableCell>
                              <TableCell>Course Name</TableCell>
                              <TableCell>Type</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {secondYearSubjects.map((subject) => (
                              <TableRow key={subject.code}>
                                <TableCell>{subject.code}</TableCell>
                                <TableCell>{subject.name}</TableCell>
                                <TableCell>{subject.type}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  )}
                  {activeTab === 2 && (
                    <Box sx={boxStyles}>
                      <Typography variant="h6">Subjects for the Final Year</Typography>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Course Code</TableCell>
                              <TableCell>Course Name</TableCell>
                              <TableCell>Type</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {thirdYearSubjects.map((subject) => (
                              <TableRow key={subject.code}>
                                <TableCell>{subject.code}</TableCell>
                                <TableCell>{subject.name}</TableCell>
                                <TableCell>{subject.type}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      
                    </Box>
                  )}
                  <p><i>please refer exception for any clarification in different student categories</i></p>
                </Container>
              </Box>
              
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </StylesProvider>
  );
};

export default Curriculum;
