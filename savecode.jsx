import React from 'react'

import Image from '../Image/image'
import MoviApiCommunication from '../../services/movi-api-connection'
import MoviDate from '../movi-date/movi-date'
import MovieGenres from '../movie-genres/movie-genres'
import MoviDescription from '../movi-description/movi-description'
import 'antd/dist/reset.css' // Подключение стилей
import './app.css'

export default class App extends React.Component {
	MoviApiCommunication = new MoviApiCommunication()

	constructor(props) {
		super(props)
		this.state = {
			arrayOfFilms: [],
			loading: true,
			error: false,
		}

		this.updateFilms()
	}

	onMoviesLoaded = (arrayOfFilms) => {
		this.setState({
			arrayOfFilms,
			loading: false,
			error: false,
		})
	}

	updateFilms = () => {
		// const { arrayOfFilms } = this.state
		this.MoviApiCommunication.getMoviesByKeyWord().then(this.onMoviesLoaded)
	}

	render() {
		const { arrayOfFilms, loading } = this.state
		return (
			<div className="main-block">
				{arrayOfFilms.map((elem) => {
					return (
						<div className="film-card" key={elem.id}>
							<Image link={elem.poster_path} />
							<div>
								<h2>{elem.title}</h2>
								<MoviDate date={elem.release_date} />
								<MovieGenres />
								<MoviDescription headTitle={elem.title} title={elem.overview} />
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

function MoviesView([arrayOfFilms]) {}
