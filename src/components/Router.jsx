import Hero from "../section/Hero";
import About from "../section/About";
import Benefit from "../section/Benefit";
import Course from "../section/Course";
import Gallery from "../section/Gallery";
import Blog from "../section/Blog";
import { useEffect, useState } from "react";
import NewsLetter from "../section/NewsLetter";
import Contact from "../section/Contact";

export default function AppRouter() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [moduleActive, setModuleActive] = useState(false);

  // add module on Slides Component
  const addModule = (width) => {
    width < 600 ? setModuleActive(true) : setModuleActive(false);
  };

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    addModule(windowWidth);
  }, [windowWidth]);

  return (
    <>
      <Hero />
      <About />
      <Benefit />
      <Course windowWidth={windowWidth} moduleActive={moduleActive} />
      <Gallery windowWidth={windowWidth} moduleActive={moduleActive} />
      <Blog windowWidth={windowWidth} moduleActive={moduleActive} />
      <NewsLetter />
      <Contact />
    </>
  );
}
