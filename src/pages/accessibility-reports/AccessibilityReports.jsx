import React from "react";
import { BoxesSection } from "../../assets/others/Others";
import accessreport1 from "../../assets/images/accessreport1.png";
import accessreport2 from "../../assets/images/accessreport2.png";
import accessreport3 from "../../assets/images/accessreport3.png";
import accessreport4 from "../../assets/images/accessreport4.png";

export const AccessibilityReports = () => {
  const topSectionData = [
    {
      headingText: "Text-to-Speech",
      paragraphText:
        "This feature allows users to listen to the content, making it easier for those with difficulty reading screens.",
      image: accessreport1,
      width: "80px",
    },
    {
      headingText: "High Contrast Mode",
      paragraphText:
        "Users can switch to a high contrast mode that enhances text visibility and clarity for those with vision impairments.",
      image: accessreport2,
      width: "80px",
    },
    {
      headingText: "Alt Text for Images",
      paragraphText:
        "All images on our site are accompanied by alternative text descriptions, making information conveyed by images accessible to individuals using screen readers.",
      image: accessreport3,
      width: "80px",
    },
    {
      headingText: "Scalable Text",
      paragraphText:
        " Users can adjust the text size through their browser settings to make it easier to read.",
      image: accessreport4,
      width: "80px",
    },
  ];
  return (
    <div className="parent">
      <div className="child-1 container my-5">
        <BoxesSection data={topSectionData} 
        subHeading='Our website incorporates a variety of accessibility features designed to enhance the user experience for everyone '
        headingText="Enhanced User Experience" />
      </div>
    </div>
  );
};
