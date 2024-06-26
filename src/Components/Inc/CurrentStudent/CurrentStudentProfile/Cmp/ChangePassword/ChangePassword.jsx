import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StylesProvider } from "@material-ui/core";
import Header from "../Header";
import Footer from "../../../../Footer";
import Sidebar from "../Sidebar";
import { Typography } from "@mui/material";
import ChangePasswordForm from "./ChangePasswordForm";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ChangePassword = () => {

  const breadcrumbLinks = [
    { label: 'Home', href: '/' },
    { label: 'Profile', href: '/CurrentStudent/ViewProfile' },
    { label: 'Change Password', href: '/CurrentStudent/ChangePassword' }
  ];

  return (
    <>
      <StylesProvider injectFirst>
        <div>
          <Header />

          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ marginLeft: '340px', marginTop: '10px' }}
          >
            {breadcrumbLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                underline="hover"
                color={index === breadcrumbLinks.length - 1 ? 'text.primary' : 'inherit'}
              >
                {link.label}
              </Link>
            ))}
          </Breadcrumbs>
          <Container fluid >
            <Row>
              <Col md={{ span: 3 }}>
                <Sidebar />
              </Col>
              <Col md={{ span: 7 }}>
              <Container className="d-flex justify-content-center align-items-center" >
                <Row >

              <Col
               
              >
               
                <ChangePasswordForm />
              </Col>
              </Row>
              </Container>
              </Col>
            </Row>
          </Container>

          <Footer />
        </div>
      </StylesProvider>
    </>
  );
};

export default ChangePassword;
