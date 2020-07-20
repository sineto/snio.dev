module.exports = {
	theme: {
		// screens: {
      // // 'xs': {'min': '320px', 'max': '638px'},
      // // 'sm': {'min': '640px', 'max': '767px'},
      // // 'md': {'min': '768px', 'max': '1023px'},
      // // 'lg': {'min': '1024px', 'max': '1279px'},
		// 	'xs': '320px',
		// 	'sm': '640px',
      // // => @media (min-width: 640px) { ... }

      // 'md': '768px',
      // // => @media (min-width: 768px) { ... }

      // 'lg': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'xl': '1280px',
      // // => @media (min-width: 1280px) { ... }     // 'xl': {'min': '1280px'},
    // },
		fontFamily: {
			mono: ['"Roboto Mono"']
		},
		extend: {
			screens: {
				'xs': '320px',
				'xm': '580px'
			},
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
			},
			fontSize: {
				'tiny': '.65rem',
				'8xl': '130px'
			}
		},
		variants: {
			zIndex: ['responsive', 'hover', 'focus'],
			backgroundColor: ['responsive', 'hover', 'focus'],
			borderWidth: ['responsive', 'hover'],
			textColor: ['responsive', 'hover', 'focus', 'group-hover'],
		}
	}
};
