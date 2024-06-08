import React from 'react';
import Display from './Display';
import { useState } from 'react';
import Keypad from './Keypad';

export default function Calculator() {
	const [numbers, setNumbers] = useState('');

	return (
		<div className='text-3xl grid grid-cols-4 grid-rows-5 gap-2.5'>
			<Display numbers={numbers}></Display>
			<Keypad
				numbers={numbers}
				onButtonClick={setNumbers}
			></Keypad>
		</div>
	);
}
