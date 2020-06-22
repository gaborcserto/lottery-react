import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Table from '../TableComponent/TableComponent.jsx';

class App extends React.Component {
	render() {
		return (
			<Container fluid="md" className="main">
				<Header/>
				<div className="main__content">
					<h1>Content</h1>
					<Table/>
				</div>
				<Footer/>
			</Container>
		);
	}
}

export default App;
