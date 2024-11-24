import { useColorScheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { SelectProps } from '@mui/material';

export default function ColorModeSelect(props: SelectProps) {
	const { mode, setMode } = useColorScheme();
	if (!mode) {
		return null;
	}

	return (
		<Box display={'flex'} alignItems={'center'}>
			<Typography variant='body1'>Темная тема</Typography>
			<Switch
				checked={mode === 'dark'}
				onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')}
				// color="primary"
				sx={{ marginLeft: 'auto' }}
			/>
		</Box>
	);
}