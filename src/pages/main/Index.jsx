import React from "react";
import { Header } from "../../components/header/Header";
import AppRoutes from "../../routes/Index";
import { Footer } from "../../components/footer/Footer";
import homeBackGround from "../../assets/images/homeBackGround.png";
import kidsbackgroundImage from "../../assets/images/kidsbackgroundImage.jpg";
import { Inputs } from "../../assets/input/Inputs";
import { Buttons } from "../../components/button/Buttons";
import icons from "../../assets/icons/icons";
import { useLocation } from "react-router-dom";
import {useRoutFunction} from "../../assets/others/UseFullFunctions";
import ScrollToTop from "../../assets/others/UseFullFunctions";

export const Index = () => {
  const location = useLocation();
  const RoutFunction = useRoutFunction();
  console.log("location>>>>>>", location);
  
  
  

  return (
    <div
      className="main-Parrwent"
      style={{
        backgroundImage: `url(${
          location.pathname === "/kidsCorner"
            ? kidsbackgroundImage
            : homeBackGround
        })`,
        backgroundSize: "cover", // or 'contain' depending on your need
        backgroundRepeat: "no-repeat",
        width: "100%", // Adjust as per your design
      }}
    >
      <ScrollToTop />

      <div>
        <Header />
      </div>
      <div className="breadcrumb-parent container  my-3 " style={{display:location.pathname === "/" ? "none" : "flex"}}>
        <div
          className="icon-parent  align-items-center d-flex  rounded-2 p-1 "
          style={{
            marginRight: "20px",
            backgroundColor: "#E3D7AA",
            cursor: "pointer",
          }}
          onClick={() => RoutFunction(-1)}
        >
          {icons.arrowBackIosNewIcons}
        </div>
        <div className="fw-bold">Angel Wishes Memory Keeper - <span className="text-capitalize">{location.pathname?.split("/")[1] === "faqs" ?  "FAQs" : location.pathname?.split("/")[1]}</span></div>
      </div>

      <div>
        <AppRoutes />
      </div>
      <div
        // className="how-to-apply-parrent p-2 text-white   justify-content-center d-flex w-100  "
        className="how-to-apply-parrent p-2 text-white row-cols-lg-1 row-cols-md-1  "
        style={{ backgroundColor: "#21668E" }}
      >
        <div className="row container">
        <div className="child-1 my-auto col-lg-6 col-md-6 col-sm-12 text-center align-items-center ">
          <h3>Subscribe to Our Newsletter</h3>
        </div>
        {/* <div className="child-2 my-auto justify-content-sm-center col-lg-4 col-md-12 col-sm-12  ">
          <p style={{ fontSize: "12px" }} className="my-auto">
            Interested in joining Angel Wishes Memory Keeper? Submit your
            application and resume through our online portal. We look forward to
            learning more about how you can contribute to our mission!
          </p>
        </div> */}
        <div className="child-3 justify-content-sm-center  justify-content-lg-center justify-content-md-center    col-lg-6 col-md-6 col-sm-12 d-flex ">
        {/* <div className="child-3 justify-content-sm-center    mx-3 d-flex "> */}
          <Inputs
            icon={<div style={{color:"lightgrey" }} >{ icons.mailIcons}Email  
                      </div>}
            className="inputcontrols  "
            type="text"
          />
          <Buttons
            text="Submit"
            style={{ padding: "12.2px", backgroundColor: "#FDB515" ,  borderTopLeftRadius:"0px" , borderBottomLeftRadius:"0px"}}
          />
        </div>
        </div>
      </div>
      <div className="footer-parent">
        <Footer />
      </div>
    </div>
  );
};
