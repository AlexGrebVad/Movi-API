import React from 'react'
import { debounce } from 'lodash'
import { Tabs } from 'antd'

import MoviApiCommunication from '../../services/movi-api-connection'

import 'antd/dist/reset.css'
import './app.css'
import TabOne from '../tab-one/tab-one'
import TabTwo from '../tab-two/tab-two'

export default class App extends React.Component {
	MoviApiCommunication = new MoviApiCommunication()

	constructor(props) {
		super(props)
		this.state = {
			arrayOfFilms: [null],
			loading: true,
			error: false,
			inputValue: 'return',
			page: 1,
			totalResults: 0,
			genresArray: null,
		}
		this.debouncedUpdateFilms = debounce((filmName, page) => {
			this.updateFilms(filmName, page)
		}, 500)
	}

	componentDidMount() {
		const { inputValue, page } = this.state
		this.loadGenres()
			.then((arr) => {
				this.setState({ genresArray: arr })
			})
			.then(this.updateFilms(inputValue, page))
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.inputValue !== this.state.inputValue ||
			prevState.page !== this.state.page
		) {
			this.debouncedUpdateFilms(this.state.inputValue, this.state.page)
		}
	}

	componentWillUnmount() {
		this.debouncedUpdateFilms.cancel()
	}

	loadGenres = () => {
		return this.MoviApiCommunication.getAllGenres()
	}

	onMoviesLoaded = (arrayOfFilms) => {
		const arrayOfServerFilms = [...arrayOfFilms]

		const personalRatedFilms = Object.values(localStorage).map((value) => {
			return JSON.parse(value)
		})

		function mergeArrays(arr1, arr2) {
			const map = Object.fromEntries(arr2.map((item) => [item.id, item]))

			return arr1.map((item) => map[item.id] || item)
		}

		const comparedArray = mergeArrays(arrayOfServerFilms, personalRatedFilms)

		this.setState({
			arrayOfFilms: comparedArray,
			loading: false,
			error: false,
			totalResults: arrayOfFilms.totalResults,
		})
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
		})
		throw err
	}

	updateFilms = (filmName, page) => {
		this.MoviApiCommunication.getMoviesByKeyWord(filmName, page)
			.then(this.onMoviesLoaded)
			.catch(this.onError)
	}

	changeImputValue = (event) => {
		const newValue = event.target.value

		this.setState(
			{
				inputValue: newValue,
				loading: true,
			},
			() => {
				this.debouncedUpdateFilms(newValue)
			},
		)
	}

	changePages = (page) => {
		this.setState({ page, loading: true })
	}

	render() {
		const { arrayOfFilms, loading, error, page, totalResults, genresArray } =
			this.state
		const movieNotFound = arrayOfFilms.length

		const tabItems = [
			{
				key: '1',
				label: 'Search',
				children: (
					<TabOne
						genresArray={genresArray}
						arrayOfFilms={arrayOfFilms}
						loading={loading}
						error={error}
						page={page}
						totalResults={totalResults}
						changeImputValue={this.changeImputValue}
						changePages={this.changePages}
						movieNotFound={movieNotFound}
					/>
				),
			},
			{
				key: '2',
				label: 'Rated',
				children: <TabTwo genresArray={genresArray} />,
			},
		]

		return (
			<Tabs
				destroyInactiveTabPane
				defaultActiveKey="1"
				className="tabs custom-tabs"
				items={tabItems}
			/>
		)
	}
}
