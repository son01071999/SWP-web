import { Component } from "react";
import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog } from '@mui/material';
import { EditEventDialog } from '../components/EditEventDialog';
import { AddEventDialog } from '../components/AddEventDialog';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export class EventMng extends Component {
    constructor(props) {
        super(props);
        this.state = { events: [], editorOpen: false, addEventOpen: false }
    }

    refreshList() {
        fetch('http://localhost:8000/event/findAll')
            .then(response => response.json())
            .then(data => {
                this.setState({ events: data });
                console.log(data);
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    // componentDidUpdate(){
    //     this.refreshList();
    // }

    render() {

        const { events, evtId, evtName, evtStart, evtEnd, evtDes, evtStatus, evtLocal, evtMember } = this.state;

        const handleClickOpenAdd = () => {
            this.setState({ addEventOpen: true })
        }

        const handleClickClose = () => {
            this.setState({ addEventOpen: false })
            this.setState({ editorOpen: false })
        }
        return (
            <TableContainer component={Paper} >
                <div style={{ textAlign: "center", width:"300px", margin:"15px auto" }}>
                    <Button onClick={handleClickOpenAdd}>
                        
                        NewEvent
                    </Button>
                    <Dialog open={this.state.addEventOpen} onClose={handleClickClose}>
                        <AddEventDialog />
                    </Dialog>
                </div>
                <Table sx={{ minWidth: 700 }} aria-label="customized table" >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">EventName</StyledTableCell>
                            <StyledTableCell align="center">StartDate</StyledTableCell>
                            <StyledTableCell align="center">EndDate</StyledTableCell>
                            <StyledTableCell align="center">Location</StyledTableCell>
                            <StyledTableCell align="center">Description</StyledTableCell>
                            <StyledTableCell align="center">Member</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((myevent) => (
                            <StyledTableRow key={myevent.eventId}>
                                <StyledTableCell align="center">
                                    {myevent.eventName}
                                </StyledTableCell>
                                <StyledTableCell align="center">{myevent.startDate.toString().slice(0,10)}</StyledTableCell>
                                <StyledTableCell align="center">{myevent.endDate.toString().slice(0,10)}</StyledTableCell>
                                <StyledTableCell align="center">{myevent.location}</StyledTableCell>
                                <StyledTableCell align="center">{myevent.description}</StyledTableCell>
                                <StyledTableCell align="center">{myevent.member}</StyledTableCell>
                                <StyledTableCell align="center" >
                                    {myevent.status}
                                </StyledTableCell>
                                <StyledTableCell align="center">

                                    <div>
                                        <Button onClick={() => this.setState({
                                            editorOpen: true,
                                            evtId: myevent.eventId,
                                            evtName: myevent.eventName,
                                            evtDes: myevent.description,
                                            evtStart: myevent.startDate,
                                            evtEnd: myevent.endDate,
                                            evtStatus: myevent.status,
                                            evtLocal: myevent.location,
                                            evtMember: myevent.member,
                                        })} >
                                            Edit
                                        </Button>
                                        <Dialog open={this.state.editorOpen} onClose={handleClickClose}>
                                            <EditEventDialog
                                                evtid={evtId}
                                                evtname={evtName}
                                                evtstart={evtStart}
                                                evtend={evtEnd}
                                                evtlocal={evtLocal}
                                                evtmember={evtMember}
                                                evtstatus={evtStatus}
                                                evtdes={evtDes}
                                            />
                                        </Dialog>
                                    </div>

                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}