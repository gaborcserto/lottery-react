import React from 'react';
import { Badge } from 'react-bootstrap';

const lottoNumbersRender = props =>{
	return (
		<div>
			{props.numbers && props.numbers.map((number, index) => {
				return ( <Badge variant="secondary" key={index}>{number}</Badge>)
			})}
		</div>
	)
}

export default lottoNumbersRender;