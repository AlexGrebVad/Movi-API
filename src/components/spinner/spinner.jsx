import React from 'react'
import { ConfigProvider, Spin } from 'antd'
import './spinner.css'

export default function Spinner() {
	return (
		<ConfigProvider
			theme={{
				components: {
					Spin: {
						dotSize: 150,
					},
				},
			}}
		>
			<div className="spin-wrapper">
				<Spin className="spin" />
			</div>
		</ConfigProvider>
	)
}
