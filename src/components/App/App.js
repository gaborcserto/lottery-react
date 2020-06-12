import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';

import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

class App extends React.Component {
	render() {
		return (
			<Container fluid="md" className="main">
				<Header/>
				<div className="main__content">
					<h1>Content</h1>
				</div>
				<Footer/>
			</Container>
		);
	}
}

export default App;
