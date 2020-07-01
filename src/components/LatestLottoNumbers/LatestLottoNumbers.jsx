import React from 'react';
import {Col, ListGroup, Row, Tab} from "react-bootstrap";

const latestLottoNumbers = props =>{
	return (
		<React.Fragment>
			<h2>Korábbi nyerőszámok</h2>
			<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
				<Row className="latestLottoNumbers">
					<Col sm={4}>
						<ListGroup>
							<ListGroup.Item action href="#link1">
								Ötös lottó
							</ListGroup.Item>
							<ListGroup.Item action href="#link2">
								Hatos lottó
							</ListGroup.Item>
							<ListGroup.Item action href="#link3">
								Skandináv lottó
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col sm={8}>
						<Tab.Content>
							<Tab.Pane eventKey="#link1">
								A június 27-én kisorsolt nyerőszámok:
							</Tab.Pane>
							<Tab.Pane eventKey="#link2">
								A június 28-án kisorsolt nyerőszámok:
							</Tab.Pane>
							<Tab.Pane eventKey="#link3">
								A június 24-én kisorsolt nyerőszámok:
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</React.Fragment>
	)
}

export default latestLottoNumbers;