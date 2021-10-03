import React from "react";
import {
    Typography,
    Divider,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    List,
    Button,
    Grid
} from "@mui/material";

function Services() {
    return (
        <List sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }} style={{margin:"auto"}}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        alt="eventImage"
                        src="/static/images/avatar/1.jpg"
                        variant="square"
                        sx={{ width: 200, height: 200 }}
                    />
                </ListItemAvatar>
                <Grid style={{ marginLeft: "19px" }}>
                    <ListItemText
                        primary="Title"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                                </Typography>
                            </React.Fragment>
                        }
                    />
                    <Button variant="outlined" >
                        Detail
                    </Button>
                </Grid>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        alt="eventImage"
                        src="/static/images/avatar/1.jpg"
                        variant="square"
                        sx={{ width: 200, height: 200 }}
                    />
                </ListItemAvatar>
                <Grid style={{ marginLeft: "19px" }}>
                    <ListItemText
                        primary="Title"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                                </Typography>
                            </React.Fragment>
                        }
                    />
                    <Button variant="outlined" >
                        Detail
                    </Button>
                </Grid>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        alt="eventImage"
                        src="/static/images/avatar/1.jpg"
                        variant="square"
                        sx={{ width: 200, height: 200 }}
                    />
                </ListItemAvatar>
                <Grid style={{ marginLeft: "19px" }}>
                    <ListItemText
                        primary="Title"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                                </Typography>
                            </React.Fragment>
                        }
                    />
                    <Button variant="outlined" >
                        Detail
                    </Button>
                </Grid>
            </ListItem>
        </List>
    );
}

export default Services;
