import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios, { Axios } from 'axios';

export default function Comment() {
    const [listComment, setListComment] = React.useState([]);
    useEffect(() => {
        axios.get("https://ac34-2402-800-6379-36e4-19db-7eb2-b120-fc19.ngrok.io/comment/findAll")
            .then(res => {
                console.log(res);
                setListComment(res.data);
                console.log('success with comment')
            })
            .catch(err => {
                console.log(err);
                console.log('error')
            })
    }, [])
    return (
        <>
            <Grid style={{ display: "flex" }}>
                <Grid item sm={10}>
                    {listComment.map(comment => (
                            <p key={comment.commentId}>{comment.userId} - {comment.content}</p>
                    ))}
                </Grid>
                <Grid item sm={2} style={{ textAlign: "end" }}>
                    <EditIcon sx={{ fontSize: 15 }} />
                    <DeleteIcon sx={{ fontSize: 15 }} />
                </Grid>
            </Grid>
        </>
    )
}