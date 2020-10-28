import React, { useState } from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import { FaSortNumericUp, FaSortNumericDown } from 'react-icons/fa';
import NumberStatisticsTable from './NumberStatisticsTable';

const NumberStatistics = ({data, position}) => {
	const [toggleOn , setToggleOn] = useState(false);
	const reverseData = data.slice().reverse();

	const handleClick = e => {
		e.preventDefault();
		setToggleOn(!toggleOn);
	}

	return (
		<Row className="latestNumbers">
			<Col sm={12} md={6}>
				<h4>
					{position}. pozícióban kihúzott számok
					<Button
						className="btn-lightgreen"
						onClick={handleClick}>
						{toggleOn ? <FaSortNumericUp /> : <FaSortNumericDown /> }
					</Button>
				</h4>
				{toggleOn ?<NumberStatisticsTable data={reverseData} /> : <NumberStatisticsTable data={data} />}
			</Col>
		</Row>
	);
}

export default NumberStatistics;