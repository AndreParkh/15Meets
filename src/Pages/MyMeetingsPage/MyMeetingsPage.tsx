import { Box, CssBaseline, Drawer } from "@mui/material"
import { Sidebar } from "../../Components/Sidebar/Sidebar"
import { MyMeettingsTab } from "./Tabs/MyMeetingsTab"


export const MyMeettingsPage = (): JSX.Element => {
	const drawerWidth = 360

	return <Box display={'flex'} height={'100vh'} >
		<CssBaseline enableColorScheme />
		<Box
			component="nav"
			sx={{
				width:
					{ sm: drawerWidth },
				flexShrink: { sm: 0 }
			}}
		>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: 'none', sm: 'block' },

					'& .MuiDrawer-paper': {
						height: '100vh',
						// boxSizing: 'border-box',
						width: drawerWidth,
						borderRadius: '0 32px 32px 0'
					},
				}}
				open
			>
				<Sidebar />
			</Drawer>
		</Box>
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				p: 6,
				width: { sm: `calc(100% - ${drawerWidth}px)` }
			}}
		>
			<MyMeettingsTab />
		</Box>
	</Box>
}