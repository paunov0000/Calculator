import React from 'react';

export default function Display({ numbers }) {
	return <p className='col-span-4 text-right'>{numbers === '' ? 0 : numbers}</p>;
}
