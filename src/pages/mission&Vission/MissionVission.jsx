import React from "react";
import { ContentSection } from "../../assets/contentSection/ContentSection";
import mission1 from "../../assets/images/mission1.png";
import mission2 from "../../assets/images/mission2.png";
import webColor from "../../assets/colors/Colors";

export const MissionVission = () => {
  const pageContent = [
    {
      heading: "Our Mission",
      subHeading: "Empowering End-of-Life Dignity",
      possition: "left",
      text: "At Angel Wishes Memory Keeper, we aim to provide individuals and families with the tools and support needed to capture, celebrate, and preserve life's most precious moments. We strive to ease the challenges of final wishes planning by offering comprehensive, compassionate services, including memory keeping, estate planning, and access to vital legal and healthcare resources. We aim to ensure that every individual can leave a legacy of love and care that endures beyond their lifetime.",
      className: "content-Parent  row my-4 flex-lg-row-reverse  ",
      img: mission1,
      // sizes:["540px" , "378px"],
      sizes:["100%" , "378px"],


    },
    {
      heading: "Our Vision",
      subHeading: "Creating a Legacy of Moments",
      possition: "right",
      text: "We envision a world where no one has to face the end of life alone or unprepared. Our vision is to be the leading platform for final wishes planning and legacy preservation, serving communities across North America. We aspire to foster a culture that values and honors life’s journey by enabling individuals to seamlessly create, store, and share their most treasured memories and essential documents. Our ultimate goal is to make saying goodbye a little easier, ensuring peace of mind for our clients and their loved ones.",
      className: "content-Parent  row my-4    ",
      img: mission2,
    },
  ];
  return (
    <div className="parent ">
      <div className="text-center my-5">
          <h1>Mission   <span style={{color:webColor.themeColor}}>
          And  
             </span> 
            &nbsp;Vision
            </h1>
        </div>
      <div className="child-1 container mt-5">
        <ContentSection data={pageContent} />


        {/* /////by kaleem awl fwl changes */}
        <div>
          <h3>
            Our Values
          </h3>
          <h5 className=" py-2">Compassion, Integrity, and Innovation</h5>
          <ul className="py-2">
            <li className="py-2"><span className="fw-bold ">
              Compassion:
            </span>
              At the heart of all we do is a profound empathy for those we serve. We approach every interaction with care and understanding, acknowledging the sensitive nature of our work.
            </li>
            <li className="py-2"><span className="fw-bold">
              Integrity:
            </span>
              We commit to the highest standards of professionalism and ethical conduct. Trust is the foundation of our relationships with clients, partners, and each other.
            </li>
            <li><span className="fw-bold">
              Innovation:
            </span>
              We continuously seek innovative ways to improve our services and clients' experiences. From secure digital storage solutions to user-friendly interfaces, we embrace technology to meet the needs of today’s families.
            </li>

          </ul>



        </div>
        <div>
          <h3>
            Our Commitment


          </h3>
          <h5 className="py-2">Ensuring Security and Confidentiality</h5>
          <p>
            We understand the importance of privacy and security for our clients. Angel Wishes Memory Keeper is committed to protecting the information you entrust to us. We employ state-of-the-art security measures and adhere to strict privacy policies to safeguard your personal and sensitive data, ensuring that your memories and documents are always secure and accessible.


          </p>
        </div>
        <div>
          <h3>
            How We Make a Difference


          </h3>
          <h5 className=" py-2" >Supporting You Every Step of the Way</h5>
          <p>
            Angel Wishes Memory Keeper is more than just a service; it’s a partner in planning for life’s final chapters. We provide support not only for individuals planning for their own future but also for families and caregivers navigating the complexities of end-of-life care. Our comprehensive resources and dedicated team ensure that you have the support you need to make informed decisions and create a lasting legacy.




          </p>
        </div>
        <div>
          <h3>
            Join Us




          </h3>
          <h5 className="">Build a Legacy with Angel Wishes Memory Keeper

          </h5>
          <p>
            Are you ready to take control of your end-of-life planning? Do you want to ensure your life’s stories and achievements are preserved for generations to come? Reach out to us at Angel Wishes Memory Keeper, and let us help you create a legacy filled with dignity and love.






          </p>
        </div>
      </div>
    </div>
  );
};
