const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	mode: 'jit',
	darkmode: 'media',
	theme: {
		extend: {
			colors: {
				primary: colors.emerald,
				secondary: colors.sky,
			},
			fontFamily: {
				serif: ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	variants: {
		extend: {
			resize: ['hover', 'focus'],
		},
	},
	plugins: ['@tailwindcss/forms', '@tailwindcss/line-clamp'],
};
