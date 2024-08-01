import React from 'react';

const Btn = ({ darkModeOn, setDarkModeOn }) => {
    const handleClick = () => {
        setDarkModeOn(!darkModeOn);
    };

    return (
        <button onClick={handleClick}>
            {darkModeOn ? 'Toggle Off' : 'Toggle On'}
        </button>
    );
};

export default Btn;
