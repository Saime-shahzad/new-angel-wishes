import React from 'react'
import VediosMemories from './VediosMemories'
import { Buttons } from '../../components/button/Buttons'
import icons from '../../assets/icons/icons'
import webColor from '../../assets/colors/Colors'
import { useRoutFunction } from '../../assets/others/UseFullFunctions'

const Vediomemories = () => {
  const routeTo=useRoutFunction()
  return (
    <div className='parent container'>
      <div className='text-end'>
        <Buttons onClick={() => routeTo("/upload-vedios")} startIcon={icons.addIcons} text="Add New " style={{backgroundColor:webColor.themeColor}} />
      </div>
       <div>
        
        <VediosMemories/>
       </div>
    </div>
  )
}

export default Vediomemories