import React from "react";
import { Header } from "../../components/header/Header";
import AppRoutes from "../../routes/Index";
import { Footer } from "../../components/footer/Footer";
import homeBackGround from "../../assets/images/homeBackGround.png";
import { Inputs } from "../../assets/input/Inputs";
import { Buttons } from "../../components/button/Buttons";
import icons from "../../assets/icons/icons";
import { useLocation } from "react-router-dom";

export const Index = () => {
  const location=useLocation()
  return (
    <div
      className="main-Parrwent"
      style={{
        backgroundImage: `url(${location.pathname==="/kidsCorner" ? homeBackGround : homeBackGround})`,
        backgroundSize: "contain", // or 'contain' depending on your need
        backgroundRepeat: "no-repeat",
        width: "100%", // Adjust as per your design
      }}
    >
      <div>
        <Header />
      </div>

      <div>
        <AppRoutes />
      </div>
      <div
        className="how-to-apply-parrent p-2 text-white row  d-flex flex-sm-column w-100 flex-lg-row  "
        style={{ backgroundColor: "#1C96C5" }}
      >
        <div className="child-1 my-auto col-lg-4 col-md-12 col-sm-12 text-center align-items-center">
          <h3>How To Apply</h3>
        </div>
        <div className="child-2 my-auto justify-content-sm-center col-lg-4 col-md-12 col-sm-12  ">
          <p style={{ fontSize: "12px" }} className="my-auto">
            Interested in joining Angel Wishes Memory Keeper? Submit your
            application and resume through our online portal. We look forward to
            learning more about how you can contribute to our mission!
          </p>
        </div>
        <div className="child-3 justify-content-sm-center col-lg-4 col-md-12 col-sm-12 d-flex my-auto">
          <Inputs
            icon={icons.mailIcons}
            className="inputcontrols"
            type="text"
            placeholder="Email Address"
          />
          <Buttons
            text="Submit"
            style={{ padding: "12px", backgroundColor: "#B89313" }}
          />
        </div>
      </div>
      <div className="footer-parent">
        <Footer />
      </div>
    </div>
  );
};
