import { Box, Container, CssBaseline, Drawer, StyledEngineProvider } from '@mui/material'
import './App.css'
import SignUpPage from './Pages/SignUpPage'
import { SubscriptionPage } from './Pages/SubscriptionPage/SubscriptionPage'
import AppTheme from './Components/SheredTheme/AppTheme'
import ColorModeSelect from './Components/SheredTheme/ColorModeSelect'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { MyMeettingsPage } from './Pages/MyMeetingsPage/MyMeetingsPage'


const drawerWidth = 360
function App(props: { disableCustomTheme?: boolean }): JSX.Element {

	return (
		<StyledEngineProvider injectFirst>
			<AppTheme {...props}>
				<Box sx={{ display: 'flex' }}>
					<CssBaseline enableColorScheme />
					<Box
						component="nav"
						sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
					>
						<Drawer
							variant="permanent"
							sx={{
								display: { xs: 'none', sm: 'block' },
								'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRadius: '0 32px 32px 0' },
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
						<ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
						{/* <SubscriptionPage /> */}
						{/* <SignUpPage /> */}
						<MyMeettingsPage />
					</Box>
				</Box>
			</AppTheme>
		</StyledEngineProvider >
	)
}

export default App
