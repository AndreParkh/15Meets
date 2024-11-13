import { Theme, alpha, Components } from '@mui/material/styles';
import { svgIconClasses } from '@mui/material/SvgIcon';
import { typographyClasses } from '@mui/material/Typography';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import { chipClasses } from '@mui/material/Chip';
import { iconButtonClasses } from '@mui/material/IconButton';
import { gray, red, greenOld } from '../ThemePrimitives';

/* eslint-disable import/prefer-default-export */
export const dataDisplayCustomizations: Components<Theme> = {
	// MuiList: {
	// 	styleOverrides: {
	// 		root: {
	// 			padding: 0,
	// 			display: 'flex',
	// 			flexDirection: 'column',
	// 			gap: 16,
	// 		},
	// 	},
	// },
	MuiListItemButton: {
		styleOverrides: {
			root: {
				variants: [
					{
						props: { variant: 'filled' },
						styles: {
							backgroundColor: 'hsla(265, 100%, 78%, 1)',
							color: 'hsla(0, 0%, 100%, 1)',
							borderRadius: 24,
						}
					}
				]
			}
		}
	},
	MuiListItem: {
		// styleOverrides: {
		// 	root: ({ theme }) => ({
		// 		[`& .${svgIconClasses.root}`]: {
		// 			width: '1rem',
		// 			height: '1rem',
		// 			color: (theme.vars || theme).palette.text.secondary,
		// 		},
		// 		[`& .${typographyClasses.root}`]: {
		// 			fontWeight: 500,
		// 		},
		// 		[`& .${buttonBaseClasses.root}`]: {
		// 			display: 'flex',
		// 			gap: 8,
		// 			padding: '2px 8px',
		// 			borderRadius: (theme.vars || theme).shape.borderRadius,
		// 			opacity: 0.7,
		// 			'&.Mui-selected': {
		// 				opacity: 1,
		// 				backgroundColor: alpha(theme.palette.action.selected, 0.3),
		// 				[`& .${svgIconClasses.root}`]: {
		// 					color: (theme.vars || theme).palette.text.primary,
		// 				},
		// 				'&:focus-visible': {
		// 					backgroundColor: alpha(theme.palette.action.selected, 0.3),
		// 				},
		// 				'&:hover': {
		// 					backgroundColor: alpha(theme.palette.action.selected, 0.5),
		// 				},
		// 			},
		// 			'&:focus-visible': {
		// 				backgroundColor: 'transparent',
		// 			},
		// 		},
		// 	}),
		// },
	},
	MuiListItemText: {
		// styleOverrides: {
		// 	primary: ({ theme }) => ({
		// 		fontSize: theme.typography.body2.fontSize,
		// 		fontWeight: 500,
		// 		lineHeight: theme.typography.body2.lineHeight,
		// 	}),
		// 	secondary: ({ theme }) => ({
		// 		fontSize: theme.typography.caption.fontSize,
		// 		lineHeight: theme.typography.caption.lineHeight,
		// 	}),
		// },
	},
	MuiListItemIcon: {
		styleOverrides: {
			root: {
				marginRight: 8,
				minWidth: 0,
				// color: 'white'
			},
		},
	},
	// MuiChip: {
	// 	defaultProps: {
	// 		size: 'small',
	// 	},
	// 	styleOverrides: {
	// 		root: ({ theme }) => ({
	// 			border: '1px solid',
	// 			borderRadius: '999px',
	// 			[`& .${chipClasses.label}`]: {
	// 				fontWeight: 600,
	// 			},
	// 			variants: [
	// 				{
	// 					props: {
	// 						color: 'default',
	// 					},
	// 					style: {
	// 						borderColor: gray[200],
	// 						backgroundColor: gray[100],
	// 						[`& .${chipClasses.label}`]: {
	// 							color: gray[500],
	// 						},
	// 						[`& .${chipClasses.icon}`]: {
	// 							color: gray[500],
	// 						},
	// 						...theme.applyStyles('dark', {
	// 							borderColor: gray[700],
	// 							backgroundColor: gray[800],
	// 							[`& .${chipClasses.label}`]: {
	// 								color: gray[300],
	// 							},
	// 							[`& .${chipClasses.icon}`]: {
	// 								color: gray[300],
	// 							},
	// 						}),
	// 					},
	// 				},
	// 				{
	// 					props: {
	// 						color: 'success',
	// 					},
	// 					style: {
	// 						borderColor: greenOld[200],
	// 						backgroundColor: greenOld[50],
	// 						[`& .${chipClasses.label}`]: {
	// 							color: greenOld[500],
	// 						},
	// 						[`& .${chipClasses.icon}`]: {
	// 							color: greenOld[500],
	// 						},
	// 						...theme.applyStyles('dark', {
	// 							borderColor: greenOld[800],
	// 							backgroundColor: greenOld[900],
	// 							[`& .${chipClasses.label}`]: {
	// 								color: greenOld[300],
	// 							},
	// 							[`& .${chipClasses.icon}`]: {
	// 								color: greenOld[300],
	// 							},
	// 						}),
	// 					},
	// 				},
	// 				{
	// 					props: {
	// 						color: 'error',
	// 					},
	// 					style: {
	// 						borderColor: red[100],
	// 						backgroundColor: red[50],
	// 						[`& .${chipClasses.label}`]: {
	// 							color: red[500],
	// 						},
	// 						[`& .${chipClasses.icon}`]: {
	// 							color: red[500],
	// 						},
	// 						...theme.applyStyles('dark', {
	// 							borderColor: red[800],
	// 							backgroundColor: red[900],
	// 							[`& .${chipClasses.label}`]: {
	// 								color: red[200],
	// 							},
	// 							[`& .${chipClasses.icon}`]: {
	// 								color: red[300],
	// 							},
	// 						}),
	// 					},
	// 				},
	// 				{
	// 					props: { size: 'small' },
	// 					style: {
	// 						maxHeight: 20,
	// 						[`& .${chipClasses.label}`]: {
	// 							fontSize: theme.typography.caption.fontSize,
	// 						},
	// 						[`& .${svgIconClasses.root}`]: {
	// 							fontSize: theme.typography.caption.fontSize,
	// 						},
	// 					},
	// 				},
	// 				{
	// 					props: { size: 'medium' },
	// 					style: {
	// 						[`& .${chipClasses.label}`]: {
	// 							fontSize: theme.typography.caption.fontSize,
	// 						},
	// 					},
	// 				},
	// 			],
	// 		}),
	// 	},
	// },
	// MuiTablePagination: {
	// 	styleOverrides: {
	// 		actions: {
	// 			display: 'flex',
	// 			gap: 8,
	// 			marginRight: 6,
	// 			[`& .${iconButtonClasses.root}`]: {
	// 				minWidth: 0,
	// 				width: 36,
	// 				height: 36,
	// 			},
	// 		},
	// 	},
	// },
	// MuiIcon: {
	// 	defaultProps: {
	// 		fontSize: 'small',
	// 	},
	// 	styleOverrides: {
	// 		root: {
	// 			variants: [
	// 				{
	// 					props: {
	// 						fontSize: 'small',
	// 					},
	// 					style: {
	// 						fontSize: '1rem',
	// 					},
	// 				},
	// 			],
	// 		},
	// 	},
	// },
};