import { Button } from '@mui/material'
import React from 'react'

export const Buttons = ({text , type , className, onClick , style}) => {
  return (
    <div className='button-parent'>

<Button variant="contained" className={className} style={style} type={type} onClick={onClick}>{text}</Button>
    </div>
  )
}
