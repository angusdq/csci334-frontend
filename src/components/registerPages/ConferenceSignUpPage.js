import { React } from 'react';
import '../../App.css'
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function ConferenceSignUpPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signupconfirmation');
    }

    const handleSignUpButtonClick = () => {
        navigate('/signupselectuser');
      };

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
      <>  
        <div class="signup-login">
          <Button class="buttonRegisterPage" variant="contained" onClick={handleSignUpButtonClick}>Sign up as another user</Button>
        </div>

        <div class='selectUserRegisterStyle'>        
          <p>Conference Sign Up</p>
          <TextField id="name" type="name" placeholder="name" onChange={event => setName(event.target.value)} />
          <TextField id="username" type="username" placeholder="username" onChange={event => setUsername(event.target.value)} />
          <TextField id="password" type="password" placeholder="password" onChange={event => setPassword(event.target.value)}/>
          <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Sign up</Button>
        </div>
      </>
    )

}