import React from 'react';

function AnimalCard(props) {
    const animalCardStyle = {
        border: '1px solid black',
        borderRadius: '5px',
        margin: '10px',
        width: '480px',
        padding: '10px',
        display: 'inline-block',
    };
    return (
        <div className="animal-card" style={animalCardStyle}>
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>{props.description}</p>
        </div>
    );
}

export default AnimalCard;