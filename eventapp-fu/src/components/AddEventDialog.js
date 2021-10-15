import React, { Component } from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'




export class AddEventDialog extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8000/event/addEvent', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                eventId: null,
                eventName: event.target.eventName.value,
                description: event.target.description.value,
                startDate: event.target.startDate.value,
                endDate: event.target.endDate.value,
                location: event.target.location.value,
                member: event.target.member.value,
                status: event.target.status.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                alert('success');
            },
                (error) => {
                    console.log(error);
                    alert('Failed');
                })
    }

    render() {
        const paperStyle = { padding: 20, height: '70vh', width: 500, margin: "20px auto" }
        const btnstyle = { margin: '8px 0' };
        return (
            <Grid style={{ width: "600px" }}>
                <Paper elevation={10} style={paperStyle}
                    {...this.props}
                >
                    <Grid align='center'>
                        <h2>Add new event</h2>
                    </Grid>
                    <form onSubmit={this.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                        <TextField name="eventName" label='EventName' placeholder='Enter eventName' style={{ marginBottom: "15px" }} />
                        <TextField
                            id="filled-multiline-static"
                            label="Description"
                            multiline
                            name="description"
                            rows={4}
                            variant="filled"
                        />
                        <TextField name="startDate" label='StartDate' placeholder='Enter StartDate' style={{ marginBottom: "15px" }} />
                        <TextField name="endDate" label='EndDate' placeholder='Enter EndDate' style={{ marginBottom: "15px" }} />
                        <TextField name="location" label='Location' placeholder='Enter Location' style={{ marginBottom: "15px" }} />
                        <TextField name="member" label='Member' placeholder='Enter Member' style={{ marginBottom: "15px" }} />
                        <TextField name="status" label='Status' placeholder='Enter Status' style={{ marginBottom: "15px" }} />
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Add new</Button>
                    </form>
                </Paper>
            </Grid>
        )
    }


}