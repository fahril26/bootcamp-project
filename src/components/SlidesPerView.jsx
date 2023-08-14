// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../style/SlidesPerView.css";

// import required modules
import { Pagination, Autoplay, Navigation, Virtual } from "swiper/modules";
import { useEffect, useState } from "react";
import CustomPagination from "./CustomPagination";

export default function SlidesPerView(slides) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [swiperRef, setSwiperRef] = useState(null);
  const [cloneSlides, setClonseSlides] = useState(false);
  const [initialtIndex, setInitalIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(3);
  const [paginationActive, setPaginationActive] = useState([true, false]);
  const [virtualSlides, setVirtualSlides] = useState([
    ...slides.slides,
    ...slides.slides,
  ]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };

  const handleSlideChange = () => {
    let newInitialIndex = initialtIndex;
    let newLastIndex = lastIndex;

    if (windowWidth >= 700) {
      if (swiperRef.realIndex % 4 == 0) {
        setClonseSlides(!cloneSlides);

        // handle index slideTo
        if (swiperRef.realIndex !== newInitialIndex) {
          newLastIndex += 4;
          newInitialIndex += 4;

          setLastIndex(newLastIndex);
          setInitalIndex(newInitialIndex);
        }
      }

      paginationAddStyle();
    }
  };

  const paginationAddStyle = () => {
    let currentIndex = swiperRef.realIndex + 1;
    let newPaginationActive = paginationActive.slice();

    if (currentIndex % 4 == 0) {
      newPaginationActive[1] = true;
      newPaginationActive[0] = false;
    } else {
      newPaginationActive[0] = true;
      newPaginationActive[1] = false;
    }

    setPaginationActive(newPaginationActive);
  };

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setVirtualSlides([...virtualSlides, ...slides.slides]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloneSlides]);

  return (
    <>
      <Swiper
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay, Navigation, Virtual]}
        breakpoints={breakpoints}
        pagination={windowWidth < 600 && { clickable: true }}
        onSlideChange={handleSlideChange}
        className="mySwiper"
        onSwiper={setSwiperRef}
        loop={windowWidth < 600}
        speed={700}
      >
        {windowWidth >= 768
          ? virtualSlides.map((slide, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                {slide}
              </SwiperSlide>
            ))
          : slides.slides.map((slide, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                {slide}
              </SwiperSlide>
            ))}

        {windowWidth >= 600 && (
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <CustomPagination
              classActive={paginationActive[0]}
              slideTo={() => slideTo(initialtIndex)}
            />
            <CustomPagination
              classActive={paginationActive[1]}
              slideTo={() => slideTo(lastIndex)}
            />
          </div>
        )}
      </Swiper>
    </>
  );
}
