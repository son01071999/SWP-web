import { Button, Dialog, Grid } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Post from "../components/Post";
import PostContent from "../components/PostContent";

function Home() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid >
            <Grid container>
                <Grid item sm={4} >
                    <Grid style={{ marginLeft: "10%", marginTop: "10%" }}>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Tạo bài viết
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                        >
                            <Post />
                        </Dialog>
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
