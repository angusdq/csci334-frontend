import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon } from '@mui/material';

export default function ReviewPaperPage1Reviewer() {

    const navigate = useNavigate();
    const [selectedPaper, setSelectedPaper] = useState('');

    const handleClick = () => {
      navigate('/bidpaperpage2');
    };

    const handleBackButtonClick = () => {
        navigate('/reviewerhomepage');
      };

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
              <p>How many papers would you like to review?</p>
                <select value={selectedPaper} onChange={handleChangePaper}>
                    <option value="">Select how many</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                </select>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Submit prefferences</Button>
            </div>
      </>
    )
}