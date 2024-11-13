import { createTheme, alpha, PaletteMode, Shadows } from '@mui/material/styles';

declare module '@mui/material/Paper' {
	interface PaperPropsVariantOverrides {
		highlighted: true;
	}
}
declare module '@mui/material/styles/createPalette' {
	interface ColorRange {
		50: string;
		100: string;
		200: string;
		300: string;
		400: string;
		500: string;
		600: string;
		700: string;
		800: string;
		900: string;
	}

	interface PaletteColor extends ColorRange { }

	interface Palette {
		baseShadow: string;
	}
}

const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

export const brand = {
	50: 'hsl(210, 100%, 95%)',
	100: 'hsl(210, 100%, 92%)',
	200: 'hsl(210, 100%, 80%)',
	300: 'hsl(210, 100%, 65%)',
	400: 'hsl(210, 98%, 48%)',
	500: 'hsl(210, 98%, 42%)',
	600: 'hsl(210, 98%, 55%)',
	700: 'hsl(210, 100%, 35%)',
	800: 'hsl(210, 100%, 16%)',
	900: 'hsl(210, 100%, 21%)',
};

export const gray = {
	50: 'hsl(220, 35%, 97%)',
	100: 'hsl(220, 30%, 94%)',
	200: 'hsl(220, 20%, 88%)',
	300: 'hsl(220, 20%, 80%)',
	400: 'hsl(220, 20%, 65%)',
	500: 'hsl(220, 20%, 42%)',
	600: 'hsl(220, 20%, 35%)',
	700: 'hsl(220, 20%, 25%)',
	800: 'hsl(220, 30%, 6%)',
	900: 'hsl(220, 35%, 3%)',
};

export const greenOld = {
	50: 'hsl(120, 80%, 98%)',
	100: 'hsl(120, 75%, 94%)',
	200: 'hsl(120, 75%, 87%)',
	300: 'hsl(120, 61%, 77%)',
	400: 'hsl(120, 44%, 53%)',
	500: 'hsl(120, 59%, 30%)',
	600: 'hsl(120, 70%, 25%)',
	700: 'hsl(120, 75%, 16%)',
	800: 'hsl(120, 84%, 10%)',
	900: 'hsl(120, 87%, 6%)',
};

export const orangeOld = {
	50: 'hsl(45, 100%, 97%)',
	100: 'hsl(45, 92%, 90%)',
	200: 'hsl(45, 94%, 80%)',
	300: 'hsl(45, 90%, 65%)',
	400: 'hsl(45, 90%, 40%)',
	500: 'hsl(45, 90%, 35%)',
	600: 'hsl(45, 91%, 25%)',
	700: 'hsl(45, 94%, 20%)',
	800: 'hsl(45, 95%, 16%)',
	900: 'hsl(45, 93%, 12%)',
};

export const red = {
	50: 'hsl(0, 100%, 97%)',
	100: 'hsl(0, 92%, 90%)',
	200: 'hsl(0, 94%, 80%)',
	300: 'hsl(0, 90%, 65%)',
	400: 'hsl(0, 90%, 40%)',
	500: 'hsl(0, 90%, 30%)',
	600: 'hsl(0, 91%, 25%)',
	700: 'hsl(0, 94%, 18%)',
	800: 'hsl(0, 95%, 12%)',
	900: 'hsl(0, 93%, 6%)',
};

export const purple = {
	main: 'hsla(265, 100%, 78 %, 1)',
	ligth: 'hsla(264, 100%, 85%, 1)',
}

export const orange = {
	main: 'hsla(17, 99%, 62%, 1)',
	light: 'hsla(17, 100%, 81%, 1)',
}

export const green = {
	main: 'hsla(71, 77%, 49%, 1)',
	light: 'hsla(71, 100%, 62%, 1)',
}
export const blue = {
	main: 'hsla(171, 83%, 60%, 1)',
	light: 'hsla(171, 100%, 86%, 1)'
}

export const getDesignTokens = (mode: PaletteMode) => {
	customShadows[1] =
		mode === 'dark'
			? 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
			: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';

	return {
		palette: {
			mode,
			primary: {
				light: brand[200],
				main: brand[400],
				dark: brand[700],
				contrastText: brand[50],
				...(mode === 'dark' && {
					contrastText: brand[50],
					light: brand[300],
					main: brand[400],
					dark: brand[700],
				}),
			},
			info: {
				light: brand[100],
				main: brand[300],
				dark: brand[600],
				contrastText: gray[50],
				...(mode === 'dark' && {
					contrastText: brand[300],
					light: brand[500],
					main: brand[700],
					dark: brand[900],
				}),
			},
			warning: {
				light: orangeOld[300],
				main: orangeOld[400],
				dark: orangeOld[800],
				...(mode === 'dark' && {
					light: orangeOld[400],
					main: orangeOld[500],
					dark: orangeOld[700],
				}),
			},
			error: {
				light: red[300],
				main: red[400],
				dark: red[800],
				...(mode === 'dark' && {
					light: red[400],
					main: red[500],
					dark: red[700],
				}),
			},
			success: {
				light: greenOld[300],
				main: greenOld[400],
				dark: greenOld[800],
				...(mode === 'dark' && {
					light: greenOld[400],
					main: greenOld[500],
					dark: greenOld[700],
				}),
			},
			grey: {
				...gray,
			},
			divider: mode === 'dark' ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
			background: {
				default: 'hsl(0, 0%, 99%)',
				paper: 'hsl(220, 35%, 97%)',
				...(mode === 'dark' && { default: gray[900], paper: 'hsl(220, 30%, 7%)' }),
			},
			text: {
				primary: gray[800],
				secondary: gray[600],
				warning: orangeOld[400],
				...(mode === 'dark' && { primary: 'hsl(0, 0%, 100%)', secondary: gray[400] }),
			},
			action: {
				hover: alpha(gray[200], 0.2),
				selected: `${alpha(gray[200], 0.3)}`,
				...(mode === 'dark' && {
					hover: alpha(gray[600], 0.2),
					selected: alpha(gray[600], 0.3),
				}),
			},
		},
		typography: {
			fontFamily: ['"Inter", "sans-serif"'].join(','),
			h1: {
				fontSize: defaultTheme.typography.pxToRem(48),
				fontWeight: 600,
				lineHeight: 1.2,
				letterSpacing: -0.5,
			},
			h2: {
				fontSize: defaultTheme.typography.pxToRem(36),
				fontWeight: 600,
				lineHeight: 1.2,
			},
			h3: {
				fontSize: defaultTheme.typography.pxToRem(30),
				lineHeight: 1.2,
			},
			h4: {
				fontSize: defaultTheme.typography.pxToRem(24),
				fontWeight: 600,
				lineHeight: 1.5,
			},
			h5: {
				fontSize: defaultTheme.typography.pxToRem(20),
				fontWeight: 600,
			},
			h6: {
				fontSize: defaultTheme.typography.pxToRem(18),
				fontWeight: 600,
			},
			subtitle1: {
				fontSize: defaultTheme.typography.pxToRem(18),
			},
			subtitle2: {
				fontSize: defaultTheme.typography.pxToRem(14),
				fontWeight: 500,
			},
			body1: {
				fontSize: defaultTheme.typography.pxToRem(14),
			},
			body2: {
				fontSize: defaultTheme.typography.pxToRem(14),
				fontWeight: 400,
			},
			caption: {
				fontSize: defaultTheme.typography.pxToRem(12),
				fontWeight: 400,
			},
		},
		shape: {
			borderRadius: 8,
		},
		shadows: customShadows,
	};
};

export const colorSchemes = {
	light: {
		palette: {
			primary: {
				light: brand[200],
				main: brand[400],
				dark: brand[700],
				contrastText: brand[50],
			},
			info: {
				light: brand[100],
				main: brand[300],
				dark: brand[600],
				contrastText: gray[50],
			},
			warning: {
				light: orangeOld[300],
				main: orangeOld[400],
				dark: orangeOld[800],
			},
			error: {
				light: red[300],
				main: red[400],
				dark: red[800],
			},
			success: {
				light: greenOld[300],
				main: greenOld[400],
				dark: greenOld[800],
			},
			grey: {
				...gray,
			},
			divider: alpha(gray[300], 0.4),
			background: {
				default: 'hsla(268, 40%, 96%, 1)',
				paper: 'hsla(0, 0%, 100%, 1)',
			},
			text: {
				primary: gray[800],
				secondary: gray[600],
				warning: orangeOld[400],
			},
			action: {
				hover: alpha(gray[200], 0.2),
				selected: `${alpha(gray[200], 0.3)}`,
			},
			baseShadow:
				'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
		},
	},
	dark: {
		palette: {
			primary: {
				contrastText: brand[50],
				light: brand[300],
				main: brand[400],
				dark: brand[700],
			},
			info: {
				contrastText: brand[300],
				light: brand[500],
				main: brand[700],
				dark: brand[900],
			},
			warning: {
				light: orangeOld[400],
				main: orangeOld[500],
				dark: orangeOld[700],
			},
			error: {
				light: red[400],
				main: red[500],
				dark: red[700],
			},
			success: {
				light: greenOld[400],
				main: greenOld[500],
				dark: greenOld[700],
			},
			grey: {
				...gray,
			},
			divider: alpha(gray[700], 0.6),
			background: {
				default: 'hsla(0, 0 %, 13 %, 1)',
				paper: 'hsla(0, 0%, 20%, 1)',
			},
			text: {
				primary: 'hsl(0, 0%, 100%)',
				secondary: gray[400],
			},
			action: {
				hover: alpha(gray[600], 0.2),
				selected: alpha(gray[600], 0.3),
			},
			baseShadow:
				'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
		},
	},
};

export const typography = {
	fontFamily: ['"Inter", "sans-serif"'].join(','),  //['"Handil Pro", "sans-serif"']
	h1: {
		fontSize: defaultTheme.typography.pxToRem(24),
		fontWeight: 500,
		lineHeight: 1.1,
	},
	h2: {
		fontSize: defaultTheme.typography.pxToRem(18),
		fontWeight: 500,
		lineHeight: 1.1,
	},
	h3: {
		fontSize: defaultTheme.typography.pxToRem(16),
		fontWeight: 500,
		lineHeight: 1.1,
	},
	body1: {
		//['"Roboto", "sans-serif"']
		fontSize: defaultTheme.typography.pxToRem(16),
		fontWeight: 400,
		lineHeight: 1.15,
		letter: 3,
	},
	body2: {
		//['"Roboto", "sans-serif"']
		fontSize: defaultTheme.typography.pxToRem(14),
		fontWeight: 300,
		lineHeight: 1.04,
		color: 'hsla(0, 0%, 62%, 1)'
	},

	// h4: {
	// 	fontSize: defaultTheme.typography.pxToRem(24),
	// 	fontWeight: 600,
	// 	lineHeight: 1.5,
	// },
	// h5: {
	// 	fontSize: defaultTheme.typography.pxToRem(20),
	// 	fontWeight: 600,
	// },
	// h6: {
	// 	fontSize: defaultTheme.typography.pxToRem(18),
	// 	fontWeight: 600,
	// },
	// subtitle1: {
	// 	fontSize: defaultTheme.typography.pxToRem(18),
	// },
	// subtitle2: {
	// 	fontSize: defaultTheme.typography.pxToRem(14),
	// 	fontWeight: 500,
	// },
	// body1: {
	// 	fontSize: defaultTheme.typography.pxToRem(14),
	// },
	// body2: {
	// 	fontSize: defaultTheme.typography.pxToRem(14),
	// 	fontWeight: 400,
	// },
	caption: {
		fontSize: defaultTheme.typography.pxToRem(12),
		fontWeight: 400,
	},
};

export const shape = {
	borderRadius: 8,
};

// @ts-ignore
const defaultShadows: Shadows = [
	'none',
	'var(--template-palette-baseShadow)',
	...defaultTheme.shadows.slice(2),
];
export const shadows = defaultShadows;