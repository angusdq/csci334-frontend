import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";



export default function SelectUserSignUp() {

  const navigate = useNavigate();

  const handleSignUpButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      <div class="signup-login">
          <Button class="buttonRegisterPage" variant="contained" onClick={handleSignUpButtonClick}>Sign in</Button>
      </div>

      <div class='selectUserRegisterStyle'>        
        <p>Select User to Register</p>
        <Button class="buttonRegisterPage" variant="contained" >System Admin</Button>
        <Button class="buttonRegisterPage" variant="contained" >Author</Button>
        <Button class="buttonRegisterPage" variant="contained" >Reviewer</Button>
        <Button class="buttonRegisterPage" variant="contained" >Conference</Button>
      </div>
    </>
  );
}
 