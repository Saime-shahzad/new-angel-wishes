import React, { useState } from "react";
import webColor from "../../../assets/colors/Colors";
import icons from "../../../assets/icons/icons";
// import { Inputs } from "../../../assets/input/Inputs";
import { Buttons } from "../../../components/button/Buttons";
import vedioImage from "../../../assets/images/vedioImage.png";
import { Snackbar, SnackbarContent } from "@mui/material";

const UploadVedios = () => {
  const initialValues = {
    memoDescription: "",
    file: "",
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [isMemoData, setIsMemoData] = useState(initialValues);
  const [isVisible, setIsVisible] = useState("");
  const [state, setState] = React.useState({ 
    isopen: true,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, isopen } = state;
  

  // Handle file selection
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     setIsMemoData({ ...isMemoData, file: file?.name });

//     // Generate a preview of the file (image/video)
//     if (file) {
//       const fileUrl = URL?.createObjectURL(file);
//       setPreview(fileUrl);
//     }
//   };
const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    if (file && file.type.startsWith("video/")) {
      setSelectedFile(file);
      setIsMemoData({ ...isMemoData, file: file?.name });
  
      // Generate a preview of the video file
      const fileUrl = URL.createObjectURL(file);
      setPreview(fileUrl);
    } 
    else {
        if(!file){
            
            // alert("Please select your favourite video file.");
            
            const message="Please select your favourite video file.!"
            setIsVisible(message)
            setTimeout(() => {
              setIsVisible("")
            }, 3000);
        }
        else{
          
                      const message="Please select a valid video file.!"
                      setIsVisible(message)
                      setTimeout(() => {
                        setIsVisible("")
                      }, 3000);
                      event.target.value = null; // Clear the input
         
        }
    }
  }


  const deleteImage = () => {
    setPreview(null);
    setIsMemoData({
      memoDescription: "",
      file: "",
    });
  };

  return (
    <div className="parent container  mx-auto  ">
      <div className="child-1 row text-center  w-100 d-flex  justify-content-center">
      {isVisible && (
        <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={isopen}
        key={vertical + horizontal}
        style={{width:"220px"}}
    
      >
        <SnackbarContent
          message={isVisible}
          sx={{
            backgroundColor: "#FDB515", // Change to your desired color
            '@media (min-width: 600px)': {
        minWidth: '300px', // Example for larger screens
      },
            // backgroundColor: webColor.themeColor, // Change to your desired color
        }}
        style={{


            width:"120px"
        }}
        />
      </Snackbar>   
        )}
        <div className="imagePreview    w-50 justify-content-center text-center ">
          {preview ? (
            <div style={{ marginTop: "20px" }}>
              {selectedFile && selectedFile.type.startsWith("image/") ? (
                <img src={preview} alt="Preview" height="300" width="100%" />
              ) : (
                <video src={preview} controls height="300" width="100%" />
              )}
            </div>
          ) : (
            <div className=" p-2">
              <div
                className=" d-flex align-items-center  m-2 justify-content-center shadow rounded-2"
                style={{ height: "50vh", backgroundColor: "#DDDDDD" }}
              >
                <img alt="vedioImage" width="80" height="80" src={vedioImage} />
              </div>
            </div>
          )}
        </div>
        <div className="uploading-section p-3  d-flex justify-content-center   ">
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            id="fileInput"
            className="fileControl d-none "
          />
          <div className="d-flex">
            <label htmlFor="fileInput" className="custom-upload-button   ">
              {icons.addPhotoAlternateIcons} Upload
            </label>
            <label
              className="custom-upload-button-cancel mx-5  "
              onClick={deleteImage}
            >
              {icons.deleteIcon} Cancel
            </label>
          </div>

          {/* <div>
        <Buttons text="delete" className="custom-upload-button  " />
      </div> */}
        </div>

        <div className="my-2 text-end">
          {/* <label  className="custom-upload-button   " htmlFor="fileInput" style={{width : "66%"}}>
        {icons.addPhotoAlternateIcons} Add Photo/vedio in memories
      </label> */}
     
          <div>
            <Buttons
              text="Submit"
              style={{ backgroundColor: webColor.themeColor }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadVedios;
