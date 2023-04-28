import React from 'react';
import Table from '../common/table'
import Diagram from '../diagram/diagram';
import NumberStatistics from './numberStatistics';
import {Col, Row} from 'react-bootstrap';

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
  const newArray = lotteryData.map(value => {
    return value.numbers;
  });

  const counter = (data) => {
    for (let colIndex = 0; colIndex < data[0].length; ++colIndex) {
      let columnArr = data.map(row => {
        return row[colIndex];
      });

      count[colIndex] = {};
      columnArr.forEach(el => {
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
      <>
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

        <Diagram data={restructuringData(data)} size={size}/>
        {type > 6 ? <h2>Gépi húzás</h2> : <h2>Kézi húzás</h2>}
        <NumberStatistics data={result[0]} position={1}/>
        <NumberStatistics data={result[1]} position={2}/>
        <NumberStatistics data={result[2]} position={3}/>
        <NumberStatistics data={result[3]} position={4}/>
        <NumberStatistics data={result[4]} position={5}/>
        {type > 5 ? <NumberStatistics data={result[5]} position={6}/> : null}
        {type > 6 ? <NumberStatistics data={result[6]} position={7}/> : null}
        {type > 6 ? <h2>Kézi húzás</h2> : null}
        {type > 6 ? <NumberStatistics data={result[7]} position={1}/> : null}
        {type > 6 ? <NumberStatistics data={result[8]} position={2}/> : null}
        {type > 6 ? <NumberStatistics data={result[9]} position={3}/> : null}
        {type > 6 ? <NumberStatistics data={result[10]} position={4}/> : null}
        {type > 6 ? <NumberStatistics data={result[11]} position={5}/> : null}
        {type > 6 ? <NumberStatistics data={result[12]} position={6}/> : null}
        {type > 6 ? <NumberStatistics data={result[13]} position={7}/> : null}
      </>
  )
}

export default statistic;