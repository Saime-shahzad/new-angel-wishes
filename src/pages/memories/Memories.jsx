import React, { useState } from "react";

import "../home/Home.css";
import "./Memories.css";
import carrerpossition1 from "../../assets/images/carrerpossition1.png";
import carrerpossition2 from "../../assets/images/carrerpossition2.png";
import carrerpossition3 from "../../assets/images/carrerpossition3.png";
import selectImage from "../../assets/images/selectImage.png";

import Carousels from "../../components/carousel/Carousels";
import icons from "../../assets/icons/icons";
import {Inputs} from "../../assets/input/Inputs"
export const Memories = () => {
  const cardsData = [
    {
      heading: "New Pop Out",
      image: carrerpossition1,
      // className:"col-lg-4 col-md-6 col-sm-12 p-0 d-flex justify-content-around"
    },
    {
      heading: "Revisit thr moment",
      image: carrerpossition2,
      // className:"col-lg-4 col-md-6 col-sm-12 p-0 d-flex justify-content-around"
    },
    {
      heading: "Spotlight over the year",
      image: carrerpossition3,
      // className:"col-lg-4 col-md-6 col-sm-12 p-0 d-flex justify-content-around"
    },
    {
      heading: "Remember thus day?",
      image: carrerpossition3,
      // className:"col-lg-4 col-md-6 col-sm-12 p-0 d-flex justify-content-around"
    },
    {
      heading: "Remember thus day?",
      image: carrerpossition3,
      // className:"col-lg-4 col-md-6 col-sm-12 p-0 d-flex justify-content-around"
    },
  ];
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Generate a preview of the file (image/video)
    if(file)
    {

      const fileUrl = URL?.createObjectURL(file);
      setPreview(fileUrl);
    }
  };

  const deleteImage=(() =>{
    setPreview(null)
  })
  return (
    <div className="parent">
      <div className="child-1 container ">
        <Carousels cardsData={cardsData} />
      </div>

      <div className="parrent container my-5" >
        <div className="fw-bold my-3 fs-4">
        Add Photo and vedio in memories 
        </div>
        <div className="child-1 row ">
          <div className="imagePreview col-lg-6 ">
            {preview ? (
              <div style={{ marginTop: "20px" }}>
                {selectedFile && selectedFile.type.startsWith("image/") ? (
                  <img src={preview} alt="Preview" height="300" width="100%" />
                ) : (
                  <video src={preview} controls  height="300" width="100%"  />
                )}
              </div>
            ) : (
              <div className="  p-2">
                <div
                  className=" d-flex align-items-center  m-2 justify-content-center shadow rounded-2"
                  style={{ height: "50vh" , backgroundColor:"#DDDDDD" }}
                >
                  <img alt="SelectImage" width="80" height="80"  src={selectImage} />
                </div>
              </div>
            )}
          </div>
          <div className="uploading-section p-3  justify-content-center  col-lg-6 container">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              id="fileInput"
              
              className="fileControl d-none "
            />
            <div className="d-flex">



            <label htmlFor="fileInput" className="custom-upload-button   w-25">
        {icons.addPhotoAlternateIcons} Upload
      </label>
            <label  className="custom-upload-button mx-5  w-25" onClick={deleteImage}>
        {icons.deleteIcon} Delete
      </label>
            </div>
            <div className="message-Parrent-controls mt-4">

      <Inputs type="text" labelName="Message" icon={<div>{icons.editIcon}<span style={{fontSize:"17px" , fontWeight:500}}>Text</span> </div>} />

            </div>
            <div className="mt-2">
            <label  className="custom-upload-button   " htmlFor="fileInput" style={{width : "66%"}}>
        {icons.addPhotoAlternateIcons} Add Photo/vedio in memories
      </label>
            </div>
      {/* <div>
        <Buttons text="delete" className="custom-upload-button  " />
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
