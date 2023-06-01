import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react';

import Conversations from './Conversations'
import Header from './Header'
import Search from './Search'
 
 export default function Menu() {
  const [text, setText] = useState('');

   return (
     <Box>
        <Header/>
        <Search  setText={setText}/>
        <Conversations  setText={setText}/>
     </Box>
   )
 }