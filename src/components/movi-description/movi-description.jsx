import React from 'react'
import './movi-description.css'

export default function MoviDescription({ title, headTitle }) {
	let maxLength

	function shortenText(text) {
		switch (true) {
			case headTitle.length > 30:
				maxLength = 100
				break
			default:
				maxLength = 130
				break
		}

		if (text.length <= maxLength) return text

		const trimmedText = text.slice(0, maxLength + 1)
		const lastSpaceIndex = trimmedText.lastIndexOf(' ')

		if (lastSpaceIndex > 0) {
			return `${trimmedText.slice(0, lastSpaceIndex)}...`
		}
		return `${text.slice(0, maxLength)}...`
	}

	return <p className="movi-description">{shortenText(title)}</p>
}
