import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { IconButton, styled } from '@mui/material'
import MuiCard, { CardProps } from '@mui/material/Card'

import { SearchIcon } from '../../assets/CustomIcon/CustomIcon';

// const Paper = 
const Card = styled((props: CardProps) => (
	<MuiCard {...props} />
))(({ theme }) => ({
	padding: '0 0px 0 16px',
	width: 325,
	height: 40,
}))

export const Search = (): JSX.Element => {

	return <Card
		elevation={0}
	// component="form"
	>
		<InputBase
			placeholder="Поиск"
			// inputProps={{ 'aria-label': 'search input' }}
			fullWidth
		/>
		<IconButton sx={{ paddingRight: 2, borderRadius: 3 }} type="button" aria-label="search">
			<SearchIcon />
		</IconButton>
	</Card>
}
