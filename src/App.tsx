import { useState } from 'react';
import { MessageBar } from './components/MessageBar';

function App() {
	const [message, setMessage] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	};

	return (
		<>
			<div className='main-container'>Chatter box </div>
			<MessageBar />
		</>
	);
}

export default App;
