import { IMeeting } from '../Components/MeetingCard/Meetings.interfaces';
import { locale } from './constants';

const weekDays = [
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
	'Воскресенье',
]

interface IGroupedMeetings {
	[key: string]: IMeeting[],
}

export const createDate = (date: Date | string = new Date()) => {

	if (typeof date === 'string') {
		date = new Date(date)
	}

	const dayNumber = date.getDate()
	const weekNumberDay = date.getDay() + 1
	const weekDay = date.toLocaleDateString(locale, { weekday: 'long' })

	const year = date.getFullYear()
	const yearShort = date.toLocaleDateString(locale, { year: '2-digit' })

	const monthName = date.toLocaleDateString(locale, { month: 'long' })
	const monthShort = monthName.slice(0, 3)
	const monthNumber = date.getMonth() + 1
	const monthIndex = date.getMonth()

	const DDMMYYYY = `${dayNumber}.${monthNumber}.${year}`
	return {
		date,
		dayNumber,
		weekNumberDay,
		weekDay,
		year,
		yearShort,
		monthName,
		monthShort,
		monthNumber,
		monthIndex,
		DDMMYYYY
	}
}

export const groupByDate = (meetings: IMeeting[]): IGroupedMeetings => {
	const groupedMeetings = {} as IGroupedMeetings
	meetings.map((meet) => {
		const date = createDate(meet.meeting_datetime);

		// const date = new Date(meet.meeting_datetime);
		// const year = date.getFullYear();
		// const month = date.getMonth() + 1;
		// const day = date.getDate();
		// const weekDay = weekDays[date.getDay()];

		const template = `${date.weekDay} - ${date.DDMMYYYY}`
		groupedMeetings[template] ? groupedMeetings[template].push(meet) : (groupedMeetings[template] = [meet])
	})
	return groupedMeetings
}