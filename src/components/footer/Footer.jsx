import React from "react";
import {
  // Link,
  useNavigate,
} from "react-router-dom";
import twitter from "../../assets/images/twitter.png";
import linkedIn from "../../assets/images/linkedIn.png";
import fb from "../../assets/images/fb.png";
import insta from "../../assets/images/insta.png";
import X from "../../assets/images/X.png";
import youtube from "../../assets/images/youtube.png";
import tiktok from "../../assets/images/tiktok.png";
import pinterest from "../../assets/images/pinterest.png";
import mail from "../../assets/images/mail.png";
import phone from "../../assets/images/phone.png";
import { Box, Typography } from "@mui/material";
import footerLogo from "../../assets/images/fotter_logo_old.png";
import "./Footer.css"

export const Footer = () => {
  const footerValues = [
    {
      angel_wishes: [
        {
          id: 1,
          title: "About Us",
          route: "/about-us",
        },
        {
          id: 2,
          title: "Careers",
          route: "/career",
        },
        {
          id: 6,
          title: "Contact Us",
          route: "/contact-us",
        },
        {
          id: 3,
          title: "Mission and Vision",
          route: "/mission&vission",
        },
        {
          id: 4,
          title: "Report a Concern",
          route: "/report-a-concern",
        },
        {
          id: 5,
          title: "Accessibility Report",
          route: "/accessibility-reports",
        },
      ],
      usefull_links: [
        {
          id: 1,
          title: "Kids Corner",
          route: "/kidsCorner",
        },
        {
          id: 2,
          title: "Privacy Policy",
          route: "/privacy-Policy",
        },
        {
          id: 3,
          title: "Terms & Condition",
          route: "/terms&condtions",
        },
        {
          id: 4,
          title: "Legacies",
          route: "/legacies",
        },
        {
          id: 1,
          title: "FAQ",
          route: "/faqs",
        },
        // {
        //   id: 4,
        //   title: "Copyright Notice",
        // },
        // {
        //   id: 5,
        //   title: "Need Help",
        // },
        // {
        //   id: 6,
        //   title: "Feedback/Support Survey",
        // },
      ],
      contacts: [
        {
          id: 1,
          image: mail,
          title: "support@angel-wishes.com",
        },
        {
          id: 2,
          image: phone,
          title: "(949) 771-6361",
        },
        // {
        //     id:3,
        //     image: location,
        //     title:"street 112/5"
        // }
      ],
    },
  ];
  const socialMedia = [
    {
      id: 1,
      img: twitter,
    },
    {
      id: 2,
      img: linkedIn,
    },
    {
      id: 3,
      img: fb,
    },
    {
      id: 4,
      img: insta,
    },
    {
      id: 5,
      img: X,
    },
    {
      id: 6,
      img: youtube,
    },
    {
      id: 7,
      img: tiktok,
    },
    {
      id: 8,
      img: pinterest,
    },
  ];
  const navigation = useNavigate();
  return (
    <Box
      style={{ backgroundColor: "#252525", color: "white" }}
      // style={{ backgrounddivor: "#252525" }}
      sx={{
        px: { md: "1rem", xs: "1rem" },
      }}
    >
      <div className="row d-flex border-bottom">
        <div
          className=" col-lg-6 col-md-4 col-sm-6"
          // xs={12}
          // md={4}
          // sm={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { sm: "17.1rem", xs: "100%" },
              height: { sm: "17.1rem", xs: "15rem" },
              // ml:{xs:-10}
            }}
          >
            <img
              src={footerLogo}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </div>
        <div
          className=" col-lg-2 col-md-3 col-sm-6"

          //   xs={12} md={3} sm={6}
        >
          <Box
            sx={{
              borderRight: { md: "1px solid #A7A7A7" },
              ml: { xs: 2, md: 0, sm: 10 },
              mt: { xs: 3, md: 0, sm: 5 },
            }}
          >
            <Typography sx={{ fontWeight: 700, my: { md: 4, xs: 2 } }}>
              Angel Wishes
            </Typography>
            {footerValues[0]?.angel_wishes.map((wish) => (
              <Typography
              className=" hoverEffectControls"
                key={wish.id}
                sx={{ my: 1, cursor: "pointer" }}
                onClick={() => navigation(wish?.route)}
              >
                {wish.title}
              </Typography>
            ))}
          </Box>
        </div>
        <div
          className=" col-lg-2 col-md-3 col-sm-6"

          //    xs={12} md={3} sm={6}
        >
          <Box
            sx={{
              borderRight: { md: "1px solid #A7A7A7" },
              mt: { sm: 8, md: 0 },
              ml: { sm: 11, md: 0, xs: 2 },
            }}
          >
            <Typography sx={{ fontWeight: 700, my: { md: 4, xs: 2 } }}>
              Usefull Links
            </Typography>
            {footerValues[0]?.usefull_links?.map((usefull) => (
              <Typography className=" hoverEffectControls"
                key={usefull.id}
                sx={{ my: 1, cursor: "pointer" }}
                onClick={() => navigation(usefull?.route)}
              >
                {usefull?.title}
              </Typography>
            ))}
          </Box>
        </div>
        <div
          //   xs={12} md={2} sm={6}
          className=" col-lg-2 col-md-3 col-sm-6"
        >
          <Box sx={{ mt: { sm: 8, md: 0 }, ml: { sm: 10, md: 0, xs: 2 } }}>
            <Typography sx={{ fontWeight: 700, my: { md: 4, xs: 2 } }}>
              Contact us
            </Typography>
            {footerValues[0]?.contacts.map((contacts) => (
              <Box
                key={contacts?.id}
                className=" hoverEffectControls"
                sx={{
                  display: "flex",
                  // alignItems: "center",
                  gap: 1.5,
                  my: 1,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "1.1rem",
                    height: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={contacts?.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Typography sx={{}}>{contacts?.title}</Typography>
              </Box>
            ))}
          </Box>
        </div>
      </div>

      {/* ///extra footer section */}
      <div className="extra-section-prent  d-md-flex  d-none p-2">
        <div className="extra-section w-100 d-flex justify-content-end align-items-center">
          {/* <div className="child-1  d-md-flex align-items-center ">
            <div>@ 2024 , All Rights Reserved</div>
            <ul className="d-flex  m-0  " style={{ width: "428px" }}>
              <li className="w-25">SiteMap</li>
              <li className="w-25">Terms</li>
              <li className="w-25">Privacy</li>
              <li className="w-50">Your Privacy Choices</li>
            </ul>
          </div> */}
          <div className="child-2 d-flex  align-items-center">
            {socialMedia?.map((items) => {
              return (
                <div className="d-flex">
                  <img
                    src={items.img}
                    className="mx-2 "
                    style={{ cursor: "pointer" }}
                    width="25px"
                    height="20px"
                    alt="soial-Media-Image"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ///closed//// */}
    </Box>
  );
};
