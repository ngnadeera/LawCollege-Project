import React from "react";
import Header from "./Cmp/Header.jsx";
import Sidebar from "./Cmp/Sidebar.jsx";
import Footer from "../../Footer.jsx";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../../../../helpers/AuthContext.js";
import { useContext } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

const Logout = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setOpen(true);
  };

  const handleClose = (confirm) => {
    setOpen(false);
    if (confirm) {
      localStorage.removeItem("accessToken");
      setAuthState(false);
      navigate("/CurrentStudent");
    }
  };

  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={() => handleClose(false)}>
            No
          </Button>
          <Button onClick={() => handleClose(true)}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Logout;

export const CurrentStudentInit = () => {
  const { authState } = useContext(AuthContext);

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
              <Col>{authState ? <Logout /> : null}</Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </StylesProvider>
    </>
  );
};
