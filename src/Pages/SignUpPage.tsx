import {
	Box,
	Button,
	CssBaseline,
	Divider,
	FormLabel,
	Link,
	TextField,
	Typography,
	Stack,
} from '@mui/material'
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '../Components/SheredTheme/AppTheme';
import { GoogleIcon, SitemarkIcon } from '../assets/CustomIcon/CustomIcon'
import ColorModeSelect from '../Components/SheredTheme/ColorModeSelect';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { ISignUp } from './SignUpPage.interfaces';

const Card = styled(MuiCard)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignSelf: 'center',
	width: '100%',
	padding: theme.spacing(4),
	gap: theme.spacing(2),
	margin: 'auto',
	boxShadow:
		'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
	[theme.breakpoints.up('sm')]: {
		width: '450px',
	},
	...theme.applyStyles('dark', {
		boxShadow:
			'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
	}),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
	height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
	minHeight: '100%',
	padding: theme.spacing(2),
	[theme.breakpoints.up('sm')]: {
		padding: theme.spacing(4),
	},
	'&::before': {
		content: '""',
		display: 'block',
		position: 'absolute',
		zIndex: -1,
		inset: 0,
		backgroundImage:
			'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
		backgroundRepeat: 'no-repeat',
		...theme.applyStyles('dark', {
			backgroundImage:
				'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
		}),
	},
}));

export default function SignUpPage() {

	const { handleSubmit, control } = useForm<ISignUp>({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		}
	})
	const { errors } = useFormState<ISignUp>({ control })



	const handleSignUp = (data: ISignUp) => {
		console.log(data)
	}

	return (
		< >
			<ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
			<SignUpContainer direction="column" justifyContent="space-between">
				<Card variant="outlined">
					<SitemarkIcon />
					<Typography
						component="h1"
						variant="h4"
						sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
					>
						Регистрация
					</Typography>
					<form onSubmit={handleSubmit(handleSignUp)}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: 2,
							}}
						>
							<Box>
								<FormLabel htmlFor="username"
									sx={{ mt: '100px' }}
								>Введите имя</FormLabel>
								<Controller
									control={control}
									name='username'
									rules={{ required: { value: true, message: 'Name is required.' } }}
									render={({ field }) => (
										<TextField
											name="username"
											fullWidth
											sx={{ marginButtom: '2rem' }}
											placeholder="Jon Snow"
											value={field.value}
											onChange={field.onChange}
											error={!!errors.username?.message}
											helperText={errors.username?.message}
											color={!!errors.username?.message ? 'error' : 'primary'}
										/>
									)}
								/>
							</Box>
							<Box>
								<FormLabel htmlFor="email">Email</FormLabel>
								<Controller
									control={control}
									name='email'
									rules={{ pattern: { value: /\S+@\S+\.\S+/, message: 'Please enter a valid email address.' } }}
									render={({ field }) => (
										<TextField
											fullWidth
											placeholder="your@email.com"
											name="email"
											variant="outlined"
											value={field.value}
											onChange={field.onChange}
											error={!!errors.email?.message}
											helperText={errors.email?.message}
											color={!!errors.email?.message ? 'error' : 'primary'}
										/>
									)}
								/>
							</Box>
							<Box>
								<FormLabel htmlFor="password">Пароль</FormLabel>
								<Controller
									control={control}
									name='password'
									rules={{ minLength: { value: 6, message: 'Password must be at least 6 characters long.' } }}
									render={({ field }) => (
										<TextField
											fullWidth
											name="password"
											placeholder="••••••"
											type="password"
											variant="outlined"
											value={field.value}
											onChange={field.onChange}
											error={!!errors.password?.message}
											helperText={errors.password?.message}
											color={!!errors.password?.message ? 'error' : 'primary'}
										/>
									)}
								/>
							</Box>
							<Button
								type="submit"
								fullWidth
								variant="contained"
							>
								Зарегистрироваться
							</Button>
							<Typography sx={{ textAlign: 'center' }}>
								Already have an account?{' '}
								<span>
									<Link
										href="/material-ui/getting-started/templates/sign-in/"
										variant="body2"
										sx={{ alignSelf: 'center' }}
									>
										Sign in
									</Link>
								</span>
							</Typography>
						</Box>
					</form>
					<Divider>
						<Typography sx={{ color: 'text.secondary' }}>или</Typography>
					</Divider>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<Button
							fullWidth
							variant="outlined"
							onClick={() => alert('Sign up with Google')}
							startIcon={<GoogleIcon />}
						>
							Sign up with Google
						</Button>
					</Box>
				</Card>
			</SignUpContainer>
		</ >
	);
}