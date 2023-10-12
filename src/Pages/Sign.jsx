import * as React from 'react';
import { Typography, Grid, Box, Container, Link, TextField, CssBaseline, Button } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Sign() {
  const navigate = useNavigate();
  const [UserEmail, setUserEmail] = React.useState("");
  const [UserName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cardFlip, setCardFlip] = React.useState(false);

  const handleSendDataLogin = () => {
    axios.post("http://16.170.173.197/users/login", { email: UserEmail, password })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleSendDataSignup = () => {
    axios.post("http://16.170.173.197/users/signup", { userName: UserName, email: UserEmail, password })
      .then(res => {
        axios.post("http://16.170.173.197/users/login", { email: UserEmail, password })
          .then(({ data }) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    if (localStorage.getItem("token") !== null)
      navigate("/");
  }, [])


  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item sm={false} md={6} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center" }}  >
        <Box component="img" src='iphoneImage.png' alt='iphoneImage.png' sx={{ width: "55%" }} />
      </Grid>

      <Grid item xs={12} md={6} >
        <Container maxWidth="xs">

          <Box sx={{ position: "relative", transformStyle: "preserve-3d", transition: "all 1s ease", transform: cardFlip ? "rotateY(180deg)" : "" }}>

            {/* Front SignIn */}
            <Box sx={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", my: 12, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "1rem" }} >

              <Box component="img" src='instagram_Logo.png' alt='instagram_Logo.png' />

              <Box component="form" noValidate onSubmit={e => e.preventDefault()} sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                {/* <TextField required fullWidth sx={{ borderRadius: "5px" }} id="Email" label="Email" name="Email" autoComplete="Email" autoFocus /> */}
                <TextField onChange={(e) => setUserEmail(e.target.value)} fullWidth sx={{ borderRadius: "5px" }} id="Username" label="Mobile Number or Email" name="Username" autoComplete="Username" autoFocus />
                <TextField onChange={(e) => setPassword(e.target.value)} fullWidth sx={{ borderRadius: "5px" }} name="password" label="Password" type="password" id="password" autoComplete="current-password" />

                <Button type="submit" fullWidth variant="contained" onClick={handleSendDataLogin}>Login</Button>
                <Typography component="span" variant="body1" textAlign="center">Or</Typography>

                <Button startIcon={<FacebookRoundedIcon sx={{ color: "white" }} />} variant="contained" sx={{ textTransform: "none" }}>Login with Facebook</Button>

                <Typography component="p" variant="subtitle1" textAlign="center">Forgot password?</Typography>

                <Typography component="p" variant="subtitle1" textAlign="center" >Don’t have an account?<Button variant="text" sx={{ textTransform: "none" }} onClick={() => setCardFlip(true)}>Sign Up</Button></Typography>

              </Box>

            </Box>

            {/* Back SignUp */}
            <Box sx={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", transform: "rotateY(180deg)", my: { xs: 4, sm: 8 }, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "1rem" }} >

              <Box component="img" src='instagram_Logo.png' alt='instagram_Logo.png' />

              <Typography component="p" variant="subtitle1" textAlign="center">Sign up to see photos and videos from your friends</Typography>

              <Button startIcon={<FacebookRoundedIcon sx={{ color: "white" }} />} variant="contained" sx={{ textTransform: "none" }}>Login with Facebook</Button>

              <Typography component="span" variant="body1" textAlign="center">Or</Typography>


              <Box component="form" noValidate onSubmit={e => e.preventDefault()} sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                <TextField required fullWidth sx={{ borderRadius: "5px" }} onChange={(e) => setUserEmail(e.target.value)} id="Email" label="Email" name="Email" autoComplete="Email" autoFocus />
                <TextField required fullWidth sx={{ borderRadius: "5px" }} onChange={(e) => setUserName(e.target.value)} id="Username" label="Username" name="Username" autoComplete="Username" autoFocus />
                <TextField required fullWidth sx={{ borderRadius: "5px" }} onChange={(e) => setPassword(e.target.value)} name="password" label="Password" type="password" id="password" autoComplete="current-password" />

                <Button type="submit" fullWidth variant="contained" onClick={handleSendDataSignup}>Sign Up</Button>

                <Typography component="p" variant="subtitle1" textAlign="center">By signing up, you agree to our Terms, Data Policy and Cookies Police</Typography>

                <Typography component="p" variant="subtitle1" textAlign="center">Have an account? <Button variant="text" sx={{ textTransform: "none" }} onClick={() => setCardFlip(false)}>Log In</Button></Typography>

              </Box>

            </Box>

          </Box>

        </Container>
      </Grid>


    </Grid>
  );
}