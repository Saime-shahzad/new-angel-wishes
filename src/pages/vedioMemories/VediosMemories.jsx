import { Box, Typography } from "@mui/material";
import React from "react";
import MediaCard from "../../components/cards/Cards";
import carrerpossition2 from "../../assets/images/carrerpossition2.png";

const VediosMemories = () => {
  const picturesData = [
    {
      pictureId: "1",
      image: carrerpossition2,
      pictureCaption: "vedio1.mp4",
    },
    {
      pictureId: "2",
      image: carrerpossition2,

      pictureCaption: "vedio2.mp4",
    },
    {
      pictureId: "3",
      image: carrerpossition2,

      pictureCaption: "vedio3.mp4",
    },
    {
      pictureId: "4",
      image: carrerpossition2,

      pictureCaption: "vedio4.mp4",
    },
    {
      pictureId: "5",
      image: carrerpossition2,

      pictureCaption: "vedio5.mp4",
    },
    {
      pictureId: "6",
      image: carrerpossition2,

      pictureCaption: "vedio6.mp4",
    },
    {
      pictureId: "7",
      image: carrerpossition2,

      pictureCaption: "vedio7.mp4",
    },
    {
      pictureId: "8",
      image: carrerpossition2,

      pictureCaption: "vedio8.mp4",
    },
  ];

  return (
    <div className="parent">
      <div className="child-1">
        <div className=" py-2  my-auto container">
          <Box
            className="row mb-3  bg-light justify-content-center rounded-3"
            sx={{ display: "flex", flexWrap: "wrap"}}
          >
            {picturesData?.length > 0 ? (
              picturesData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="col-md-3 col-sm-6 col-xs-12 my-5"
                    // onClick={() => handleFolderCard(data.id , data.routes)}
                  >
                    <MediaCard   image={data.image} pictureCaption={data.pictureCaption} />
                  </div>
                );
              })
            ) : (
              <Typography variant="body1">No records found.</Typography>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default VediosMemories;
