
//import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { inputsCustomizations } from './Customizations/inputs';
// import { dataDisplayCustomizations } from './Customizations/dataDisplay';
// import { feedbackCustomizations } from './Customizations/Feedback';
// import { navigationCustomizations } from './Customizations/Navigation';
import { surfacesCustomizations } from './Customizations/Surfaces';
import { colorSchemes, typography, shadows, shape } from './ThemePrimitives';
import { useMemo } from 'react';

interface AppThemeProps {
	children: React.ReactNode;
	themeComponents?: ThemeOptions['components'];
}

export default function AppTheme({
	children,
	themeComponents,
}: AppThemeProps) {
	const theme = useMemo(() => {
		return createTheme({
			// For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
			cssVariables: {
				colorSchemeSelector: 'data-mui-color-scheme',
				cssVarPrefix: 'template',
			},
			colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
			typography,
			shadows,
			shape,
			components: {
				MuiCssBaseline: {
					// styleOverrides: `
					// 	@font-face {
					// 		font-family: 'Raleway';
					// 		font-style: normal;
					// 		font-display: swap;
					// 		font-weight: 400;
					// 		src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
					// 		unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
					// 	}
					// `,
				},
				...inputsCustomizations,
				// ...dataDisplayCustomizations,
				// ...feedbackCustomizations,
				// ...navigationCustomizations,
				...surfacesCustomizations,
				...themeComponents,
			},
		});
	}, [themeComponents]);
	return (
		<ThemeProvider theme={theme} disableTransitionOnChange>
			{children}
		</ThemeProvider>
	);
}
