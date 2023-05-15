import { React } from 'react';
import '../../App.css'
import { Button, TextField, Icon } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ViewPaperPage2Reviewer() {

    const navigate = useNavigate();
    const [selectedPaper, setSelectedPaper] = useState('');
    const [paperData, setPapers] = useState([]);
    const paperIdArr = [];
    const [comment, setComment] = useState('')

    const handleClick = () => {
      navigate('/reviewerhomepage');
    };

    const handleBackButtonClick = () => {
        navigate('/viewpaperpage1reviewer');
      };

    useEffect(() => {
        async function fetchUsers() {        
          const response = await fetch('http://localhost:8080/papers');
          const json = await response.json();
          setPapers(json);
        }
        fetchUsers();
      }, []);

      paperData.forEach((obj) => {
        paperIdArr.push(obj.comment); 
      });

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
              <p>View the comments</p>
                <select value={selectedPaper} onChange={handleChangePaper}>
                    <option value="">Comments</option>
                        {paperIdArr.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                <TextField id="password" type="password" placeholder="Your comment" onChange={event => setComment(event.target.value)}/>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Submit comment</Button>
            </div>
        </>
    )

}