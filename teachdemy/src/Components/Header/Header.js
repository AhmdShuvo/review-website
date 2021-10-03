import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
               <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
     <NavLink className="navbar-brand" to="/home">Home</NavLink>
     <NavLink className="navbar-brand" to="/home">Home</NavLink>
     <NavLink className="navbar-brand" to="/about">about</NavLink>
     <NavLink className="navbar-brand" to="/services">services</NavLink>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;