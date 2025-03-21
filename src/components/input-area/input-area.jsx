import React from 'react'
import './input-area.css'

export default function InputField({ changeImputValue }) {
	return (
		<div className="input-field">
			<input
				type="text"
				placeholder="Type to search..."
				onChange={changeImputValue}
			/>
		</div>
	)
}
