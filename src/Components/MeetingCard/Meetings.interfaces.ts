
export interface IMeeting {
	id: string,
	user_id: number,
	title: string,
	meeting_datetime: string,
	audio_file_path: string,
	duration: string,
	amount_of_speakers: number,
	transcription: string,
	type: string,
	workspace_id: number,
	updated_at: string,
	created_at: string
}