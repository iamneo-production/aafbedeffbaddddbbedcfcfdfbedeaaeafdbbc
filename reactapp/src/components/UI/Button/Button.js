import React from 'react';

const Button = (props) => {
    const {
        btName = props.children,onClick,
    }
    return <button>{props.children}</button>;
  };
  
export default Button;
