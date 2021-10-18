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
                        <p>Event Name</p>
                        <TextField name="eventName"  placeholder="Enter event's name" style={{ marginBottom: "15px" }} />
                        <TextField
                            id="filled-multiline-static"
                            label="Description"
                            multiline
                            name="description"
                            rows={4}
                            variant="filled"
                        />
                        <br></br>
                        <p>Start Date</p>
                        <TextField name="startDate"  style={{ marginBottom: "15px" }} type="date" />
                        <p>End Date</p>
                        <TextField name="endDate"   style={{ marginBottom: "15px" }} type="date" />
                        <p>Location</p>
                        <TextField name="location"  placeholder='Enter location' style={{ marginBottom: "15px" }} />
                        <p>Member</p>
                        <TextField name="member" placeholder='Enter member' style={{ marginBottom: "15px" }} type="number" onChange={(event) => event.target.value < 0 ? (event.target.value = 0) : event.target.value} />
                        <select id="status" name="status" label="Status" style={{ marginBottom: "15px" }}>
                            <option value="Not Start" >Not Start</option>
                            <option value="Active" >Active</option>
                        </select>
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Add new</Button>
                    </form>
                </Paper>
            </Grid>
        )
    }


}