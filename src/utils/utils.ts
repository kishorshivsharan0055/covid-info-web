import {format, formatDistanceToNow} from 'date-fns'

export const getTimeDistance = (time: number | string) =>
	new Date(time).getTime() > new Date().getTime() - 1 * 24 * 60 * 60 * 1000
		? `${formatDistanceToNow(new Date(time))} ago`
		: format(new Date(time), "LLLL dd, yyyy");