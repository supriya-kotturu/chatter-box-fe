import React from 'react';
import { Input, Button } from './UI';

export const MessageBar = () => {
	return (
		<div>
			<div className='flex flex-row fixed bottom-2 w-screen p-2 '>
				<div className='w-full mt-4'>
					<Input
						name='message'
						value={'message'}
						handleChange={(e) => console.log(e)}
					/>
				</div>
				<div className='mt-4'>
					<Button name='send' handleClick={() => console.log('message sent')} />
				</div>
			</div>
		</div>
	);
};
