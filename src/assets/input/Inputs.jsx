import React from 'react'
import TextField from '@mui/material/TextField';
import "./Inputs.css"
import { InputAdornment } from '@mui/material';

export const Inputs = ({type , labelName , icon ,placeholder, className, suffix , variants}) => {
  return (
    <div>
        <div className='textFieldparrent mb-2'>
            <div>
                {labelName}
            </div>
        <TextField className={ className ? className :'textFieldClass '}
       
            endAdornment={ <InputAdornment position="start">kg</InputAdornment>}
            
    label={icon ? icon :labelName}

    placeholder={placeholder}
    multiline={labelName === "Message" ? true : false}
    
    type={type}
    variant={ variants ? "outlined"  :"filled"}
  />
  </div>
  
  </div>
  )
}
