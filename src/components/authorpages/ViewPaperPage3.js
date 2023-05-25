import React from 'react'
import '../../App.css'
import { Button, Icon } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState, useEffect } from 'react';
import { paperIdGlobal } from './ViewPaperPage2';
import { paperAuthorGlobal } from './ViewPaperPage1';

export default function ViewPaperPage3() {
    const navigate = useNavigate();

    const [paperData, setPapers] = useState([]);
    const [rating, setRating] = useState();
    
    useEffect(() => {
      if (rating !== undefined) {
        handleClick();
      }
    }, [rating]);

    const updateRatingValueTrue = () => {
        setRating(true);
      };

      const updateRatingValueFalse = () => {
        setRating(false);
      };

    var data = {
        id: paperAuthorGlobal,
        rating: paperData.rating,
        accepted: paperData.accepted,
        liked: rating,
        comments: paperData.comments,
      }

    useEffect(() => {
        async function fetchUsers() {        
          const response = await fetch(`http://localhost:8080/paper/${paperAuthorGlobal}`);
          const json = await response.json();
          setPapers(json);
        }
        fetchUsers();
      }, []);

    const handleClick = () => {
        fetch(`http://localhost:8080/updatePaper/${paperAuthorGlobal}`,{
          method:"PUT",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
      })
      .then(response => response.json())
      .then(()=>{
        navigate('/viewpaperpage4');
      })    
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
                <Button class="buttonRegisterPage" variant="contained" onClick={updateRatingValueTrue} >Like the review</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={updateRatingValueFalse} >Dislike the review</Button>
            </div>
        </>
    )
}