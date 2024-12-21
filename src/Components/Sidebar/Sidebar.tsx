import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { NewMeeting } from '../NewMeeting/NewMeeting'
import { MyMeetingsIcon, SettingsIcon } from '../../assets/CustomIcon/CustomIcon'
import ColorModeSelect from '../SheredTheme/ColorModeSelect'
// import { useState } from 'react'
import { alpha } from '@mui/material'

export const Sidebar = (props: { sidebarWidth: number, indexTab: number, handleChange: (event: React.SyntheticEvent, newValue: number) => void }): JSX.Element => {

	// const [value, setValue] = useState(0);
	// const handleChange = (event: React.SyntheticEvent, newValue: number) => {
	// 	setValue(newValue);
	// };


	const tabsInfo = [
		{ label: 'Мои встречи', icon: <MyMeetingsIcon />, path: '/my-meetings' },
		{ label: 'Настройки', icon: <SettingsIcon />, path: '/settings' }
	]

	return <>
		<Box
			display={'flex'}
			flexDirection={'column'}
			height={'100%'}
			paddingY={3}
		>
			<Box paddingX={3}>
				<Typography
					// color='hsla(265, 100 %, 78 %, 1)'
					marginY={6}
					fontSize={24}
					sx={(theme) => ({
						'&.MuiTypography-body1': {
							color: theme.palette.primary.main,
						}
					})}
				>
					15Meets
				</Typography>
				<NewMeeting />
			</Box>
			<Tabs
				orientation="vertical"
				value={props.indexTab}
				onChange={props.handleChange}
				sx={(theme) => ({
					border: 0,
					marginTop: 5,
					'.MuiTabs-flexContainer': {
						gap: 2,
					},
					'.MuiTabs-indicator': {
						right: 'auto',
						width: 4,
						// backgroundColor: theme.palette.primary.main,
						'&::after': {
							content: '" "',
							display: 'block',
							width: props.sidebarWidth,
							height: '100%',
							backgroundColor: alpha(theme.palette.primary.light, 0.2)
						}
					},
				})}
			>
				{tabsInfo.map((tab) => (
					<Tab
						key={tab.label}
						label={tab.label}
						icon={tab.icon}
						iconPosition="start"
						disableRipple
						sx={(theme) => ({
							textTransform: 'none',
							paddings: '8px 16px',
							justifyContent: 'start',
							minHeight: 40,
							transition: 'all .2s',
							color: theme.palette.text.primary,
							'&:hover': {
								color: theme.palette.text.secondary,
								'& .MuiSvgIcon-root': {
									stroke: theme.palette.text.secondary
								},
							},
							'&.Mui-selected': {
								color: theme.palette.text.secondary,
								'.MuiSvgIcon-root': {
									stroke: theme.palette.text.secondary
								},
							},
							'.MuiSvgIcon-root': {
								marginRight: 1,
								transition: 'all .2s',

							}
						})}
					/>))}
			</Tabs>
			<Box marginTop={'auto'} paddingX={3}>
				<ColorModeSelect />
			</Box>
		</Box >
	</>
}