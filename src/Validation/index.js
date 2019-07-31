import React from 'react';

const Validation = (props) => {
    let result = props.strLength <= 5 ? 'Text too short' : 'Text long enough';
    return(
        <span>{result}</span>
    )
}

export default Validation;