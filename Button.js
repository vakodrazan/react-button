import React from 'react';

function Button(props) {
    return (
        <div>
            <p>{props.paragraph}</p>
            <button>Default</button>
        </div>
    )
}

export default Button;