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
    Grid,
} from "@mui/material";
import { withStyles } from '@mui/styles';
import CreateButton from "../components/CreateButton";
import { NavLink } from "react-router-dom";

const CustomButtonStart = withStyles({
    root: {
        marginLeft: "3%",
        backgroundColor: "#FB8C00",
        '&:hover': {
            background: "#F00",
        }
    },

})(Button);


function ListEvent() {
    return (
        <Grid container>
            <Grid item sm={3} style={{ justifyContent: "center", alignItems: "flex-start", display: "flex", marginTop: "2%" }}>
                <CreateButton />
            </Grid>
            <Grid item sm={9}>
                {/* sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }} style={{ margin: "auto" }} */}
                <List >
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
                            <NavLink to="event-detail">
                                <Button variant="outlined" >
                                    Detail
                                </Button>
                            </NavLink>
                            <CustomButtonStart variant="contained" color="success" >
                                Start
                            </CustomButtonStart>
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
                            <CustomButtonStart variant="contained" disabled color="success" >
                                Start
                            </CustomButtonStart>
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
                            <CustomButtonStart variant="contained" disabled color="success" >
                                Start
                            </CustomButtonStart>
                        </Grid>
                    </ListItem>
                </List>
            </Grid>
        </Grid>

    );
}

export default ListEvent;
