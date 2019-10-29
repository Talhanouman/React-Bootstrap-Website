import React, { Component } from "react";
import './Header.css'
import { Nav, Navbar, NavItem, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <Navbar className = "NavbarBg"  expand="lg">
        <Container className="p-0">
      
            <Navbar.Brand href="/">Brand link</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            


          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav style={{"text-align":"center"}}>
              <NavLink className="nav-item nav-link " to="/">Home</NavLink>
              <NavLink className="nav-item nav-link" to="about">About</NavLink>
              <NavLink className="nav-item nav-link" to="news">News</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
    );
  }
}

export default Header;
