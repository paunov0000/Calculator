import { parse } from 'postcss';
import React, { useState } from 'react';

export default function Keypad({ numbers, onButtonClick, className }) {
	const [operator, setOperator] = useState(null);
	const [sum, setSum] = useState(0);

	let isNumberPositive = true;

	const rows = [];
	let number = 9;
	const symbols = [
		<div
			className='key key--main-operations'
			onClick={(e) => handleOperatorClick(e.currentTarget.textContent)}
		>
			<p>×</p>
		</div>,
		<div
			className='key key--main-operations'
			onClick={(e) => handleOperatorClick(e.currentTarget.textContent)}
		>
			<p>-</p>
		</div>,
		<div
			className='key key--main-operations'
			onClick={(e) => handleOperatorClick(e.currentTarget.textContent)}
		>
			<p>+</p>
		</div>,
	];
	rows.push(
		<>
			<div
				className='key key--secondary-operations'
				onClick={() => {
					setOperator(null);
					setSum(0);
					onButtonClick(0);
				}}
			>
				<p className=''>AC</p>
			</div>
			<div
				className='key key--secondary-operations'
				onClick={() => {
					isNumberPositive = !isNumberPositive;
					if (isNumberPositive === false) {
						onButtonClick(numbers * -1);
					}
				}}
			>
				<p>+/-</p>
			</div>
			<div
				className='key key--secondary-operations'
				onClick={() => {
					sum === 0
						? onButtonClick(numbers / 100)
						: onButtonClick(sum * (numbers / 100));
				}}
			>
				<p>%</p>
			</div>
			<div
				className='key key--main-operations'
				onClick={(e) => handleOperatorClick(e.currentTarget.textContent)}
			>
				<p>÷</p>
			</div>
		</>
	);
	for (let row = 1; row <= 3; row++) {
		const cols = [];
		let numStartFrom = number - 3 * row;
		for (let col = 1; col <= 3; col++) {
			numStartFrom++;
			cols.push(
				<div
					className='key key--main'
					onClick={(e) => handleDigitClick(e.currentTarget.textContent)}
				>
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
			className='col-span-2 key key--main'
		>
			<p className='right-[25%] relative'>0</p>
		</div>,
		<div
			className='key key--main'
			onClick={(e) => handleDigitClick(e.currentTarget.textContent)}
		>
			<p>.</p>
		</div>,
		<div
			className='key key--main-operations'
			onClick={(e) => handleOperatorClick(e.currentTarget.textContent)}
		>
			<p>=</p>
		</div>
	);

	function handleDigitClick(textContent) {
		if (numbers.toString() === 'Infinity') {
			return;
		}
		const containsDot = textContent.includes('.');
		const currentNumberContainsDot = numbers.toString().includes('.');

		if (containsDot && currentNumberContainsDot) {
			return;
		}

		const newNumber = parseFloat(numbers + textContent);

		onButtonClick(
			containsDot || currentNumberContainsDot
				? numbers + textContent
				: newNumber
		);
	}

	function handleOperatorClick(clickedOperator) {
		if (numbers.toString() === 'Infinity') {
			return;
		}

		if (clickedOperator !== '=') {
			if (operator === clickedOperator) {
				return;
			}
			setSum(numbers);
			setOperator(clickedOperator);
			onButtonClick(0);
		} else {
			let totalSum = 0;
			switch (operator) {
				case '×':
					const digitsAfterDecimal =
						numbers.toString().split('.')[
							numbers.toString().split('.').length - 1
						].length === 1
							? sum.toString().split('.')[sum.toString().split('.').length - 1]
									.length
							: numbers.toString().split('.')[
									numbers.toString().split('.').length - 1
							  ].length;

					if (digitsAfterDecimal < 3) {
						totalSum =
							Math.round(
								(parseFloat(sum) * parseFloat(numbers) + Number.EPSILON) * 100
							) / 100;
					} else {
						totalSum = parseFloat(sum) * parseFloat(numbers);
					}
					break;

				case '-':
					totalSum = sum - numbers;
					break;

				case '÷':
					totalSum = sum / numbers;
					break;
				case '+':
					totalSum = parseFloat(sum) + parseFloat(numbers);
					break;
				default:
					break;
			}
			onButtonClick(totalSum);
		}
	}

	return <div className={className}>{rows}</div>;
}
