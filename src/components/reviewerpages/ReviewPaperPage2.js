import { Button, Icon } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function ReviewPaperPage2Reviewer() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/reviewpaperpage3reviewer');
    };

    const handleBackButtonClick = () => {
        navigate('/reviewpaperpage1reviewer');
    };

    return (
        <>
            <div class="back-arrow">
                <Icon>
                <ArrowBackIosIcon fontSize="large" onClick={handleBackButtonClick}/>
                </Icon>
            </div>

            <div class='selectUserRegisterStyle'>        
                <p>Rate the paper</p>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Strong Accept</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Accept</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Weak Accept</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Borderline</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Weak Reject</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Reject</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Strong Reject</Button>
            </div>
        </>
    )
}