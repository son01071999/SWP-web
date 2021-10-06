import React from 'react';
import Poster from "../components/Poster";
import { Button, Dialog } from "@mui/material";

export default function CreateButton() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Tạo bài viết
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <Poster />
            </Dialog>
        </>
    );
}