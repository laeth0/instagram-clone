import * as React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function ResponsiveDrawerListItem({open,Text,Icon,onClick=()=>{}}) {
    return (
        <React.Fragment>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={onClick}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                        {Icon}
                    </ListItemIcon>
                    <ListItemText primary={Text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>
        </React.Fragment>
    )
}
