import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

import { Controller, useForm, useFormState } from 'react-hook-form';
import { ISignIn } from './SignInPage.interfaces';
import { API } from '../../helpers/API'
import { useNavigate } from 'react-router'

export default function SignInPage() {

	const { handleSubmit, control } = useForm<ISignIn>({
		defaultValues: {
			username: import.meta.env.VITE_ADMIN_USERNAME,
			password: import.meta.env.VITE_ADMIN_PASSWORD
		}
	})

	const { errors } = useFormState<ISignIn>({ control })

	const navigate = useNavigate()

	const handleSignIn = async (data: ISignIn) => {
		const tokens = await API.auth.login(data)

		localStorage.setItem("userAccessToken", tokens.access_token);
		localStorage.setItem("userRefreshToken", tokens.refresh_token);
		localStorage.setItem("userTokenType", tokens.token_type);
		navigate('/')
		// console.log(tokens)
	}

	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			height={'100vh'}
			sx={{ background: 'linear-gradient(180deg, hsla(0, 0%, 100%, 1), hsla(267, 100%, 95%, 1))' }}
		>
			<Card
				elevation={0}
				sx={{ p: 0 }}
			>
				<Box
					padding={6}
					minWidth={640}
				>
					<Typography
						component="h1"
						variant="h4"
						textAlign={'center'}
						marginBottom={4}
					>
						Войти в 15Meets
					</Typography>
					<form onSubmit={handleSubmit(handleSignIn)}>
						<Box display={'flex'} flexDirection={'column'} gap={2} paddingX={5}>
							<Controller
								control={control}
								name='username'
								rules={{ required: { value: true, message: 'Name is required.' } }}
								render={({ field }) => (
									<TextField
										name="username"
										fullWidth
										// sx={{ marginButtom: '2rem' }}
										label="E-mail"
										value={field.value}
										onChange={field.onChange}
										error={!!errors.username?.message}
										helperText={errors.username?.message}
										color={!!errors.username?.message ? 'error' : 'primary'}
									/>
								)}
							/>
							<Controller
								control={control}
								name='password'
								rules={{ minLength: { value: 6, message: 'Password must be at least 6 characters long.' } }}
								render={({ field }) => (
									<TextField
										fullWidth
										name="password"
										label="Пароль"
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
							<Button
								type="submit"
								fullWidth
								variant="contained"
							>
								Войти
							</Button>
						</Box>
					</form>
					<Typography textAlign={'center'} marginTop={24}>
						Нет аккаунта?{' '}
						<span>
							<Link
								href="signup"
								variant="body2"
								alignSelf={'center'}
								sx={(theme) => ({
									color: theme.palette.text.primary
								})}
							>
								Зарегистрироваться
							</Link>
						</span>
					</Typography>
				</Box>
			</Card >
		</Box >
	);
}