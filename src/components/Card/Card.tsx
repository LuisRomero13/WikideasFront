import React from 'react';
import './styles/Card.css';
export interface CardInterface {}

const Card : React.FC<CardInterface> = () => {
	return <div className='card'>Card</div >;
};

export default Card;
