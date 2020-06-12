import React from 'react';
import {Container} from '@material-ui/core';
import './App.scss';

import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

class App extends React.Component {
	render() {
		return (
			<Container maxWidth="m">
				<Header/>
				<div id="content">

				</div>
				<Footer/>
			</Container>
		);
	}
}

export default App;
