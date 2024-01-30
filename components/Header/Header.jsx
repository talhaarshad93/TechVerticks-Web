import React from "react";
import Image from "next/image";
import img from "../../assets/images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="none" variant="light">
    <div className="container-fluid p-2  flex justify-content-between bg-dager">
     <div className="mt-3 ml-5"> <Navbar.Brand href="#">
        <Image src={img} width={200} height={10} />
      </Navbar.Brand></div>
      <div className="mr-5">
      <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="font-weight" href="/" style={{ marginLeft: 'auto' }}>Home</Nav.Link>
          <Nav.Link className="font-weight" href="/About" style={{ marginLeft: 'auto' }}>About Us</Nav.Link>
          <Nav.Link className="font-weight" href="/Service" style={{ marginLeft: 'auto' }}>Services</Nav.Link>
          <Nav.Link className="font-weight" href="/Solutions" style={{ marginLeft: 'auto' }}>Solutions</Nav.Link>
          <Nav.Link className="font-weight" href="/Portfolio" style={{ marginLeft: 'auto' }}>Portfolio</Nav.Link>
          <Nav.Link className="font-weight" href="/Blog" style={{ marginLeft: 'auto' }}>Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse></div>
    </div>
  </Navbar>
  );
};

export default Header;
