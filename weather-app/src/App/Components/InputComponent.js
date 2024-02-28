//Imports
import React, { useState } from 'react';
import searchIcon from '../Icons/search.png';

//Import Style
import '../Styles/Input.css';

//Determines the actions of the search button click and inbox change events
const InputComponent = ({ onCityChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        onCityChange(inputValue);
    };

    //Create visual elements
    return (
        <div className='div-input'>
            <input className='input-page' type="text" placeholder="Enter A City..." value={inputValue} onChange={handleInputChange}/>
            <button className='button-search' onClick={handleButtonClick}>
                <img className="button-icon" src={searchIcon} />
            </button>
        </div>
    );
};

export default InputComponent;