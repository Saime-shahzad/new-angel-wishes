import React from "react";
// import { CardSections, CommonParagraph } from "../../assets/others/Others";
// import report1 from "../../assets/images/report1.png";
// import report2 from "../../assets/images/report2.png";
// import report3 from "../../assets/images/report3.png";
import { Inputs } from "../../assets/input/Inputs";
import "./ReportaConcern.css";
import { Buttons } from "../../components/button/Buttons";
import webColor from "../../assets/colors/Colors";

// import icons from "../../assets/icons/icons";

export const ReportaConcern = () => {
  // const cardsData = [
  //   {
  //     heading: "Client Support Specialist",
  //     paragraphText:
  //       "Provide direct assistance and support to our clients, helping them navigate our services and ensuring they receive the care and information they need.",
  //     image: report1,
  //     className:
  //       "col-lg-4 col-md-6 col-sm-12  box-shadow text-center p-0 d-flex justify-content-around",

  //     imageSize: {
  //       width: "120px",
  //       height: "120px",
  //     },
  //   },
  //   {
  //     heading: "Gather Information",
  //     paragraphText:
  //       "Gather any relevant information or documents supporting your report. This could include screenshots, correspondence, or other pertinent details.",
  //     image: report2,
  //     className:
  //       "col-lg-4 col-md-6 col-sm-12 box-shadow text-center p-0 d-flex justify-content-around",
  //     imageSize: {
  //       width: "120px",
  //       height: "120px",
  //     },
  //   },
  //   {
  //     heading: "Submit Your Report",
  //     paragraphText:
  //       "Use the form below to submit your concern. Please fill in all required fields to help us process your report quickly.",
  //     image: report3,
  //     className:
  //       "col-lg-4 col-md-6 col-sm-12 box-shadow  text-center p-0 d-flex justify-content-around",
  //     imageSize: {
  //       width: "120px",
  //       height: "120px",
  //     },
  //   },
  // ];
  const formContent = [
    {
      label: "User Name",
      type: "text",
      className: "col-lg-6 col-md-6 col-sm-12   d-flex inputDiv"
    },
    {
      label: "Email Address",
      type: "email",
      className: "col-lg-6 col-md-6 col-sm-12   d-flex inputDiv"
    },
    {
      label: "Contact No",
      type: "Number",
      placeholder: "",
      className: "col-lg-6 col-md-6 col-sm-12   d-flex inputDiv"
    },
    // {
    //   label: "Supporting Document",
    //   type: "file",
    //   placeholder: "",
    //   className:"col-lg-6 col-md-6 col-sm-12   d-flex inputDiv"
    // },
    {
      label: "Message",
      type: "text",
      placeholder: "",
      className: "col-lg-6 col-md-12 col-sm-12   messageControls d-flex  inputDiv"
    },
    {
      label: "Submit",
      type: "Submit",
      className: "col-lg-6 col-md-6 col-sm-12 my-4 justify-content-end m-auto d-flex inputDiv"
    },
  ];
  return (
    <div className="parent">
       <div className="text-center my-5">
          <h1>Report a <span style={{color:webColor.themeColor}}>
          Concern 
            </span> 
            </h1>
        </div>
      {/* <div className="child-1 my-5 ">
        <CommonParagraph
          headingText="How to Report a Concern"
          paragraphText="To ensure that your concern is addressed efficiently, please follow these steps:"
          className="text-center"
          style={{ fontSize: "16px" }}
        />
      </div>
      <div className="cards-setion child-2 container my-5 " >
        <CardSections data={cardsData} />
      </div> */}

      <div className="container">
        <div>
          <h1>
            We're Listening





          </h1>
          <h5 className="">Your Feedback is Vital



          </h5>
          <p>
            At Angel Wishes Memory Keeper, we are committed to maintaining the highest standards of service and integrity. Your feedback is essential to us, as it helps us identify issues and improve our offerings. If you have any concerns or issues related to our services, website, or any interactions with our staff, we encourage you to report them. We take every report seriously and are dedicated to resolving issues promptly and effectively


          </p>
        </div>
        <div>
          <h1>
            How to Report a Concern

          </h1>
          <h5 className="">Step-by-Step Guidance

          </h5>
          <p>
            To ensure that your concern is addressed efficiently, please follow these steps:


          </p>
          <ol>
            <li><span className="fw-bold">
              Identify the Issue:
            </span>
              Clearly describe the concern you have encountered. Whether it relates to our services, staff conduct, or our online platform, providing specific details will help us understand and address the issue more effectively.
            </li>
            <li><span className="fw-bold">
              Gather Information:
            </span>
              Gather any relevant information or documents supporting your report. This coold include screenshots, correspondence, or other pertinent details.
            </li>
            <li><span className="fw-bold">
              Submit Your Report:
            </span>
              Use the form below to submit your concern. Please fill in all required fields to help us process your report quickly.
            </li>

          </ol>



        </div>
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
            <h1>Report a Concern</h1>
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
                    <Buttons text={item.label} style={{ backgroundColor: "#FDB515", }} type={item.type} />
                  ) : (
                    <Inputs
                      className={item.type === "file" ? "file-input-container" : "inputsControls"}
                      //   className= {item.label === "Message" ? " d-none " : " inputsControls  "}
                      type={item.type}
                      icon={item.label}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* /// according to ghazaal inputs */}
          {/* <div className="  my-2">
            <div className="">
                <div>
                {icons.phoneicons}
                </div>

                <div>
                (555) 123-4567
                </div>
            </div>
            <div className=" mt-2 ">
                <div>
                {icons.mailIcons}
                </div>

                <p className="w-100">
                concerns@angelwishesmemorykeeper.com
                </p>
            </div>
         
          </div> */}
        </form>
      </div>
      <div className="container">
        <div>
          <h1>
            What Happens Next?

          </h1>
          <h5 className="">Our Process

          </h5>
          <p>
            Once you submit your concern, here's what you can expect:




          </p>
          <ul>
            <li><span className="fw-bold">
              Acknowledgment:
            </span>
              We will acknowledge receipt of your report within 24 hours.
            </li>
            <li><span className="fw-bold">
              Investigation:
            </span>
              We will thoroughly investigate your concern, involving relevant departments and ensuring a fair process.
            </li>
            <li><span className="fw-bold">
              Resolution:
            </span>
              We aim to resolve concerns swiftly. We will communicate with you throughout the process and notify you once a resolution has been reached.
            </li>

          </ul>

        </div>
        <div>
          <h1>
          Contact Us Directly


          </h1>
     
          <p>
          If you prefer to speak with someone directly or if your concern is urgent, please do not hesitate to contact us at:





          </p>
          <ul>
            <li><span className="fw-bold">
            Phone: 
            </span>
            (555) 123-4567
            </li>
            <li><span className="fw-bold">
            Email:
            </span>
            concerns@angelwishesmemorykeeper.com
            </li>
           

          </ul>

        </div>
        <div>
          <h1>
          Commitment to Transparency and Integrity





          </h1>
         
          <p>
          At Angel Wishes Memory Keeper, we are dedicated to transparency and integrity in all our operations. We appreciate your help maintaining the quality and safety of our services and your taking the time to report your concerns.



          </p>
          <p className="mt-3">
          This Report a Concern page is designed to facilitate an easy and efficient way for users to communicate issues, reinforcing Angel Wishes Memory Keeper's commitment to transparency, integrity, and responsive customer service. Clear instructions and direct communication options ensure that users feel supported and valued throughout the process.





          </p>
        </div>

      </div>
    </div>
  );
};
