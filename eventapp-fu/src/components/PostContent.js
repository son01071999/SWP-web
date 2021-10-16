import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DetailsRoundedIcon from '@mui/icons-material/DetailsRounded';
import { Dialog } from '@mui/material';
import axios from 'axios';
import {
    Grid,
    Button,
}
    from '@mui/material';
import { NavLink } from 'react-router-dom';
import Comment from './Comment';

export default function PostContent() {

    const [listEvent, setListEvent] = React.useState([]);

    const [cmtDialog, setCmtDialog] = React.useState(false);

    const handleDialogOpen = () => {
        setCmtDialog(true);
    }

    const closeDialog = () => {
        setCmtDialog(false);
    }

    useEffect(() => {
        axios.get("http://localhost:8000/event/findAll")
            .then(res => {
                console.log(res);
                setListEvent(res.data);
                console.log('success with all event at Homepage')
            })
            .catch(err => {
                console.log(err);
                console.log('error')
            })
    }, [])


    return (
        <>
            {
                listEvent.map(allevent => (
                    <Card sx={{ maxWidth: 450 }} style={{ margin: "30px 7%", padding: "20px" }} key={allevent.eventId}>

                        <Grid >
                            <CardHeader
                                action={
                                    <NavLink to='/event-detail'>
                                        <IconButton aria-label="settings">
                                            <DetailsRoundedIcon />
                                        </IconButton>
                                    </NavLink>
                                }
                                title={allevent.eventName}
                                subheader={allevent.startDate}
                            />
                            <CardMedia
                                component="img"
                                height="300"
                                image="https://daihoc.fpt.edu.vn/media/2021/07/BaiPR-FPTU-2021-B1-2.png"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {allevent.description}
                                </Typography>
                            </CardContent>
                            <div>
                                <Button onClick={handleDialogOpen} >
                                    View comment
                                </Button>
                                <Dialog open={cmtDialog} onClose={closeDialog}>
                                    <Comment />
                                </Dialog>
                            </div>
                        </Grid>
                    </Card>
                ))
            }
        </>
    );
}