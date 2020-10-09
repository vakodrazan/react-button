import React from 'react';

function Button(props) {
    let variantOutline = props.variant == "outline" ? "variant" : props.variant == "text" ? "text" : "";
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