/* eslint-disable react-refresh/only-export-components */
import { memo, useContext, useEffect } from "react";
import AccordionComponent from "../components/Accordion";
import Header from "../components/Header";
import useScroll from "../hook/useScroll";
import { ResizeWindowContext } from "../context/WindowWidthContext";

const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius, suscipit impedit a quae error!`;

const Faq = () => {
  const initialValues = { threShold: 5400 };
  const [isValiable, setCurrentValue] = useScroll(initialValues);
  const windowWidth = useContext(ResizeWindowContext);

  const handleChangeInitialValueScroll = (width) => {
    if (width < 992 && width > 768) setCurrentValue({ threShold: 5230 });
    else if (width < 768 && width > 540) setCurrentValue({ threShold: 5390 });

    if (width < 540) setCurrentValue({ threShold: 5915 });
  };

  useEffect(() => {
    handleChangeInitialValueScroll(windowWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  return (
    <section id="faq" className="faq pt-5 pb-5 bg-body-secondary">
      <div className="container">
        <Header className={isValiable ? "show" : ""} description={description}>
          Frequently Asked <span>Question</span>
        </Header>

        <AccordionComponent />
      </div>
    </section>
  );
};

export default memo(Faq);
