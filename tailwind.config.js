/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,tsx,jsx}'],
	theme: {
		extend: {
			gridTemplateRows: {
				calculator: 'repeat(5, minmax(50px, 1fr))',
			},
			gridTemplateColumns: {
				calculator: 'repeat(4, minmax(50px, 1fr))',
			},
			fontFamily: {
				calculator: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
