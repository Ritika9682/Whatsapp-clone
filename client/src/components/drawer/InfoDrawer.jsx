import { ArrowBack } from '@mui/icons-material';
import {  styled, Drawer,  Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Profile from './Profile';

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;}
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
    font-size: 18px;
`

const drawerStyle = {
    left:20,
    top:17,
    height:'95%',
    width:'30%',
    boxShadow:"none"
} 
export default function InfoDrawer({open,setOpen}) {
    const handleClose=()=>{
        setOpen(false);
    }
  return (
    <>
        <Drawer
        open = {open}
        onClose={handleClose}
        PaperProps={{sx:drawerStyle}}
        style={{zIndex:1500}}
        > 
         <Header>
                <ArrowBack onClick={() => setOpen(false)} />
                <Text>Profile</Text>
            </Header>
        <Component >
           {/* {profile && <Profile />} */}
           <Profile/>
        </Component>
        </Drawer>
    </>
  )
}