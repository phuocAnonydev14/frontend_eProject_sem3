import type {Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {},
			colors: {
				colors: {
					'blue': '#1fb6ff',
					'purple': '#7e5bef',
					'pink': '#ff49db',
					'orange': '#ff7849',
					'green': '#13ce66',
					'yellow': '#ffc82c',
					'gray-dark': '#273444',
					'gray': '#8492a6',
					'gray-light': '#d3dce6',
				},
				extend: {
					spacing: {
						'8xl': '96rem',
						'9xl': '128rem',
					},
					borderRadius: {
						'4xl': '2rem',
					}
				},
				dark: '#222222',
			},
			
		},
	},
	plugins: [require('@tailwindcss/forms')],
	corePlugins: {
		preflight: false // <== disable this!
	},
} satisfies Config;
