/* eslint-disable react/prop-types */

const CustomPagination = ({ classActive, slideTo }) => {
  return (
    <span
      onClick={() => slideTo(slideTo)}
      className={`swiper-pagination-bullet ${
        classActive && "swiper-pagination-bullet-active"
      }`}
    ></span>
  );
};

export default CustomPagination;
