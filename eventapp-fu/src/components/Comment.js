import { Grid } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Comment() {
    return (
        <>
            <h4>Buu</h4>
            <Grid style={{ display: "flex" }}>
                <Grid item sm={10}>
                    <p>u là trời, sự kiện vui ghê :D</p>
                </Grid>
                <Grid item sm={2} style={{ textAlign: "end" }}>
                    <EditIcon sx={{ fontSize: 15 }} />
                    <DeleteIcon sx={{ fontSize: 15 }} />
                </Grid>
            </Grid>
        </>
    )
}