import React from 'react';

function Button(props) {
    const variantOutline = props.variant == "outline" ? "variant" : "";
    return (
        <div>
            <p>{props.paragraph}</p>
            <button 
                className={variantOutline}
            >Default</button>
        </div>
    )
}

export default Button;