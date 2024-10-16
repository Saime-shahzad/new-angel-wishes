import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Carousels = ({cardsData}) => {
  return (
    <div className="parent ">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {cardsData.map((item, index) => {
          return (
            <div className="slider" key={index} >
              <img src={item.image} alt="movie" />
              <div className=" text-center">

              {item.heading}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Carousels;
