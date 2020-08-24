import React from 'react';
import Table from '../Table'
import Diagram from '../Diagram/Diagram';
import NumberStatistics from '../Statistic/NumberStatistics';
import { Col, Row } from 'react-bootstrap';

const statistic = ({data, type, lotteryData}) => {
	let size;

	const restructuringData = data => {
		const numbersData = [];
		Object.entries(data).forEach(([number, data]) =>
			numbersData.push({number: number, drawCount: data.drawCount, ratio: data.ratio})
		);

		return numbersData.filter(value => value.number > 0);
	};

	const desc = restructuringData(data).sort((a, b) => {
		return new Date(b.drawCount) - new Date(a.drawCount);
	});

	const asc = restructuringData(data).sort((a, b) => {
		return new Date(a.drawCount) - new Date(b.drawCount);
	});

	switch (type) {
		case 7 :
			size = 35;
			break;
		case 6 :
			size = 45;
			break;
		case 5 :
			size = 90
			break;
		default :
			size = 90
			break;
	}

	// count numbers on positions
	const count = {};
	const newArray = lotteryData.map(value => { return value.numbers; });

	const counter = (data) => {
		for (let colIndex = 0; colIndex < data[0].length; ++colIndex) {
			let columnArr = data.map( row => {	return row[colIndex];});

			count[colIndex] = {};
			columnArr.forEach( el => {
				count[colIndex][el] = count[colIndex][el] ? count[colIndex][el] + 1 : 1
			});

			count[colIndex] = sorting(count[colIndex]);
		}

		return count;
	}

	const sorting = data => {
		let entries = Object.entries(data);
		return entries.sort((a, b) => b[1] - a[1]);
	}

	const result = counter(newArray);

	return (
		<React.Fragment>
			<div>
				<Row className="latestNumbers">
					<Col sm={12} md={6}>
						<h2>Leggyakrabban kihúzott számok</h2>
						<Table data={desc} number={type}/>
					</Col>
					<Col sm={12} md={6}>
						<h2>Legritkábban kihúzott számok</h2>
						<Table data={asc} number={type}/>
					</Col>
				</Row>
			</div>

			<Diagram data={restructuringData(data)} size={size} />

			<NumberStatistics  data={result[0]} position={1}/>
			<NumberStatistics  data={result[1]} position={2}/>
			<NumberStatistics  data={result[2]} position={3}/>
			<NumberStatistics  data={result[3]} position={4}/>
			<NumberStatistics  data={result[4]} position={5}/>
			{ type>5 ? <NumberStatistics  data={result[5]} position={6}/> : null }
			{ type>6 ? <NumberStatistics  data={result[6]} position={7}/> : null }
		</React.Fragment>
	)
}

export default statistic;