import { useState } from "react";
import Slider from "react-slick";
const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "45%",
          transform: "-50%-50%",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: " 10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i-- - dotActive
            ? {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
                justifyContent: "center",
                color: "white",
                border: "1px solid #f3a847S",
              }
            : {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                background: "#732F3A",
                padding: "8px 0",
                cursor: "pointer",
                justifyContent: "center",
                color: "white",
                border: "1px solid white",
              }
        }
      >
        {i + 2}
      </div>
    ),
  };
  return (
    <div className=" w-full  ">
      <div className=" relative">
        <Slider {...settings}>
          <div>
            <img
              className=" w-screen  
              "
              src="/images/banner1.jpg"
              alt="banner1"
            />
          </div>
          <div>
            <img
              className=" w-screen 
             "
              src="/images/banner2.webp"
              alt="banner2"
            />
          </div>
          <div>
            <img
              className=" w-screen  
              "
              src="/images/banner3.webp"
              alt="banner3"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Banner;
