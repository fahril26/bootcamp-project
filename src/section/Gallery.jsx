/* eslint-disable react/prop-types */
import Header from "../components/Header";

import "../style/Gallery.css";

import Img1 from "../assets/gallery/thumbs/12.jpg";
import Img2 from "../assets/gallery/thumbs/1.jpg";
import Img3 from "../assets/gallery/thumbs/5.jpg";
import Img4 from "../assets/gallery/thumbs/10.jpg";
import Img5 from "../assets/gallery/thumbs/8.jpg";
import Img6 from "../assets/gallery/thumbs/6.jpg";
import Img7 from "../assets/gallery/thumbs/7.jpg";
import Img8 from "../assets/gallery/thumbs/9.jpg";
import Img9 from "../assets/gallery/thumbs/11.jpg";
import SlidesPerView from "../components/SlidesPerView";
import useScroll from "../hook/useScroll";
import { useEffect } from "react";

const description = ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo architecto nesciunt cupiditate ipsum, nulla mollitia!`;

const Gallery = ({ windowWidth, moduleActive }) => {
  const initialValues = { threShold: 2100 };
  const [isValiable, setCurrentValue] = useScroll(initialValues);

  const listImg = [Img5, Img4, Img6, Img1, Img8, Img3];
  const imgElements = listImg.map((img, index) => (
    <img
      src={img}
      key={index}
      alt={index + 1}
      style={{ width: "100%", height: "400px" }}
    />
  ));

  const handleChangeInitialValueScroll = (width) => {
    if (width < 992 && width > 768) setCurrentValue({ threShold: 2400 });
    else if (width < 768 && width > 540) setCurrentValue({ threShold: 2825 });

    if (width < 540) setCurrentValue({ threShold: 3125 });
  };

  useEffect(() => {
    handleChangeInitialValueScroll(windowWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  return (
    <section id="gallery" className="gallery pb-5 pt-5">
      <div className="container">
        <Header description={description} className={isValiable ? "show" : ""}>
          Our <span>Gallery</span>
        </Header>

        {windowWidth >= 600 ? (
          <div className="row justify-content-center flex-wrap">
            <div className="column">
              <img src={Img5} alt="1" />
              <img src={Img2} alt="1" />
              <img src={Img4} alt="1" />
            </div>

            <div className="column">
              <img src={Img7} alt="1" />
              <img src={Img1} alt="1" />
              <img src={Img8} alt="1" />
            </div>

            <div className="column">
              <img src={Img3} alt="1" />
              <img src={Img6} alt="1" />
              <img src={Img9} alt="1" />
            </div>
          </div>
        ) : (
          <SlidesPerView slides={imgElements} moduleActive={moduleActive} />
        )}
      </div>
    </section>
  );
};

export default Gallery;
