import { StyledEngineProvider } from '@mui/material'
import './App.css'
import AppTheme from './Components/SheredTheme/AppTheme'
import { MainPage } from './Pages/MainPage/MainPage'
import SignInPage from './Pages/SignInPage.tsx/SignInPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import { BrowserRouter, Route, Routes } from 'react-router'


function App(props: { disableCustomTheme?: boolean }): JSX.Element {

	return (
		<StyledEngineProvider injectFirst>
			<AppTheme {...props}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path="signin" element={<SignInPage />} />
						<Route path="signup" element={<SignUpPage />} />
					</Routes>
				</BrowserRouter>
			</AppTheme>
		</StyledEngineProvider >
	)
}

export default App
