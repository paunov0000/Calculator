import { parse } from 'postcss';
import React from 'react';

export default function Keypad({ numbers, onButtonClick }) {
	const rows = [];
	let number = 9;
	rows.push(
		<>
			<div onClick={() => onButtonClick(0)}>
				<p>AC</p>
			</div>
			<div>
				<p>+/-</p>
			</div>
			<div>
				<p>%</p>
			</div>
			<div>
				<p>/</p>
			</div>
		</>
	);
	for (let row = 0; row < 3; row++) {
		const cols = [];
		for (let col = 0; col < 2; col++) {
			cols.push(
				<div>
					<p></p>
				</div>
			);
		}
		//Add the  +-=*/ operations each on the end of the row
	}

	function handleOnClick(textContent) {
		if (numbers !== 0) {
			return onButtonClick(parseInt(numbers + textContent));
		} else {
			onButtonClick(parseInt(textContent));
		}
	}

	return (
		<div className='grid grid-cols-4 grid-rows-5'>
			{rows}
			<div>
				<p>7</p>
			</div>
			<div>
				<p>8</p>
			</div>
			<div>
				<p>9</p>
			</div>
			<div>
				<p>*</p>
			</div>
			<div>
				<p>4</p>
			</div>
			<div>
				<p>5</p>
			</div>
			<div
				onClick={(e) => {
					handleOnClick(e.currentTarget.textContent);
				}}
			>
				<p>6</p>
			</div>
			<div>
				<p>-</p>
			</div>
			<div>
				<p>1</p>
			</div>
			<div>
				<p>2</p>
			</div>
			<div>
				<p>3</p>
			</div>
			<div>
				<p>+</p>
			</div>
			<div
				className='col-span-2'
				onClick={(e) => handleOnClick(e.currentTarget.textContent)}
			>
				<p>0</p>
			</div>
			<div>
				<p>.</p>
			</div>
			<div>
				<p>=</p>
			</div>
		</div>
	);
}
