import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


export default function SelectUserLogin() {

  const navigate = useNavigate();

    const handleClickAuthor = () => {
      navigate('/authorlogin');
  };

  const handleClickSystemAdmin = () => {
      navigate('/systemadminlogin');
  };

  const handleClickReviewer = () => {
      navigate('/reviewerlogin');
  };

  const handleClickConference = () => {
      navigate('/conferencelogin');
  };

  const handleSignUpButtonClick = () => {
    navigate('/signupselectuser');
  };

  return (
    <>
      <div class="signup-login">
          <Button class="buttonRegisterPage" variant="contained" onClick={handleSignUpButtonClick}>Sign up</Button>
      </div>

      <div class='selectUserRegisterStyle'>        
        <p>Sign In as a</p>
        <Button class="buttonRegisterPage" variant="contained" onClick={handleClickSystemAdmin} >System Admin</Button>
        <Button class="buttonRegisterPage" variant="contained" onClick={handleClickAuthor} >Author</Button>
        <Button class="buttonRegisterPage" variant="contained" onClick={handleClickReviewer} >Reviewer</Button>
        <Button class="buttonRegisterPage" variant="contained" onClick={handleClickConference} >Conference</Button>
      </div>
    </>
  );
}
 