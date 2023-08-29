import Hero from "../section/Hero";
import About from "../section/About";
import Benefit from "../section/Benefit";
import Course from "../section/Course";
import Gallery from "../section/Gallery";
import Blog from "../section/Blog";
import { useContext, useEffect, useState } from "react";
import NewsLetter from "../section/NewsLetter";
import Contact from "../section/Contact";
import Faq from "../section/Faq";
import Location from "../section/Location";
import Footer from "../section/Footer";
import { ResizeWindowContext } from "../context/WindowWidthContext";

export default function AppRouter() {
  const [moduleActive, setModuleActive] = useState(false);

  const windowWidth = useContext(ResizeWindowContext);

  // add module on Slides Component
  const addModule = (width) => {
    width < 600 ? setModuleActive(true) : setModuleActive(false);
  };

  useEffect(() => {
    addModule(windowWidth);
  }, [windowWidth]);

  return (
    <>
      <Hero />
      <About />
      <Benefit windowWidth={windowWidth} />
      <Course windowWidth={windowWidth} moduleActive={moduleActive} />
      <Gallery windowWidth={windowWidth} moduleActive={moduleActive} />
      <Blog windowWidth={windowWidth} moduleActive={moduleActive} />
      <NewsLetter />
      <Contact />
      <Faq />
      <Location />
      <Footer />
    </>
  );
}
