import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import MuiListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import AddIcon from '@mui/icons-material/Add';
import { GoogleIcon, UploadIcon, ZoomIcon } from '../../assets/CustomIcon/CustomIcon';

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
	boxSizing: 'border-box',
	color: theme.palette.primary.contrastText,
	padding: 0,
	width: '100%',
	border: `2px solid ${theme.palette.primary.main}`,
	'&.MuiAccordion-rounded': {
		borderRadius: 24,
	}
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary {...props} />
))(({ theme }) => ({
	padding: 16,
	minHeight: 20,
	borderRadius: 20,
	backgroundColor: theme.palette.primary.main,
	'& .MuiAccordionSummary-expandIconWrapper': {
		color: theme.palette.primary.contrastText,
	},
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(45deg)',
	},
	'& .MuiAccordionSummary-content': {
		margin: 0,
	}
}))

const AccordionDetails = styled((props: AccordionDetailsProps) => (
	<MuiAccordionDetails {...props} />
))(({ theme }) => ({
	backgroundColor: 'transparent',
	color: theme.palette.text.primary,
	padding: 0,
	margin: '8px 16px',
}))


const ListItemButton = styled((props: ListItemButtonProps) => (
	<MuiListItemButton {...props} />
))(({ theme }) => ({
	paddingLeft: 0,
	paddingRight: 0,
}))

export const NewMeeting = (): JSX.Element => {


	const buttons = [
		{
			label: 'Zoom',
			icon: <ZoomIcon />
		},
		{
			label: 'Google Meet',
			icon: <GoogleIcon />
		},
	]

	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<AddIcon />}
				aria-controls="new-meeting"
				id="new-meeting"
			>
				Новая встреча
			</AccordionSummary>
			<AccordionDetails>
				<List component={'ul'}>
					<ListItemButton component={'li'}>
						<ListItemIcon>
							<UploadIcon />
						</ListItemIcon>
						<ListItemText>
							Загрузить файл
						</ListItemText>
					</ListItemButton>
					<Divider sx={{
						margin: '8px 0 8px 0',
					}} />
					{buttons.map(button =>
						<ListItemButton component={'li'} key={button.label}>
							<ListItemIcon >
								{button.icon}
							</ListItemIcon>
							<ListItemText>
								{button.label}
							</ListItemText>
						</ListItemButton>)
					}
				</List>
			</AccordionDetails>
		</Accordion>
	)
}