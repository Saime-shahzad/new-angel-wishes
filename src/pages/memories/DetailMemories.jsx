import React, { useState } from 'react'
import FolderCard from '../../components/FolderCard/FolderCard';
import { Box, Typography } from '@mui/material';
import { useRoutFunction } from '../../assets/others/UseFullFunctions';
import familyIcon from "../../assets/images/familyIcon.png"

const DetailMemoories = () => {
  const [isSelected, setIsSelected] = useState(null);


const routeTo=useRoutFunction()


  
  const cardDetail = [
    {
        id: "1",
        isAllow: true,
        image: familyIcon,
        folderName:"Memories",
        routes:"/pictures"
    },
    {
        id: "2",
        isAllow: true,
        image: familyIcon,
        folderName:"Fevourite Moments",
        routes:"/pictures"

    },
    
];
const handleFolderCard = (id , routes) => {
  console.log("routes>>>>>", routes);
  
  setIsSelected((prev) => (prev === id ? null : id));
  // navigate(`/user_details/${id}`);
  routeTo(routes)
  
};
  return (
    <div className='parent '>
<div className='child-1  py-2 vh-100 my-auto container'>



<Box className="row mb-3 my-5 justify-content-around rounded-3" sx={{ display: "flex",  backgroundColor:"#F0F0F0",  flexWrap: "wrap" , cursor:"pointer" }}>
                    {cardDetail?.length > 0 ? (
                        cardDetail.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className="col-md-3 col-sm-6 col-xs-12 my-5"
                                    onClick={() => handleFolderCard(data.id , data.routes)}
                                >
                                    <FolderCard
                                        item={data}
                                        title={data?.folderName}
                                        isSelected={data.id === isSelected}
                                        isAllow={true}
                                        image={data?.image}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <Typography variant="body1">No records found.</Typography>
                    )}
                </Box>
</div>
    </div>
  )
}

export default DetailMemoories