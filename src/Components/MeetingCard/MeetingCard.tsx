import { Box, ButtonBase, Card, Divider, Link, Paper, Stack, Typography } from '@mui/material'
import { MeetingCardProps } from './MeetingCard.props'
import { DeleteIcon, DownloadIcon, EditIcon, GoogleIcon, ZoomIcon } from '../../assets/CustomIcon/CustomIcon'



export const MeetingCard = ({ meeting }: MeetingCardProps): JSX.Element => {

	const deleteHandler = () => {
		console.log(`delete meeteing with id=${meeting.id}`)
	}

	const editHandler = () => {
		console.log(`edit meeteing with id=${meeting.id}`)
	}
	const downloadHandler = () => {
		console.log(`download meeteing with id=${meeting.id}`)
	}
	return <Card
		elevation={0}
		sx={{
			gap: 2,
			alignItems: 'center',
			paddingY: 0
		}}>
		<Box>
			<GoogleIcon />
		</Box>
		<Divider
			orientation="vertical"
			variant="fullWidth"
			flexItem
			sx={{
				width: 17,
				background: 'linear-gradient(100.39deg, #BF92FF 0%, #D3B5FF 129.1%)'
			}}
		/>
		<Stack direction="column" spacing={1} paddingY={2.5} >
			<Link
				href="#"
				variant='h3'
				color="inherit"
				underline="hover"
			>
				{meeting.title}
			</Link>
			<Box sx={{ display: 'flex', gap: 3 }}>
				<Typography variant='body2'>{meeting.duration}</Typography>
				<Typography variant='body2'>{meeting.amount_of_speakers} спикера</Typography>
			</Box>
		</Stack>
		<Stack direction="row" marginLeft={'auto'} spacing={2}>
			<ButtonBase onClick={() => editHandler()}>
				<EditIcon />
			</ButtonBase>
			<ButtonBase onClick={() => downloadHandler()}>
				<DownloadIcon />
			</ButtonBase>
			<ButtonBase onClick={() => deleteHandler()}>
				<DeleteIcon />
			</ButtonBase>
		</Stack>
	</Card >
}