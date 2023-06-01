import React from 'react'
import { Box } from '@mui/system'
import ChatHeader from './ChatHeader.js'
import Messages from './Messages.js'
import { useContext,useEffect,useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider.jsx'
import { getConversation } from '../../../service/api.js'


export default function ChatBox() {
  const {person,account}=useContext(AccountContext)
  const [conversation,setConversation]=useState({});
  useEffect(()=>{
    const getConversationDetails=async ()=>{
      let data= await getConversation({senderId:account.sub,receiverId:person.sub})
      setConversation(data);
    }
    getConversationDetails();
  },[person.sub]);
  
  return (
    <Box>
    <ChatHeader person={person}/>
    <Messages person={person} conversation={conversation}/>

    </Box>
  )
}
