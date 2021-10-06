import React from 'react';
import {
    Grid,
    Box,
    Avatar,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Container,
    Link,
    CssBaseline,

} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Form , Formik,Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';


const theme = createTheme();

export default function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const initialValues={
        email:'',
        password:'',
        remember:false
    }
    const validationSchema=Yup.object().shape({
        email:Yup.string().email('Please enter valid Email').required("Required Email"),
        password:Yup.string().required("Required password ")
    })
    const onSubmit= (values, props)=>{
        console.log(values)
    
        setTimeout(()=>{
            props.resetForm()

        },2000)
        

    }
    

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                   
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} sx={{ mt: 1 }} >
                            {(props)=>(
                                <Form>
                                    {console.log(props)}
                                    <Field as={TextField}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            helperText={<ErrorMessage name="email"/>}
                        />
                        <Field as={TextField}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            helperText={<ErrorMessage name="password"/>}
                        />
                        <Field as={ FormControlLabel}
                            name='remember'
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            
                        >
                            Login
                        </Button>
                                </Form>

                            )}

                        </Formik>

                        <Grid container>
                            <Grid item xs style={{textAlign:"center"}}>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                        </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );

}