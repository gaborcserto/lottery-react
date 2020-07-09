import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './App.scss';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
//import NumberGenerator from '../../utils/NumberGenerator';
import RandomLottoNumbers from '../../components/RandomLottoNumbers/RandomLottoNumbers';
import LatestLottoNumbers from '../../components/LatestLottoNumbers/LatestLottoNumbers';


class App extends React.Component {
	state = {
		LottoNumbersData: [
			{ type: 5, highest: 90, latestNumbers: '' },
			{ type: 6, highest: 45, latestNumbers: '' },
			{ type: 7, highest: 35, latestNumbers: '' }
		]
	}

	render() {
		return (
			<Container fluid="md" className="main">
				<Header />
				<div className="main__content">
					<LatestLottoNumbers />
					<h2>Lottó számok generálása</h2>
					<Row className="randomNumbers">
						<Col xs={12} sm={6} lg={{span: 4, offset: 0 }}>
							<RandomLottoNumbers highest="90" type="5" />
						</Col>
						<Col xs={12} sm={{span: 6, offset: 3}} lg={{span: 4, offset: 0 }}>
							<RandomLottoNumbers highest="45" type="6" />
						</Col>
						<Col xs={12} sm={6} lg={{span: 4, offset: 0 }}>
							<RandomLottoNumbers highest="35" type="7" />
						</Col>
					</Row>
				</div>
				<Footer />
			</Container>
		);
	}
}

export default App;
