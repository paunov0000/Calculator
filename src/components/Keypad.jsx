import { parse } from 'postcss';
import React, { useState } from 'react';

export default function Keypad({ numbers, onButtonClick }) {
	const [operator, setOperator] = useState(null);
	const [sum, setSum] = useState(0);

	const rows = [];
	let number = 9;
	const symbols = [
		<div onClick={(e) => handleOperatorClick(e.currentTarget.textContent)}>
			<p>*</p>
		</div>,
		<div onClick={(e) => handleOperatorClick(e.currentTarget.textContent)}>
			<p>-</p>
		</div>,
		<div onClick={(e) => handleOperatorClick(e.currentTarget.textContent)}>
			<p>+</p>
		</div>,
	];
	rows.push(
		<>
			<div
				onClick={() => {
					setOperator(null);
					onButtonClick(0);
				}}
			>
				<p>AC</p>
			</div>
			<div>
				<p>+/-</p>
			</div>
			<div>
				<p>%</p>
			</div>
			<div onClick={(e) => handleOperatorClick(e.currentTarget.textContent)}>
				<p>/</p>
			</div>
		</>
	);
	for (let row = 1; row <= 3; row++) {
		const cols = [];
		let numStartFrom = number - 3 * row;
		for (let col = 1; col <= 3; col++) {
			numStartFrom++;
			cols.push(
				<div onClick={(e) => handleDigitClick(e.currentTarget.textContent)}>
					<p>{numStartFrom}</p>
				</div>
			);
		}
		cols.push(symbols[row - 1]);
		rows.push(cols);
		//Add the  +-=*/ operations each on the end of the row
	}
	rows.push(
		<div
			onClick={(e) => handleDigitClick(e.currentTarget.textContent)}
			className='col-span-2'
		>
			<p>0</p>
		</div>,
		<div onClick={(e) => handleDigitClick(e.currentTarget.textContent)}>
			<p>.</p>
		</div>,
		<div onClick={(e) => handleOperatorClick(e.currentTarget.textContent)}>
			<p>=</p>
		</div>
	);

	function handleDigitClick(textContent) {
		const containsDot = textContent.includes('.');
		const currentNumberContainsDot = numbers.toString().includes('.');

		if (containsDot && currentNumberContainsDot) {
			return;
		}

		const newNumber = parseFloat(numbers + textContent);

		console.log(textContent);

		onButtonClick(
			containsDot || currentNumberContainsDot
				? numbers + textContent
				: newNumber
		);
	}

	function handleOperatorClick(clickedOperator) {
		if (clickedOperator !== '=') {
			setSum(numbers);
			setOperator(clickedOperator);
			onButtonClick(0);
		} else {
			let totalSum = 0;
			switch (operator) {
				case '*':
					console.log(
						numbers.toString().split('.')[
							numbers.toString().split('.').length - 1
						].length
					);
					console.log(
						sum.toString().split('.')[sum.toString().split('.').length - 1]
							.length
					);
					const digitsAfterDecimal =
						numbers.toString().split('.')[
							numbers.toString().split('.').length - 1
						].length === 1
							? sum.toString().split('.')[sum.toString().split('.').length - 1]
									.length
							: numbers.toString().split('.')[
									numbers.toString().split('.').length - 1
							  ].length;

					console.log(digitsAfterDecimal);

					if (digitsAfterDecimal < 3) {
						totalSum =
							Math.round(
								(parseFloat(sum) * parseFloat(numbers) + Number.EPSILON) * 100 //TODO: FIX 0.0003 * 2
							) / 100;
					} else {
						totalSum = parseFloat(sum) * parseFloat(numbers);
					}
					break;

				case '-':
					totalSum = sum - numbers;
					break;

				case '/':
					totalSum = sum / numbers;
					break;
				case '+':
					totalSum = parseFloat(sum) + parseFloat(numbers);
					break;
				default:
					break;
			}
			setSum(totalSum);
			onButtonClick(totalSum);
		}
	}

	return <div className='grid grid-cols-4 grid-rows-5'>{rows}</div>;
}
