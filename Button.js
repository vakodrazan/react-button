import React from 'react';

function Button(props) {

    const variantOutline = props.variant == "outline" ? "outline" : "";
    const variantText = props.variant == "text" ? "text" : "";
    const disabledShadow = props.disableShadow ? "disabledShadow" : "";
    const buttonDisabled = props.disabled ? "disabled" : "";

    return (
        <div>
            <p>{props.paragraph}</p>
            <button 
                className={`
                    ${variantOutline} 
                    ${variantText} 
                    ${disabledShadow}
                    ${buttonDisabled}
                `}
            >Default</button>
        </div>
    )
}

export default Button;