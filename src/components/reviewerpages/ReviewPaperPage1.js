import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon } from '@mui/material';
import { idGlobalReviewer, paperIdArrayReviewer } from '../registerPages/ReviewerLoginPage';

export let selectedPaperId = ''

export default function ReviewPaperPage1Reviewer() {

    const navigate = useNavigate();
    const [selectedPaper, setSelectedPaper] = useState('');
    const [paperData, setPapers] = useState([]);
    const [reviewerData, setReviewer] = useState([]);
    const [paperIdArr, setPaperIdArr] = useState([]);

    const handleClick = () => {
      selectedPaperId = selectedPaper;
      console.log(selectedPaperId)
      navigate('/reviewpaperpage2reviewer');
    };

    const handleBackButtonClick = () => {
        navigate('/reviewerhomepage');
      };

    useEffect(() => {
        async function fetchUsers() {        
          const response = await fetch('http://localhost:8080/papers');
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
              <p>Select the paper to review</p>
                <select value={selectedPaper} onChange={handleChangePaper}>
                    <option value="">Select a Paper</option>
                        {paperIdArrayReviewer.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Review Paper</Button>
            </div>
      </>
    )
}