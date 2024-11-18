import { Box, Typography } from "@mui/material";
import React from "react";
import MediaCard from "../../components/cards/Cards";
import carrerpossition2 from "../../assets/images/carrerpossition2.png";

const PicturesMemories = () => {
  const picturesData = [
    {
      pictureId: "1",
      image: carrerpossition2,
      pictureCaption: "something Here",
      sharebleLink: "/somthing link here",
    },
    {
      pictureId: "2",
      image: carrerpossition2,

      pictureCaption: "something Here",
      sharebleLink: "/somthing link here",
    },
    {
      pictureId: "3",
      image: carrerpossition2,

      pictureCaption: "something Here",
      sharebleLink: "/somthing link here",
    },
    {
      pictureId: "4",
      image: carrerpossition2,

      pictureCaption: "something Here",
      sharebleLink: "/somthing link here",
    },
    {
      pictureId: "5",
      image: carrerpossition2,

      pictureCaption: "something Here",
      sharebleLink: "/somthing link here",
    },
    {
      pictureId: "6",
      image: carrerpossition2,

      pictureCaption: "something Here",
      sharebleLink: "/somthing link here",
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
                    <MediaCard pictureCaption={data.pictureCaption}  image={data.image} />
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

export default PicturesMemories;
