import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import DataTable from '../DataTable/DataTable.jsx';
import LottoNumbersGenerator from '../LottoNumbersGenerator/LottoNumbersGenerator';

class App extends React.Component {
	state = {
		lottoFiveNumbers: ''
	}

	render() {
		return (
			<Container fluid="md" className="main">
				<Header />
				<div className="main__content">
					<h1>Content</h1>
					<DataTable />
					<LottoNumbersGenerator type="5" highest="90" />
				</div>
				<Footer />
			</Container>
		);
	}
}

export default App;
