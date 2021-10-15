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

        const { events, evtName, evtStart, evtEnd, evtDes, evtStatus, evtLocal, evtMember } = this.state;

        const handleClickOpenAdd = () => {
            this.setState({ addEventOpen: true })
        }

        const handleClickClose = () => {
            this.setState({ addEventOpen: false })
            this.setState({ editorOpen: false })
        }

        return (
            <TableContainer component={Paper} >
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
                                <StyledTableCell align="center">{myevent.startDate}</StyledTableCell>
                                <StyledTableCell align="center">{myevent.endDate}</StyledTableCell>
                                <StyledTableCell align="center">{myevent.location}</StyledTableCell>
                                <StyledTableCell align="center">{myevent.description}</StyledTableCell>
                                <StyledTableCell align="center">{myevent.member}</StyledTableCell>
                                <StyledTableCell align="center">{myevent.status}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <div>
                                        <Button onClick={handleClickOpenAdd}>
                                            NewEvent
                                        </Button>
                                        <Dialog open={this.state.addEventOpen} onClose={handleClickClose}>
                                            <AddEventDialog />
                                        </Dialog>
                                    </div>
                                    <div>
                                        <Button onClick={() => this.setState({
                                            editorOpen: true,
                                            evtName: myevent.eventName,
                                            evtDes : myevent.description,
                                            evtStart: myevent.startDate,
                                            evtEnd: myevent.endDate,
                                            evtStatus : myevent.status,
                                            evtLocal: myevent.location,
                                            evtMember: myevent.member,
                                        })} >
                                            Edit
                                        </Button>
                                        <Dialog open={this.state.editorOpen} onClose={handleClickClose}>
                                            <EditEventDialog
                                            evtName={evtName}
                                            evtStart={evtStart}
                                            evtEnd={evtEnd}
                                            evtLocal={evtLocal}
                                            evtMember={evtMember}
                                            evtStatus={evtStatus}
                                            evtDes={evtDes}
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