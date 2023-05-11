import { React } from 'react';
import '../../App.css'
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function LoginForm() {
    const navigate = useNavigate();

    const handleSignUpButtonClick = () => {
      navigate('/signupselectuser');
    };

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const signIn = { username, password };
        console.log(signIn);
        fetch(`http://localhost:8080/author/findAuthorUsername/${username}`)
          .then((response) => {
            if (!response.ok) {
              alert('Incorrect Username or Password');
              throw response;
            }
            return response.json();
          })
          .then((json) => {
            console.log(json);
            handleClick2(e);
          });
      };

      const handleClick2 = (e) => {
        e.preventDefault();
        const signIn = { username, password };
        console.log(signIn);
        fetch(`http://localhost:8080/author/findAuthorPassword/${password}`)
          .then((response) => {
            if (!response.ok) {
              alert('Incorrect Username or Password');
              throw response;
            }
            return response.json();
          })
          .then((json) => {
            console.log(json);
            localStorage.setItem('loggedin', true);
            alert('Signed in')
          });
      };

    return(
      <>  
        <div class="signup-login">
            <Button class="buttonRegisterPage" variant="contained" onClick={handleSignUpButtonClick}>Sign up</Button>
        </div>
        <div class='selectUserRegisterStyle'>        
          <p>Sign in</p>
          <TextField id="username" type="username" placeholder="username" onChange={handleUsernameChange} />
          <TextField id="password" type="password" placeholder="password" onChange={handlePasswordChange} />
          <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Sign in</Button>
        </div>
      </>
    )

}