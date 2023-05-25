import { React } from 'react';
import '../../App.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon, Button } from '@mui/material';
import { paperAuthorGlobal } from './ViewPaperPage1';

export let paperIdGlobal = '';
export let paperCommentGlobal = '';

export default function ViewPaperPage2() {

    const navigate = useNavigate();
    const [selectedPaper, setSelectedPaper] = useState('');
    const [paperData, setPapers] = useState([]);
    const paperIdArr = [];

    const handleClick = () => {
      paperCommentGlobal = paperData.comment;
      console.log(paperCommentGlobal);
      navigate('/viewpaperpage3');
    };

    const handleBackButtonClick = () => {
        navigate('/viewpaperpage1');
      };

      useEffect(() => {
        async function fetchUsers() {        
          const response = await fetch(`http://localhost:8080/paper/${paperAuthorGlobal}`);
          const json = await response.json();
          setPapers(json);
        }
        fetchUsers();
      }, []);

      useEffect(() => {
        if (paperData.length > 0) {
          paperData.forEach((obj) => {
            paperIdArr.push(obj.id);
          });
        }
      }, [paperData]);
      
      function handleChangePaper(event) {
        setSelectedPaper(event.target.value);
        paperIdGlobal = selectedPaper;
      }
    
    return (
        <>
            <div class="back-arrow">
                <Icon>
                <ArrowBackIosIcon fontSize="large" onClick={handleBackButtonClick}/>
                </Icon>
            </div>

            <div class="selectUserRegisterStyle">
                <select value={selectedPaper} onChange={handleChangePaper}>
                    <option value="">Comment 1</option>
                        {paperIdArr.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Review the Comment</Button>
            </div>
      </>
    )
}