import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { Controller, useForm, useFormState } from 'react-hook-form';
import { ISignUp } from './SignUpPage.interfaces'

export default function SignUpPage() {

	const { handleSubmit, control } = useForm<ISignUp>({
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: ''
		}
	})
	const { errors } = useFormState<ISignUp>({ control })

	const handleSignUp = (data: ISignUp) => {
		console.log(data)
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
						Зарегистрироваться в 15Meets
					</Typography>
					<form onSubmit={handleSubmit(handleSignUp)}>
						<Box display={'flex'} flexDirection={'column'} gap={2} paddingX={5}>
							<Controller
								control={control}
								name='email'
								rules={{ required: { value: true, message: 'Name is required.' } }}
								render={({ field }) => (
									<TextField
										name="email"
										fullWidth
										sx={{ marginButtom: '2rem' }}
										placeholder="E-mail"
										value={field.value}
										onChange={field.onChange}
										error={!!errors.email?.message}
										helperText={errors.email?.message}
										color={!!errors.email?.message ? 'error' : 'primary'}
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
										placeholder="Пароль"
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
							<Controller
								control={control}
								name='repeatPassword'
								rules={{ minLength: { value: 6, message: 'Password must be at least 6 characters long.' } }}
								render={({ field }) => (
									<TextField
										fullWidth
										name="repeatPassword"
										placeholder="Повторите пароль"
										type="password"
										variant="outlined"
										value={field.value}
										onChange={field.onChange}
										error={!!errors.repeatPassword?.message}
										helperText={errors.repeatPassword?.message}
										color={!!errors.repeatPassword?.message ? 'error' : 'primary'}
									/>
								)}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
							>
								Зарегистрироваться
							</Button>
						</Box>
					</form>
					<Typography textAlign={'center'} marginTop={24}>
						Есть аккаунт?{' '}
						<span>
							<Link
								href="/material-ui/getting-started/templates/sign-in/"
								variant="body2"
								alignSelf={'center'}
								color='hsla(0, 0%, 20%, 1)'
							>
								Войти
							</Link>
						</span>
					</Typography>
				</Box>
			</Card >
		</Box >
	);
}