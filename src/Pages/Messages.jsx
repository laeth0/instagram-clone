import * as React from 'react'
import { Box, Button, Grid, Typography, Divider } from '@mui/material'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';



export default function Messages() {
    const [openChat, setOpenChat] = React.useState(false)
    const [openMessage, setOpenMessage] = React.useState(false)
    const [AllUsers, setAllUsers] = React.useState([]);
    const [personChart, setPersonChart] = React.useState({});
    const navigate = useNavigate();
    const Admin = JSON.parse(localStorage.getItem("user"))


    function fetchAllUsers() {
        axios.get("http://16.170.173.197/users")
            .then(({ data }) => setAllUsers(data.users))
            .catch((err) => console.log(err))
    }
    React.useEffect(() => {
        if (Admin == null)
            navigate("/Sign");

        fetchAllUsers()
    }, [])

    return (
        <Grid container sx={{ height: "100vh" }}>
            <Grid item xs={12} sm={3} md={2} sx={{ display: { xs: openMessage ? "block" : "none", sm: "block" } ,height:"100vh",overflowY:"scroll"}}>
                <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}>
                    <Button sx={{ color: 'white', textTransform: "none", width: "100%", paddingY: "1rem" }} onClick={() => setOpenMessage(!openMessage)}>
                        <KeyboardArrowLeftOutlinedIcon />
                        <Typography>Go To Messages</Typography>
                    </Button>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography>{Admin.userName}</Typography>

                        <IconButton>
                            <KeyboardArrowDownOutlinedIcon />
                        </IconButton>
                    </Box>

                    <IconButton>
                        <EditNoteOutlinedIcon />
                    </IconButton>

                </Box>

                <Divider />

                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginY: "1rem" }}>

                    {AllUsers.map(user =>
                        <Box key={user.id} onClick={() => { setOpenChat(true); setPersonChart(user) }} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>

                            <Box component="img" src='MyPhoto.jpg' alt='MyPhoto' sx={{ width: "25%", borderRadius: "50%", aspectRatio: "1/1" }} />

                            <Box>
                                <Typography sx={{ fontSize: "1rem" }}>{user.userName}</Typography>
                                <Typography sx={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: 'ellipsis', width: '100%', fontSize: ".7rem" }}>Lorem ipsum dolor  </Typography>
                            </Box>

                        </Box>
                    )}
                </Box>

            </Grid>

            <Grid item xs={12} sm={9} md={10} sx={{ display: { xs: openMessage ? "none" : "block", sm: "block" } }}>







                <Box sx={{ display: openChat == false ? "flex" : "none", flexDirection: "column",height:"100%", justifyContent: "center", alignItems: "center", gap: "1rem", textAlign: "center" }}>
                    <Box component="img" src='messengar.png' alt='messengar.png' />
                    <Typography variant='h3'> Your messenger </Typography>
                    <Typography component="p" variant="h6"> Send private photos and messages to a friend or group </Typography>
                    <Button variant="contained" onClick={() => setOpenMessage(!openMessage)} >SEND MESSAGE</Button>
                </Box>

                <Box sx={{ height: "100%", display: openChat == true ? "flex" : "none", flexDirection: "column", width: "100%", justifyContent: "space-between" }}>

                    <Box sx={{ display: "flex", mt: "1rem" }}>
                        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                            <KeyboardArrowLeftOutlinedIcon sx={{ display: { xs:"block",sm:"none"}}} onClick={() => setOpenMessage(!openMessage)} />

                            <Box component="img" src='MyPhoto.jpg' alt='MyPhoto' sx={{ width: { xs: "3rem", md: "4rem" }, borderRadius: "50%", aspectRatio: "1/1", marginX: ".5rem" }} />

                            <Box>
                                <Typography sx={{ fontSize: "1rem" }}>{personChart.userName}</Typography>
                                <Typography sx={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: 'ellipsis', width: '100%', fontSize: ".7rem" }}>{personChart.email}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", marginInlineEnd: "1rem" }}>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>

                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton sx={{ marginX: "1rem" }}>
                            <SentimentSatisfiedAltIcon />
                        </IconButton>
                        <IconButton sx={{ marginX: "1rem" }}>
                            <AddIcon />
                        </IconButton>
                        <TextField sx={{ display: "flex", flex: 1 }} />
                        <IconButton sx={{ marginX: "1rem" }} >
                            <KeyboardVoiceIcon />
                        </IconButton>
                    </Box>
                </Box>


            </Grid>
        </Grid>
    )
}
