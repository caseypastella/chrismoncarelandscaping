import React from 'react';
import { Link } from 'react-router-dom';
import {LinkContainer} from "react-router-bootstrap";

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'react-bootstrap'; 

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div> 
    <Navbar fixed="top" bg="dark" variant="dark" style={{minWidth: 1000, height: 40}} className= "mb-0">
    
    <LinkContainer to = "/home">
      <Navbar.Brand href="#Home">Chrismon Care Landscaping</Navbar.Brand>
      </LinkContainer>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Landing</Nav.Link>
          </LinkContainer> 
          <LinkContainer to="/account"> 
          <Nav.Link>Account</Nav.Link>
          </LinkContainer>  
          <LinkContainer to="/admin">
          <Nav.Link> Admin</Nav.Link>
          </LinkContainer>
          </Nav>
          <Nav className="mr-sm-2">
          <LinkContainer to="/signout">
          <Nav.Link> <SignOutButton /> </Nav.Link>
          </LinkContainer>
          
          </Nav>
         
      </Navbar.Collapse>
      
    </Navbar>
  </div>
);

const NavigationNonAuth = () => (
  <div> 
    <Navbar fixed="top" bg="dark" variant="dark" style={{ minWidth: 700}}>
    <LinkContainer to="/home">
      <Navbar.Brand href="#Home">Chrismon Care Landscaping</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Landing</Nav.Link> 
          </LinkContainer> 
          <LinkContainer to="/signin"> 
          <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;