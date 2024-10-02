import * as React from 'react';
import Card from '@mui/material/Card';
import "./Cards"
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import downArrowimg from "../../assets/images/downArrowimg.png"
import useRoutFunction from "../../assets/others/UseFullFunctions";

import "./Cards.css"
import webColor from '../../assets/colors/Colors';
import { Buttons } from '../button/Buttons';

export default function MediaCard({ image, imageSize, subHeading, paragraphText, headingText }) {
  const routeTo = useRoutFunction();

  return (
    <Card className=" mx-1 cardhoverStyle border-0" sx={{ maxWidth: 345 }}>

      {image &&

        <div className='rounded-3 d-flex justify-content-center  ' style={{ padding: imageSize ? "10px" : "" }}>
          <img src={image} alt="!"
            width={imageSize ? imageSize.width : "320px"}
            height={imageSize ? imageSize.height : "200px"}


          />
        </div>
      }
      <CardContent className={subHeading?.includes("Package") ? 'p-0 ' : ""}>
        <Typography gutterBottom style={{ fontSize: "18px", margin: "0px", fontWeight: "bold" }} component="div">
          {headingText}
        </Typography>
        {subHeading && <Typography className=' px-0 text-white text-center' style={{
          backgroundColor: "#21668E",


        }}>

          {/* {subHeading}  */}
          <div class="ribbon">
            <span>{subHeading}</span>
          </div>
        </Typography>}
        <Typography variant="body2" className='mt-0' sx={{ color: 'text.secondary', margin:"28px" }}>
          <div className='rounded-2 mt-2' style={{boxShadow:subHeading?.includes("Package") ?  "5px 10px 10px  rgba(0, 0, 0, 0.15)" : ""}}>

          {paragraphText}
          {subHeading?.includes("Package") ? <div className='text-center mx-4 my-2'>
            <Buttons text='Upgrade Now ' onClick={() => { routeTo("/") }} style={{ color: "white",
              width:"100%",
              backgroundColor: webColor.themeColor ,
              marginBottom:"10px" }} />

          </div> : ""}
          </div>
        </Typography> 
     
      </CardContent>

    </Card>
  );
}
