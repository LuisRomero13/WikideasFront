import React from 'react';
import './styles/Button.css';
export interface ButtonInterface {}

const Button : React.FC<ButtonInterface> = () => {
	return <div className='button'>Button</div >;
};

export default Button;
