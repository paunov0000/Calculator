import React from 'react';
import Display from './Display';
import { useState } from 'react';
import Keypad from './Keypad';

export default function Calculator() {
	const [numbers, setNumbers] = useState('');

	return (
		<div className='text-4xl'>
			<Display numbers={numbers}></Display>
			<Keypad
				numbers={numbers}
				onButtonClick={setNumbers}
			></Keypad>
		</div>
	);
}
