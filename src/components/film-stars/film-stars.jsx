import React from 'react'
import './film-stars.css'
import { Rate } from 'antd'

export default function FilmStars({ arraiItem, isReadOnly }) {
	const filmCard = arraiItem
	return (
		<div className="film-stars">
			<Rate
				disabled={isReadOnly}
				defaultValue={filmCard.personal_raiting}
				onChange={(value) => {
					filmCard.personal_raiting = value
					localStorage.setItem(`${filmCard.id}`, JSON.stringify(filmCard))
				}}
				className="custom-rate"
				count={10}
				allowHalf
			/>
		</div>
	)
}
