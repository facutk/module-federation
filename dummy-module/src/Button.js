import React from 'react';

const Button = ({ children, ...rest }) => (
  <button {...rest} >z{children}</button>
);

export default Button;
