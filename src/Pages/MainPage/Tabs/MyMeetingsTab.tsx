import { Box, Container, Typography } from '@mui/material'
import { meetings } from '../../../API/placeholders/Meetings'
import { groupByDate } from '../../../helpers/functions'
import { MeetingCard } from '../../../Components/MeetingCard/MeetingCard'
// import { Search } from '../../../Components/Search/Search'
// import { Account } from '../../../Components/Account/Account'

export const MyMeettingsTab = (): JSX.Element => {

	const sortedMeetings = meetings.sort((a, b) => new Date(a.meeting_datetime).getSeconds() - new Date(b.meeting_datetime).getSeconds())

	const groupMeetingsByDate = groupByDate(sortedMeetings)
	const meetingNodes = []

	for (let meetingKey in groupMeetingsByDate) {
		meetingNodes.push(<>
			<Typography variant='h2' marginY={3}>
				{meetingKey}
			</Typography>
			<Box
				display={'flex'}
				flexDirection={'column'}
				gap={2}
			>
				{groupMeetingsByDate[meetingKey].map(meeting =>
					<MeetingCard key={meeting.id} meeting={meeting} />
				)}
			</Box>
		</>)

	}

	return <>
		<Box
			display={'flex'}
			alignItems={'center'}
			gap={3}
		>
			<Container
				sx={{
					m: 'auto',
					padding: { 'sm': 0 },
					maxWidth: { 'lg': 1680 },
				}}
			>
				{...meetingNodes}
			</Container>
			{/* <Typography variant='h1' marginRight={'auto'}>
				Мои встречи
			</Typography> */}
			{/* <Search /> */}
			{/* <Account /> */}
		</Box >
	</>
}