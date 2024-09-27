import React from "react";
import { CardSections, CommonParagraph } from "../../assets/others/Others";
import report1 from "../../assets/images/report1.png";
import report2 from "../../assets/images/report2.png";
import report3 from "../../assets/images/report3.png";
import { Inputs } from "../../assets/input/Inputs";
import "./ReportaConcern.css";
import { Buttons } from "../../components/button/Buttons";
import icons from "../../assets/icons/icons";

export const ReportaConcern = () => {
  const cardsData = [
    {
      heading: "Client Support Specialist",
      paragraphText:
        "Provide direct assistance and support to our clients, helping them navigate our services and ensuring they receive the care and information they need.",
      image: report1,
      className:
        "col-lg-4 col-md-6 col-sm-12  box-shadow text-center p-0 d-flex justify-content-around",
        
      imageSize: {
        width: "120px",
        height: "120px",
      },
    },
    {
      heading: "Legal Consultant",
      paragraphText:
        "Specialize in estate planning, wills, and trusts to provide expert advice and peace of mind to our clients and their families.",
      image: report2,
      className:
        "col-lg-4 col-md-6 col-sm-12 box-shadow text-center p-0 d-flex justify-content-around",
      imageSize: {
        width: "120px",
        height: "120px",
      },
    },
    {
      heading: "Legal Consultant",
      paragraphText:
        "Specialize in estate planning, wills, and trusts to provide expert advice and peace of mind to our clients and their families.",
      image: report3,
      className:
        "col-lg-4 col-md-6 col-sm-12 box-shadow  text-center p-0 d-flex justify-content-around",
      imageSize: {
        width: "120px",
        height: "120px",
      },
    },
  ];
  const formContent = [
    {
      label: "User Name",
      type: "text",
      className:"col-lg-6 col-md-6 col-sm-12   d-flex inputDiv"
    },
    {
        label: "Email Address",
        type: "email",
        className:"col-lg-6 col-md-6 col-sm-12   d-flex inputDiv"
    },
    {
      label: "Contact No",
      type: "Number",
      placeholder: "",
      className:"col-lg-6 col-md-6 col-sm-12   d-flex inputDiv"
    },
    {
      label: "Supporting Document",
      type: "file",
      placeholder: "",
      className:"col-lg-6 col-md-6 col-sm-12   d-flex inputDiv"
    },
    {
      label: "Message",
      type: "text",
      placeholder: "",
      className:"col-lg-12 col-md-12 col-sm-12 w-100  messageControls d-flex  inputDiv"
    },
    {
        label: "Submit",
        type: "Submit",
        className:"col-lg-6 col-md-6 col-sm-12 justify-content-end m-auto d-flex inputDiv"
    },
  ];
  return (
    <div className="parent">
      <div className="child-1 my-5 ">
        <CommonParagraph
          headingText="How to Report a Concern"
          paragraphText="To ensure that your concern is addressed efficiently, please follow these steps:"
          className="text-center"
          style={{ fontSize: "16px" }}
        />
      </div>
      <div className="cards-setion child-2 container my-5 " >
        <CardSections data={cardsData} />
      </div>
      <div
        className="child-3 my-5 p-3 form-Section container"
        style={{ backgroundColor: "#21668E" }}
      >
        <form
          className="my-5 container control-width rounded-2  "
          style={{ backgroundColor: "#E9EFEF", border: "8px solid white" }}
        >
          <div className="heading-contant p-2 ">
            <h1>Report Form</h1>
            <p>
              Please complete the form below to submit your concern. All
              information provided will be handled confidentially.
            </p>
          </div>
          <div className="from-body  d-flex row  ">
            {formContent?.map((item) => {
              return (
                <div
                  className={item.className}
                 
                >
                    {item.type === "Submit" ? (
                        <Buttons text={item.label} style={{backgroundColor:"#FDB515"}} type={item.type}/>
                    ) : (
                    <Inputs
                    className={item.type === "file" ? "file-input-container" : "inputsControls"}
                    //   className= {item.label === "Message" ? " d-none " : " inputsControls  "}
                      type={item.type}
                      icon={ item.label}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="d-flex  flex-column flex-lg-row my-2">
            <div className="">
                <div>
                {icons.phoneicons}
                </div>

                <div>
                (555) 123-4567
                </div>
            </div>
            <div className=" mx-lg-4 ">
                <div>
                {icons.mailIcons}
                </div>

                <p className="w-100">
                concerns@angelwishesmemorykeeper.com
                </p>
            </div>
         
          </div>
        </form>
      </div>
    </div>
  );
};
