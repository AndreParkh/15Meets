import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MuiListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton'
import { styled } from '@mui/material/styles';
import { NewMeeting } from '../NewMeeting/NewMeeting'
import { MyMeetingsIcon, SettingsIcon } from '../../assets/CustomIcon/CustomIcon'
import { Tab, Tabs, Typography } from '@mui/material'
import ColorModeSelect from '../SheredTheme/ColorModeSelect'
import { useState } from 'react'


const ListItemButton = styled((props: ListItemButtonProps) => (
	<MuiListItemButton {...props} />
))(({ theme }) => ({
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

	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};


	const tabs = [
		{ label: 'Мои встречи', icon: <MyMeetingsIcon />, path: '/my-meetings' },
		{ label: 'Настройки', icon: <SettingsIcon />, path: '/settings' }
	]

	return <>
		<Box
			display={'flex'}
			flexDirection={'column'}
			height={'100%'}
			padding={3}
		>
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
			<Tabs
				orientation="vertical"
				value={value}
				onChange={handleChange}
				sx={{ border: 0 }}
			>
				{tabs.map((tab) => (
					<Tab
						key={tab.label}
						label={tab.label}
						icon={tab.icon}
						iconPosition="start"
						disableRipple
						sx={{
							textTransform: 'none',
							padding: 0,
							justifyContent: 'start',
							minHeight: 40,
						}}
					/>))}
			</Tabs>
			{/* <List sx={{
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
			</List> */}
			<Box marginTop={'auto'}>
				<ColorModeSelect />
			</Box>
		</Box >
	</>
}