import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function AccountSignUpConfirmationPage() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/');
    };
    
    return (
        <div>
            <h1>Your account has been created</h1>
            <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Back to sign in page</Button>
        </div>
    )
}