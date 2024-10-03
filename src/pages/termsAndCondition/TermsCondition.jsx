import React from "react";
import { CommonParagraph } from "../../assets/others/Others";
import webColor from "../../assets/colors/Colors";

export const TermsCondition = () => {
  const termsConditionContent = [
    {
      headingText: "",
      paragraphText:
        "Welcome to Angel Wishes Memory Keeper! You agree to comply with and be bound by the following terms and conditions by accessing and using our website, services, and tools. Please review these terms carefully. If you disagree with these terms, you should not use this site or any of its services or contact us with any questions.",
    },
    {
      headingText: "Use of the Website",
      paragraphText: (
        <div>
          <h5>License to Use Website</h5>
          <p>
            Angel Wishes Memory Keeper grants you a non-exclusive,
            non-transferable, revocable license to use the website strictly in
            accordance with these terms.
          </p>
          <h5>User Conduct</h5>
          <p>
            You agree not to use the site in a way that may impair its
            performance, corrupt its content, or otherwise reduce its overall
            functionality. You also agree not to compromise the
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
      headingText: "Intellectual Proper",
      paragraphText:
        "The content, layout, design, data, databases, and graphics on this website are protected by intellectual property laws. The content is solely owned by Angel Wishes Memory Keeper unless otherwise indicated. Except as expressly stated herein, you may not reproduce, copy, distribute, or create derivative works from this content without the express written permission of Angel Wishes Memory Keeper.",
    },
    {
      headingText: "User Accounts",
      paragraphText:
        "If you create an account at Angel Wishes Memory Keeper, you are responsible for maintaining its security and for all activities that occur under it. You must immediately notify us of any unauthorized use of your account or other security breaches.",
    },
    {
      headingText: "Links to Other Websites",
      paragraphText:
        "Our Service may contain links to third-party websites or services that are not owned or controlled by Angel Wishes Memory Keeper. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.",
    },
    {
      headingText: "Limitation of Liability",
      paragraphText:
        "Angel Wishes Memory Keeper will not be liable for any consequential, incidental, indirect, exemplary, punitive, or special damages of any kind, however, caused, including loss of profits, revenue, data, or use, incurred by you, whether under theory of contract, tort (including negligence), warranty or otherwise, irrespective of whether we have been advised of the possibility of such damages.",
    },
    {
      headingText: "Indemnification",
      paragraphText:
        "You agree to indemnify, defend, and hold harmless Angel Wishes Memory Keeper, its officers, directors, employees, agents, licensors, suppliers, and any third-party information providers to the service from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms and Conditions by you.",
    },
    {
      headingText: "Governing Law",
      paragraphText:
        "These Terms shall be governed and construed in accordance with the laws of the state where Angel Wishes Memory Keeper is headquartered, without regard to its conflict of law provisions",
    },
    {
      headingText: "Contact Us",
      paragraphText: (
        <div>
          <p>
            if you have any questions about these Terms, please contact us at:
          </p>
          <ul>
            <li>Email: contact@angelwishesmemorykeeper.com</li>
            <li>Phone: (555) 123-4567</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="parrent">
      <div className="child-1 container my-5 ">
      <div className="text-center my-3">
          <h1>Terms And  <span style={{color:webColor.themeColor}}>
            Conditions 
            </span> 
            </h1>
        </div>
        {termsConditionContent?.map((item) => (
          <CommonParagraph
            className=""
            style={{ fontSize: "16px" }}
            paragraphText={item.paragraphText}
            headingText={item.headingText}
          />
        ))}
      </div>
    </div>
  );
};
