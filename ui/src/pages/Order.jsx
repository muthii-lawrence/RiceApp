import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  buttons: true,
  infinite: true,
  speed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,

  autoplaySpeed: 10000,
};

const Order = () => {
  return (
    <div className="mt-20">
      <div className=" my-10 w-full">
        {/* <Slider {...settings}> */}
        <img
          className="flex items-center justify-center "
          src="../gunia3.jpeg"
          alt="image one"
        />
        <img
          className="flex items-center justify-center "
          src="../gunia1.png"
          alt="image one"
        />{" "}
        <img
          className="flex items-center justify-center "
          src="../gunia2.jpeg"
          alt="image one"
        />
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Order;
