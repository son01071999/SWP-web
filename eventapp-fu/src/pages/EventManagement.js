import React, { useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog } from '@mui/material';
import {EditEventDialog} from '../components/EditEventDialog';
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


export default function EventManagement() {

    const [listEvent, setListEvent] = React.useState([]);
    const [editorOpen, setEditorOpen] = React.useState(false);
    const [addEventOpen, setAddEventOpen] = React.useState(false);


    const handleClickOpenEdit = () => {
        setEditorOpen(true);
    }


    const handleClickOpenAdd = () => {
        setAddEventOpen(true);
    }

    const handleClickClose = () => {
        setAddEventOpen(false);
        setEditorOpen(false);
    }
    useEffect(() => {
        axios.get("http://localhost:8000/event/findAll")
            .then(res => {
                console.log(res);
                setListEvent(res.data);
                console.log('success with listEvent')
            })
            .catch(err => {
                console.log(err);
                console.log('error')
            })
    }, [])
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
                    {listEvent.map((myevent) => (
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
                                    <Dialog open={addEventOpen} onClose={handleClickClose}>
                                        <AddEventDialog />
                                    </Dialog>
                                </div>
                                <div>
                                    <Button onClick={handleClickOpenEdit} >
                                        Edit
                                    </Button>
                                    <Dialog open={editorOpen} onClose={handleClickClose}>
                                        <EditEventDialog />
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