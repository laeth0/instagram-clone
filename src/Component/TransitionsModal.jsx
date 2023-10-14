import * as React from 'react';
import { Typography, Divider, Button, Fade, Modal, Box, Backdrop, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function TransitionsModal({ openTransitionsModal, setOpenTransitionsModal }) {


    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openTransitionsModal}
                onClose={() => setOpenTransitionsModal(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{ backdrop: { timeout: 500, }, }}
            >
                <Fade in={openTransitionsModal}>
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: "50%", height: "70%", bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, }}>
                        <Typography id="transition-modal-title" variant="h6" textAlign="center" component="h2">Create new post</Typography>
                        <Divider />
                        <Typography id="transition-modal-description" sx={{ mt: "1rem" }}>Description</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", height: "100%" ,width: "100%"}}>
                            <TextField sx={{ background: grey[800], borderRadius: "10px", resize: "both", width: "100%", height: "50%", marginX: "auto" }} multiline variant="standard" id="standard-multiline-static" />
                            <Button variant='contained' sx={{ fontSize: {xs:".6rem",md:"1rem"} }}>Choose Image</Button>
                            <Button variant='contained' sx={{ fontSize: {xs:".6rem",md:"1rem"} }}>Post</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
