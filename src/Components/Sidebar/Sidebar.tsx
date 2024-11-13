import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MuiListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton'
import { styled } from '@mui/material/styles';
import { NewMeeting } from '../NewMeeting/NewMeeting'
import { MyMeetingsIcon, SettingsIcon } from '../../assets/CustomIcon/CustomIcon'
import { Typography } from '@mui/material'


const ListItemButton = styled((props: ListItemButtonProps) => (
	<MuiListItemButton {...props} />
))(({ theme }) => ({
	// backgroundColor: 'hsla(265, 100%, 78%, 1)',
	color: 'hsla(0, 0%, 20%, 1)',
	borderRadius: 24,
	...theme.applyStyles('dark', {
		color: 'hsla(0, 0%, 100%, 1)',
	}),
	'&.Mui-selected': {
		backgroundColor: 'hsla(265, 100%, 78%, 1)',
		color: 'hsla(0, 0%, 100%, 1)',
	}
}))

export const Sidebar = (): JSX.Element => {

	const buttons = [
		{ label: 'Мои встречи', icon: <MyMeetingsIcon />, path: '/my-meetings', selected: true },
		{ label: 'Настройки', icon: <SettingsIcon />, path: '/settings', selected: false }
	]

	return <Box padding={3}>
		<Typography
			color='hsla(265, 100 %, 78 %, 1)'
			marginY={6}
			fontSize={24}
			sx={{
				'&.MuiTypography-body1': {
					color: 'hsla(265, 100%, 78%, 1)',
				}
			}}
		>
			15Meets
		</Typography>
		<NewMeeting />
		<List sx={{
			marginTop: 6,
			padding: 0,
			display: 'flex',
			flexDirection: 'column',
			gap: 2,
		}}>
			{buttons.map(button =>
				<ListItem disablePadding key={button.label}>
					<ListItemButton selected={button.selected} >
						<ListItemIcon
							sx={{
								marginRight: 1,
								minWidth: 0,
							}}>
							{button.icon}
						</ListItemIcon>
						<ListItemText>
							{button.label}
						</ListItemText>
					</ListItemButton>
				</ListItem>)
			}
		</List>
	</Box>
}