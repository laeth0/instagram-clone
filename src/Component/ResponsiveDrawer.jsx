import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Home from '../Pages/Home';
import Explore from '../Pages/Explore';
import Messages from '../Pages/Messages';
import Profile from '../Pages/Profile';
import PageNotFound from '../Pages/PageNotFound';
import { Typography } from '@mui/material';




const drawerWidth = 240;

function ResponsiveDrawer(props) {


    const { window } = props;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const drawer = (
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: "1rem", height:"100%",justifyContent:"space-between" }}>
            <Box>
                <img src="instagram_Logo.png" />

                <List>
                    {[{ text: 'Home', icon: <InboxIcon /> }, { text: 'Explore', icon: <MailIcon /> }, { text: 'Messages', icon: <InboxIcon /> }, { text: 'Profile', icon: <MailIcon /> }, { text: 'PageNotFound', icon: <InboxIcon /> }].map((e) => (
                        <ListItem key={e.text} disablePadding >
                            <ListItemButton sx={{ display: 'flex', gap: ".7rem" }} >

                                <ListItemIcon sx={{ minWidth: "fit-content" }}>{e.icon}</ListItemIcon>
                                <ListItemText primary={drawerWidth === 240 ? e.text : ""} />

                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    sx={{ display: { sm: 'flex' } , borderRadius:"0"}}
                >
                    <MenuIcon />
                    <Typography component="span" >Menu</Typography>
                </IconButton>
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>

            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">

                <Drawer container={container} variant="temporary" open={mobileOpen} onClose={() => setMobileOpen(!mobileOpen)}
                    ModalProps={{ keepMounted: true, }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>

            </Box>

            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }} >
                <BrowserRouter >
                    <Routes>
                        < Route index element={<Home />} />
                        < Route path='/Explore' element={<Explore />} />
                        < Route path='/Profile' element={<Profile />} />
                        < Route path='/Messages' element={<Messages />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>

            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
