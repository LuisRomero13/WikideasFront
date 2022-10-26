import React from 'react';
import './styles/Header.css';
export interface HeaderInterface {}

const Header : React.FC<HeaderInterface> = () => {
	return <div className='header'>Header</div >;
};

export default Header;
