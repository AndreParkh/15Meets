import { IMeeting } from '../Components/MeetingCard/Meetings.interfaces';

const weekDays = [
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
	'Воскресенье',
]

interface ISortedMeetings {
	[key: string]: IMeeting[],
}

export const sortByDate = (meetings: IMeeting[]): ISortedMeetings => {
	const sortedMeetings = {} as ISortedMeetings
	meetings.map((meet) => {
		const date = new Date(meet.meeting_datetime);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const weekDay = weekDays[date.getDay()];

		const template = `${weekDay} - ${day}.${month}.${year}`
		sortedMeetings[template] ? sortedMeetings[template].push(meet) : sortedMeetings[template] = [meet]
	})
	return sortedMeetings
}