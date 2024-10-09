import React from "react";
// import "./styles.css";
import { Box, Typography } from "@mui/material";
import webColor from "../../assets/colors/Colors";

export const AccessibilityReports = () => {
  return (
    <div>
       <div className="text-center my-5">
          <h1>Accessibility <span style={{color:webColor.themeColor}}>
          Reports 
            </span> 
            </h1>
        </div>
      <Box  sx={{ width: { md: "90%", xs: "100%" }, margin: "0 auto" }}>
     
        
        <h3
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            // fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Commitment to Accessibility
        </h3>
        <Box>
          <h5 py={2} >
            Inclusivity at Angel Wishes Memory Keeper
          </h5>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            At Angel Wishes Memory Keeper, we are dedicated to building a
            service everyone can use, including people with disabilities. Our
            commitment to accessibility reflects our core values of compassion
            and inclusion. We continuously strive to improve our website and
            services to ensure they are accessible to all users, regardless of
            technology or ability.
          </Typography>
        </Box>
        <h3
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            // fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Accessibility Features
        </h3>
        <Box>
          <h5 py={2} >
            Enhanced User Experience
          </h5>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            Our website incorporates a variety of accessibility features
            designed to enhance the user experience for everyone:
          </Typography>
          <ul>
            <li className="py-2 ">
              <Typography>
                <span style={{ fontWeight: "bold" }}>Text-to-Speech: </span>
                This feature allows users to listen to the content, making it
                easier for those with difficulty reading screens.
              </Typography>
            </li>
            <li className="py-2 ">
              <Typography>
                <span style={{ fontWeight: "bold" }}>High Contrast Mode: </span>
                Users can switch to a high contrast mode that enhances text
                visibility and clarity for those with vision impairments.
              </Typography>
            </li>
            <li className="py-2 ">
              <Typography>
                <span style={{ fontWeight: "bold" }}>Alt Text for Images: </span>
                All images on our site are accompanied by alternative text
                descriptions, making information conveyed by images accessible
                to individuals using screen readers.
              </Typography>
            </li>
            <li className="py-2 ">
              <Typography>
                <span style={{ fontWeight: "bold" }}>Scalable Text:</span> Users
                can adjust the text size through their browser settings to make
                it easier to read.
              </Typography>
            </li>
          </ul>
        </Box>

        <h3
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            // fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Ongoing Efforts
        </h3>

        <Box>
          <h5 py={2} >
            Continuous Improvement
          </h5>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            We recognize that technology and needs evolve, and so does our
            approach to accessibility. We are committed to ongoing development
            and regular accessibility audits to identify and address potential
            accessibility issues. Our goal is to comply with WCAG 2.1 AA
            standards, ensuring that our services are accessible to the widest
            possible audience.
          </Typography>
        </Box>

        <h3
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            // fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Feedback and Contact Information
        </h3>

        <Box>
          <h5 py={2} >
            Your Voice Matters
          </h5>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            Your feedback is crucial in helping us improve our accessibility
            standards. If you encounter any accessibility barriers or have
            suggestions on how we can make our services more accessible, please
            do not hesitate to contact us:
          </Typography>
          <ul>
            <li className="py-2 ">
              <Typography>
                <span style={{ fontWeight: "bold", paddingRight: "5px" }}>
                  Email:
                </span>
                accessibility@angelwishesmemorykeeper.com
              </Typography>
            </li>
            <li className="py-2 ">
              <Typography>
                <span style={{ fontWeight: "bold", paddingRight: "5px" }}>
                  Phone:
                </span>
                (555) 123-4568
              </Typography>
            </li>
            <li className="py-2 ">
              <Typography>
                <span style={{ fontWeight: "bold", paddingRight: "5px" }}>
                  Contact Form:
                </span>
                Contact Us
              </Typography>
            </li>
          </ul>
          <Typography sx={{ color: "#000", textAlign: "justify" }}>
            Please provide as much detail as possible in your feedback,
            including the nature of the accessibility issue and any suggestions
            for improvement
          </Typography>
        </Box>

        <h3
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontWeight: "bold",
          }}
        >
          Accessibility Resources
        </h3>
        <Box>
          <h5 py={2} >
            Learn More About Our Efforts
          </h5>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            For more information on our accessibility policies and resources, or
            to view our annual accessibility reports, please visit the links
            below:
          </Typography>
          <ul>
            <li className="py-2 ">
              <Typography>[Link to Detailed Accessibility Policy]</Typography>
            </li>
            <li className="py-2 ">
              <Typography>[Link to Annual Accessibility Reports]</Typography>
            </li>
          </ul>
        </Box>

        <Box  sx={{marginBottom:"10px"}}>
          <h3 py={2} sx={{ fontSize: 18,  }}>
            Let's Make a Difference Together
          </h3>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            At Angel Wishes Memory Keeper, we believe in creating an environment
            that supports and values all users. We are continually working to
            enhance the accessibility of our website and services to ensure that
            everyone has equal access to the resources and support they need.
            Join us in our mission to make end-of-life planning inclusive and
            accessible to all.
            At Angel Wishes Memory Keeper, we believe in creating an environment
            that supports and values all users. We are continually working to
            enhance the accessibility of our website and services to ensure that
            everyone has equal access to the resources and support they need.
            Join us in our mission to make end-of-life planning inclusive and
            accessible to all.
          </Typography>
        </Box>
        {/* <Box>
          <h3 py={2} sx={{ fontSize: 18, }}>
          [CTA BUTTON - Provide Accessibility Feedback]
          </h3>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
          This accessibility report page copy is crafted to convey Angel Wishes Memory Keeper's
commitment to accessibility, providing clear information on features, ongoing efforts, and how
users can contribute feedback. It aims to foster a sense of community and proactive
engagement, emphasizing inclusivity and continuous improvement in accessibility practices
          </Typography>
        </Box> */}
      </Box>
    </div>
  );
};


