import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './App.scss';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import NumberGenerator from "../../utils/NumberGenerator";
import RandomLottoNumbers from '../RandomLottoNumbers/RandomLottoNumbers'

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

	lítestLottoNumbersHandler = (type) => {

	}

	render() {
		let randomLottoNumbers = (
			<Row>
				{this.state.RandomLottoNumbersData.map((lotto, index) => {
					let colMd = 6;
					if (index === 2) {
						colMd = { span: 6, offset: 3 };
					}
					return (
						<Col sm={12} md={colMd} lg={{span: 4, offset: 0 }} key={index}>
							<RandomLottoNumbers
								numbers={lotto.numbers}
								type={lotto.type}
								clicked={() => this.clickHandler(lotto.type, lotto.highest)}
							/>
						</Col>
					)
				})}
			</Row>
		);

		return (
			<Container fluid="md" className="main">
				<Header />
				<div className="main__content">
					<h2>Utoljára kisorsolt nyerőszámok</h2>
					<h2>Lottó számok generálása</h2>
					{randomLottoNumbers}
				</div>
				<Footer />
			</Container>
		);
	}
}

export default App;
