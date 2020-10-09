import React from 'react';

function Button(props) {
    const svg = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>

    // Ternary for the style property
    const variantOutline = props.variant === "outline" ? "outline" : "";
    const variantText = props.variant === "text" ? "text" : "";
    const disabledShadow = props.disableShadow ? "disabledShadow" : "";
    const buttonDisabled = props.disabled ? "disabled" : "";
    const startIcon = props.startIcon ? svg : "";
    const endIcon = props.endIcon ? svg : "";
    const localGroceryStore = props.startIcon === "local_grocery_store" || props.endIcon === "local_grocery_store" ? "localGroceryStore" : "";
    const size = props.size === "sm" ? "smSize" : props.size === "md" ? "mdSize" : props.size === "lg" ? "lgSize" : "" 

    return (
        <div>
            <p>{props.paragraph}</p>
            <button 
                className={`
                    ${variantOutline} 
                    ${variantText} 
                    ${disabledShadow}
                    ${buttonDisabled}
                    ${localGroceryStore}
                    ${size}
                `}
    >{startIcon} {props.children} {endIcon}</button>
        </div>
    )
}

export default Button;