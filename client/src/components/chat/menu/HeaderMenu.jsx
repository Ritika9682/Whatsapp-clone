import React, { useState } from 'react'
import { MoreVert } from '@mui/icons-material'
import { Menu,MenuItem ,styled} from '@mui/material'

const MenuOption = styled(MenuItem)`
   font-size:14px;
   padding: 15px 60px 5px 24px;
   color:#4A4A4A;
`

export default function HeaderMenu({setOpenDrawer}) {
    const [open,setOpen] = useState(null);
    const handleClose=()=>{
         setOpen(null);
    }
    const handleClick=(e)=>{
        setOpen(e.currentTarget);
    }
  return (
    <div>
        <MoreVert onClick={handleClick}/>
        <Menu
        anchorEl={open}
        open={open}
        keepMounted
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuOption onClick={()=>{handleClose();setOpenDrawer(true);}}>Profile</MenuOption>
      </Menu>
    </div>
  )
}