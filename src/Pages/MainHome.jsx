import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ResponsiveDrawerListItem from "../Component/ResponsiveDrawerListItem";
import {useNavigate ,Outlet} from 'react-router-dom';





const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function App() {


    const [open, setOpen] = React.useState(false);
    const Admin = JSON.parse(localStorage.getItem("user"))


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open} >

                <List sx={{ height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                    <Box>
                        <ResponsiveDrawerListItem Text="Home" Icon={<HomeIcon />} onClick={() => { }} open={open} />
                        <ResponsiveDrawerListItem Text="Search" Icon={<SearchIcon />} onClick={() => { }} open={open} />
                        <ResponsiveDrawerListItem Text="Explore" Icon={<ExploreOutlinedIcon />} onClick={() => { }} open={open} />
                        <ResponsiveDrawerListItem Text="Reels" Icon={<MovieFilterIcon />} onClick={() => { }} open={open} />
                        <ResponsiveDrawerListItem Text="Messages" Icon={<WhatsAppIcon />} onClick={() => { }} open={open} />
                        <ResponsiveDrawerListItem Text="Notifications" Icon={<FavoriteBorderIcon />} onClick={() => { }} open={open} />
                        <ResponsiveDrawerListItem Text="Create" Icon={<AddCircleOutlineIcon />} onClick={() => { }} open={open} />
                        <ResponsiveDrawerListItem Text={Admin.userName} Icon={<Box component="img" src="Ellipse.png" sx={{width:"66%"}} alt='user image'/>} onClick={() => { }} open={open} />
                    </Box>
                    <Box>
                        <ResponsiveDrawerListItem Text="Menu" Icon={<IconButton sx={{ p: 0 }} color="inherit" aria-label="open drawer" ><MenuIcon /></IconButton>} onClick={() => setOpen(!open)} open={open} />
                    </Box>
                </List>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
}

