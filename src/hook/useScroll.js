/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useScroll = (initialValues) => {
  const [currentValue, setCurrentValue] = useState(initialValues);
  const [isVisible, setIsVisible] = useState(false);

  const { threShold, theBeginning } = currentValue;

  const handleScroll = () => {
    if (window.scrollY < threShold && theBeginning) {
      setIsVisible(false);
      return;
    }

    if (window.scrollY >= threShold) setIsVisible(true);

    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialValues]);

  return [isVisible, setCurrentValue, currentValue];
};

export default useScroll;
