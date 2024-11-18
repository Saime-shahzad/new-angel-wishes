import React from 'react'
import Carousels from '../../components/carousel/Carousels'
import carrerpossition2 from "../../assets/images/carrerpossition2.png";


const SlideShow = () => {
    const cardsData = [
        {
          heading: "New Pop Out",
          image: carrerpossition2,
          // className:"col-lg-4 col-md-6 col-sm-12 p-0 d-flex justify-content-around"
        },
        {
          heading: "Revisit thr moment",
          image: carrerpossition2,
          // className:"col-lg-4 col-md-6 col-sm-12 p-0 d-flex justify-content-around"
        },
        {
          heading: "Spotlight over the year",
          image: carrerpossition2,
          // className:"col-lg-4 col-md-6 col-sm-12 p-0 d-flex justify-content-around"
        },
        {
          heading: "Remember thus day?",
          image: carrerpossition2,
          // className:"col-lg-4 col-md-6 col-sm-12 p-0 d-flex justify-content-around"
        },
        {
          heading: "Remember thus day?",
          image: carrerpossition2,
          // className:"col-lg-4 col-md-6 col-sm-12 p-0 d-flex justify-content-around"
        },
      ];
  return (
    <div className='parent container'>
        <div className='first-child '>
            <div className='parent-carousel'>

            <Carousels cardsData={cardsData} />


            </div>

        </div>
        
        </div>
  )
}

export default SlideShow