import React from "react";
import { CommonParagraph } from "../../assets/others/Others";
import webColor from "../../assets/colors/Colors";

export const PrivacyPolicy = () => {
  const privacyPolicyContent = [
    {
      headingText: "Introduction",
      paragraphText:
        "Welcome to Angel Wishes Memory Keeper. We are committed to protecting your privacy. This Privacy Policy outlines our practices concerning the collection, use, and protection of personal information for residents of Nevada, in accordance with applicable state laws including the Nevada Revised Statutes (NRS) regarding data privacy.",
    },
    {
      headingText: "Information We Collect",
      paragraphText: "",
    },
    {
      headingText: "Personal Information",
      paragraphText:
        "We collect information that can identify you, such as your name, email address, telephone number, and other details you provide when you use our website or services. This may also include any data you enter while using our services or any other interactions with us.",
    },
    {
      headingText: "Usage Information",
      paragraphText:
        "When you visit our website, we may collect information about your interaction with our site, such as IP addresses, browser type, language, access times, and referring website addresses",
    },
    {
      headingText: "Health Information",
      paragraphText:
        "For services tailored to end-of-life planning, we may collect sensitive health information with your explicit consent.",
    },
    {
      headingText: "How We Use Your Information",
      paragraphText: (
        <div>
          <h5>To Provide Services</h5>
          <p>
            Your information helps us to personalize and improve our services,
            including maintaining your account, providing customer support, and
            communicating with you about our services.
          </p>
          <h5>For Legal Compliance</h5>
          <p>
            We use your information as necessary to comply with our legal
            obligations, resolve disputes, and enforce our agreements.
          </p>
          <h5>For Marketing Purposes</h5>
          <p>
            With your consent, we may use your information to send you
            promotional communications about new services, features, and offers.
          </p>
        </div>
      ),
    },
    {
      headingText: "Sharing Your Information",
      paragraphText: (
        <div>
          <h5>Third-Party Service Providers</h5>
          <p>
            We share information with third-party service providers, such as web
            hosting and analytics, who perform services on our behalf. These
            service providers are bound by contractual obligations to keep
            personal information confidential and use it only for the purposes
            for which we disclose it to them.
          </p>
          <h5>Legal Requirements</h5>
          <p>
            We may disclose your personal information if required by law or if
            we believe that such action is necessary to comply with a legal
            obligation, protect and defend our rights or property, or protect
            the safety of our users or others.
          </p>
          <h5>Business Transfers</h5>
          <p>
            Your personal information may be transferred in the event of a
            merger, acquisition, or asset sale. We will provide notice before
            your personal information is transferred and becomes subject to a
            different privacy policy.
          </p>
        </div>
      ),
    },

    {
      headingText: "Your Privacy Rights",
      paragraphText:
        "Under Nevada law, you have the right to access and control your personal information. You may request access to, correction of, or deletion of your personal information at any time. Nevada residents also have the right to opt out of the sale of their personal information.To exercise these rights, please contact us using the information below.",
    },
    {
      headingText: "Data Security",
      paragraphText:
        "We implement various security measures to maintain the safety of your personal information when you place an order or enter, submit, or access it. These include encryption practices, secure servers, and limited access to personal information by staff subject to strict confidentiality obligations.",
    },
    {
      headingText: "Children’s Privacy",
      paragraphText:
        "Our website is not intended for children under 13, and we do not knowingly collect data from children under this age. If we learn that we have collected personal information from a child under 13, we will delete that information as quickly as possible.",
    },
    {
      headingText: "Changes to This Privacy Policy",
      paragraphText:
        "We may update this policy from time to time to reflect changes in our practices or relevant laws. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice.",
    },
    {
      headingText: "Contact Us",
      paragraphText: (
        <div>
          <p>
            If you have any questions about this Privacy Policy or our treatment
            of your personal information, please write to us by email at
            privacy@angelwishesmemorykeeper.com or by mail at:
          </p>
          <p>Angel Wishes Memory Keeper and Consulting, LLC</p>
          <p>4841 W Craig Road</p>
          <p>Las Vegas, Nevada 89130</p>
          <p>USA</p>
          <p>
            This Privacy Policy is designed to comply with Nevada privacy laws
            and to provide full transparency into our privacy practices,
            ensuring that users understand how their personal information is
            collected, used, and protected.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="parent">
      <div className="child-1 container my-5">
      <div className="text-center my-3">
          <h1>Privacy <span style={{color:webColor.themeColor}}>
            Policy 
            </span> 
            </h1>
        </div>
        {privacyPolicyContent?.map((item) => (
          <CommonParagraph style={{fontSize:"16px"}}
            paragraphText={item.paragraphText}
            className=""
            headingText={item.headingText}
          />
        ))}
      </div>
    </div>
  );
};
