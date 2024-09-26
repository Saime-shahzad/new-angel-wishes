import React from "react";
import { CommonParagraph, MiddleHeader } from "../../assets/others/Others";
import webColor from "../../assets/colors/Colors";
import { Inputs } from "../../assets/input/Inputs";
import icons from "../../assets/icons/icons";
import { Buttons } from "../../components/button/Buttons";

export const Contact = () => {
  const midleheaderSection = [
    {
      heading: (
        <span>
          We're Here to{" "}
          <span style={{ color: webColor.themeColor }}>Help </span>
        </span>
      ),
      paragraphText:
        "We at Angel Wishes Memory Keeper value your questions and concerns. Whether you need more information about our services, assistance with your account, or guidance through our platform, our dedicated team is ready to help. Reach out to us, and let's make your experience as fulfilling and comforting as possible.",
    },
    {
      heading: '',
      paragraphText:
        "Please fill out the form below with your details and query. We ensure that every message is read and responded to promptly. Here’s how you can get your questions answered or provide us with feedback:",
    },
  ];

  const formContent=[
    {
      label:"User Name",
      type:"text",
      icon:icons.manIcons

    },
    {
      label:"Email Address",
      type:"email",
      icon:icons.mailIcons

    },
    {
      label:"Contact No",
      type:"number",
      icon:icons.phoneicons
      
    },
    {
      label:"Message",
      type:"text",
      icon:icons.messageicons

    },
  ]

  const formRightSideContent=[

    {
      heading:"Contact Information",
      paragraphText:<div className="paragraphText-parent">
<p>
Feel free to call us at (949) 771-6361. Our team is available 8am- 4pm PST Monday -Friday to ensure you receive the help you need.<br/>
Send us an email at support@angel-wishes.com. We will respond to all inquiries within 24 hours.
<br/>We welcome you to visit our office for a personal consultation. Please call ahead to schedule an appointment.
</p>
      </div>
    },
    {
      heading:"We Look Forward to Hearing from You",
      paragraphText:<div className="paragraphText-parent">
<p>
Every message is an opportunity for us to serve you better. Contact us today, and let us help you preserve your memories and secure your legacy. Whether you’re planning for the future or need immediate assistance, Angel Wishes Memory Keeper is here for you every step of the way.
</p>
      </div>
    },
    {
      heading:"Connect with Us on Social Media",
      paragraphText:<div className="paragraphText-parent">
<p>
Stay updated with the latest news and updates from Angel Wishes Memory Keeper by following us on our social media platforms. Join our community for insights, stories, and more:
</p>
      </div>
    },
  ]
  return (
    <div className="Contact-parrent container">
      <div className="middleheaderSections mt-5">
        {midleheaderSection?.map((item) => (
          <MiddleHeader
            paragraphText={item.paragraphText}
            headingText={item.heading}
          />
        ))}
      </div>

      {/* ///contact form//// */}
        <div className="formParrent mb-2">
         <div className=" row ">
          <div  className="contact-word-parent  fs-1 col-lg-6 col-md-6 col-sm-6 p-2 text-lg-end text-sm-start "  style={{backgroundColor:"#E9EAEB" , color:"#FDB515"}}>
        CONTACT
          </div>
          <div  className="WITH-US-word-parent fs-1 col-lg-6 col-md-6 p-2  col-sm-6 text-white" style={{backgroundColor:"#1C96C5"}}>
        WITH US
          </div>
         </div>
          <div className="row ">
        <div className="from-left-side px-5 py-3 col-lg-6 col-md-6 col-sm-12" style={{backgroundColor:"#E9EAEB"}}>
        <form className="mx-auto">
        {formContent?.map((item) =>{
          return(
            <div className="form-middleSection-parrent">
              <Inputs type={item.type} labelName={item.label} icon={item.icon} />
            </div>
          )
        })}
        <div className="buttons-parrent d-flex justify-content-around  ">

        <Buttons type="submit" text="Submit" style={{backgroundColor:"#FDB515"}} />
        </div>
          </form>   
        </div>

        {/* ///form Right Side */}
        <div className="from-right-side col-lg-6 col-md-6 col-sm-12" style={{backgroundColor:"#1C96C5"}}>
          {formRightSideContent?.map((item) =>{
            return(
              <div className="parent text-white">
                
                <CommonParagraph className="text-center w-100  p-2" paragraphText={item.paragraphText} headingText={item.heading} />
              </div>
            )
          })}
        </div>
        </div>
        </div>

      {/* ///closed/// */}
    </div>
  );
};
