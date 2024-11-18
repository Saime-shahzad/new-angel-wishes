import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import homesvedio from "../../assets/images/homesvedio.mp4"
import webColor from '../colors/Colors';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Dailogs({open , handleClose , title}) {


const videoRef = React.useRef(null);

const video = videoRef.current;
React.useEffect(() => {
  if (video) {
      console.log("vedio >>>", video);
    
    video.muted = true; // Ensures autoplay works in most browsers
    video.play().catch((err) => {
      console.error('Autoplay blocked:', err);
    });
  }
}, [video]);
  return (
    <React.Fragment>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} style={{backgroundColor:webColor.themeColor ,fontSize:"14px" , color:"white"}} id="customized-dialog-title">
          {title}.mp4
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: "black",
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <video width="400" controls  muted ref={videoRef}  >
  <source src={homesvedio}  controls autoplay type="video/mp4"/>
  Your browser does not support the video tag.
</video>

        </DialogContent>
     
      </BootstrapDialog>
    </React.Fragment>
  );
}
