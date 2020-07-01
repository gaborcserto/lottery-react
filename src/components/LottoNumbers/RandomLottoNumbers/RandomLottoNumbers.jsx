import React from 'react';
import {Button} from "react-bootstrap";

const randomLottoNumbers = props =>{
	const items = [];

	if(props.numbers) {
		props.numbers.map((number, index) => items.push(<div className="randomNumbers__numbers__item" key={index}>{number}</div>));
	} else {
		for(let i = 0; i < props.type; i++) items.push( <div className="randomNumbers__numbers__item" key={i}>?</div>);
	}

	return (
		<div className="randomNumbers  text-center">
			<div className={`randomNumbers__img type-${props.type}`} />
			<div className="randomNumbers__numbers">
				{items}
			</div>

			<div className="randomNumbers__button">
				<Button variant="lightgreen" onClick={props.clicked}>
					lottó szám generálás
				</Button>
			</div>
		</div>
	)
}

export default randomLottoNumbers;