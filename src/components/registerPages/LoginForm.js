import { React } from 'react';
import '../../App.css'
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();

    const handleSignUpButtonClick = () => {
      navigate('/signupselectuser');
    };

    return(
      <>  
        <div class="signup-login">
            <Button class="buttonRegisterPage" variant="contained" onClick={handleSignUpButtonClick}>Sign up</Button>
        </div>
        <div class='selectUserRegisterStyle'>        
          <p>Sign in</p>
          <TextField id="username" type="username" placeholder="username" />
          <TextField id="password" type="password" placeholder="password" />
          <Button class="buttonRegisterPage" variant="contained" >Sign in</Button>
        </div>
      </>
    )

}