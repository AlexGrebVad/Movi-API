import React from 'react'
import MoviesView from '../movies-view/movies-view'
import Spinner from '../spinner/spinner'
import InputField from '../input-area/input-area'
import Error from '../error-msg/error-msg'
import PaginationMovi from '../pagination/pagination'
import GenresContext from '../../services/context-for-genres'

export default function TabOne({
	genresArray,
	arrayOfFilms,
	loading,
	error,
	page,
	totalResults,
	changeImputValue,
	changePages,
	movieNotFound,
}) {
	return (
		<GenresContext.Provider value={genresArray}>
			<div className="main-block-wrapper">
				{!error && <InputField changeImputValue={changeImputValue} />}

				{!movieNotFound && (
					<div>
						<p className="film-not-found-paragraph">
							Unfortunately, the movie was not found for this query.😞
						</p>
					</div>
				)}
				<div className="main-block">
					{loading && <Spinner />}
					{error && <Error />}
					{!loading &&
						!error &&
						arrayOfFilms.map((elem) => {
							return <MoviesView arraiItem={elem} key={elem.id} />
						})}
					{!loading && !error && (
						<PaginationMovi
							style={{ display: 'flex', justifyContent: 'center' }}
							current={page}
							total={totalResults}
							pageSize={20}
							onChange={changePages}
						/>
					)}
				</div>
			</div>
		</GenresContext.Provider>
	)
}
