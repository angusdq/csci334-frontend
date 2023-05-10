import { React } from 'react';
import '../../App.css'
import { Button, Icon } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";


export default function SelectUserSignUp() {

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      <div class="back-arrow">
        <Icon>
          <ArrowBackIosIcon fontSize="large" onClick={handleBackButtonClick}/>
        </Icon>
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
 