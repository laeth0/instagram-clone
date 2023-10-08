import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { Typography, Button } from '@mui/material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'Rectangle 15 (1).png',
    title: 'Breakfast',
  },
  {
    img: 'Rectangle 15 (2).png',
    title: 'Burger',
  },
  {
    img: 'Rectangle 15 (3).png',
    title: 'Camera',
  },
  {
    img: 'Rectangle 15 (4).png',
    title: 'Coffee',
  },
  {
    img: 'Rectangle 15 (5).png',
    title: 'Hats',
  },
  {
    img: 'Rectangle 15 (6).png',
    title: 'Honey',
  },
  {
    img: 'Rectangle 15 (7).png',
    title: 'Basketball',
  },
  {
    img: 'Rectangle 15 (8).png',
    title: 'Fern',
  },
  {
    img: 'Rectangle 15 (9).png',
    title: 'Mushrooms',
  },
  {
    img: 'Rectangle 15 (10).png',
    title: 'Tomato basil',
  },
  {
    img: 'Rectangle 15.png',
    title: 'Sea star',
  },
  {
    img: 'Rectangle 20.png',
    title: 'Bike',
  },
];


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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width:"60%",margin:"auto"}}>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="Ellipse.png"
          alt="Live from space album cover"
        />

        <Box sx={{ display: 'flex',flexDirection:"column",gap:"1rem", width: "calc(100% - 151px)" }}>

          <CardContent sx={{ display: "flex", flexDirection: "row",justifyContent:"space-around", width: "100%", height:"fit-content", padding:"0",paddingY:"0px"}}>
            <Typography component="div" variant="h5" sx={{fontWeight:"900"}}>Laeth </Typography>

            <Button variant="contained" sx={{ background: "white", "&:hover": { background: "white" } }}>Edit Profile</Button>
            <Button variant="contained" sx={{background:"white","&:hover":{background:"white"}}}>View actions</Button>

            <IconButton>
              <SettingsSuggestIcon />
            </IconButton>

          </CardContent>
          <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", height: "fit-content", padding: "0", paddingY: "0px" }}>
            <Typography component="div" variant="button" >9 posts </Typography>
            <Typography component="div" variant="button" >268 followers </Typography>
            <Typography component="div" variant="button" >296 folowers </Typography>

          </CardContent>
          <CardContent>
            <Typography component="div" variant="button" >ليث  </Typography>
            <Typography component="div" variant="button" >@aaup_edu  </Typography>
            <Typography component="div" variant="button" >I am a guitar player </Typography>
          </CardContent>

        </Box>

      </Card>

      <Box sx={{ width: '100%',marginTop:"1rem" }}>

        <Box sx={{ borderTop: 1, borderColor: 'divider',display:"flex",justifyContent:"center" }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="POSTS" {...a11yProps(0)}   />
            <Tab label="REELS" {...a11yProps(1)}  />
            <Tab label="TAGEG" {...a11yProps(2)}  />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <ImageList sx={{ width: "100%", height: "100%", marginInline: "auto" }} cols={3} rowHeight="13rem" >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>


    </Box>
  );
}



