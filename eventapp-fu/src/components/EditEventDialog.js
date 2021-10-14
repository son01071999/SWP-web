import React from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'

export default function EditEventDialog() {
    const paperStyle = { padding: 20, height: '70vh', width: 500, margin: "20px auto", display: "flex", flexDirection: "column" }
    const btnstyle = { margin: '8px 0' }
    return (
        <Grid style={{ width: "600px" }}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Edit Event</h2>
                </Grid>

                <TextField label='EventName' placeholder='Enter eventName' style={{ marginBottom: "15px" }} />
                <TextField
                    id="filled-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    variant="filled"
                />
                <TextField label='StartDate' placeholder='Enter StartDate' style={{ marginBottom: "15px" }} />
                <TextField label='EndDate' placeholder='Enter EndDate' style={{ marginBottom: "15px" }} />
                <TextField label='Location' placeholder='Enter Location' style={{ marginBottom: "15px" }} />
                <TextField label='Member' placeholder='Enter Member' style={{ marginBottom: "15px" }} />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>
            </Paper>
        </Grid>
    )
}