import React, { useRef, useState } from 'react'
import CustomeTable from '../../components/table/CustomeTable';
import links from "../../assets/images/links.png"
import { Stack } from '@mui/material';
import { Buttons } from '../../components/button/Buttons';
import icons from '../../assets/icons/icons';
import { Inputs } from '../../assets/input/Inputs';
import Loader from '../../assets/loader/Loader';
// import { toast } from 'react-toastify';

const DetailAudioList = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [inputValues, setInputValues] = useState({
    audioName: '',
    audioLink: ''
  });
  const inputRef = useRef(null)
  const handleChange = (key, value) => {
    setInputValues(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleCancel = (() => {
    if (inputValues.audioLink === "" && inputValues.audioName === "") {
      setIsVisible(false)
    }
    setInputValues({
      audioName: '',
      audioLink: ''
    })
  })
  console.log("Key-Value Pairs:", inputValues);


  //after use 
  const handleSubmit = async () => {
    // const response=await function( dispatch ,  { })
    // if(response === "200"){
    //   toast.success("your response has been submitted")
    // }
    // else{
    //   toast.error("sorry")
    // }

    // setIsVisible(false)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)

    }, 3000);
    console.log("Key-Value Pairs:", inputValues);
    // You now have input1 and input2 values as key-value pairs
  };
  /////close///

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
            <div className=' px-3 py-1 rounded-2' style={{ backgroundColor: "#CDCCCC", cursor: "pointer" }}> <img width="20px" src={links} alt="linkimage" /></div>
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

  const handleChangeLayout = (() => {

    setIsVisible(true)
  })
  return (
    <div className='parent '>
      <div className='child-1'>
        <Stack sx={{ mx: { md: 6, sm: 3, xs: 1 }, mb: 2 }}>
          <div className='justify-content-end ' style={{ display: !isVisible ? 'flex' : 'none' }}>
            <Buttons className="mx-2" text="Add New" onClick={handleChangeLayout} startIcon={icons.addIcons} style={{ backgroundColor: "#FDB515" }} />
          </div>
          {isVisible && (
            <Stack sx={{ mx: { md: 6, sm: 3, xs: 1 }, mb: 2 }}>
              {isLoading ? <div className="py-5">

                <Loader loading={isLoading} /></div> :
                <div className='addAudioList-section-parent d-flex  row justify-content-between  shadow border p-3'>
                  <div className='d-flex w-100 justify-content-end' style={{cursor:"pointer"}} onClick={() => setIsVisible(false)}>{icons.cancelIcons}</div>
                  <div className='Inputs-Parent row w-100 '>
                    
                    <div className='col-lg-12 col-md-12 col-sm-12' >

                      <Inputs type="text" name="audioName" labelName="Music Name" value={inputValues.audioName} ref={inputRef} onChange={(e) => handleChange('audioName', e.target.value)} icon={icons.addIcons} placeholder="Add Your Link" />
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 my-2'>

                      <Inputs  


                       name="audioLink" value={inputValues.audioLink} onChange={(e) => handleChange('audioLink', e.target.value)} ref={inputRef} labelName="link" icon={icons.addIcons} placeholder="Add Your Link" />
                    </div>
                  </div>
                  <div className='button-parent d-flex '>

                    <Buttons className="mx-2" text="Add" onClick={handleSubmit}  style={{ backgroundColor: "#FDB515" }} />
                    <Buttons text="Cancel" onClick={handleCancel}  style={{ backgroundColor: "#DB312A" }} />
                  </div>

                </div>}
            </Stack>
          )}
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