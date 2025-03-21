export default class MoviApiCommunication {
	#apiKey =
		'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjBhMTdkZWVhNTcxNTMyNDMwZWYyNWFjOTViNmY5MyIsIm5iZiI6MTc0MTQzMzgyOS40Nywic3ViIjoiNjdjYzJiZTU3Yzk2N2UwNGQ1NWJhYWUyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.l4zTKmv1SBMcHv9mZhYBnIGMdYj_o0a00-BcdiVk-ic'

	extractNeedItems = (fullArray) => {
		if (fullArray === undefined) return []

		return fullArray.reduce((acc, currentValue) => {
			acc.push({
				id: currentValue.id,
				overview: currentValue.overview,
				title: currentValue.title,
				release_date: currentValue.release_date,
				poster_path: `https://image.tmdb.org/t/p/original${currentValue.poster_path}`,
				global_raiting: currentValue.vote_average,
				genresFilmId: currentValue.genre_ids,
				personal_raiting: null,
			})
			return acc
		}, [])
	}

	async getMoviesByKeyWord(query = 'return', page = 1) {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: this.#apiKey,
			},
		}

		const data = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
			options,
		)

		const jsonData = await data.json()

		if (jsonData.success === false) {
			throw new Error(jsonData.status_message)
		}

		const FullDescriptionMovies = jsonData.results

		const finalArrayOfMovies = this.extractNeedItems(FullDescriptionMovies)

		finalArrayOfMovies.totalResults = jsonData.total_results

		return finalArrayOfMovies
	}

	async getAllGenres() {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: this.#apiKey,
			},
		}

		const genresArrayJson = await fetch(
			`https://api.themoviedb.org/3/genre/movie/list`,
			options,
		)

		const genresArray = await genresArrayJson.json()

		return genresArray.genres
	}
}
