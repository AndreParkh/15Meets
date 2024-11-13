import { Avatar, IconButton, styled, Typography } from '@mui/material'
import MuiCard, { CardProps } from '@mui/material/Card'

import { LogoutIcon, UserIcon } from '../../assets/CustomIcon/CustomIcon';

// const Paper = 
const Card = styled((props: CardProps) => (
	<MuiCard {...props} />
))(({ theme }) => ({
	padding: '0 16px',
	// width: 325,
	height: 40,
	gap: 8,
}))

export const Account = (): JSX.Element => {

	return <Card
		elevation={0}
	// component="form"
	>
		<UserIcon />
		<Typography variant='body1' minWidth={90}>Name</Typography>
		<IconButton sx={{ p: 0 }} type="button" aria-label="search">
			<LogoutIcon />
		</IconButton>
	</Card>
}
