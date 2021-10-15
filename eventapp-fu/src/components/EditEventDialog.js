import React, { Component } from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'


export class EditEventDialog extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8000/event/update', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // eventId:event.target.eventId.value,
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
                alert('Success');
            },
                (error) => {
                    console.log(error)
                    alert('Failed');
                })
    }

    render() {
        const paperStyle = { padding: 20, height: '70vh', width: 500, margin: "20px auto" }
        const btnstyle = { margin: '8px 0' };
        return (
            <Grid style={{ width: "600px" }} {...this.props}>
                <Paper elevation={10} style={paperStyle}

                >
                    <Grid align='center'>
                        <h2>Edit event</h2>
                    </Grid>
                    <form onSubmit={this.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                        <TextField name="eventName" defaultValue={this.props.evtName} label='EventName' placeholder='Enter eventName' style={{ marginBottom: "15px" }} />
                        <TextField
                            id="filled-multiline-static"
                            label="Description"
                            multiline
                            defaultValue={this.props.evtDes}
                            name="description"
                            rows={4}
                            variant="filled"
                        />
                        <TextField name="startDate" defaultValue={this.props.evtStart} label='StartDate' placeholder='Enter StartDate' style={{ marginBottom: "15px" }} />
                        <TextField name="endDate" defaultValue={this.props.evtEnd} label='EndDate' placeholder='Enter EndDate' style={{ marginBottom: "15px" }} />
                        <TextField name="location" defaultValue={this.props.evtLocal} label='Location' placeholder='Enter Location' style={{ marginBottom: "15px" }} />
                        <TextField name="member" defaultValue={this.props.evtMember} label='Member' placeholder='Enter Member' style={{ marginBottom: "15px" }} />
                        <TextField name="status" defaultValue={this.props.evtStatus} label='Status' placeholder='Enter Status' style={{ marginBottom: "15px" }} />
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Edit</Button>
                    </form>
                </Paper>
            </Grid>
        )
    }
}