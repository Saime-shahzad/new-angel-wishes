import React, { useState } from "react";
import "./Header.css";
// import icons from "../../assets/icons/icons";
import haderLogo from "../../assets/images/logo.png";
import menueImage from "../../assets/images/menu.png";
// import bannerLogowhite from "../../assets/images/bannerLogowhite.png";
// import profileImage from "../../assets/images/user.png";
// import profilewhiteImage from "../../assets/images/manlogowhite.png";
// import menueWhite from "../../assets/images/menuewhite.png";
import { Link, useLocation } from "react-router-dom";
import webColor from "../../assets/colors/Colors";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useRoutFunction from "../../assets/others/UseFullFunctions";

export const Header = () => {
  const location = useLocation();
  const routeTo = useRoutFunction();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isPopupName, setIsPopupName] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event, name) => {
    setIsPopupName(name);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const headerItems = [
    {
      tabName: "Home",
      link: "/",
      style: location.pathname === "/" ? "underline" : "none",
    },
    {
      tabName: "About Us",
      link: "/about-us",
      style: location.pathname === "/about-us" ? "underline" : "none",
    },
    {
      tabName: "Career",
      link: "/career",
      style: location.pathname === "/career" ? "underline" : "none",
    },
    {
      tabName: "Mission And Vison",
      link: "/mission&vision",
      style: location.pathname === "/mission&vision" ? "underline" : "none",
    },
    {
      tabName: "Report a Concern",
      link: "/report-a-concern",
      style: location.pathname === "/report-a-concern" ? "underline" : "none",
    },
    {
      tabName: "Accessibility Reports",
      link: "/accessibility-reports",
      style:
        location.pathname === "/accessibility-reports" ? "underline" : "none",
    },
  ];
  const profileMenue = [
    // {
    //   title: "Logout",
    //   onClick: () => {
    //     // routeTo("")
    //     handleClose()
    //   },
    // },
    {
      title: "Sign Up",
      onClick: () => {
        routeTo("/sign-up")
        handleClose()
      },
    },
    {
      title: "Login In",
      onClick: () => {
        routeTo("/sign-in")
        handleClose()
      },
    },
  ];

  return (
    <div className="Header-Parrent ">
      <div className="first-child ">
        <div
          className="child-1  d-flex justify-content-between align-items-center p-2 px-5 "
          style={{
            backgroundColor: "#21668E"
          }}
        >
          <div className=" d-flex justify-content-between    socialMediaDivStyle">
            <img
              src={haderLogo}
              width="150px"
              alt="logo"
            />
          </div>

          <div className="child-2 d-flex  ">
            {headerItems?.map((items) => {
              return (
                <div className="  mx-2">
                  <Link
                    className="text-decoration-none social-media-icons "
                    style={{
                      color:
                        webColor.themeColor,
                      textDecoration: "none",
                    }}
                    to={items.link}
                  >
                    <div
                      className="hoverEffectControl"
                      // style={{borderBottom:"1px solid green"}}
                      style={{ textDecoration: items.style }}
                    >
                      {" "}
                      {items.tabName}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="child-3 d-flex ">
            {/* <div
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(e) => handleClick(e, "profile")}
            >
              <img
                src={
                  location.pathname === "/" ? profileImage : profilewhiteImage
                }
                width="25px"
                className="mx-3"
                alt="logo"
              />
            </div> */}
            <div
              ////popup//
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ cursor: "pointer" }}

            /////close
            >
              <img
                src={ menueImage }
                className="social-media-icons"
                width="22px"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-center bg-warning second-Child ">
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {(isPopupName === "profile" ? profileMenue : profileMenue)?.map(
            (item) => {
              return <MenuItem onClick={item.onClick}>{item.title}</MenuItem>;
            }
          )}
        </Menu>
      </div>
    </div>
  );
};
