import { Stack } from '@mui/material'
import React from 'react'

const Chatlist= ({w="100%", chats=[], onlineusers=[], newMessagesAlert=[{
     chatId: "",
     count: 0,
}], handleDeleteChat, }) => {
  return (
    <Stack width={w} direction={"colomn"}>
     
      {
        chats.map((data, index) => {
             return <div key={index}>{data}</div>
        })
      }

    </Stack>
  )
}

export default Chatlist
