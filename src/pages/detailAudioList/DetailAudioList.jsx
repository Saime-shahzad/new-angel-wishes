import React from 'react'
import CustomeTable from '../../components/table/CustomeTable';
import links from "../../assets/images/links.png"
import { Stack } from '@mui/material';
import { Buttons } from '../../components/button/Buttons';
import icons from '../../assets/icons/icons';

const DetailAudioList = () => {
    
  const columns = [
   
   
    {
      Header: "Audio Name",
      accessor: "audio_name",
    },
    {
        Header: "Audio Links",
        accessor: "shared_users",
        Cell: ({ row }) => {
          return (
              <div className='d-flex justify-content-between bg-light rounded-2 ' flexDirection="column" alignItems="center">
              <div className=' py-1'>
           <a className='text-decoration-none text-dark' href={row.audioLink} target='_blank' rel="noopener noreferrer"> {row.audioLink} </a>
              </div>
               <div className=' px-3 py-1 rounded-2' style={{backgroundColor:"#CDCCCC" , cursor:"pointer"}}> <img width="20px" src={links} alt="linkimage" /></div>
              {/* <p>{row.linkIcon}</p> */}
              {/* Add another row inside the same cell */}
             
            </div>
          );
        },
      },
  ];

  const row = [
    {
      audio_name: "song 1",

      audioLink: "https://www.youtube.com/watch?v=jTyVIYGbQwU",
    },
    {
      audio_name: "song 2",

      audioLink: "https://www.youtube.com/watch?v=jTyVIYGbQwU",
    },
    {
      audio_name: "song 3",

      audioLink: "https://www.youtube.com/watch?v=jTyVIYGbQwU",
    },
    {
      audio_name: "song 4",

      audioLink: "https://www.youtube.com/watch?v=jTyVIYGbQwU",
    },
  
  ];
  return (
    <div className='parent '>
        <div className='child-1'>   
        <Stack sx={{ mx: { md: 6, sm: 3, xs: 1 }, mb: 2 }}>
            <div className='text-end '>
                <Buttons text="New Audio" startIcon={icons.addIcons} style={{backgroundColor:"#FDB515"}}/>
            </div>
        {/* <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
         Folders
        </Typography> */}
        <CustomeTable columns={columns} rows={row} />
      </Stack>

        </div>
    </div>
  )
}

export default DetailAudioList