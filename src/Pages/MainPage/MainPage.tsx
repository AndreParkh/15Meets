import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Drawer from "@mui/material/Drawer"
import { Sidebar } from "../../Components/Sidebar/Sidebar"
import { MyMeettingsTab } from "./Tabs/MyMeetingsTab"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { SettingsTab } from "./Tabs/SettingsTab"


export const MainPage = (): JSX.Element => {
	const drawerWidth = 360

	const [indexTab, setIndexTab] = useState(0)
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setIndexTab(newValue);
	};

	const navigate = useNavigate()
	useEffect(() => {
		if (!localStorage.getItem('userAccessToken')) {
			navigate('signin')
		}
	})

	return <Box display={'flex'} height={'100vh'} >
		<CssBaseline enableColorScheme />
		<Box
			component="nav"
			width={{ sm: drawerWidth }}
			flexShrink={{ sm: 0 }}
		>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: 'none', sm: 'block' },

					'& .MuiDrawer-paper': {
						height: '100vh',
						width: drawerWidth,
						borderRadius: '0 32px 32px 0'
					},
				}}
				open
			>
				<Sidebar sidebarWidth={drawerWidth} indexTab={indexTab} handleChange={handleChange} />
			</Drawer>
		</Box>
		<Box
			component="main"
			flexGrow={1}
			padding={6}
			width={{ sm: `calc(100% - ${drawerWidth}px)` }}
		>
			{indexTab === 0 && <MyMeettingsTab />}
			{indexTab === 1 && <SettingsTab />}

		</Box>
	</Box>
}