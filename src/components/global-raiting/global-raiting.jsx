import React from 'react'
import './global-raiting.css'

export default function GlobalRaiting({ globalRating }) {
	let globalClass = 'global-raiting-block '
	const fixedRating = globalRating.toFixed(1)

	if (fixedRating < 3) {
		globalClass += 'zero-three-rait'
	}
	if (fixedRating >= 3 && fixedRating < 5) {
		globalClass += 'three-five-rait'
	}
	if (fixedRating >= 5 && fixedRating < 7) {
		globalClass += 'five-seven-rait'
	}
	if (fixedRating >= 7) {
		globalClass += 'seven-plus-rait'
	}

	return <div className={globalClass}>{fixedRating}</div>
}
