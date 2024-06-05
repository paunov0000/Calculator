import React from 'react';
import Display from './Display';
import { useState } from 'react';
import Keypad from './Keypad';

export default function Calculator() {
	const [numbers, setNumbers] = useState(222);

	return (
		<>
			<Display numbers={numbers}></Display>
			<Keypad></Keypad>
		</>
	);
}
