import React from 'react';

interface ButtonProps {
	name: string;
	type?: 'submit' | 'button' | 'reset';
	handleClick: () => void;
}

export const Button = ({ name, type = 'submit', handleClick }: ButtonProps) => {
	return (
		<div className='mx-2'>
			<button className='button' type={type} onClick={handleClick}>
				{name}
			</button>
		</div>
	);
};
