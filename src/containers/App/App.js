import React from 'react';
import {Container, Row} from 'react-bootstrap';
import './App.scss';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import NumberGenerator from '../../utils/NumberGenerator';
import RandomLottoNumbers from '../../components/RandomLottoNumbers/RandomLottoNumbers';
import LatestLottoNumbers from '../../components/LatestLottoNumbers/LatestLottoNumbers';

class App extends React.Component {
	state = {
		RandomLottoNumbersData: [
			{ type: 5, highest: 90, numbers: '' },
			{ type: 6, highest: 45, numbers: '' },
			{ type: 7, highest: 35, numbers: '' }
		],
		LatestLottoNumbersData: [
			{ type: 5, latestNumbers: '' },
			{ type: 6, latestNumbers: '' },
			{ type: 7, latestNumbers: '' }
		]
	}

	clickHandler = (type, highest) => {
		const generatedNumbers = new NumberGenerator(type, highest);

		const lottoDataIndex = this.state.RandomLottoNumbersData.findIndex(l => {
			return l.type === type;
		});

		const lotto = {
			...this.state.RandomLottoNumbersData[lottoDataIndex]
		};

		lotto.numbers = generatedNumbers.generate();

		const RandomLottoNumbersData = [...this.state.RandomLottoNumbersData];
		RandomLottoNumbersData[lottoDataIndex] = lotto;

		this.setState({ RandomLottoNumbersData: RandomLottoNumbersData })
	}

	render() {
		let randomLottoNumbers = <RandomLottoNumbers
					randomLottoNumbersData={this.state.RandomLottoNumbersData}
					clicked={this.clickHandler} />;

		return (
			<Container fluid="md" className="main">
				<Header />
				<div className="main__content">
					<LatestLottoNumbers />
					<h2>Lottó számok generálása</h2>
					<Row className="randomNumbers">{randomLottoNumbers}</Row>
				</div>
				<Footer />
			</Container>
		);
	}
}

export default App;
