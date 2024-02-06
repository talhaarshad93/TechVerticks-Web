import React from "react";
import Image from "next/image";
import img from "../../assets/images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import style from "./Header.module.css";
import classNames from "classnames";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <Navbar collapseOnSelect expand="sm" bg="none" variant="light">
      <div className="container-fluid px-5  flex justify-content-between bg-dager">
        <div className="mt-3 ml-5">
          {" "}
          <Navbar.Brand href="#">
            <Image src={img} width={200} height={30} />
          </Navbar.Brand>
        </div>
        <div className="mr-5 mt-3">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                className={`${style.fontWeight} ${style["nav-link-custom"]} ${
                  router.pathname === "/" ? style.active : ""
                }`}
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={`${style.fontWeight} ${style["nav-link-custom"]} ${
                  router.pathname === "/About" ? style.active : ""
                }`}
                href="/About"
                style={{ marginLeft: "auto" }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                className={classNames(style.fontWeight)}
                href="/ServicePage"
                style={{ marginLeft: "auto" }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                className={classNames(style.fontWeight)}
                href="/Solutions"
                style={{ marginLeft: "auto" }}
              >
                Solutions
              </Nav.Link>
              <Nav.Link
                className={classNames(style.fontWeight)}
                href="/Portfolio"
                style={{ marginLeft: "auto" }}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                className={classNames(style.fontWeight)}
                href="/BlogPage"
                style={{ marginLeft: "auto" }}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className={classNames(style.fontWeight)}
                href="/ContactUs"
                style={{ marginLeft: "auto" }}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
