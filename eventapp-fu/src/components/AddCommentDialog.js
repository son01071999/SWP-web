import { Component } from "react";



export class AddCommentDialog extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(cmt) {
        cmt.preventDefault();
        fetch('http://localhost:8000/comment/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                commentId: null,
                content: cmt.target.content.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                // alert(result);
                alert('Success');
            },
                (error) => {
                    alert('Failed');
                })
    }
    render() {
        return (
            <Grid >
                <form onSubmit={this.handleSubmit}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Comment</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            name="content"
                            label="Comment"
                            endAdornment={
                                <SendIcon />
                            }
                        />
                    </FormControl>
                </form>
            </Grid>
        );
    }
}