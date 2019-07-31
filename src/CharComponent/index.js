import React from 'react';

const CharComponent = (props) => {
    return(
        <div className="inline-box" onClick={props.clicked}>
            {props.letter}
        </div>
    );
}

export default CharComponent;