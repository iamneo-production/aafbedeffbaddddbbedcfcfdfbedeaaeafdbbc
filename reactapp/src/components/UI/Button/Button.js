import React from 'react';

const Button = (props) => {
    const {
        btnName = props.children,onClick,disabled,className
    } = props;
    return (
    <button onClick={onClick} disabled={disabled} className={className}>{btnName}</button>
    )
  };
  
export default Button;
