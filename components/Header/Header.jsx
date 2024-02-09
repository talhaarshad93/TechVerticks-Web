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
  },
   [router.pathname]);
  return (
    <div className={style.mainContainer}>
      <div className={style.logo}>
      <Image src={img} width={200} height={30} alt="img" />

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
  );
};

export default Header;
