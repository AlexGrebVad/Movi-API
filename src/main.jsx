import { createRoot } from 'react-dom/client'
import { Online, Offline } from 'react-detect-offline'
import React from 'react'
import './main.css'
import 'antd/dist/reset.css'
import App from './components/app/app'

createRoot(document.getElementById('root')).render(
	<>
		<Online>
			<App />
		</Online>

		<Offline>
			<div>
				<p className="offlineParagraph">
					You have no internet connection, we are waiting for you when the
					problems are fixed
				</p>
			</div>
		</Offline>
	</>,
)
