import React from 'react';
import { CardImg, Carousel, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (

        // nav bar //
        <div className="mb-5">
               <Navbar bg="primary" variant="dark">
    
    <Nav className="m-auto">
     <NavLink className="navbar-brand" to="/home">Home</NavLink>
     <NavLink className="navbar-brand" to="/editor-choise">Editors-Choise</NavLink>
     <NavLink className="navbar-brand" to="/about">about</NavLink>
     <NavLink className="navbar-brand" to="/services">services</NavLink>
    </Nav>
    
  </Navbar>


  <div className="container text-success">

      {/* Website Header  */}
     <center className="m-5"> <h1>Wellcome to TeachDemy Network </h1></center>
  </div>
                

              
               

        </div>



    );
};

export default Header;