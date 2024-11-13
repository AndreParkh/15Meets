import { Box, Typography } from '@mui/material'
import { meetings } from '../../API/placeholders/Meetings'
import { sortByDate } from '../../helpers/functions'
import { MeetingCard } from '../../Components/MeetingCard/MeetingCard'
import { Search } from '../../Components/Search/Search'
import { Account } from '../../Components/Account/Account'

export const MyMeettingsPage = (): JSX.Element => {

	const sortedMeetingsByDate = sortByDate(meetings)
	const sortedMeetings = []

	for (let meeting in sortedMeetingsByDate) {
		console.log(meeting)
		sortedMeetings.push(<>
			<Typography
				variant='h2'
				marginY={3}
			>
				{meeting}
			</Typography>
			{sortedMeetingsByDate[meeting].map(meeting => (
				<MeetingCard key={meeting.id} meeting={meeting} />
			))}
		</>)

	}

	return <>
		<Box
			marginBottom={4}
			alignItems={'center'}
			gap={3}
			sx={{
				display: 'flex',
			}}
		>
			<Typography
				variant='h1'
				marginRight={'auto'}
			>
				Мои встречи
			</Typography>
			<Search />
			<Account />
		</Box>
		{...sortedMeetings}
	</>
}