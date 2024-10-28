import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import "./Inputs.css";

export const Inputs = forwardRef(({
  type, labelName,value, icon, onChange, placeholder, className, suffix, variants , name , isView
}, inputRef) => {
  return (
    <div className={className === "inputcontrols" ? "" : "w-100"}>
      <div className='textFieldparrent '>
        <div>
          {labelName}
        </div>
        <TextField
          className={className ? className : 'textFieldClass w-100'}
          label={icon ? icon : labelName}
          placeholder={placeholder}
          multiline={labelName === "Message"}
          onChange={onChange}
          inputRef={inputRef}  // Use inputRef instead of ref
          autoComplete='off'
          type={type}
          name={name}
          value={value}
          variant={variants ? "outlined" : "filled"}
          // isView={isView}
          
          InputProps={{
            endAdornment: suffix && (
              <InputAdornment position="end">{suffix}</InputAdornment>
            )
          }}
          
             

          
        />
      </div>
    </div>
  );
});
