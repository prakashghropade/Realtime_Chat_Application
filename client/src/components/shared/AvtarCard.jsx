import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'

// todo transform
const AvtarCard = ({avtar=[], max=4 }) => {
  return <Stack direction={"row"} spacing={0.5}>
    
    <AvatarGroup max={max}>
     <Box width={"5rem"} height={"3rem"}>
     {
     avtar.map((i, index) => (
            <Avatar
            key={index}
            src={i}
            alt={`Avtar ${index}`}
            style={{
                width: "3rem",
                height: "3rem",
                position: "absolute",
                left: {
                    xs: `${0.5 + index}rem`,
                    sm: `${index}rem`,
                }
            }}
                />
  ))}
     </Box>

    </AvatarGroup>
    
    </Stack>

  
}

export default AvtarCard
