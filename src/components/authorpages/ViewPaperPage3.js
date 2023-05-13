import React from 'react'
import '../../App.css'
import { Button, Icon } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ViewPaperPage3() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/viewpaperpage4');
    };

    const handleBackButtonClick = () => {
        navigate('/viewpaperpage2');
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
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Like the review</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Dislike the review</Button>
            </div>
        </>
    )
}