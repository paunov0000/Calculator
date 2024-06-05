import React from 'react';

export default function Keypad() {
	return (
		<div className='grid grid-cols-4 grid-rows-5'>
			<div>
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
			<div>
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
			<div className='col-span-2'>
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
