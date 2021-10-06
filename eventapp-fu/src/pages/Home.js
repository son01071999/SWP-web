import {Grid } from "@mui/material";
import React from "react";
import CreateButton from "../components/CreateButton";
import Footer from "../components/Footer";
import PostContent from "../components/PostContent";

function Home() {
    return (
        <Grid >
            <Grid container>
                <Grid item sm={4} >
                    <Grid style={{justifyContent:"center", alignItems:"flex-start", display:"flex", marginTop:"7%"}}>
                        <CreateButton />
                    </Grid>
                </Grid>
                <Grid item sm={8}>
                    <Grid>
                        <Grid >
                            <PostContent />
                        </Grid>
                        <Grid >
                            <PostContent />
                        </Grid>
                        <Grid >
                            <PostContent />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </Grid >
    );
}

export default Home;
