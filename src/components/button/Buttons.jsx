import { Button } from '@mui/material'
import React from 'react'

export const Buttons = ({text , type , startIcon ,className, onClick , style}) => {
  return (
    <div className='button-parent '>

<Button startIcon={startIcon} variant="contained" className={className} style={style} type={type} onClick={onClick}>{text}</Button>
    </div>
  )
}
