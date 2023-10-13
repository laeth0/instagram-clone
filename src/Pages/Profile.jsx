import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { Typography, Button, Grid } from '@mui/material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Profile() {
  const navigate = useNavigate();

  const [AllPosts, setAllPosts] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const Admin = JSON.parse(localStorage.getItem("user"))
  const Token = localStorage.getItem("token");



  function fetchAllPosts() {
    axios.get("http://16.170.173.197/posts", { headers: { Authorization: `Bearer ${Token}` } })
      .then((res) => setAllPosts(res.data.posts))
      .catch((err) => console.log(err))
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (Token == null)
      navigate("/Sign");

    fetchAllPosts()
  }, [])

  return (
    <Box sx={{ width: { xs: "100%", md: "60%" }, margin: "auto" }}>
      <Card sx={{ display: 'flex', flexDirection: { xs: "column", md: "row" } }}>
        <Box
          component="img"
          sx={{ width: "10rem", borderRadius: "50%", margin: "auto",aspectRatio:"1/1" }}
          src={Admin.avatar}
          alt="MyPhoto.jpg"
        />

        <Box sx={{ display: 'flex', flexDirection: "column", gap: "1rem", width: "100%" }}>

          <CardContent sx={{ display: "flex", justifyContent: "space-between", width: "100%", height: "fit-content", padding: "0", paddingY: "0px", mt: "1rem" }}>
            <Typography component="div" variant="h5" sx={{ display: "flex", alignItems: "center", fontWeight: "900", fontSize: { xs: ".8rem", sm: "1.5rem", md: "1.2rem" } }}>{Admin.userName} </Typography>

            <Button variant="contained" sx={{fontSize: { xs: ".5rem", md: "1rem" }, p: ".3rem", borderRadius: "12px"}}>Edit Profile</Button>

            <Button variant="contained" sx={{fontSize: { xs: ".5rem", md: "1rem" }, p: { xs: ".3rem", md: ".5rem" }, borderRadius: "12px"}}>View actions</Button>

            <IconButton>
              <SettingsSuggestIcon />
            </IconButton>

          </CardContent>

          <CardContent sx={{display: "flex", justifyContent: "space-around", width: "100%", height: "fit-content", padding: "0", paddingY: "0px" }}>
            <Typography component="div" variant="button" textTransform="none" fontSize="1.2rem" >{Admin.posts == null ? Admin.posts : 95} posts </Typography>
            <Typography component="div" variant="button" textTransform="none" fontSize="1.2rem" >{Admin.followers == null ? 35 : Admin.followers} followers</Typography>
            <Typography component="div" variant="button" textTransform="none" fontSize="1.2rem" >{Admin.following == null ? 75 : Admin.following} following</Typography>
          </CardContent>

          <CardContent>
            <Typography component="div" variant="button" >{Admin.userName}</Typography>
            <Typography component="div" variant="button" >@aaup_edu</Typography>
            <Typography component="div" variant="button" >I am a guitar player </Typography>
          </CardContent>

        </Box>

      </Card>

      <Box sx={{ width: '100%', marginTop: "1rem" }}>

        <Box sx={{ borderTop: 1, borderColor: 'divider', display: "flex", justifyContent: "center" }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="POSTS" {...a11yProps(0)} />
            <Tab label="REELS" {...a11yProps(1)} />
            <Tab label="TAGEG" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Grid container sx={{ width: "65%", height: "100%", marginInline: "auto" }} spacing={2} >
            {AllPosts.slice(0,10).map((post) => (
              <Grid item xs={4} key={post.id} >
                <Box
                  sx={{ width: "100%", height: "100%" }}
                  component="img"
                  src={post.image}
                  alt={post.description}
                  loading="lazy"
                />
              </Grid>
            ))}
          </Grid>

        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Grid container sx={{ width: "65%", height: "100%", marginInline: "auto" }} spacing={2} >
            {AllPosts.slice(10, 20).map((post) => (
              <Grid item xs={4} key={post.id} >
                <Box
                  sx={{ width: "100%", height: "100%" }}
                  component="img"
                  src={post.image}
                  alt={post.description}
                  loading="lazy"
                />
              </Grid>
            ))}
          </Grid>

        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Grid container sx={{ width: "65%", height: "100%", marginInline: "auto" }} spacing={2} >
            {AllPosts.slice(20, 30).map((post) => (
              <Grid item xs={4} key={post.id} >
                <Box
                  sx={{ width: "100%", height: "100%" }}
                  component="img"
                  src={post.image}
                  alt={post.description}
                  loading="lazy"
                />
              </Grid>
            ))}
          </Grid>

        </CustomTabPanel>
      </Box>


    </Box>
  );
}



