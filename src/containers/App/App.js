import React from 'react';
import {Container, Col, ListGroup, Row, Tab} from 'react-bootstrap';
import './App.scss';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import NumberGenerator from "../../utils/NumberGenerator";
import RandomLottoNumbers from '../../components/LottoNumbers/RandomLottoNumbers/RandomLottoNumbers'

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
		let randomLottoNumbers = (
			<Row>
				{this.state.RandomLottoNumbersData.map((lotto, index) => {
					let colType = 6;
					if (index === 2) {
						colType = { span: 6, offset: 3 };
					}
					return (
						<Col xs={12} sm={colType} lg={{span: 4, offset: 0 }} key={index}>
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
					<h2>Korábbi nyerőszámok</h2>
					<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
						<Row className="previousLottoNumbers">
							<Col sm={4}>
								<ListGroup>
									<ListGroup.Item action href="#link1">
										Ötös lottó
									</ListGroup.Item>
									<ListGroup.Item action href="#link2">
										Hatos lottó
									</ListGroup.Item>
									<ListGroup.Item action href="#link3">
										Skandináv lottó
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col sm={8}>
								<Tab.Content>
									<Tab.Pane eventKey="#link1">
										A június 27-én kisorsolt nyerőszámok:
									</Tab.Pane>
									<Tab.Pane eventKey="#link2">
										A június 28-án kisorsolt nyerőszámok:
									</Tab.Pane>
									<Tab.Pane eventKey="#link3">
										A június 24-én kisorsolt nyerőszámok:
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
					<h2>Lottó számok generálása</h2>
					{randomLottoNumbers}
				</div>
				<Footer />
			</Container>
		);
	}
}

export default App;
