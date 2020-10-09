import React from 'react';

function Button(props) {
    let buttonStyle;
    if (props.variant == "outline") {
        buttonStyle= "outline"
    } else if (props.variant == "text") {
        buttonStyle= "text"
    } else if (props.disableShadow) {
        buttonStyle= "disabledShadow"
    } else if (props.disabled) {
        buttonStyle= "disabled"
    } 

    return (
        <div>
            <p>{props.paragraph}</p>
            <button 
                className={buttonStyle}
            >Default</button>
        </div>
    )
}

export default Button;