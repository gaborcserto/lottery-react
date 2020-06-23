import React from 'react';
import {Button, Container} from 'react-bootstrap';
import './App.scss';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import DataTable from '../DataTable/DataTable.jsx';
import NumberGenerator from "../../utils/NumberGenerator";
import LottoNumbersRender from '../LottoNumbersRender/LottoNumbersRender'

class App extends React.Component {
	state = {
		lottoData: [
			{ type: 5, highest: 90, numbers: '' },
			{ type: 6, highest: 45, numbers: '' },
			{ type: 7, highest: 35, numbers: '' }
		]
	}

	clickHandler = (type, highest) => {
		const generatedNumbers = new NumberGenerator(type, highest);

		const lottoDataIndex = this.state.lottoData.findIndex(l => {
			return l.type === type;
		});

		const lotto = {
			...this.state.lottoData[lottoDataIndex]
		};

		lotto.numbers = generatedNumbers.generate();

		const lottoData = [...this.state.lottoData];
		lottoData[lottoDataIndex] = lotto;

		this.setState({ lottoData: lottoData })
	}

	render() {
		let lottoRandomNumbers = (
			<div>
				{this.state.lottoData.map((lotto, index) => {
					return (
						<div key={index} className="row randomNumbers">
							<Button onClick={() => this.clickHandler(lotto.type, lotto.highest)}>Click</Button>
							<LottoNumbersRender numbers={lotto.numbers} />
						</div>
					)
				})}
			</div>
		);

		return (
			<Container fluid="md" className="main">
				<Header />
				<div className="main__content">
					<h1>Content</h1>
					<DataTable />
					{lottoRandomNumbers}
				</div>
				<Footer />
			</Container>
		);
	}
}

export default App;
