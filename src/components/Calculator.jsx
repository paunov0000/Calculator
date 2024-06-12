import React from 'react';
import Display from './Display';
import { useState } from 'react';
import Keypad from './Keypad';

export default function Calculator() {
	const [numbers, setNumbers] = useState('');

	return (
		<div className='text-3xl font-calculator flex flex-col gap-3'>
			<Display numbers={numbers}></Display>
			<Keypad
				numbers={numbers}
				onButtonClick={setNumbers}
				className='grid grid-cols-calculator grid-rows-calculator gap-2.5 '
			></Keypad>
		</div>
	);
}
