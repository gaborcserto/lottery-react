import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import Box from '../common/box';

const RandomLottoNumbers = props => {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const items = [];

  const getRandomNumbers = () => {
    let numbers = [];

    for (let i = 0; i < props.type; i++) {
      let add = true;
      let randomNumber = Math.floor(Math.random() * props.highest) + 1;

      for (let y = 0; y < props.highest; y++) {
        if (numbers[y] === randomNumber) {
          add = false;
        }
      }

      if (add) {
        numbers.push(randomNumber);
      } else {
        i--;
      }
    }

    numbers.sort((a, b) => a - b);

    return numbers;
  }

  const clickHandler = () => {
    setRandomNumbers(getRandomNumbers);
  }

  if (randomNumbers.length > 0) {
    randomNumbers.map((number, index) => items.push(<div className="box__numbers__item"
                                                         key={index}>{number}</div>));
  } else {
    for (let i = 0; i < props.type; i++) items.push(<div className="box__numbers__item" key={i}>?</div>);
  }

  const button = (
      <Button variant="lightgreen" onClick={clickHandler}>
        lottó szám generálás
      </Button>
  );

  return <Box type={props.type} items={items} button={button}/>
}

export default RandomLottoNumbers;