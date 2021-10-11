import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import CreateButton from "../components/CreateButton";
import Footer from "../components/Footer";
import PostContent from "../components/PostContent";
import axios, { Axios } from 'axios';
function Home() {

    const [listEvent, setListEvent] = React.useState([])

    useEffect(() => {
        axios.get("https://ac34-2402-800-6379-36e4-19db-7eb2-b120-fc19.ngrok.io/event/findAll")
            .then(res => {
                console.log(res);
                setListEvent(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <Grid >
            <Grid container>
                <Grid item sm={4} >
                    <Grid style={{ justifyContent: "center", alignItems: "flex-start", display: "flex", marginTop: "7%" }}>
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
