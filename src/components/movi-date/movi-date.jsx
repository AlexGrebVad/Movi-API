import React from 'react'
import './movi-date.css'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'

export default function MoviDate({ date }) {
	let filmDateRealise

	if (date === '' || date === undefined) {
		filmDateRealise = 'Release date unknown'
	} else {
		filmDateRealise = format(new Date(date), 'MMMM dd, yyyy', {
			locale: enGB,
		})
	}

	return <p className="date">{filmDateRealise}</p>
}
