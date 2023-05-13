import { React } from 'react';
import '../../App.css'
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon } from '@mui/material';


export default function SubmitPaperPage1() {
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/submitpaperpage2');
    };

    const handleBackButtonClick = () => {
        navigate('/authorhomepage');
      };

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    function handleSelect(option) {
        setSelectedOption(option);
    }

    return (
        <>
            <div class="back-arrow">
                <Icon>
                <ArrowBackIosIcon fontSize="large" onClick={handleBackButtonClick}/>
                </Icon>
            </div>

            <div>
                <select value={selectedOption} onChange={e => handleSelect(e.target.value)}>
                <option value="">Select Paper</option>
                {options.map(option => (
                    <option key={option.id} value={option.id}>
                    {option.label}
                    </option>
                ))}
                </select>

                <select value={selectedOption} onChange={e => handleSelect(e.target.value)}>
                <option value="">Select Author</option>
                {options.map(option => (
                    <option key={option.id} value={option.id}>
                    {option.label}
                    </option>
                ))}
                </select>

                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Submit Paper</Button>
        </div>
      </>
    )
}