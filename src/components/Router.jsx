import Hero from "../page/Hero";
import About from "../page/About";
import Benefit from "../page/Benefit";
import Course from "../page/Course";
import Gallery from "../page/Gallery";
import { useEffect, useState } from "react";

export default function AppRouter() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [moduleActive, setModuleActive] = useState(false);

  const addModule = () => {
    if (windowWidth < 600) setModuleActive(true);
    else setModuleActive(false);
  };

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleActive]);

  useEffect(() => {
    addModule();
  }, [windowWidth]);

  return (
    <>
      <Hero />
      <About />
      <Benefit />
      <Course windowWidth={windowWidth} moduleActive={moduleActive} />
      <Gallery windowWidth={windowWidth} moduleActive={moduleActive} />
    </>
  );
}
