import { styled, useColorScheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

const SwitchTheme = styled(Switch)(({ theme }) => ({
	width: 28,
	height: 16,
	padding: 0,
	marginLeft: 'auto',
	'& .MuiSwitch-switchBase': {
		padding: 1,
		'&.Mui-checked': {
			color: '#fff',
			transform: 'translateX(12px)',
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: theme.palette.primary.main,
			},
		},
	},
	'& .MuiSwitch-thumb': {
		width: 14,
		height: 14,
		borderRadius: '50%',
	},
	'& .MuiSwitch-track': {
		boxSizing: 'border-box',
		opacity: 1,
		borderRadius: '8px',
		backgroundColor: 'hsla(0, 0%, 90%, 1)',
	},
}))


export default function ColorModeSelect() {
	const { mode, setMode } = useColorScheme();
	if (!mode) {
		return null;
	}

	return (
		<Box display={'flex'} alignItems={'center'}>
			<Typography variant='body1'>Темная тема</Typography>
			<SwitchTheme
				checked={mode === 'dark'}
				onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')}
			/>
		</Box>
	);
}