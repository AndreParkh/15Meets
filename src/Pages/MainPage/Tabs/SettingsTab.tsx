import { Box, Container, Typography } from '@mui/material'
import { meetings } from '../../../API/placeholders/Meetings'
import { groupByDate } from '../../../helpers/functions'
import { MeetingCard } from '../../../Components/MeetingCard/MeetingCard'
// import { Search } from '../../../Components/Search/Search'
// import { Account } from '../../../Components/Account/Account'

export const SettingsTab = (): JSX.Element => {


	return <>
		<Box
			display={'flex'}
			alignItems={'center'}
			gap={3}
		>
			<Typography>
				settings
			</Typography>
		</Box >
	</>
}