import React, { useState, useEffect } from 'react';
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
import { Form , Formik,Field, useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router';



const theme = createTheme();

export default function Login() {

  
const initialValues= {
    userName:'',
    password:'',
}
const [message, setMessage] = useState("");
const [user, setUser]= useState([]);
const history= useHistory();


//useEffect(() =>{
    //if(localStorage.getItem('user-info')){
    // history.push("/")
   // }
//}, [])

    const validationSchema=Yup.object().shape({
        userName:Yup.string().email('Please enter valid Email').required("Required Email"),
        password:Yup.string().required("Required password ")
    })

    const onSubmit = async (values, props) => {
            console.log(values)
            const result = await axios({
            method: "POST",
            url:'http://localhost:8000/user/checkLogin',
            data: values,
            withCredentials: 'include',
            headers:{
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }
        })
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setUser(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
          if(user.length === 0){
              setMessage("Invalid Email or Password")
          }else{
            localStorage.setItem("userInfo",JSON.stringify(user)) 
            history.push("/")
          }
          
        
        
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
                    <Box  noValidate sx={{ mt: 1 }}> 
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} sx={{ mt: 1 }} >
                            {(props)=>(
                                <Form>   
                                    {console.log(props)}
                                    <Field as={TextField}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="Email Address"
                                        name="userName"
                                        autoComplete="userName"
                                        autoFocus
                                        helperText={<ErrorMessage name="userName" />}
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
                                        helperText={<ErrorMessage name="password" />}
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
                        <div className="text-center">{message}</div>
                                </Form>

                            )}

                        </Formik>
                    </Box>          
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