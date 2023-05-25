import { Button, Icon } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { selectedPaperId } from "./ReviewPaperPage1";

export default function ReviewPaperPage2Conference() {
    const navigate = useNavigate();

    const [paperData, setPapers] = useState([]);
    const [accepted, setAcceptance] = useState();

     useEffect(() => {
      if (accepted !== undefined) {
        handleClick();
      }
    }, [accepted]);

    const updateRatingValueTrue = () => {
        setAcceptance(true);
      };

    const updateRatingValueFalse = () => {
        setAcceptance(false);
      };

    var data = {
        id: selectedPaperId,
        rating: paperData.rating,
        accepted: accepted,
        liked: paperData.liked,
        comments: paperData.comments,
      }

    useEffect(() => {
        async function fetchUsers() {        
          const response = await fetch(`http://localhost:8080/paper/${selectedPaperId}`);
          const json = await response.json();
          setPapers(json);
        }
        fetchUsers();
      }, []);

    const handleClick = () => {
        fetch(`http://localhost:8080/updatePaper/${selectedPaperId}`,{
          method:"PUT",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
      })
      .then(response => response.json())
      .then(()=>{
        navigate('/reviewpaperpage3conference');
      }) 
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
                <Button class="buttonRegisterPage" variant="contained" onClick={updateRatingValueTrue} >Accept the paper</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={updateRatingValueFalse} >Reject the paper</Button>
            </div>
        </>
    )
}