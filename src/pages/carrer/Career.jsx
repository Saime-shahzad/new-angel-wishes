import React from "react";
import { BoxesSection,
  //  CardSections, 
  // ExtraBlueSection 

} from "../../assets/others/Others";
import carrer1 from "../../assets/images/carrer1.png";
import carrer2 from "../../assets/images/carrer2.png";
import carrer3 from "../../assets/images/carrer3.png";
import carrer4 from "../../assets/images/carrer4.png";
// import carrerpossition1 from "../../assets/images/carrerpossition1.png"
// import carrerpossition2 from "../../assets/images/carrerpossition2.png"
// import carrerpossition3 from "../../assets/images/carrerpossition3.png"
// import carrerpossition4 from "../../assets/images/carrerpossition4.png"
import "../../components/cards/Cards.css"
import { Inputs } from "../../assets/input/Inputs";
import { Buttons } from "../../components/button/Buttons";
import icons from "../../assets/icons/icons";

export const Career = () => {
  const topSectionData = [
    {
      headingText: "Purpose-Driven Work",
      paragraphText:
        "Every role at Angel Wishes Memory Keeper contributes to a grand, compassionate mission of helping individuals and families prepare for and manage end-of-life situations with dignity and peace.",
      image: carrer1,
      width: "80px",
    },
    {
      headingText: "Supportive Environment",
      paragraphText:
        "We believe in supporting our staff as much as we help our clients. Here, you’ll find a culture of care, respect, and mutual support that extends throughout our entire organization.",
      image: carrer2,
      width: "80px",
    },
    {
      headingText: "Growth Opportunities",
      paragraphText:
        "As we expand our services and reach, the company has numerous opportunities for professional growth and development. We encourage continual learning and advancement for all team members.",
      image: carrer3,
      width: "80px",
    },
    {
      headingText: "Competitive Benefits",
      paragraphText:
        "We offer a comprehensive benefits package that includes health, dental, and vision insurance, a 401(k) plan, generous PTO, and flexible working arrangements to support work-life balance.",
      image: carrer4,
      width: "80px",
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
  // const middleExtraSectionBlue = {
  //   heading: "Join Our Team at Angel Wishes Memory Keeper",
  //   text: (
  //     <div>
  //       <p>At Angel Wishes Memory Keeper, we are more than just a company; we are a
  //       community united by a shared mission to make the most significant
  //       moments count.
  //       </p>
  //       <p>
  //       Our work is dedicated to providing comfort, support, and
  //       essential services to individuals and families during their most
  //       challenging times. If you are passionate about making a difference and
  //       helping others in meaningful ways, we invite you to explore a career
  //       with us.
  //       </p>
  //     </div>
  //   ),

  //   className: "blueSection container ",
  // };
  // const cardsData=[
  //   {
  //     heading:"Client Support Specialist",
  //     paragraphText:"Provide direct assistance and support to our clients, helping them navigate our services and ensuring they receive the care and information they need.",
  //     image:carrerpossition1,
  //     className:"col-lg-3 col-md-6 col-sm-12 p-0 d-flex justify-content-around"

  //   },
  //   {
  //     heading:"Legal Consultant",
  //     paragraphText:"Specialize in estate planning, wills, and trusts to provide expert advice and peace of mind to our clients and their families.",
  //     image:carrerpossition2,
  //     className:"col-lg-3 col-md-6 col-sm-12 p-0 d-flex justify-content-around"

  //   },
  //   {
  //     heading:"IT Security Analyst",
  //     paragraphText:"Help safeguard our data and ensure that our technological infrastructure remains secure and reliable, respecting the confidentiality of our client's sensitive information",
  //     image:carrerpossition3,
  //     className:"col-lg-3 col-md-6 col-sm-12 p-0 d-flex justify-content-around"

  //   },
  //   {
  //     heading:"Content Creator",
  //     paragraphText:"Craft meaningful stories and informational content to communicate our mission and services to a broader audience..",
  //     image:carrerpossition4,
  //     className:"col-lg-3 col-md-6 col-sm-12 p-0 d-flex justify-content-around cardhoverStyle"

  //   },
  // ]
  return (
    <div className="carrer-parent">
      <div className="child-1 container my-5">
        <BoxesSection data={topSectionData} headingText="Why work with us?" />
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
            <h1>Career form</h1>
            <p>
            Please fill out the following info and attach your resume so we can get in touch with you. Thanks!
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
          <div className=" my-2">
            <div className="">
                <div>
                {icons.phoneicons}
                </div>

                <div>
                (555) 123-4567
                </div>
            </div>
            <div className="mt-2">
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
      {/* <div className="child-2 my-5 " style={{backgroundColor:"#21668E"}}>
        <ExtraBlueSection
          heading={middleExtraSectionBlue.heading}
          text={middleExtraSectionBlue.text}
          className={middleExtraSectionBlue.className}
        />
      </div>
      <div className="child-3 card-Section mt-4 my-5">
        <div className="container">
          <div className="boxHeading text-center fw-bold">
          <h3 className="fw-bold my-5">
            Open Possitions
          </h3>
          </div>
    <CardSections data={cardsData} />
        </div>

      </div> */}
    </div>
  );
};
