import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import icons from "../../assets/icons/icons";
import { Snackbar, SnackbarContent } from "@mui/material";
import webColor from "../../assets/colors/Colors";
import  "./PoppoverComponent.css"

export default function PopoverComponent({ buttonName }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = React.useState("This is the text to copy");
  const [copySuccess, setCopySuccess] = React.useState("");
  const [state, setState] = React.useState({ 
    isopen: true,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, isopen } = state;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess("Link copied ! ");
      })
      .catch(() => {
        setCopySuccess("Failed to copy!");
      });
    setTimeout(() => {
      setCopySuccess("");
    }, 1000);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button onClick={handleClick}>{buttonName}</Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <p
          className=" d-block text-end  px-1 m-0"
          >
            <span 
            style={{ cursor: "pointer" }}
            onClick={copyToClipboard}
            
            >

          {icons.contentCopyIcon}
            </span>
        </p>

        <Typography className="" sx={{ p: 2, width: "230px", fontSize: "9px" }}>
          https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com
        </Typography>
        {copySuccess && (
        <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={isopen}
        key={vertical + horizontal}
        style={{width:"120px"}}
    
      >
        <SnackbarContent
          message={copySuccess}
          sx={{
            backgroundColor: "#21668E", // Change to your desired color
            '@media (min-width: 600px)': {
        minWidth: '120px', // Example for larger screens
      },
            // backgroundColor: webColor.themeColor, // Change to your desired color
        }}
        style={{


            width:"120px"
        }}
        />
      </Snackbar>   
        )}
      </Popover>
    </div>  
  );
}
