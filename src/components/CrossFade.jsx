// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import Img1 from "../assets/image/image1.jpg";
import Img2 from "../assets/image/image2.jpg";
import Img3 from "../assets/image/image3.jpg";

export default function CrossFade() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Pagination, Autoplay]}
    >
      <SwiperSlide>
        <img src={Img1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img3} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}
