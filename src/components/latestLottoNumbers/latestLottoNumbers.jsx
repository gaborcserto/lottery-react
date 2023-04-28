import React from 'react';
import Loading from '../common/loading';
import Box from '../common/box';

const latestLottoNumbers = ({data, type}) => {
  const items = [];
  let text = null;
  let content = <Loading/>;

  const setText = (date, week) => {
    return (
        <>
          <h5>A {week}. héten kisorsolt nyerőszámok:</h5>
          <small>{date}</small>
        </>
    );
  }

  if (data) {
    text = setText(data.date, data.week);
    data.numbers.map((number, index) => items.push(<div className="box__numbers__item" key={index}>{number}</div>));

    content = (
        <Box type={type} text={text} items={items}/>
    )
  }

  return content;
}

export default latestLottoNumbers;