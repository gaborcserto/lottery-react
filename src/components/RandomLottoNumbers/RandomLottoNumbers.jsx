import React from 'react';
import {Col} from "react-bootstrap";
import RandomLottoNumbersList from './RandomLottoNumbersList/RandomLottoNumbersList.jsx'

const randomLottoNumbers = props => props.randomLottoNumbersData.map((lotto, index) => {
	let colType = 6;

	if (index === 2) {
		colType = { span: 6, offset: 3 };
	}

	return (
		<Col xs={12} sm={colType} lg={{span: 4, offset: 0 }} key={index}>
			<RandomLottoNumbersList
				numbers={lotto.numbers}
				type={lotto.type}
				click={() => props.clicked(lotto.type, lotto.highest)}
			/>
		</Col>
	)
});

export default randomLottoNumbers;