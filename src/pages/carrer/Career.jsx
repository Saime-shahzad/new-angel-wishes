import React from "react";
import { BoxesSection, CardSections, ExtraBlueSection } from "../../assets/others/Others";
import carrer1 from "../../assets/images/carrer1.png";
import carrer2 from "../../assets/images/carrer2.png";
import carrer3 from "../../assets/images/carrer3.png";
import carrer4 from "../../assets/images/carrer4.png";
import carrerpossition1 from "../../assets/images/carrerpossition1.png"
import carrerpossition2 from "../../assets/images/carrerpossition2.png"
import carrerpossition3 from "../../assets/images/carrerpossition3.png"
import carrerpossition4 from "../../assets/images/carrerpossition4.png"
import "../../components/cards/Cards.css"

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
  const middleExtraSectionBlue = {
    heading: "Join Our Team at Angel Wishes Memory Keeper",
    text: (
      <div>
        <p>At Angel Wishes Memory Keeper, we are more than just a company; we are a
        community united by a shared mission to make the most significant
        moments count.
        </p>
        <p>
        Our work is dedicated to providing comfort, support, and
        essential services to individuals and families during their most
        challenging times. If you are passionate about making a difference and
        helping others in meaningful ways, we invite you to explore a career
        with us.
        </p>
      </div>
    ),

    className: "blueSection container ",
  };
  const cardsData=[
    {
      heading:"Client Support Specialist",
      paragraphText:"Provide direct assistance and support to our clients, helping them navigate our services and ensuring they receive the care and information they need.",
      image:carrerpossition1,
      className:"col-lg-3 col-md-6 col-sm-12 p-0 d-flex justify-content-around"

    },
    {
      heading:"Legal Consultant",
      paragraphText:"Specialize in estate planning, wills, and trusts to provide expert advice and peace of mind to our clients and their families.",
      image:carrerpossition2,
      className:"col-lg-3 col-md-6 col-sm-12 p-0 d-flex justify-content-around"

    },
    {
      heading:"IT Security Analyst",
      paragraphText:"Help safeguard our data and ensure that our technological infrastructure remains secure and reliable, respecting the confidentiality of our client's sensitive information",
      image:carrerpossition3,
      className:"col-lg-3 col-md-6 col-sm-12 p-0 d-flex justify-content-around"

    },
    {
      heading:"Content Creator",
      paragraphText:"Craft meaningful stories and informational content to communicate our mission and services to a broader audience..",
      image:carrerpossition4,
      className:"col-lg-3 col-md-6 col-sm-12 p-0 d-flex justify-content-around cardhoverStyle"

    },
  ]
  return (
    <div className="carrer-parent">
      <div className="child-1 container my-5">
        <BoxesSection data={topSectionData} headingText="Why work with us?" />
      </div>
      <div className="child-2 my-5 " style={{backgroundColor:"#1C96C5"}}>
        <ExtraBlueSection
          heading={middleExtraSectionBlue.heading}
          text={middleExtraSectionBlue.text}
          className={middleExtraSectionBlue.className}
        />
      </div>
      <div className="child-3 card-Section mt-4 my-5">
        <div className="container">
    <CardSections data={cardsData} />
        </div>

      </div>
    </div>
  );
};
