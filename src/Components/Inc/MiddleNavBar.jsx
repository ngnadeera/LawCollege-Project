import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import './MiddleNavBar.css'
import { useMediaQuery } from 'react-responsive';
import Home from '../Pages/Home'

const ImageButton = () => {
  return (
    <Link to="/">
      <img src={require('./Logo.png')} alt="Logo" className="img-fluid" style={{ position: "relative", width: "100px" }} />
    </Link>
  );
};

const MiddleNavBar = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1000 });

  if (isSmallScreen) {
    return null; // Render nothing for small screens
  }

  return (
    <div className="nav-container">
      <Nav className="flex-column flex-sm-row justify-content-center" activeKey="/home" variant="dark" style={{ marginTop: '110px', marginLeft: '-50px'}}>
        <span>
          <Nav.Item className='NavItem'>
            <Nav.Link as={Link} className="Nav" to="/home">About</Nav.Link>
          </Nav.Item>
        </span>
        <span>
          <Nav.Item className='NavItem'>
            <Nav.Link as={Link} className="Nav" to="/New_Student_Registration">Admissions</Nav.Link>
          </Nav.Item>
        </span>
        <span>
          <NavDropdown className="custom-nav-dropdown" title="Academics" id="nav-academics" menuVariant="dark">
            <NavDropdown.Item eventKey="link-1">Link 1</NavDropdown.Item>
            <NavDropdown.Item eventKey="link-2">Link 2</NavDropdown.Item>
          </NavDropdown>
        </span>
        
        <span style={{marginTop:"-25px"}}>
          <ImageButton />
        </span>
        <span>
          <NavDropdown className="custom-nav-dropdown" title="Notices" id="nav-notices" menuVariant="dark">
            <NavDropdown.Item eventKey="link-1">Link 1</NavDropdown.Item>
            <NavDropdown.Item eventKey="link-2">Link 2</NavDropdown.Item>
          </NavDropdown>
        </span>
        <span>
          <NavDropdown className="custom-nav-dropdown" title="Pages" id="nav-pages" menuVariant="dark">
            <NavDropdown.Item eventKey="link-1">Link 1</NavDropdown.Item>
            <NavDropdown.Item eventKey="link-2">Link 2</NavDropdown.Item>
          </NavDropdown>
        </span>
        <span>
          <Nav.Item className='NavItem'>
            <Nav.Link as={Link} className="Nav" to="/home">Contacts</Nav.Link>
          </Nav.Item>
        </span>
      </Nav>
    </div>
  );
};

export default MiddleNavBar;
