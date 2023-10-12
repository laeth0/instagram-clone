import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, Grid, CardContent, CardActions, Box, CardHeader, Typography, CardMedia, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import axios from 'axios';

export default function Home() {
    const [AllUsers, setAllUsers] = React.useState([]);
    const [AllPosts, setAllPosts] = React.useState([]);
    const Admin = JSON.parse(localStorage.getItem("user"))
    let Token = localStorage.getItem("token");

    function fetchAllUsers() {
        axios.get("http://16.170.173.197/users")
            .then(({ data }) => setAllUsers(data.users))
            .catch((err) => console.log(err))
    }

    function fetchAllPosts() {
        axios.get("http://16.170.173.197/posts", { headers: { Authorization: `Bearer ${Token}` } })
            .then((res) => setAllPosts(res.data.posts))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchAllUsers()
        fetchAllPosts()
    }, [])

    return (
        <>
            <Grid container >

                <Grid item xs={11} md={7} >

                    <Swiper
                        height={50}
                        spaceBetween={5}
                        slidesPerView={"auto"}
                        grabCursor={true} centeredSlides={true} loop={true} >

                        {AllUsers.slice(0, 12).map(user => (
                            <SwiperSlide style={{ width: "15%" }} key={user.id}>
                                <Box component="img" src="Ellipse.png" alt="alt for image" />
                                <Typography component="span" textAlign="center">{user.userName}</Typography>
                            </SwiperSlide>
                        ))}

                    </Swiper>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem", mt: "2rem" }}>

                        {AllPosts.map(post => (
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardHeader
                                    avatar={<Box src='Ellipse.png' component="img" alt='image' />}
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={post.user.userName}
                                    subheader="September 14, 2016"
                                />

                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={post.image}
                                    alt="Paella dish"
                                    sx={{ objectFit: "cover" }}
                                />

                                <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>

                                    <Box>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteBorderIcon />
                                        </IconButton>

                                        <IconButton aria-label="share">
                                            <ModeCommentOutlinedIcon />
                                        </IconButton>

                                        <IconButton aria-label="share">
                                            <SendOutlinedIcon />
                                        </IconButton>
                                    </Box>

                                    <Box>
                                        <IconButton aria-label="share">
                                            <BookmarkBorderOutlinedIcon />
                                        </IconButton>
                                    </Box>

                                </CardActions>


                                <CardContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    <Typography variant="span">{post.likes.length} Likes</Typography>
                                    <Typography variant="p" color="text.secondary">{post.description}</Typography>
                                </CardContent>

                            </Card>
                        ))}
                    </Box>

                </Grid>

                <Grid item xs={1} md={5} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "start", alignItems: "center", flexDirection: "column" }}>

                    <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center" }}>

                        <CardMedia component="img" sx={{ width: "20%" }} image="Ellipse.png" alt="Live from space album cover" />

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Typography component="div" variant="h5">
                                {Admin.userName}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {Admin.email}
                            </Typography>
                        </CardContent>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".9rem" }}>
                                Follow
                            </IconButton>
                        </Box>

                    </Card>

                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "65%" }}>
                        <Typography component="p">
                            Suggestions For You
                        </Typography>

                        <Typography component="span">
                            See More
                        </Typography>
                    </Box>

                    {AllUsers.slice(0, 8).map(user => (
                        <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>

                            <Box sx={{ width: "20%" }}>
                                <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="Ellipse.png" alt="Live from space album cover" />
                            </Box>

                            <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                                <Typography component="div" variant="p">
                                    {user.userName}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">
                                    {user.status}
                                </Typography>
                            </CardContent>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                    Follow
                                </IconButton>
                            </Box>

                        </Card> 
                    ))}

                </Grid>

            </Grid>
        </>
    )
}
