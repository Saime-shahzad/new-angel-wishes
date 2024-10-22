import React from "react";
import { ContentSection } from "../../assets/contentSection/ContentSection";
import kids1 from "../../assets/images/kids1.png";
import kids2 from "../../assets/images/kids2.jpg";
import kids3 from "../../assets/images/kids3.png";
import kids4 from "../../assets/images/kids4.jpg";
import webColor from "../../assets/colors/Colors";
import { MiddleHeader } from "../../assets/others/Others";
import { Buttons } from "../../components/button/Buttons";
import {useRoutFunction} from "../../assets/others/UseFullFunctions";

export const KidsCorner = () => {
  const RoutFunction = useRoutFunction();

  const kidsPageContent = [
    {
      // heading:"Save Your Memories",
      heading: (
        <span>
          What <span style={{ color: webColor.themeColor }}>We Do Here</span>
        </span>
      ),
      subHeading: "A Safe Space to Save Your Favorite Memories",
      possition: "left",
      // text: "Here at Angel Wishes Memory Keeper, we help you keep all your favorite memories safe and sound, from photos of a fun day to a video of your birthday party or stories about your adventures safe. It’s like having a digital treasure chest to save all the most important things in your life! Whether you want to reflect on these memories later or share them with someone you love, we ensure they're always there for you.",
      text: <div>
      <p>
      Here at Angel Wishes Memory Keeper, we help you keep all your favorite memories safe and sound, from photos of a fun day to a video of your birthday party or stories about your adventures safe. It’s like having a digital treasure chest to save all the most important things in your life! Whether you want to reflect on these memories later or share them with someone you love, we ensure they're always there for you.

      </p>
      <Buttons text="FAQs" onClick={() => RoutFunction("/faqs")} style={{ backgroundColor: "#FDB515" }} />
    </div>,
      className: "row my-4 flex-lg-row-reverse   ",
      // className: "content-Parent  row my-4 flex-lg-row-reverse  ",
      img: kids1,
      // sizes:["480px" , "300px"],
      sizes:["100%" , "300px"],

    },

    {
      heading: (
        <span style={{ color: webColor.themeColor }}>
          {" "}
          Why <span>Memories </span>Matter
        </span>
      ),
      subHeading: "Keeping Your Stories Alive",
      possition: "right",
      text: (
        <div>
          <p>
            Memories are super important because they tell your story! Think
            about your favorite book or movie; just like those stories, your
            memories tell a wonderful tale about you. Saving these memories
            means you can revisit them anytime you want. It’s like having a book
            about your life that you can read repeatedly. And for kids who are
            not feeling well, it's important to have all their happy moments
            saved to look at whenever they need a smile.
          </p>
          <Buttons text="AboutUs" onClick={() => RoutFunction("/about-us")} style={{ backgroundColor: "#FDB515" }} />
        </div>
      ),

      className: "content-Parent  row my-4    ",
      img: kids2,
      // sizes:["480px" , "300px"],
      sizes:["100%" , "300px"],


    },

    {
      heading: (
        <span>
          Our{" "}
          <span style={{ color: webColor.themeColor }}>Special Services </span>{" "}
          for Kids
        </span>
      ),
      subHeading: "Making Each Day Brighter",
      possition: "left",
      text: "We have some cool tools just for you! You can create your photo album, make videos telling your story, or write down your adventures in a diary stored safely in the cloud, where only you and your family can see it. And if you ever need help or have a question about how to do something, our friendly team is here to help you every step of the way.",
      className:
        "content-Parent  row my-5 flex-lg-row-reverse justify-content-between   ",
      img: kids3,
      // sizes:["480px" , "300px"],
      sizes:["100%" , "300px"],

    },

    {
      heading: (
        <span>
          How We
          <span style={{ color: webColor.themeColor }}>Help Families</span>{" "}
        </span>
      ),
      subHeading: "Gathering Important Stuff in One Place",
      possition: "right",
      text: (
        <div>
          <p>
            When families go through tough times, like when someone is very
            sick, there are many things to take care of. At Angel Wishes Memory
            Keeper, we help families gather all the essential documents—like
            doctors’ notes, pictures, and even your drawings—into one safe spot.
            This makes everyone feel less worried because they know everything
            necessary is kept together and won’t lose it. Let us keep all your
            favorite digital memories and documents safe and in one place.
          </p>
          <Buttons text="AboutUs" onClick={() => RoutFunction("/about-us")} style={{ backgroundColor: "#FDB515" }} />
        </div>
      ),
      className: "content-Parent  row my-5   ",
      img: kids4,
      // sizes:["480px" , "300px"],
      sizes:["100%" , "300px"],


    },
  ];
  const extraContent = [
    {
      headingText: (
        <div>
          Why <span style={{ color: webColor.themeColor }}>Join Us?</span>
          <br />
          Create, Share, and Smile
        </div>
      ),
      paragraphText: (
        <div>
          <p>
            At Angel Wishes Memory Keeper, we believe every child’s story is
            unique and precious. We invite you to start creating your memory
            collection with us. You can start filling your virtual treasure
            chest today and add more smiles and stories whenever possible!
          </p>
          <Buttons text="Sign up Now" onClick={() => RoutFunction("/sign-up")} style={{ backgroundColor: "#FDB515" }} />
        </div>
      ),
    },
    {
      headingText: "",
      paragraphText: (
        <div>
          <p>
            Remember, your stories and memories are essential no matter
            what—they are the colorful paints that illustrate your life. Let’s
            keep them safe and sound together so you and your family can enjoy
            them forever. If you want to learn more about how we do this and why
            it’s so unique, click the buttons below!
          </p>
          <div className="d-flex justify-content-center">
            <Buttons text="About-us" onClick={() => RoutFunction("/about-us")} style={{ backgroundColor: "#FDB515" }} />
            <Buttons
              text="FAQS"
              style={{ backgroundColor: "#FDB515", marginLeft: "3px" }}
              onClick={() => RoutFunction("/faqs")}
            />
          </div>
        </div>
      ),
    },
  ];
  const topContent = {
    headingText: (
      <div>
        Kids' Corner at{" "}
        <span style={{ color: webColor.themeColor }}>Angel Wishes </span>
        Memory Keeper
      </div>
    ),
    paragraphText:
      "Welcome to Angel Wishes Memory Keeper, our special place just for kids! We understand that sometimes life gives us big challenges, and we're here to help alleviate those challenges and help you focus on the special moments in life. Let’s explore how we can keep all your wonderful memories safe and why it's important for families to save special documents and pictures.",
  };

  return (
    <div className="parrent container">
      <div className="child-1 px-5 container">
        <div className="topContentParrent container mt-5">
          <MiddleHeader
            headingText={topContent.headingText}
            paragraphText={topContent.paragraphText}
          />
        </div>
        <div className="middleContent-parent ">
          <ContentSection data={kidsPageContent} />
        </div>
        <div className="container my-5">
          {extraContent?.map((items) => (
            <MiddleHeader
              paragraphText={items.paragraphText}
              headingText={items.headingText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
