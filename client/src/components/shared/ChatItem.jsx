import React from 'react'
import { Link } from '../styles/StyledComponents'
import { Stack, Typography } from '@mui/material'

const ChatItem = ({
    avtar=[],
    name, 
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChatOpen
}) => {
  return <Link to={`/chat/${_id}`}>
  
  <div style={{
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: sameSender? "black": "unset",
    color: sameSender? "white": "unset",
    justifyContent: "space-between",
    position: "relative"
  }}>

    {
        <Stack>
                
               <Typography>{name}</Typography> 
               {
                newMessageAlert && (
                    <Typography>{newMessageAlert.count} New Message</Typography>
                )
               }
        </Stack>
    }

  </div>

  </Link>
}

export default ChatItem
