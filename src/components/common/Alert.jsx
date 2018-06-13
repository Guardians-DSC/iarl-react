import React from 'react';

export default (props) => {
    return (
        <div className="alert alert-danger shake" role="alert">
            {props.text}
        </div>
    );
}
