import { Grid, Button } from '@mui/material';
import React from 'react';
import PostContent from '../components/PostContent';
import { withStyles } from '@mui/styles';




const CustomButtonStart = withStyles({
    root: {
        marginLeft: "3%",
        backgroundColor: "#FB8C00",
        '&:hover': {
            background: "#F00",
        }
    },

})(Button);

export default function EventDetail() {
    return (
        <Grid >
            <Grid container>
                <Grid item sm={4} >
                    <Grid style={{ justifyContent: "center", alignItems: "flex-start", display: "flex", marginTop: "7%" }}>
                        <CustomButtonStart variant="contained" color="success" >
                            Start
                        </CustomButtonStart>
                    </Grid>
                </Grid>
                <Grid item sm={8}>
                    <Grid>
                        <Grid >
                            <PostContent />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
}