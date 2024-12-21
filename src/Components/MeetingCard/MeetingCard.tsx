import Box from '@mui/material/Box'
// import ButtonBase from '@mui/material/ButtonBase'
import MuiButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MeetingCardProps } from './MeetingCard.props'
import { DeleteIcon, DownloadIcon, EditIcon, GoogleIcon, ZoomIcon } from '../../assets/CustomIcon/CustomIcon'

import { styled } from '@mui/material/styles';


const Button = styled((props: ButtonBaseProps) => (
	<MuiButtonBase {...props} />
))(({ theme }) => ({
	width: '30px',
	height: '30px',
	borderRadius: '50%',
	transition: 'all ease 0.2s',
	'&:hover': {
		backgroundColor: '#fff'
	}
}))

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
		sx={(theme) => ({
			gap: 2,
			alignItems: 'center',
			paddingY: 0,
			transition: 'all ease 0.2s',
			cursor: 'pointer',
			'&:hover': {
				backgroundColor: 'hsl(265, 100%, 96%)',
			}
			// {...theme}
		})}>
		{/* <ButtonBase
			sx={{
				display: 'flex',

			}}> */}
		<Box>
			<GoogleIcon />
		</Box>
		{/* <Divider
			orientation="vertical"
			variant="fullWidth"
			flexItem
			sx={(theme) => ({
				width: 17,
				background: theme.palette.primary.main
			})}
		/> */}
		<Stack direction="column" spacing={1} paddingY={2.5} >
			<Link
				href="#"
				variant='h3'
				color="inherit"
				underline="none"
			>
				{meeting.title}
			</Link>
			<Box display={'flex'} gap={3}>
				<Typography variant='body2'>{meeting.duration}</Typography>
				<Typography variant='body2'>{meeting.amount_of_speakers} спикера</Typography>
			</Box>
		</Stack>
		<Stack direction="row" marginLeft={'auto'} spacing={2}>
			<Button
				onClick={() => editHandler()}>
				<EditIcon />
			</Button>
			<Button onClick={() => downloadHandler()}>
				<DownloadIcon />
			</Button>
			<Button onClick={() => deleteHandler()}>
				<DeleteIcon />
			</Button>
		</Stack>
		{/* </ButtonBase> */}

	</Card >
}