import React from 'react';
import {Col, Row} from "react-bootstrap";
import NumberStatisticsTable from './NumberStatisticsTable';

const numberStatistics = ({data, position}) => {

	const reverseData = data.slice().reverse();

	return (
		<Row className="latestNumbers">
			<Col sm={12} md={6}>
				<h4>{position}. pozícióban leggyakrabban kihúzott számok</h4>
				<NumberStatisticsTable data={data} number={5} />
			</Col>
			<Col sm={12} md={6}>
				<h4>{position}. pozícióban legritkábban kihúzott számok</h4>
				<NumberStatisticsTable data={reverseData} number={5} />
			</Col>
		</Row>
	);
}

export default numberStatistics;