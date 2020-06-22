import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import NumberGenerator from '../../utils/NumberGenerator';

class lottoNumbersGenerator extends React.Component {
	state = {
		numbers: ''
	}

	clickHandler = (type, highest) => {
		const generatedNumbers = new NumberGenerator(type, highest);
		let lottoNumbers = generatedNumbers.generate();
		console.log(lottoNumbers);

		this.setState({numbers: lottoNumbers});
	}

	/*renderNumbers = () => {
		const numbersArr = this.state.numbers;
		const numbers = numbersArr.map((number, index) => <Badge variant="secondary" key={index}>{number}</Badge>);

		return (
			<div>
				{numbers}
			</div>
		);
	}*/

	render() {
		return (
			<div>
				<Button onClick={() => this.clickHandler(this.props.type, this.props.highest)}>Click</Button>
				{/*this.renderNumbers*/}
			</div>
		);
	}
}

export default lottoNumbersGenerator;