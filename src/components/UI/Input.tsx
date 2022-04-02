import React from 'react';

interface InputProps {
	name: string;
	value: string;
	type?: string;
	placeholder?: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
	name,
	type = 'text',
	placeholder = 'Enter a message',
	value,
	handleChange,
}: InputProps) => {
	return (
		<div className='mx-2'>
			<input
				className='input'
				name={name}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};
