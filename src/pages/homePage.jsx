import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Loading from '../components/common/loading';
import LatestLottoNumbers from '../components/latestLottoNumbers/latestLottoNumbers';
import RandomLottoNumbers from '../components/randomLottoNumbers/randomLottoNumbers';

const homePage = ({dataFive, dataSix, dataSeven}) => {
  if (dataFive && dataSeven && dataSix) {
    return (
        <div className="main__content">
          <h2>Korábbi nyerőszámok</h2>
          <Row className="latestNumbers">
            <Col xs={12} sm={6} lg={{span: 4, offset: 0}}>
              <LatestLottoNumbers data={dataFive.drawings[0]} type="5"/>
            </Col>
            <Col xs={12} sm={6} lg={{span: 4, offset: 0}}>
              <LatestLottoNumbers data={dataSix.drawings[0]} type="6"/>
            </Col>
            <Col xs={12} sm={{span: 6, offset: 3}} lg={{span: 4, offset: 0}}>
              <LatestLottoNumbers data={dataSeven.drawings[0]} type="7"/>
            </Col>
          </Row>
          <h2>Lottó számok generálása</h2>
          <Row className="randomNumbers">
            <Col xs={12} sm={6} lg={{span: 4, offset: 0}}>
              <RandomLottoNumbers highest="90" type="5"/>
            </Col>
            <Col xs={12} sm={6} lg={{span: 4, offset: 0}}>
              <RandomLottoNumbers highest="45" type="6"/>
            </Col>
            <Col xs={12} sm={{span: 6, offset: 3}} lg={{span: 4, offset: 0}}>
              <RandomLottoNumbers highest="35" type="7"/>
            </Col>
          </Row>
        </div>
    )
  } else {
    return <Loading/>
  }
}

export default homePage;