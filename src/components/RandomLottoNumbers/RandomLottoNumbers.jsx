import React from 'react';
import { Badge } from 'react-bootstrap';

const randomLottoNumbers = props =>{
	return (
		<div className="randomNumbers__numbers">
			{props.numbers && props.numbers.map((number, index) => {
				return ( <Badge pill variant="light" key={index}>{number}</Badge>)
			})}
		</div>
	)
}

export default randomLottoNumbers;