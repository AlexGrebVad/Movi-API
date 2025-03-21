import React from 'react'
import MoviesView from '../movies-view/movies-view'

import GenresContext from '../../services/context-for-genres'

export default function TabTwo({ genresArray }) {
	const personalRatedFilms = Object.values(localStorage).map((value) => {
		return JSON.parse(value)
	})

	return (
		<GenresContext.Provider value={genresArray}>
			<div className="main-block-wrapper">
				<div className="main-block">
					{personalRatedFilms.map((elem) => {
						return <MoviesView arraiItem={elem} key={elem.id} isReadOnly />
					})}
				</div>
			</div>
		</GenresContext.Provider>
	)
}
