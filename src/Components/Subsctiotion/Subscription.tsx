import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react'
import { Controller, useForm, useFormState } from 'react-hook-form'
import { ISubscription } from './Subscription.interfaces'
import { ISubscriptionProps } from './Subscription.interface'

export const Subscription = ({ subscription }: ISubscriptionProps): JSX.Element => {
	const [isEdit, setIsEdit] = useState(false)

	const { handleSubmit, control } = useForm<ISubscription>({
		defaultValues: {
			name: subscription.name,
			minutes: subscription.minutes,
			price: subscription.price,
			duration: subscription.duration,
		},
	})
	const { errors } = useFormState<ISubscription>({ control })

	console.log(subscription)

	return <Accordion>
		<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel1-content"
			id="panel1-header"
		>
			<Typography variant='body1' sx={{ marginRight: '10px' }}>
				{subscription.id}.
			</Typography>
			<Typography variant='body1'>
				{subscription.name}
			</Typography>
		</AccordionSummary>
		<AccordionDetails>
			<Grid container spacing={2}>
				<Grid size={4}>
					<Typography variant='body1'>
						Количество минут:
					</Typography>
					{!isEdit && <Typography variant='body1'>
						{subscription.minutes}
					</Typography>}
					{isEdit && <Controller
						control={control}
						name='minutes'
						rules={{ required: { value: true, message: 'Name is required.' } }}
						render={({ field }) => (
							<TextField
								name="minutes"
								fullWidth
								value={field.value}
								onChange={field.onChange}
								error={!!errors.minutes?.message}
								helperText={errors.minutes?.message}
								color={!!errors.minutes?.message ? 'error' : 'primary'}
							/>
						)}
					/>}
				</Grid>
				<Grid size={4}>
					<Typography variant='body1'>
						Длительность в днях:
					</Typography>
					{!isEdit && <Typography variant='body1'>
						{subscription.duration}
					</Typography>}
					{isEdit && <Controller
						control={control}
						name='duration'
						rules={{ required: { value: true, message: 'Duration is required.' } }}
						render={({ field }) => (
							<TextField
								name="duration"
								fullWidth
								value={field.value}
								onChange={field.onChange}
								error={!!errors.duration?.message}
								helperText={errors.duration?.message}
								color={!!errors.duration?.message ? 'error' : 'primary'}
							/>
						)}
					/>}

				</Grid>
				<Grid size={4}>
					<Typography variant='body1'>
						Цена:
					</Typography>
					{!isEdit && <Typography variant='body1'>
						{subscription.price}
					</Typography>}
					{isEdit && <Controller
						control={control}
						name='price'
						rules={{ required: { value: true, message: 'Price is required.' } }}
						render={({ field }) => (
							<TextField
								name="price"
								fullWidth
								value={field.value}
								onChange={field.onChange}
								error={!!errors.price?.message}
								helperText={errors.price?.message}
								color={!!errors.price?.message ? 'error' : 'primary'}
							/>
						)}
					/>}
				</Grid>
			</Grid>
			{!isEdit && <Box >
				<Button onClick={() => setIsEdit(true)}>
					Редакировать
				</Button>
				<Button>
					Удалать
				</Button>
			</Box>}
			{isEdit && <Button onClick={() => setIsEdit(false)}>
				Сохранить
			</Button>
			}
		</AccordionDetails>

	</Accordion>
}