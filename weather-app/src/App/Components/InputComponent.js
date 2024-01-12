import React, { useState } from 'react';

const InputComponent = ({ onCityChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        onCityChange(inputValue);
    };

    return (
        <div>
            <input type="text" placeholder="Enter A City..." value={inputValue} onChange={handleInputChange}/>
            <button onClick={handleButtonClick}>Enviar</button>
        </div>
    );
};

export default InputComponent;