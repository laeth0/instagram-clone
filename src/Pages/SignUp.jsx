import * as React from 'react';
import { Typography, Grid, Box, Container, Link, TextField, CssBaseline, Button } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item sm={false} md={6} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center" }}  >
        <Box component="img" src='iphoneImage.png' alt='iphoneImage.png' sx={{width:"55%"}} />

      </Grid>

      <Grid item xs={12} md={6} >
        <Container maxWidth="xs">
          
          <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "1rem" }} >

            <Box component="img" src='instagram_Logo.png' alt='instagram_Logo.png' />

            <Typography component="p" variant="p" textAlign="center">Sign up to see photos and videos from your friends</Typography>

            <Button startIcon={<FacebookRoundedIcon sx={{ color: "white" }} />} variant="contained" sx={{ textTransform: "none" }}>Login with Facebook</Button>

            <Typography component="span" variant="span" textAlign="center">Or</Typography>


            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

              <TextField required fullWidth sx={{ borderRadius: "5px" }} id="Email" label="Email" name="Email" autoComplete="Email" autoFocus />
              <TextField required fullWidth sx={{ borderRadius: "5px" }} id="Username" label="Username" name="Username" autoComplete="Username" autoFocus />
              <TextField required fullWidth sx={{ borderRadius: "5px" }} name="password" label="Password" type="password" id="password" autoComplete="current-password" />

              <Button type="submit" fullWidth variant="contained" >Sign Up</Button>

              <Typography component="p" variant="p" textAlign="center">By signing up, you agree to our Terms, Data Policy and Cookies Police</Typography>

              <Typography component="p" variant="p" textAlign="center">Have an account? <Link href="#" variant="body2"> Log In</Link></Typography>

            </Box>

          </Box>
        </Container>

      </Grid>
    </Grid>
  );
}