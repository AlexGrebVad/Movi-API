import React from 'react'
import './movies-view.css'
import Image from '../Image/image'
import GlobalRaiting from '../global-raiting/global-raiting'
import MoviDate from '../movi-date/movi-date'
import MovieGenres from '../movie-genres/movie-genres'
import MoviDescription from '../movi-description/movi-description'
import FilmStars from '../film-stars/film-stars'

export default function MoviesView({ arraiItem, isReadOnly = false }) {
	return (
		<div className="film-card" key={arraiItem.id}>
			<Image link={arraiItem.poster_path} />
			<div style={{ width: '270px' }}>
				<div className="cart-header">
					<h2>{arraiItem.title}</h2>
					<GlobalRaiting globalRating={arraiItem.global_raiting} />
				</div>
				<MoviDate date={arraiItem.release_date} />
				<MovieGenres genresFilmIds={arraiItem.genresFilmId} />
				<MoviDescription
					headTitle={arraiItem.title}
					title={arraiItem.overview}
				/>
				<FilmStars arraiItem={arraiItem} isReadOnly={isReadOnly} />
			</div>
		</div>
	)
}
