import React from "react";
import webColor from "../../assets/colors/Colors";
import './About.css'
import about01 from "../../assets/images/about01.png"
import about1 from "../../assets/images/about1.png"
import about2 from "../../assets/images/about2.png"
import about3 from "../../assets/images/about3.png"
import about4 from "../../assets/images/about4.png"

import { ContentSection } from "../../assets/contentSection/ContentSection";

export const AboutUs = () => {
  const textListItems = [
    "Power of Attorney",
    "A Will",
    "A Living Trust",
    "End-of-Life Services",
    "End-of-Life Consulting",
    "Family Photo Storage",
    "Family Video Storage",
    "Image and Video Storage"
  ];
  const aboutUsContent = [
    {
      // heading:"Save Your Memories",
      heading: (
        <span>
          Our <span style={{ color: webColor.themeColor }}>Brand </span>Story
        </span>
      ),
      subHeading: "We Allow Families to Cherish Every Moment",
      possition: "left",
      text: "Angel Wishes Memory Keeper was started when our founder, Melanie, was at home sick and meditated about her soul’s purpose. It came to her in two recurring dreams: to build a place to keep important documents and life’s treasures and stories. An online legacy keeper to hold life’s best moments for all. It was at that moment she realized how difficult it was to find a single place, person, or service that provided everything required for those entering end-of-life and their loved ones. She had to go to multiple locations to address these needs, from a family photo download service to a memory maker and video service to an end-of-life consultancy. And that’s when it hit her: there was nowhere to go to save and share memories and videos; nowhere to find out how to write a will; nowhere to get power of attorney. At least, not all in one place.",
      className: "content-Parent  row my-4 flex-lg-row-reverse  ",
      img: about01,
      extraContent:<div className="extraontent-Parent">
        <p className="mt-3">
        <div className="fst-italic fw-bold">
       
          <div> 
          ❝ At that moment, I understood that creating a portal for caregivers, families, and friends was up to me. Friends lost family members overnight without any will or trust paperwork. I saw someone denied information about her mother’s medical condition because they did not have the proper paperwork once her mom had been transferred to another hospice. That’s why our goal is to help people come together around their loved ones, support them, and care for them the way they deserve at the end of their lives.❞
            
       
     
     
            </div>
             
              
         
         
          <span className="text-center  fw-normal "  style={{fontSize:"14px" , marginBottom:"15px"}}>

- Melanie M., Founder, Angel Wishes Memory Keeper 
</span>
            </div>
                
       <p className="my-4">
        
        We are a caring team that makes life’s most important moments count through pictures, videos, stories, and comprehensive end-of-life services. We want to give people with terminal illnesses a place to create and store memories, be at peace, and pull together their greatest memories. Finally, we help integrate life’s best moments along with estate plans, power of attorney, and financial and health considerations for those entering end-of-life. Angel Wishes Memory Keeper aims to help families gather all their wishes and estate planning into an actionable plan.
        </p> 
        </p>
      </div>
    },

    {
      // heading:<span style={{color:webColor.themeColor}}> Secure <span>Your</span></span>,
      heading: (
        <span>
          Who We <span style={{ color: webColor.themeColor }}>Serve </span>
        </span>
      ),
      subHeading: "",
      possition: "right",
      text: "Angel Wishes Memory Keeper was created to serve a variety of people. Whether you are an individual entering end-of-life, a family member of an individual entering end-of-life, a caregiver, or otherwise, our services are for you. Whether you are in New York, California, or anywhere in between if you have a loved one nearing end-of-life and do not know where to turn, turn to Angel Wishes Memory Keeper. Our dedicated staff is available 24/7 to ensure you have access to photos, videos, memories, and any other information you may need as you plan for your loved one’s end-of-life needs. As members of the community just like yourself, we understand what it is like to lose a loved one, and we want to make the process of managing that loss as compassionate and understanding as possible.",
      className: "content-Parent  row my-4    ",
      img: about1,
      sizes:["540px" , "492px"]
    },

    {
      heading: (
        <span>
          Who We <span style={{ color: webColor.themeColor }}>Work </span> With
        </span>
      ),
      // subHeading: "Expert Guidance When You Need It Most",
      possition: "left",
      text: (
        <div className="text-parent">
          <p>
            Angel Wishes Memory Keeper has partnerships with vendors across the
            country. We do the hard work of vetting professionals in our space
            so that you don’t have to. Whether you need:
          </p>
          <ul>
            {textListItems?.map((items) =>{
              return(
                <div>
                <li>{items}</li>
                </div>
              )
            })}
          </ul>
        </div>
      ),
      className:
        "content-Parent  row my-5 flex-lg-row-reverse justify-content-between   ",
      img: about2
    },

    {
      heading: (
        <span>
          How We 
          <span style={{ color: webColor.themeColor }}> Do It</span>{" "}
          Assistance
        </span>
      ),
      // subHeading:"subheading",
      possition: "right",
      text: "Angel Wishes Memory Keeper is built on a custom AWS secure configuration with 400 terabytes of dedicated storage (that’s a lot!). No matter what, your precious memories are safe in our Angel’s hands. When you need to access a sensitive document, you can rest assured you’ll gain quick access to it with 99.98% uptime.",
      className: "content-Parent  row my-5   ",
      img: about3
    },
    {
      heading: (
        <span>
          What’s <span style={{ color: webColor.themeColor }}>Next?  </span> 
        </span>
      ),
      // subHeading: "Expert Guidance When You Need It Most",
      possition: "left",
      text: (
        <div className="text-parent">
          <p>
          Are you an individual, family member, or caregiver looking for resources to help you manage someone’s end-of-life needs? If so, that’s why we exist. Simply use the button below to reach out to us, fill out the form, and we will get back to you within 24 hours. Learn more about what makes Angel Wishes Memory Keeper so valuable to families and their loved ones across America.
          </p>
          <p>
          Angel Wishes Memory Keeper ensures full confidentiality with a robust network security infrastructure, a comprehensive privacy policy, and full HIPAA compliance. We know how important these documents are to you, and we do not take this responsibility lightly.
          </p>
          
        </div>
      ),
      className:
        "content-Parent  row my-5 flex-lg-row-reverse justify-content-between   ",
      img: about4,
    },
  ];
  return(
   <div className="AboutUs-Parrent">

<div className="child-1">
  <ContentSection data={aboutUsContent} />
  
</div>

  </div>
  )
};
