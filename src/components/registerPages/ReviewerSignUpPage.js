import { React } from 'react';
import '../../App.css'
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function ReviewerSignUpPage() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        const signUp={name, username, password}
        console.log(signUp)
        fetch("http://localhost:8080/createReviewer",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(signUp)
        }).then(()=>{
            navigate('/signupconfirmation');
        })    
    };

    const handleSignUpButtonClick = () => {
        navigate('/signupselectuser');
      };



    return(
      <>  
        <div class="signup-login">
          <Button class="buttonRegisterPage" variant="contained" onClick={handleSignUpButtonClick}>Sign up as another user</Button>
        </div>

        <div class='selectUserRegisterStyle'>        
          <p>Author Sign Up</p>
          <TextField id="name" type="name" placeholder="name" onChange={event => setName(event.target.value)} />
          <TextField id="username" type="username" placeholder="username" onChange={event => setUsername(event.target.value)} />
          <TextField id="password" type="password" placeholder="password" onChange={event => setPassword(event.target.value)}/>
          <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Sign up</Button>
        </div>
      </>
    )

}