import React from 'react';
import Table from '../Table'
import { Col, Row } from 'react-bootstrap';
import Diagram from '../Diagram/Diagram';

const statistic = ({data, type}) => {
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

			<Diagram data={restructuringData(data)} />
		</React.Fragment>
	)
}

export default statistic;