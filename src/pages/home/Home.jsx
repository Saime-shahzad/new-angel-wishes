import React from "react";
import angell from "../../assets/images/angell.png"
import ban1 from "../../assets/images/ban1.png"
import ban2 from "../../assets/images/ban2.png"
import ban3 from "../../assets/images/ban3.png"
import { Buttons } from "../../components/button/Buttons";
import webColor from "../../assets/colors/Colors";
import './Home.css'

export const Home = () => {
  return (
    <div>

      {/* Header section  */}
      
      {/* ////closed */}

    {/* banner Section */}
    <div className="banerSection-parent">
<div className="banner">

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img class="d-block w-100"  height="400px" src={ban1} alt="First slide"/>

    </div>
    <div class="carousel-item">
    <img class="d-block w-100"  height="400px" src={ban2} alt="First slide"/>
    

    </div>
    <div class="carousel-item">
    <img class="d-block w-100"  height="400px" src={ban3} alt="First slide"/>
    
    </div>
  </div>
  
</div>

<div class="position-absolute text-white text-sm-start d-none d-md-block" style={{top:"160px" , left:"30px"}}>

      <div className="d-flex">
        <div className="logo-parent">
    <img class=" px-3"  height="200px" src={angell} alt="First slide"/>
    </div>
    <div className="content-parent pt-2"> 
      <span className="d-block fw-bold mb-2" style={{fontSize:"15px"}}>
        Welcom To
      </span>
    <h5 className="fw-normal" style={{fontSize:"45px"}}>ANGEL WISHES</h5>
    <p className="w-50" style={{fontSize:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque sint quo, quam dignissimos provident magnam corrupti perspiciatis voluptates 
      enim sapiente quisquam ea debitis rerum earum, beatae quasi excepturi. Maxime!</p>
      <div className="d-flex ">
      <Buttons  text='Get A Quote ' className='bg-white mx-1' style={{color:webColor.themeColor}} />
      <Buttons  text='Get A Quote '  style={{color:"white" , backgroundColor:webColor.themeColor}} />
      </div>
      </div>
      </div>
  </div>
</div>
    </div>

    {/* ///closed */}

      {/* <AppRoutes /> */}
    </div>
  );
};
