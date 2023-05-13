import { React } from 'react';
import '../../App.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon } from '@mui/material';

export default function ViewPaperPage2() {

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/viewpaperpage1');
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
            </div>
        </>
    )
}