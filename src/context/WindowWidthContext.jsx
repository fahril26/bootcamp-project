/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ResizeWindowContext = createContext();

const WindowWidthContext = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ResizeWindowContext.Provider value={windowWidth}>
      {children}
    </ResizeWindowContext.Provider>
  );
};

export default WindowWidthContext;
