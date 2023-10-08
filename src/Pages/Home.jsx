import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, Grid, CardContent, CardActions, Box, CardHeader, Typography, CardMedia, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export default function Home() {
    return (
        <>
            <Grid container spacing={2}>

                <Grid item xs={5} >

                    <Swiper grabCursor={true} centeredSlides={true} loop={true} slidesPerView={7} sx={{ width: "100" }} >
                        <SwiperSlide>
                            <img src='Ellipse.png' />
                            <Typography component="span">raed</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src='Ellipse.png' />
                            <Typography component="span">Laeth</Typography>
                        </SwiperSlide>
                    </Swiper>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem", mt: "2rem" }}>

                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='Ellipse.png' />}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />

                            <CardMedia
                                component="img"
                                height="350"
                                image="Post.png"
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


                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>



                        </Card>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='Ellipse.png' />}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />

                            <CardMedia
                                component="img"
                                height="350"
                                image="Post.png"
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


                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>



                        </Card>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='Ellipse.png' />}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />

                            <CardMedia
                                component="img"
                                height="350"
                                image="Post.png"
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


                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>



                        </Card>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='Ellipse.png' />}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />

                            <CardMedia
                                component="img"
                                height="350"
                                image="Post.png"
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


                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>



                        </Card>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='Ellipse.png' />}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />

                            <CardMedia
                                component="img"
                                height="350"
                                image="Post.png"
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


                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>



                        </Card>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='Ellipse.png' />}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />

                            <CardMedia
                                component="img"
                                height="350"
                                image="Post.png"
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


                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>



                        </Card>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardHeader
                                avatar={<img src='Ellipse.png' />}

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />

                            <CardMedia
                                component="img"
                                height="350"
                                image="Post.png"
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


                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>



                        </Card>

                    </Box>

                </Grid>

                <Grid item xs={7} sx={{ display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>

                    <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center" }}>

                        <CardMedia
                            component="img"
                            sx={{ width: "20%" }}
                            image="Ellipse.png"
                            alt="Live from space album cover"
                        />

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Typography component="div" variant="h5">
                                Laeth0
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Laeth Nueirat
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

                    <Card sx={{ display: 'flex', background: "none", width: "65%", alignItems: "center", height: "4rem" }}>

                        <Box sx={{ width: "20%" }}>
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="Ellipse.png" alt="Live from space album cover" />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                                Laeth0
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                Laeth Nueirat
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
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="Ellipse.png" alt="Live from space album cover" />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                                Laeth0
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                Laeth Nueirat
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
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="Ellipse.png" alt="Live from space album cover" />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                                Laeth0
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                Laeth Nueirat
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
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="Ellipse.png" alt="Live from space album cover" />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                                Laeth0
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                Laeth Nueirat
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
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="Ellipse.png" alt="Live from space album cover" />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                                Laeth0
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                Laeth Nueirat
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
                            <CardMedia component="img" sx={{ objectFit: "scale-down" }} image="Ellipse.png" alt="Live from space album cover" />
                        </Box>

                        <CardContent sx={{ flex: '1 0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center", py: "0" }}>
                            <Typography component="div" variant="p">
                                Laeth0
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                Laeth Nueirat
                            </Typography>
                        </CardContent>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="previous" color='info' sx={{ borderRadius: "0", fontSize: ".8rem" }}>
                                Follow
                            </IconButton>
                        </Box>

                    </Card>

                </Grid>

            </Grid>
        </>
    )
}
