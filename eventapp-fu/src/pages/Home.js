import { Grid } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import PostContent from "../components/PostContent";

function Home() {
    return (
        <Grid>
            <Grid item>
                <PostContent />
            </Grid>
            <Grid item>
                <PostContent />
            </Grid>
            <Grid item>
                <PostContent />
            </Grid>
            <Footer />
        </Grid>
    );
}

export default Home;
