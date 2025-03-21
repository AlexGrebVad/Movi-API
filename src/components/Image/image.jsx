import React from 'react'
import './image.css'
import emptyImage from './forEmptyApiImg.jpg'

export default function Image({ link }) {
	let linkValue = link

	if (linkValue === 'https://image.tmdb.org/t/p/originalnull') {
		linkValue = emptyImage
	}

	return <img src={linkValue} alt="film poster" className="img " />
}
