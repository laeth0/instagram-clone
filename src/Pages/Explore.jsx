import * as React from 'react';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import Box from '@mui/material/Box';


export default function Explore() {

  const [AllPosts, setAllPosts] = React.useState([]);
  let Token = localStorage.getItem("token");


  function fetchAllPosts() {
    axios.get("http://16.170.173.197/posts", { headers: { Authorization: `Bearer ${Token}` } })
      .then(res => {
        setAllPosts(res.data.posts);
        console.log(res.data.posts)
      })
      .catch(err => console.log(err))
  }

  React.useEffect(() => {
    fetchAllPosts()
  }, [])


  return (

    <Grid container sx={{ width: "65%", height: "100%", marginInline: "auto" }} spacing={2} >
      {AllPosts.map((post) => (
        <Grid item xs={12} md={6} lg={4} key={post.id} >
          <Box
            sx={{width: "100%",height:"100%"}}
            component="img"
            src={post.image}
            alt={post.description}
            loading="lazy"
          />
        </Grid>
      ))}
    </Grid>
  );
}


