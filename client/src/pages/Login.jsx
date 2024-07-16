import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import {useFileHandler, useInputValidation} from '6pp';
import usernameValidator from '../utils/validators';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';




const Login = () => {
 
const [isLogin, setIsLogin] = useState(true);

const toggleLogin  = () => setIsLogin((prev) => !prev);

const name = useInputValidation("");
const bio = useInputValidation("");
const username = useInputValidation("", usernameValidator);
const password = useInputValidation("");
const avtar = useFileHandler("single", 2);

const handleLogin = (e) => {
     e.preventDefault();
}

const handleSignUp = (e) => {
     e.preventDefault();

}


  return (
    <div 
    style={{
      backgroundImage: "linear-gradient(rgb(65 169 112 / 50%), rgb(218 107 1))"}}>

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
        isLogin ? ( <>
        
        <Typography varient="h5">Login</Typography>
        <form style={{
            width:"100%",
            marginTop: "1rem"
        }}
        onSubmit={handleLogin}
        >
            <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler}/>

            <TextField required fullWidth label="Password" type="password" margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler}/>

            <Button variant='contained' color='primary' type='submit' fullWidth> Login</Button>


            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

            <Button  variant='text' color='secondary' fullWidth onClick={toggleLogin}>
              Sign Up Instead
            </Button>
        </form>
        
        
        </> ) : (
          
          <>
          <Typography varient="h5">Sign Up</Typography>

          <form style={{
            width:"100%",
            marginTop: "1rem"
        }}  
        
         onSubmit={handleSignUp}>

          <Stack position={"relative"}
                 width={"10rem"}
                 margin={"auto"}
          >
              <Avatar sx={{width: "10rem", height:"10rem", objectFit:"contain"}} src={avtar.preview}/> 

              {
               avtar.error && (
                <Typography m={"1rem"} width={"fit-content"} display="block" color="error" variant="caption">
                  {avtar.error }
                </Typography>
               )
            }
        

          <IconButton  sx={{
            position:"absolute",
            bottom: "0",
            right: "0",
            color: "white",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            ":hover": {
              bgcolor: "rgba(0, 0, 0, 0.7)"
            },
          }}
          component="label"
          >
            <>
             <CameraAltIcon/>
             <VisuallyHiddenInput type="file" onChange={avtar.changeHandler}/>
            </>
          </IconButton>
          </Stack>
        
            <TextField required fullWidth label="Name" margin='normal' variant='outlined' value={name.value} onChange={name.changeHandler}/>

            <TextField required fullWidth label="Bio" margin='normal' variant='outlined' value={bio.value} onChange={bio.changeHandler}  />

            <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler}/>

            {
               username.error && (
                <Typography color="error" variant="caption">
                  {username.error }
                </Typography>
               )
            }

            <TextField required fullWidth label="Password" type="password" margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler}/>

            <Button variant='contained' color='primary' type='submit' fullWidth>Sign Up</Button>


            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

            <Button  variant='text' color='secondary' fullWidth onClick={toggleLogin}>
              Login Instead
            </Button>
        </form>
        
        
        </>
        )
      }

    </Paper>

  </Container>
  </div>
  );
};

export default Login
