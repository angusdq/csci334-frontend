import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon } from '@mui/material';
import { selectedPaperId } from './ViewPaperPage1';

export default function ViewPaperPage2Conference() {

    const navigate = useNavigate();
    const [selectedPaper, setSelectedPaper] = useState('');
    const [paperData, setPapers] = useState([]);

    const handleClick = () => {
      navigate('/conferencehomepage');
    };

    const handleBackButtonClick = () => {
        navigate('/viewpaperpage1conference');
      };

      useEffect(() => {
        async function fetchUsers() {        
          const response = await fetch(`http://localhost:8080/paper/${selectedPaperId}`);
          const json = await response.json();
          setPapers(json);
        }
        fetchUsers();
      }, []);


      function handleChangePaper(event) {
        setSelectedPaper(event.target.value);
      }
    
    return (
        <>
            <div class="back-arrow">
                <Icon>
                <ArrowBackIosIcon fontSize="large" onClick={handleBackButtonClick}/>
                </Icon>
            </div>

            <div class="selectUserRegisterStyle">
                <p>Papers rating - {paperData.rating}</p>
                
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Return Home</Button>
            </div>
      </>
    )
}