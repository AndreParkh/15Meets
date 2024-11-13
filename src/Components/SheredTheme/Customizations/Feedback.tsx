import { Theme, alpha, Components } from '@mui/material/styles';
import { gray, orangeOld } from '../ThemePrimitives';

/* eslint-disable import/prefer-default-export */
export const feedbackCustomizations: Components<Theme> = {
	MuiAlert: {
		styleOverrides: {
			root: ({ theme }) => ({
				borderRadius: 10,
				backgroundColor: orangeOld[100],
				color: (theme.vars || theme).palette.text.primary,
				border: `1px solid ${alpha(orangeOld[300], 0.5)}`,
				'& .MuiAlert-icon': {
					color: orangeOld[500],
				},
				...theme.applyStyles('dark', {
					backgroundColor: `${alpha(orangeOld[900], 0.5)}`,
					border: `1px solid ${alpha(orangeOld[800], 0.5)}`,
				}),
			}),
		},
	},
	MuiDialog: {
		styleOverrides: {
			root: ({ theme }) => ({
				'& .MuiDialog-paper': {
					borderRadius: '10px',
					border: '1px solid',
					borderColor: (theme.vars || theme).palette.divider,
				},
			}),
		},
	},
	MuiLinearProgress: {
		styleOverrides: {
			root: ({ theme }) => ({
				height: 8,
				borderRadius: 8,
				backgroundColor: gray[200],
				...theme.applyStyles('dark', {
					backgroundColor: gray[800],
				}),
			}),
		},
	},
};