import { React } from 'react';
import '../../App.css'
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function ReviewerLoginPage() {
    const navigate = useNavigate();

    const handleSignUpButtonClick = () => {
        navigate('/');
      };

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUsers] = useState([]);
    
    useEffect(() => {
      async function fetchUsers() {          
        const response = await fetch('http://localhost:8080/reviewers');
        const json = await response.json();
        setUsers(json);
      }
      fetchUsers();
    }, []);
  
    function handleClick() {
      let match = false;
      
      userData.forEach(data => {
        if (username === data.username && password === data.password) {
          match = true;
        }
      });

      if(match === true) {
        navigate('/reviewerhomepage');
      }else{
        alert('Incorrect Username or Password')
      }
    }

    return(
      <>  
        <div class="signup-login">
          <Button class="buttonRegisterPage" variant="contained" onClick={handleSignUpButtonClick}>Sign in as another user</Button>
        </div>

        <div class='selectUserRegisterStyle'>        
          <p>Reviewer Sign In</p>
          <TextField id="username" type="username" placeholder="username" onChange={event => setUsername(event.target.value)} />
          <TextField id="password" type="password" placeholder="password" onChange={event => setPassword(event.target.value)}/>
          <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Sign in</Button>
        </div>
      </>
    )

}