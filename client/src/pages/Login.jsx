import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
 
const [isLogin, setIsLogin] = useState(true);

const toggleLogin  = () => {
    setIsLogin(false);
}

  return (
  <Container component={"main"} maxWidth="xs" sx={{ height:"100vh", display:'flex', justifyContent:'center', alignItems:'center'}} > 

    <Paper
     elevation={3}
     sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
     }}
    >
      
      {
        isLogin ? <>
        
        <Typography varient="h5"></Typography>
        <form style={{
            width:"100%",
            marginTop: "1rem"
        }}>
            <TextField required fullWidth label="Username" margin='normal' variant='outlined'/>

            <TextField required fullWidth label="Password" type="password" margin='normal' variant='outlined'/>

            <Button variant='contained' color='primary' type='submit' fullWidth> Login</Button>


            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

            <Button  variant='text' color='secondary' fullWidth onClick={toggleLogin}>
              Sign
            </Button>
        </form>
        
        
        </>: <span>Register</span>
      }

    </Paper>

  </Container>
  );
};

export default Login
