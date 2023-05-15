import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";



export default function SelectUserSignUp() {

  const navigate = useNavigate();

  const handleClickAuthor = () => {
    navigate('/authorsignup');
  };

  const handleClickSystemAdmin = () => {
    navigate('/systemadminsignup');
  };

  const handleClickConference= () => {
    navigate('/conferencesignup');
  };

  const handleClickReviewer = () => {
    navigate('/reviewersignup');
  };

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
        <Button class="buttonRegisterPage" variant="contained" onClick={handleClickSystemAdmin}>System Admin</Button>
        <Button class="buttonRegisterPage" variant="contained" onClick={handleClickAuthor}>Author</Button>
        <Button class="buttonRegisterPage" variant="contained" onClick={handleClickReviewer}>Reviewer</Button>
        <Button class="buttonRegisterPage" variant="contained" onClick={handleClickConference}>Conference</Button>
      </div>
    </>
  );
}
 