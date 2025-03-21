import React from 'react'
import { Alert } from 'antd'
import './error-msg.css'

export default function Error() {
	const errorText =
		'We have some trables with server we try to fix it as soon as'
	return (
		<div className="error-block">
			<Alert message={errorText} type="error" />
		</div>
	)
}
