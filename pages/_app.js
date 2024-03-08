import Header from "@/components/Header/Header";
import "../styles/globals.css";
import "../styles/fonts.css";
import sytle from "../pages/allPages.module.css";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
// import '../components/Header/header.css';
// import '../components/Footer/style.css';
import FooterCardDiv from "@/components/Footer/FooterCardDiv";
import Heading from "@/components/Heading Component/Heading";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then((bootstrap) => {
        // Initialize Bootstrap components here
      })
      .catch((err) => {
        // Handle error while loading Bootstrap
      
      });
  }, []);

  const [mousePosition, setMouseposition] = useState({ x: 0, y: 0 });
  const [smallPosition, setSmallposition] = useState({ x: 0, y: 0 });

  // console.log(mousePosition)
  useEffect(() => {
    const mouseMove = (e) => {
      setMouseposition({ x: e.clientX, y: e.clientY });
      setSmallposition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // const variants={
  //   default:{
  //     x: mousePosition.x -15,
  //     y: mousePosition.y -15
  //   }
  // }
  // const variants1={
  //   default1:{
  //     x: smallPosition.x -65,
  //     y: smallPosition.y -65
  //   }
  // }

  return (
    <>
      <motion.div
        className={sytle.cursor}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 14,
          transition: { type: "spring", mass: 1.5 },
        }}
      >
        {/* variants={variants}
    animate="default"> */}
      </motion.div>

      <motion.div
        className={sytle.small}
        // variants={variants1}
        // animate="default1"
        animate={{
          x: smallPosition.x -2,
          y: smallPosition.y -3,
          transition: { type: "spring", mass: 0.1 },
        }}
      ></motion.div>

      <Header/>
      <Component {...pageProps} />

      <FooterCardDiv />
    </>
  );
}
