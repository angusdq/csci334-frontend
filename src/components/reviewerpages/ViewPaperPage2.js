import { React } from 'react';
import '../../App.css'
import { Button, TextField, Icon } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { idGlobalReviewer } from '../registerPages/ReviewerLoginPage';
import { paperId } from './ViewPaperPage1';


export default function ViewPaperPage2Reviewer() {

    const navigate = useNavigate();
    const [selectedPaper, setSelectedPaper] = useState('');
    const [paperData, setPapers] = useState([]);
    const [paperComment, setPaperComment] = useState([]);
    const [comment, setComment] = useState()





    const handleChange = (e) => {
      setComment(e.target.value);
    };

    //Get data to use in the PUT
    useEffect(() => {
      async function fetchUsers() {        
        const response = await fetch(`http://localhost:8080/paper/${paperId+1}`);
        const json = await response.json();
        setPapers(json);
      }
      fetchUsers();
    }, []);

    const handleClick = () => {
      //Push string to the comment array 
      console.log(comment)
      let ar = paperComment
      ar.push(comment)
      setPaperComment(prevArray => [...prevArray, comment]);
      console.log(ar)

      const data = {
        id: idGlobalReviewer+1,
        rating: paperData.rating,
        accepted: paperData.accepted,
        liked: paperData.liked,
        comments: ar,
      }

      console.log(ar)
      console.log(data)
      console.log(idGlobalReviewer, 'Global')

      fetch(`http://localhost:8080/updatePaper/${idGlobalReviewer+1}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      })
      .then(response => response.json())
      .then(()=>{
        navigate('/reviewerhomepage');
      }) 
    };

    

    const handleBackButtonClick = () => {
        navigate('/viewpaperpage1reviewer');
      };


    return (
        <>
            <div class="back-arrow">
                <Icon>
                <ArrowBackIosIcon fontSize="large" onClick={handleBackButtonClick}/>
                </Icon>
            </div>

            <div class="selectUserRegisterStyle">
              <p>View the comments</p>
                <select value={selectedPaper}>
                    <option value="">Comments</option>
                        {paperComment.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                <TextField id="password" placeholder="Your comment" value={comment} onChange={handleChange}/>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Submit comment</Button>
            </div>
        </>
    )

}