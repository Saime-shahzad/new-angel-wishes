import * as React from "react";
import {
  Card,
  Box,
  Typography,
  CardHeader,
  CardMedia,
  // IconButton,
} from "@mui/material";
import CustomeMenu from "../Menu/CustomeMenu";
import { useNavigate } from "react-router-dom";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// import image from "./../../assets/images/image.png";
import Union from "../../assets/images/Union.png";
import union_2 from "../../assets/images/union_2.png";
import folderBackImage from "../../assets/images/folderBackImage.png";
import share from "../../assets/images/share.png";
// import { useDispatch } from "react-redux";
// import { folder } from "../../services/folder";
// import { useEffect } from "react";
// import { removeCategory } from "../../redux-store/features/dashboard";

export default function FolderCard({
  item,
  title,
  time,
  isSelected,
  onClick,
  isAllow = false,
  image,
}) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleOption = (event) => {
    event.stopPropagation();
  };
  const handleShare = (event) => {
    event.stopPropagation();
  };

  const handleView = (item) => {
    navigate(`/user_details/${item.id}`, { state: item });
  };

  const handleDelete = async (item) => {
    console.log("handleDelete");
    
    // const response = await folder.deleteDashboardFolder(item.id);

    // dispatch(removeCategory(item.id));

    // console.log("Dashboard item delete response==>", response);
  };

  const menuOptions = [
    {
      id: 1,
      title: "View",
      onClick: () => handleView(item),
    },
    {
      id: 2,
      title: "Delete ",
      onClick: () => handleDelete(item),
    },
    {
      id: 3,
      title: "Settings",
      onClick: () => handleDelete(item),
    },
  ];

  return (
    <Card
      sx={{
        // backgroundImage: isSelected ? `url(${union_2})` : `url(${Union})`,
        backgroundImage:  `url(${folderBackImage})`,
        backgroundSize: "cover",
        border: "none",
        boxShadow: "none",
        transition: "0.5s",
        backgroundColor:"transparent"
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
       
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: { xs: 2 },
            pt: 4,
            // color: isSelected ? colors?.white : "#000",
          }}
          
        >
          
        
          <Typography
            // sx={{  color: isSelected ? "white" : "#000" }}
            sx={{  color: "white"}}
          >
            {title}
          </Typography>
          <Typography sx={{ color: isSelected ? "white" : "#8D8D8D" }}>
            {time}
          </Typography>
        </Box>
        
      </Box>
     
     
      <CardMedia
        sx={{ my: 1, cursor: "pointer", objectFit: "contain", p: 1 }}
        component="img"
        height="154"
        image={image}
        alt="Paella dish"
        
      />
    </Card>
  );
}
