import { Box, Button, Typography } from '@mui/material'
import * as React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column", textAlign: "center", gap: "2rem" }}>
      <Box component="img" src='instagram_Logo.png' />
      <Typography component="h1" variant='h4' sx={{}}>Sorry, this page isn't available.</Typography>
      <Typography sx={{}}>The link you followed may be broken, or the page may have been removed. Go back to Instagram.</Typography>
      <Box sx={{display:"flex",gap:"1rem"}}>
        <Link to="/Sign">
          <Button variant='contained'>Login</Button>
        </Link>

        <Link to="/">
          <Button variant='contained'>Home Page</Button>
        </Link>

      </Box>
    </Box>
  )
}
