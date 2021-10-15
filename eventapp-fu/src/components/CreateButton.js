import React from 'react';
import {AddEventDialog} from './AddEventDialog';
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
                <AddEventDialog />
            </Dialog>
        </>
    );
}