module.exports = {
	theme: {
		fontFamily: {
			mono: ['"Roboto Mono"']
		},
		extend: {
			colors: {
				'gray0': '#25262A',
				'gray1': '#2D2E32',
				'gray2': '#90939A',
				'green-lighter': '#67F3AA'
			},
			borderWidth: {
				'1': '1px'
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
			},
			maxWidth: {
				'vs': '124px'
			}
		},
		variants: {
			zIndex: ['responsive', 'hover'],
			borderWidth: ['responsive', 'hover']
		}
	}
};
