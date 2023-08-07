import React from 'react';

const Button = (props) => {
    const {
        btnName = props.children,onClick,disabled
    } = props;
    return (
    <button onClick={onClick} disabled={disabled}>{btnName}</button>
    )
  };
  
export default Button;
