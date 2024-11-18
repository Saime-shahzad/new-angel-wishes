import * as React from "react";
import Card from "@mui/material/Card";
import "./Cards";
import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
// import downArrowimg from "../../assets/images/downArrowimg.png"
import { useRoutFunction } from "../../assets/others/UseFullFunctions";

import "./Cards.css";
import webColor from "../../assets/colors/Colors";
import { Buttons } from "../button/Buttons";
import icons from "../../assets/icons/icons";
import PopoverComponent from "../popover/PopoverComponent";
import { useLocation } from "react-router-dom";
import Dailogs from "../../assets/dialog/Dailogs";

export default function MediaCard({
  image,
  imageSize,
  subHeading,
  paragraphText,
  headingText,
  pagename,
  pictureCaption
}) {
  const routeTo = useRoutFunction();
  const location = useLocation();
  const [isVisible , setIsVisible]= React.useState(false)
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className=" mx-1 cardhoverStyle border-0 " sx={{ maxWidth: 385 }}>
      {image && (
        <div
          className={
            location.pathname === "/vediosMemories"
              ? "rounded-3 d-flex  justify-content-center"
              : "rounded-3 d-flex justify-content-end"
          }
          style={{ padding: imageSize ? "10px" : "" }}
        >
          <div
            className=" position-absolute  vh-100 " style={location.pathname === "/vediosMemories" ? {marginTop:"60px"} :{marginTop:"0px"}}
            // style={
            //   location.pathname === "/vediosMemories"
            //     ? { bottom: "250px" }
            //     : { cursor: "pointer" }
            // }
          >
            {/* {icons.dotsMenueIcons} */}
            {location.pathname === "/vediosMemories" ? ( <div className="" onClick={() => {setIsVisible(true)
              setOpen(true)
            }} style={{cursor:"pointer"}}>{icons.vedioIcons}</div>) : 
            
            
            
            <PopoverComponent
              buttonName={
                icons.shareIcons
              }
            />
            }
            {isVisible && <Dailogs open={open} title="Vedio Name"  handleClose={handleClose}/>}
          </div>
          <img
            src={image}
            alt="!"
            width={imageSize ? imageSize.width : "320px"}
            height={imageSize ? imageSize.height : "200px"}
          />
        </div>
      )}
      <CardContent
        className={subHeading?.includes("Package") ? "p-0 " : "pt-0"}
      >
        <Typography
          gutterBottom
          style={{ fontSize: "18px", margin: "0px", fontWeight: "bold" }}
          component="div"
        >
          {headingText}
        </Typography>
        {subHeading && (
          <Typography
            className=" px-0 text-white text-center"
            style={{
              backgroundColor: "#21668E",
            }}
          >
            {/* {subHeading}  */}
            <div class="ribbon">
              <span>{subHeading}</span>
            </div>
          </Typography>
        )}
        <Typography
          variant="body2"
          className={subHeading?.includes("Package") ? "mt-0 " : "m-0"}
          sx={{ color: "text.secondary", margin: "28px" }}
        >
          <div
            className="rounded-2 mt-2"
            style={{
              boxShadow: subHeading?.includes("Package")
                ? "5px 10px 10px  rgba(0, 0, 0, 0.15)"
                : "",
            }}
          >
            {paragraphText}
            {subHeading?.includes("Package") ? (
              <div className="text-center mx-4 my-2">
                <Buttons
                  text="Upgrade Now "
                  onClick={() => {
                    routeTo("/");
                  }}
                  style={{
                    color: "white",
                    width: "100%",
                    backgroundColor: webColor.themeColor,
                    marginBottom: "10px",
                  }}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </Typography>
        {!(location.pathname === "/packages-details") && (
          <div>
            <p className="text-center">{pictureCaption}</p>
            {!(location.pathname === "/vediosMemories") && (
              <Buttons
                text="Add To SlieShaow"
                onClick={() => routeTo("/slideshow")}
                className="w-100"
                style={{ backgroundColor: webColor.themeColor }}
              />
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
