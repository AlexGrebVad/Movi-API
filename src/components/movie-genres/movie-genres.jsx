import React, { useContext } from 'react'
import './movie-genres.css'
import GenresContext from '../../services/context-for-genres'

export default function MovieGenres({ genresFilmIds }) {
	const genresArray = useContext(GenresContext)

	const liRender = (arrayOfallIds) => {
		if (!arrayOfallIds) return null
		const filtredArray = arrayOfallIds
			.filter((elem) => genresFilmIds.includes(elem.id))
			.slice(0, 3)

		return filtredArray.map((elem) => {
			return <li key={elem.id}>{elem.name}</li>
		})
	}

	return <ul>{genresFilmIds.length === 0 ? null : liRender(genresArray)}</ul>
}
