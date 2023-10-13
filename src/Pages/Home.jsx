import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/virtual';
import { Card, Grid, CardContent, CardActions, Box, CardHeader, Typography, CardMedia, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';



export default function Home() {
    const [AllUsers, setAllUsers] = React.useState([]);
    const [AllPosts, setAllPosts] = React.useState([]);
    const Admin = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : { avatar: "", userName: "", email: "" };
    const Token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
    const navigate = useNavigate();

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

    function handleLogout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/Sign")
    }


    useEffect(() => {

        if (localStorage.getItem("token") === null)
            navigate("/Sign");

        fetchAllUsers()
        fetchAllPosts()
    }, [])

    return (
        <>
            <Grid container >

                <Grid item xs={12} md={7} >
                    <Swiper slidesPerView={2} modules={[Virtual]} virtual
                        breakpoints={{
                            300: {
                                slidesPerView: 3,
                            },
                            600: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 7,
                            },
                        }}
                    >

                        {
                            AllUsers.length === 0 ? (
                                <>
                                    <SwiperSlide >
                                        <Skeleton variant="circular" width="3rem" height="3rem" sx={{ bgcolor: 'grey.600' }} />
                                        <Skeleton variant="text" width="2rem" height="1rem" sx={{ bgcolor: 'grey.600' }} />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <Skeleton variant="circular" width="3rem" height="3rem" sx={{ bgcolor: 'grey.600' }} />
                                        <Skeleton variant="text" width="2rem" height="1rem" sx={{ bgcolor: 'grey.600' }} />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <Skeleton variant="circular" width="3rem" height="3rem" sx={{ bgcolor: 'grey.600' }} />
                                        <Skeleton variant="text" width="2rem" height="1rem" sx={{ bgcolor: 'grey.600' }} />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <Skeleton variant="circular" width="3rem" height="3rem" sx={{ bgcolor: 'grey.600' }} />
                                        <Skeleton variant="text" width="2rem" height="1rem" sx={{ bgcolor: 'grey.600' }} />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <Skeleton variant="circular" width="3rem" height="3rem" sx={{ bgcolor: 'grey.600' }} />
                                        <Skeleton variant="text" width="2rem" height="1rem" sx={{ bgcolor: 'grey.600' }} />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <Skeleton variant="circular" width="3rem" height="3rem" sx={{ bgcolor: 'grey.600' }} />
                                        <Skeleton variant="text" width="2rem" height="1rem" sx={{ bgcolor: 'grey.600' }} />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <Skeleton variant="circular" width="3rem" height="3rem" sx={{ bgcolor: 'grey.600' }} />
                                        <Skeleton variant="text" width="2rem" height="1rem" sx={{ bgcolor: 'grey.600' }} />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <Skeleton variant="circular" width="3rem" height="3rem" sx={{ bgcolor: 'grey.600' }} />
                                        <Skeleton variant="text" width="2rem" height="1rem" sx={{ bgcolor: 'grey.600' }} />
                                    </SwiperSlide>
                                </>
                            ) :
                                AllUsers.map((user, index) => (
                                    <SwiperSlide key={index} virtualIndex={index}>
                                        <Box sx={{ aspectRatio: "1/1", borderRadius: "50%", width: "4rem" }} component="img" src={user.avatar} alt="alt for image" />
                                        <Typography component="span" textAlign="center">{user.userName}</Typography>
                                    </SwiperSlide>
                                ))
                        }
                    </Swiper>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem", mt: "2rem" }}>

                        {AllPosts.length === 0 ? (
                            <>
                                <Card sx={{ maxWidth: "100%" }}>
                                    <CardHeader
                                        avatar={<Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>}
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={<Skeleton variant='text' width="1rem" height="1rem" ></Skeleton>}
                                        subheader={<Skeleton variant='text' width="3rem" height="1rem" ></Skeleton>}
                                    />

                                    <Skeleton variant='rectangular' width="100%" height="300px" ></Skeleton>

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


                                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: ".5rem", py: ".3rem" }}>
                                        <Skeleton variant='text' width="2rem" height="1rem" ></Skeleton>
                                        <Skeleton variant='text' width="5rem" height="1rem" ></Skeleton>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: "100%" }}>
                                    <CardHeader
                                        avatar={<Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>}
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={<Skeleton variant='text' width="1rem" height="1rem" ></Skeleton>}
                                        subheader={<Skeleton variant='text' width="3rem" height="1rem" ></Skeleton>}
                                    />

                                    <Skeleton variant='rectangular' width="100%" height="300px" ></Skeleton>

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


                                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: ".5rem", py: ".3rem" }}>
                                        <Skeleton variant='text' width="2rem" height="1rem" ></Skeleton>
                                        <Skeleton variant='text' width="5rem" height="1rem" ></Skeleton>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: "100%" }}>
                                    <CardHeader
                                        avatar={<Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>}
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={<Skeleton variant='text' width="1rem" height="1rem" ></Skeleton>}
                                        subheader={<Skeleton variant='text' width="3rem" height="1rem" ></Skeleton>}
                                    />

                                    <Skeleton variant='rectangular' width="100%" height="300px" ></Skeleton>

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


                                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: ".5rem", py: ".3rem" }}>
                                        <Skeleton variant='text' width="2rem" height="1rem" ></Skeleton>
                                        <Skeleton variant='text' width="5rem" height="1rem" ></Skeleton>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: "100%" }}>
                                    <CardHeader
                                        avatar={<Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>}
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={<Skeleton variant='text' width="1rem" height="1rem" ></Skeleton>}
                                        subheader={<Skeleton variant='text' width="3rem" height="1rem" ></Skeleton>}
                                    />

                                    <Skeleton variant='rectangular' width="100%" height="300px" ></Skeleton>

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


                                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: ".5rem", py: ".3rem" }}>
                                        <Skeleton variant='text' width="2rem" height="1rem" ></Skeleton>
                                        <Skeleton variant='text' width="5rem" height="1rem" ></Skeleton>
                                    </CardContent>
                                </Card>
                            </>
                        ) :
                            AllPosts.map(post => (
                                <Card sx={{ maxWidth: "100%" }} key={post.id}>
                                    <CardHeader
                                        avatar={<Box sx={{ aspectRatio: "1/1", borderRadius: "50%", width: "5rem" }} src={post.user.avatar} component="img" alt='image' />}
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
                                        height="300"
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


                                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: ".5rem", py: ".3rem" }}>
                                        <Typography component="span" variant="subtitle1">{post.likes.length} Likes</Typography>
                                        <Typography component="p" variant="subtitle1" color="text.secondary">{post.description}</Typography>
                                    </CardContent>

                                </Card>
                            ))}
                    </Box>

                </Grid>

                <Grid item xs={0} md={5} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "start", alignItems: "center", flexDirection: "column" }}>

                    <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center" }}>
                        <CardMedia component="img" sx={{ width: "20%", borderRadius: "50%" }} image={Admin.avatar} alt="Live from space album cover" />
                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Typography component="div" variant="h5">
                                {Admin.userName}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {Admin.email}
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton onClick={handleLogout} aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".9rem" }}> Logout</IconButton>
                        </Box>
                    </Card>

                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "65%" }}>
                        <Typography component="p">Suggestions For You</Typography>
                        <Typography component="span">See More</Typography>
                    </Box>

                    {
                        AllUsers.length === 0 ?
                            (<>
                                <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>
                                    <Box sx={{ width: "20%" }}>
                                        <Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>
                                    </Box>
                                    <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                                        <Typography component="div" variant="subtitle1">
                                            <Skeleton variant='rectangular' width="3rem" height="1rem" ></Skeleton>
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            <Skeleton variant='text' width="2rem" height=".7rem" ></Skeleton>
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                            Follow
                                        </IconButton>
                                    </Box>
                                </Card>
                                <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>
                                    <Box sx={{ width: "20%" }}>
                                        <Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>
                                    </Box>
                                    <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                                        <Typography component="div" variant="subtitle1">
                                            <Skeleton variant='rectangular' width="3rem" height="1rem" ></Skeleton>
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            <Skeleton variant='text' width="2rem" height=".7rem" ></Skeleton>
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                            Follow
                                        </IconButton>
                                    </Box>
                                </Card>
                                <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>
                                    <Box sx={{ width: "20%" }}>
                                        <Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>
                                    </Box>
                                    <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                                        <Typography component="div" variant="subtitle1">
                                            <Skeleton variant='rectangular' width="3rem" height="1rem" ></Skeleton>
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            <Skeleton variant='text' width="2rem" height=".7rem" ></Skeleton>
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                            Follow
                                        </IconButton>
                                    </Box>
                                </Card>
                                <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>
                                    <Box sx={{ width: "20%" }}>
                                        <Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>
                                    </Box>
                                    <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                                        <Typography component="div" variant="subtitle1">
                                            <Skeleton variant='rectangular' width="3rem" height="1rem" ></Skeleton>
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            <Skeleton variant='text' width="2rem" height=".7rem" ></Skeleton>
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                            Follow
                                        </IconButton>
                                    </Box>
                                </Card>
                                <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>
                                    <Box sx={{ width: "20%" }}>
                                        <Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>
                                    </Box>
                                    <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                                        <Typography component="div" variant="subtitle1">
                                            <Skeleton variant='rectangular' width="3rem" height="1rem" ></Skeleton>
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            <Skeleton variant='text' width="2rem" height=".7rem" ></Skeleton>
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                            Follow
                                        </IconButton>
                                    </Box>
                                </Card>
                                <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>
                                    <Box sx={{ width: "20%" }}>
                                        <Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>
                                    </Box>
                                    <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                                        <Typography component="div" variant="subtitle1">
                                            <Skeleton variant='rectangular' width="3rem" height="1rem" ></Skeleton>
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            <Skeleton variant='text' width="2rem" height=".7rem" ></Skeleton>
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                            Follow
                                        </IconButton>
                                    </Box>
                                </Card>
                                <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>
                                    <Box sx={{ width: "20%" }}>
                                        <Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>
                                    </Box>
                                    <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                                        <Typography component="div" variant="subtitle1">
                                            <Skeleton variant='rectangular' width="3rem" height="1rem" ></Skeleton>
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            <Skeleton variant='text' width="2rem" height=".7rem" ></Skeleton>
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                            Follow
                                        </IconButton>
                                    </Box>
                                </Card>
                                <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>
                                    <Box sx={{ width: "20%" }}>
                                        <Skeleton variant='circular' width="3rem" height="3rem" ></Skeleton>
                                    </Box>
                                    <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                                        <Typography component="div" variant="subtitle1">
                                            <Skeleton variant='rectangular' width="3rem" height="1rem" ></Skeleton>
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            <Skeleton variant='text' width="2rem" height=".7rem" ></Skeleton>
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                            Follow
                                        </IconButton>
                                    </Box>
                                </Card>
                            </>)
                            : AllUsers.slice(0, 10).map(user => (
                                <Card key={user.id} sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>

                                    <Box sx={{ width: "20%" }}>
                                        <CardMedia component="img" sx={{ borderRadius: "50%", width: '70%' }} image={user.avatar} alt="Live from space album cover" />
                                    </Box>

                                    <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                                        <Typography component="div" variant="subtitle1">
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
                            ))
                    }

                </Grid>

            </Grid>
        </>
    )
}
