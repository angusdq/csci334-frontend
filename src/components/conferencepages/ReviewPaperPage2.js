import { Button, Icon } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ReviewPaperPage2Conference() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/reviewpaperpage3conference');
    };

    const handleBackButtonClick = () => {
        navigate('/reviewpaperpage1conference');
    };

    return (
        <>
            <div class="back-arrow">
                <Icon>
                <ArrowBackIosIcon fontSize="large" onClick={handleBackButtonClick}/>
                </Icon>
            </div>

            <div class='selectUserRegisterStyle'>        
                <p>Accept or Reject the paper</p>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Accept the paper</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Reject the paper</Button>
            </div>
        </>
    )
}