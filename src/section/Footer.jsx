/* eslint-disable react-refresh/only-export-components */

import "../style/Footer.css";
import { memo, useContext, useEffect } from "react";
import useScroll from "../hook/useScroll";
import { ResizeWindowContext } from "../context/WindowWidthContext";

const Footer = () => {
  const initialValues = { threShold: 6200 };
  const [isValiable, setCurrentValue] = useScroll(initialValues);
  const windowWidth = useContext(ResizeWindowContext);

  const handleChangeInitialValueScroll = (width) => {
    if (width < 992 && width > 768) setCurrentValue({ threShold: 6100 });
    else if (width < 768 && width > 540) setCurrentValue({ threShold: 6175 });

    if (width < 540) setCurrentValue({ threShold: 6720 });
  };

  useEffect(() => {
    handleChangeInitialValueScroll(windowWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  return (
    <footer className="pt-5 pb-5">
      <div className={`container text-center ${isValiable ? "show" : ""}`}>
        <h5>Follow Us</h5>
        <div className="social-media d-flex justify-content-center gap-3 mt-3">
          <span className="icons">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
          </span>
          <span className="icons">
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </span>
          <span className="icons">
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
          </span>
        </div>

        <p className="mt-4">&copy; 2023 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default memo(Footer);
