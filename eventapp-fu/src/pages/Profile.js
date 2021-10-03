import {
    Grid,
    Avatar,
    TextField,
    Box,
    InputLabel,
    FormControl,
    InputAdornment,
    IconButton,
    OutlinedInput,
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";

function Profile() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Grid container marginTop="2%">
            <Grid item sm={5}>
                <Grid >
                    <Avatar
                        alt="Buu Huynh"
                        sx={{ width: 160, height: 160 }}
                        src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/185243223_1953754894791542_2328981666400432053_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=s6NeGlf2ANgAX9rLymF&_nc_ht=scontent-xsp1-1.xx&oh=97fadb425aa4d971e42ff7471cb20f16&oe=6170B678"
                    />
                    <Grid>
                        <Grid>
                            <TextField
                                label="Email"
                                id="email"
                                sx={{ m: 1, width: '25ch' }}
                            />
                        </Grid>
                        <Grid>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={7} >
                <Box
                    style={{ display: "flex", flexDirection: "column" }}
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}>
                    <TextField id="firstName" label="FirstName" variant="standard" />
                    <TextField id="lastName" label="LastName" variant="standard" />
                    <TextField id="idStudent" label="Code" variant="standard" />
                    <TextField id="specialized" label="Specialized" variant="standard" />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Profile;
