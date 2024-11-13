import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Subscription } from '../../Components/Subsctiotion/Subscription'
import { subscriptionList } from '../../API/placeholders/Subscriptions'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { MeetingCard } from '../../Components/MeetingCard/MeetingCard'
import { meetings } from '../../API/placeholders/Meetings'



export const SubscriptionPage = (): JSX.Element => {

	const [isCreatingSub, setIsCreatingSub] = useState(false)

	return <>
		<Typography
			variant='h4'
			component={'h1'}
			sx={{ marginY: 2.5 }}
		>
			Тарифы
		</Typography>
		<Button>
			Создать тариф
		</Button>
		{subscriptionList.map(subscription =>
			<Subscription
				subscription={subscription}
				key={subscription.id} />)}
		<Typography variant='h1'>variant h1</Typography>
		<Typography variant='h2'>variant h2</Typography>
		<Typography variant='h3'>variant h3</Typography>
		<Typography variant='body1'>variant txt</Typography>
		<Typography variant='body2'>variant txt_small</Typography>
		{meetings.map(meeting => <MeetingCard meeting={meeting} key={meeting.id} />)}
	</>
}