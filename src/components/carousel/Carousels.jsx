import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";

const responsive = {
  allScreens: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Carousels = ({ cardsData }) => {
  return (
    <div className="container ">
    

        
      <div className="fullscreen-carousel ">


      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
        // showDots={true}
      >
        {cardsData.map((item, index) => (
          <div className="carousel-slide" key={index}>
            <img src={item.image} alt="movie" className="carousel-image" />
            <div className="carousel-text">{item.heading}</div>
          </div>
        ))}
      </Carousel>
      </div>
     
    </div>
  );
};

export default Carousels;
