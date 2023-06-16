import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import Logo from "../Inc/Logo.png";
import { width } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";

export default function footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
       
        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  placeholder="Email address"
                  className="mb-4"
                />
              </MDBCol>

             
              <MDBCol size="auto">
                <Button
                  variant="outlined"
                  sx={{ color: "white", outlineColor: "whit" }}
                >
                  Subscribe
                </Button>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol className="md-5 xs-6">
              <img
                src={Logo}
                alt="logo"
                style={{ width: "100px", marginTop: "2%" }}
              />
            </MDBCol>
            <p className="mb-4 mt-3" style={{ color: "#ffffffe1" }}>
              <qoute>Sri Lanka Law College</qoute>
            </p>
            <p style={{ color: "#ffffffa9" }}>
              Sri Lanka Law College (SLLC), established in 1874, is the premier
              legal institution in Sri Lanka, providing the only path to
              becoming an Attorney-at-Law, with highly qualified faculty, modern
              facilities, and practical training for successful legal careers.
            </p>
          </MDBRow>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol
              lg="4"
              md="12"
              className="mb-4 mb-md-0 d-flex flex-column align-items-center"
            >
              <h5 className="text-uppercase mt-4 mb-3" style={{marginLeft:'-130px'}}>Contact Us</h5>
              <ul className="list-unstyled mb-0 d-flex flex-column align-items-start ">
                <li className="d-flex align-items-center mb-2">
                  <FaxIcon sx={{ marginRight: "8px" }} />
                  <span style={{ color: "#ffffffa9" }}>
                    Fax: +94 41 2255 565
                  </span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <LocalPhoneIcon sx={{ marginRight: "8px" }} />
                  <span style={{ color: "#ffffffa9" }}>
                    Phone: +94 41 2255 565
                  </span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <EmailIcon sx={{ marginRight: "8px" }} />
                  <span style={{ color: "#ffffffa9" }}>
                    Email: example@example.com
                  </span>
                </li>
              </ul>

              <continer fluid style={{ marginLeft: "-160px" }}>
                <row>
                  <column style={{ marginRight: "5px" }}>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <FacebookIcon sx={{ fontSize: "30px" }} />
                    </a>
                  </column>

                  <column style={{ marginRight: "5px" }}>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <TwitterIcon sx={{ fontSize: "30px" }} />
                    </a>
                  </column>
                  <column>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <LinkedInIcon sx={{ fontSize: "30px" }} />
                    </a>
                  </column>
                </row>
              </continer>
            </MDBCol>

            <MDBCol
              lg="4"
              md="6"
              className="mb-4 mb-md-0 d-flex flex-column align-items-center d-xs-none"
            >
              <span >
                <h5 className="text-uppercase mt-4 mb-3">about Us</h5>
                <ul className="list-unstyled mb-0 d-flex flex-column align-items-start">
                  <li className="d-flex align-items-center mb-2">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "#ffffffa9" }}
                    >
                      About
                    </a>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "#ffffffa9" }}
                    >
                      Staff
                    </a>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "#ffffffa9" }}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </span>
            </MDBCol>

            <MDBCol
              lg="4"
              md="6"
              className="mb-4 mb-md-0 d-flex flex-column align-items-center"
            >
              <span >
                <h5 className="text-uppercase mt-4 mb-3">Navigation</h5>
                <ul className="list-unstyled mb-0 d-flex flex-column align-items-start">
                  <li className="d-flex align-items-center mb-2">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "#ffffffa9" }}
                    >
                      About
                    </a>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "#ffffffa9" }}
                    >
                      Staff
                    </a>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <a
                      href="#!"
                      style={{ textDecoration: "none", color: "#ffffffa9" }}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </span>
            </MDBCol>

           
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 202 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
