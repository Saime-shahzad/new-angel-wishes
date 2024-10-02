import React from "react";
import { ContentSection } from "../../assets/contentSection/ContentSection";
import mission1 from "../../assets/images/mission1.jpg";
import mission2 from "../../assets/images/mission2.jpg";

export const MissionVission = () => {
  const pageContent = [
    {
      heading: "Our Mission",
      subHeading: "Empowering End-of-Life Dignity",
      possition: "left",
      text: "At Angel Wishes Memory Keeper, we aim to provide individuals and families with the tools and support needed to capture, celebrate, and preserve life's most precious moments. We strive to ease the challenges of final wishes planning by offering comprehensive, compassionate services, including memory keeping, estate planning, and access to vital legal and healthcare resources. We aim to ensure that every individual can leave a legacy of love and care that endures beyond their lifetime.",
      className: "content-Parent  row my-4 flex-lg-row-reverse  ",
      img: mission1,
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
      <div className="child-1 container mt-5">
        <ContentSection data={pageContent} />
      </div>
    </div>
  );
};
