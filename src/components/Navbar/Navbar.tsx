import React from 'react';
import './styles/Navbar.css';
export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	return <div className='navbar'>Navbar</div >;
};

export default Navbar;
