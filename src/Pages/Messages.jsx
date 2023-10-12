import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function Messages() {
  return (
    <Box sx={{display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",alignItems:"center",gap:"1rem"}}>
      <Box component="img" src='messengar.png' alt='messengar.png'/>
      <Typography variant='h3'> Your messenger </Typography>
      <Typography component="p" variant="h6"> Send private photos and messages to a friend or group </Typography>
      <Button variant="contained" >SEND MESSAGE</Button>
    </Box>
  )
}
