import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../assets/images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import style from './Header.module.css'
import classNames from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";


const Header = () => {
  const router = useRouter()
  const [menuOpen, setmenuOpen]=useState(false)
  useEffect(() => {
    // Close the menu when the route changes
    setmenuOpen(false);
  }, [router.pathname]);
  return (
    <Navbar collapseOnSelect expand="sm" bg="none" variant="light">
    <div className="container-fluid px-5  flex justify-content-between bg-dager">
     <div className="mt-3 ml-5"> <Navbar.Brand href="#">
      </Navbar.Brand></div>
      {/* <div className="mr-5 mt-3">
      <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className={classNames(style.fontWeight)} href="/ServicePagesDetails" style={{ marginLeft: 'auto' }}>Home</Nav.Link>
          <Nav.Link className={classNames(style.fontWeight)} href="/About" style={{ marginLeft: 'auto' }}>About Us</Nav.Link>
          <Nav.Link className={classNames(style.fontWeight)} href="/ServicePage" style={{ marginLeft: 'auto' }}>Services</Nav.Link>
          <Nav.Link className={classNames(style.fontWeight)} href="/Solutions" style={{ marginLeft: 'auto' }}>Solutions</Nav.Link>
          <Nav.Link className={classNames(style.fontWeight)} href="/Portfolio" style={{ marginLeft: 'auto' }}>Portfolio</Nav.Link>
          <Nav.Link className={classNames(style.fontWeight)} href="/BlogPage" style={{ marginLeft: 'auto' }}>Blog</Nav.Link>
          <Nav.Link className={classNames(style.fontWeight)} href="/Blog" style={{ marginLeft: 'auto' }}>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse></div> */}
      <div className={style.logo}>
      <Image src={img} width={200} height={30} />

      </div>
      <div className={style.navbar}>

          <nav>
            <div className={style.menu} onClick={()=>{
              setmenuOpen(!menuOpen);
            }}>
          <span></span>
          <span></span>
          <span></span>
            </div>
        <ul className={menuOpen ? style.open :""}>
          <Link href={"/"} ><li
                  className={
                    router.pathname === "/" ? style.active : ""}>Home</li></Link>
          <Link href={"/About"}><li
                  className={
                    router.pathname === "/About" ? style.active : ""}>About Us</li></Link>
          <Link href={"/ServicePage"}><li
                  className={
                    router.pathname === "/ServicePage" ? style.active : ""}>Services</li></Link>
          <Link href={"/Solutions"}><li
                  className={
                    router.pathname === "/Solutions" ? style.active : ""}>Solutions</li></Link>
          <Link href={"/Portfolio"}><li
                  className={
                    router.pathname === "/Portfolio" ? style.active : ""}>Portfolio</li></Link>
          <Link href={"/BlogPage"}><li
                  className={
                    router.pathname === "/BlogPage" ? style.active : ""}>Blog</li></Link>
          <Link href={"/ContactUs"}><li
                  className={
                    router.pathname === "/ContactUs" ? style.active : ""}>Contact Us</li></Link>
        </ul>
          </nav>
      </div>
    </div>
  </Navbar>
  );
};

export default Header;
