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
import useRoutFunction from "../../assets/others/UseFullFunctions";

export const Index = () => {
  const location = useLocation();
  const RoutFunction = useRoutFunction();
  

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
        <div className="fw-bold">Angel Wishes Memory Keeper - {location.pathname?.split("/")[1]}</div>
      </div>

      <div>
        <AppRoutes />
      </div>
      <div
        className="how-to-apply-parrent p-2 text-white  justify-content-center d-flex w-100  "
        style={{ backgroundColor: "#1C96C5" }}
      >
        <div className="child-1 my-auto  text-center align-items-center ">
          <h3>Subscribe to Our Newsletter</h3>
        </div>
        {/* <div className="child-2 my-auto justify-content-sm-center col-lg-4 col-md-12 col-sm-12  ">
          <p style={{ fontSize: "12px" }} className="my-auto">
            Interested in joining Angel Wishes Memory Keeper? Submit your
            application and resume through our online portal. We look forward to
            learning more about how you can contribute to our mission!
          </p>
        </div> */}
        <div className="child-3 justify-content-sm-center mx-3 d-flex my-auto">
          <Inputs
            icon={icons.mailIcons}
            className="inputcontrols"
            type="text"
            placeholder="Email Address"
          />
          <Buttons
            text="Submit"
            style={{ padding: "12px", backgroundColor: "#FDB515" }}
          />
        </div>
      </div>
      <div className="footer-parent">
        <Footer />
      </div>
    </div>
  );
};
