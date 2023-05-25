import { Button, Icon } from "@mui/material";
import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { selectedPaperId } from "./ReviewPaperPage1";


export default function ReviewPaperPage2Reviewer() {
    const navigate = useNavigate();
    
    const [paperData, setPapers] = useState([]);
    const [rating, setRating] = useState();

    useEffect(() => {
        if (rating !== undefined) {
          handleClick();
        }
      }, [rating]);

      const handleClick1 = () => {
        setRating(3);
      };

      const handleClick2 = () => {
        setRating(2);
      };

      const handleClick3 = () => {
        setRating(1);
      };

      const handleClick4 = () => {
        setRating(0);
      };

      const handleClick5 = () => {
        setRating(-1);
      };

      const handleClick6 = () => {
        setRating(-2);
      };

      const handleClick7 = () => {
        setRating(-3);
      };

      var data = {
        id: selectedPaperId,
        rating: rating,
        accepted: paperData.accepted,
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
        console.log(selectedPaperId, 'paperid')
        fetch(`http://localhost:8080/updatePaper/${selectedPaperId}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(()=>{
            navigate('/reviewpaperpage3reviewer');
        }) 
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
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick1} >Strong Accept</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick2} >Accept</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick3} >Weak Accept</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick4} >Borderline</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick5} >Weak Reject</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick6} >Reject</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick7} >Strong Reject</Button>
            </div>
        </>
    )
}