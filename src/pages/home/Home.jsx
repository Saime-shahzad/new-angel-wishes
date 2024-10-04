import React from "react";
import angell from "../../assets/images/angell.png"
import ban1 from "../../assets/images/ban1.jpg"
import ban2 from "../../assets/images/ban2.png"
import ban3 from "../../assets/images/ban3.jpg"
import { Buttons } from "../../components/button/Buttons";
import webColor from "../../assets/colors/Colors";
import './Home.css'
import home1 from "../../assets/images/home1.png"
import home2 from "../../assets/images/home2.png"
import home3 from "../../assets/images/home3.png"
import home4 from "../../assets/images/home4.png"
import { ContentSection } from "../../assets/contentSection/ContentSection";
import {useRoutFunction} from "../../assets/others/UseFullFunctions";
import homeVedio1 from "../../assets/images/homeVedio1.mp4"



export const Home = () => {
  const routeTo = useRoutFunction();


  const homePageContent = [

    {
      // heading:"Save Your Memories",
      heading: <span>Save Your <span style={{ color: webColor.themeColor }}>Memories</span></span>,
      subHeading: "We Allow Families to Cherish  Every Moment",
      possition: "left",
      text: "Every moment in life counts. At Angel Wishes Memory Keeper, we provide a secure and loving space where you and your loved ones can preserve these precious memories. Whether it's photos, videos, or written stories, our platform ensures that your life's highlights are safely stored and easily accessible. Start today and keep your cherished memories alive for generations to come. Experience the comfort of knowing that your most significant moments are preserved with care and respect.",
      className: "content-Parent  row my-4 flex-lg-row-reverse  ",
      img: home1
    },

    {
      heading: <span style={{ color: webColor.themeColor }}> Secure <span>Your</span><span className="text-dark"> Important Documents</span></span>,
      subHeading: "We Provide a Safe and Secure Place for Your Most Important Documents",
      possition: "right",
      text: "Your privacy and the security of your data are our top priorities. At Angel Wishes Memory Keeper, we protect your information with advanced encryption and robust security protocols. Our platform operates on a custom AWS secure configuration, providing 400 terabytes of dedicated, safe storage. With 99.98% uptime, you can trust that your sensitive documents, from wills to power of attorney forms, are protected around the clock. Secure your legacy with confidence, knowing your data is safe.",
      className: "content-Parent  row my-4    ",
      img: home2,
      sizes:["596px" , "440px"]

    },
    {
      className:" w-100  ",
      vedios:homeVedio1
      
    },

    {
      heading: <span>Get  <span style={{ color: webColor.themeColor }}>Consulting</span> Assistance</span>,
      subHeading: "Expert Guidance When You Need It Most",
      possition: "left",
      text: "Navigating final wishes planning can be complex and emotional. That's why Angel Wishes Memory Keeper offers compassionate and professional final wishes consulting. Our experts are here to guide you through every step of the process, from estate planning to creating a living trust. We ensure you have all the resources and support needed to make informed decisions that honor your wishes and provide peace of mind for your family. Reach out today to learn how our consulting services can help simplify this critical journey.",
      className: "content-Parent  row my-5 flex-lg-row-reverse justify-content-between   ",
      img: home3
    },

    {
      heading: <span>Begin Your Journey with Angel Wishes <span style={{ color: webColor.themeColor }}>Memory Keeper's</span> Assistance</span>,
      // subHeading:"subheading",
      possition: "right",
      text: "Are you ready to secure your memories, safeguard your data, and prepare your final wishes with expert guidance? Click below to explore our services and discover how Angel Wishes Memory Keeper can support you and your family through every step of the journey.",
      className: "content-Parent  row my-5   ",
      img: home4
    },


  ]
  return (
    <div className="homeParrent">



      {/* banner Section */}
      <div className="banerSection-parent">
        <div className="banner">

          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" height="600px" src={ban1} alt="First slide" />

              </div>
              <div class="carousel-item">
                <img class="d-block w-100" height="600px" src={ban2} alt="First slide" />


              </div>
              <div class="carousel-item">
                <img class="d-block w-100" height="600px" src={ban3} alt="First slide" />

              </div>
            </div>

          </div>

          <div class="position-absolute BannerTextControl text-white text-sm-start  d-md-block" >

            <div className="d-flex  custom-animate-left">
              <div className="logo-parent">
                <img class=" px-3" height="280px" src={angell} alt="First slide" />
              </div>
              <div className="content-parent pt-2" >
                <span className="d-block fw-bold mb-2" style={{ fontSize: "15px" }}>
                  Welcome To
                </span>
                <h5 className="fw-normal" style={{ fontSize: "45px" }}>Angel Wishes Memory Keeper</h5>
                <p className="w-50 d-none d-md-block" style={{ fontSize: "10px" }}>Where you can secure your memories, safeguard your data, and prepare your final wishes with expert guidance.</p>
                <div className="d-flex ">
                  <Buttons text='Get Started' onClick={() => {routeTo("/sign-in")}} className='bg-white  mx-1' style={{ color: webColor.themeColor }} />
                  <Buttons text='Sign Up '  onClick={() => {routeTo("/sign-up")}} style={{ color: "white", backgroundColor: webColor.themeColor }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///closed */}

      {/* /////// middle section/////// */}

      <div>
        <ContentSection data={homePageContent} />
      </div>


      {/* /////closed////// */}
    </div>
  );
};
