import React from 'react';

const UserOutput = (props) => {
    const style = {
        backgroundColor: 'steelblue',
        color: 'white',
        width: '50%',
        padding: '10px',
        margin: '5px auto',
        fontWeight: '600'
    }
    return(
        <div style={style}>
            <p>
                Some content provided here
            </p>
            <p>
                by {props.username}
            </p>
        </div>
    );
}

export default UserOutput;