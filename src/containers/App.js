import React, { useEffect, useState, Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Loading from '../components/Loading/Loading';
import fetchingData from '../hooks/FetchingData';

import HomePage from '../pages/HomePage';
import LottoFivePage from '../pages/LottoFivePage';
import LottoSixPage from '../pages/LottoSixPage';
import LottoSevenPage from '../pages/LottoSevenPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const App = () => {

	const [ lottoFiveAllData, setLottoFiveAllData ] = useState(null);
	const [ lottoSixAllData, setLottoSixAllData ] = useState(null);
	const [ lottoSevenAllData, setLottoSevenAllData ] = useState(null);

	const lottoFive = fetchingData({
		queryType: 'otos'
	});

	const lottoSix = fetchingData({
		queryType: 'hatos'
	});

	const lottoSeven = fetchingData({
		queryType: 'skandi'
	});

	useEffect(() => {
		if (lottoFive.response !== null) {
			setLottoFiveAllData(lottoFive.response);
		}
		if (lottoSix.response !== null) {
			setLottoSixAllData(lottoSix.response);
		}
		if (lottoSeven.response !== null) {
			setLottoSevenAllData(lottoSeven.response);
		}
	}, [lottoFive.response, lottoSix.response, lottoSeven.response]);

	return (
		<React.Fragment>
			<Header/>
			<Container className="main">
				<Suspense fallback={<Loading />}/>
				<Switch>
					<Route path="/otos">
						<LottoFivePage data={lottoFiveAllData}/>
					</Route>
					<Route path="/hatos">
						<LottoSixPage data={lottoSixAllData}/>
					</Route>
					<Route path="/hetes">
						<LottoSevenPage data={lottoSevenAllData}/>
					</Route>
					<Route exact path="/">
						<HomePage
							dataFive={lottoFiveAllData}
							dataSix={lottoSixAllData}
							dataSeven={lottoSevenAllData}/>
					</Route>
					<Route component={ErrorPage} />
				</Switch>
				<Footer/>
			</Container>
		</React.Fragment>
	);
}

export default App;