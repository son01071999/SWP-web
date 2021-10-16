import { Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export default function Comment() {
    const [listComment, setListComment] = React.useState([]);
    // const [listUser, setListUser] = React.useState([]);
    useEffect(() => {
        const getComment = axios.get("http://localhost:8000/comment/findAll")
            .then(res => {
                console.log(res);
                setListComment(res.data);
                console.log('success with comment')
            })
            .catch(err => {
                console.log(err);
                console.log('error')
            })

        // const getUser = axios.get(`http://localhost:8000/user/findById/${id}`)
        //     .then(res => {
        //         setListUser(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }, [])
    return (
        <div style={{ height: "700px"}}>
            {listComment.map(comment => (
                <Grid style={{ display: "flex" }} key={comment.commentId}>
                    <Grid item sm={10} style={{ marginLeft: "25px" }}>
                        <p >{comment.userId} - {comment.content}</p>
                    </Grid>
                    <Grid item sm={2}>
                        <EditIcon sx={{ fontSize: 15 }} />
                        <DeleteIcon sx={{ fontSize: 15 }} />
                    </Grid>
                </Grid>
            ))}
            <Button style={{textAlign:"center"}}>Comment</Button>
        </div>
    )
}