import React, { useState } from 'react';

import '../Styles/Input.css';

const InputComponent = ({ onCityChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        onCityChange(inputValue);
    };

    return (
        <div className='div-input'>
            <input className='input-page' type="text" placeholder="Enter A City..." value={inputValue} onChange={handleInputChange}/>
            <button className='button-search' onClick={handleButtonClick}>Search</button>
        </div>
    );
};

export default InputComponent;