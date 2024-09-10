import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({image, imageSize , paragraphText , headingText}) {
  return (
    <Card className=" mx-1 " sx={{ maxWidth: 345 }}>
      {/* <CardMedia
      className='rounded-3 '
      component='div'
      sx={{ 
        height: imageSize ? imageSize.height:200,
        width: imageSize ? imageSize.width:277  ,
        backgroundSize: 'cover', // Ensures the image covers the entire area
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat',
     }}
    
        image={image}
        
      /> */}
      
      <div className='rounded-3 d-flex justify-content-center  ' style={{padding:imageSize?"10px" : ""}}>
        <img src={image} alt="!"
         width= {imageSize ? imageSize.width:"320px"}
        height={ imageSize ? imageSize.height:"200px"}
        

          />
      </div>
      <CardContent>
        <Typography gutterBottom style={{fontSize:"18px" , fontWeight:"bold"}} component="div">
          {headingText}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {paragraphText}
        </Typography>
      </CardContent>
     
    </Card>
  );
}
