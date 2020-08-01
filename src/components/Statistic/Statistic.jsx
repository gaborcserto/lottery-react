import React from 'react';
import Table from '../Table'
import {Col, Row} from 'react-bootstrap';

const statistic = ({data, type}) => {
	const restructuringData = data => {
		const numbersData = [];
		Object.entries(data).map(([number, data]) =>
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

	return (
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
	)
}

export default statistic;