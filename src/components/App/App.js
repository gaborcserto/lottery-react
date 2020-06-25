import React from 'react';
import {Button, Badge, Container, Row, Col} from 'react-bootstrap';
import './App.scss';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import DataTable from '../DataTable/DataTable.jsx';
import NumberGenerator from "../../utils/NumberGenerator";
import RandomLottoNumbers from '../RandomLottoNumbers/RandomLottoNumbers'

class App extends React.Component {
	state = {
		RandomLottoNumbersData: [
			{ type: 5, highest: 90, numbers: '' },
			{ type: 6, highest: 45, numbers: '' },
			{ type: 7, highest: 35, numbers: '' }
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
		let randomLottoNumbers = (
			<Row>
				{this.state.RandomLottoNumbersData.map((lotto, index) => {
					return (
						<Col key={index} className="randomNumbers  text-center">
							<Button variant="outline-dark" onClick={() => this.clickHandler(lotto.type, lotto.highest)}>
								<Badge variant="dark">{lotto.type}</Badge> szám generálása
							</Button>
							<RandomLottoNumbers numbers={lotto.numbers} />
						</Col>
					)
				})}
			</Row>
		);

		return (
			<Container fluid="md" className="main">
				<Header />
				<div className="main__content">
					<h1>Content</h1>
					<DataTable />
					{randomLottoNumbers}
				</div>
				<Footer />
			</Container>
		);
	}
}

export default App;
