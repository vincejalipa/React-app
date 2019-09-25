import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Navigation extends Component {
    state = {  }
    render() { 
        return (
            <Navbar bg="light" expand="lg" position="absolute" sticky="top" >
            <Navbar.Brand href="#home">Sample App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Settings" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">My Followers</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Other Settings</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <Button variant="outline-success">Search</Button>
                <Nav.Link href="#link">Login</Nav.Link>
                <Nav.Link href="#link">SignUp</Nav.Link>
              </Form>
            </Navbar.Collapse>
          </Navbar>
         );
    }
}
 
export default Navigation;