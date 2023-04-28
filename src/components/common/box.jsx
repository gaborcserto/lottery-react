import React from 'react';

const box = props => {
  return (
      <div className="box  text-center">
        <div className={`box__img type-${props.type}`}/>
        {props.text}
        <div className="box__numbers">
          {props.items}
        </div>
        {props.button ? <div className="box__button">{props.button}</div> : null}
      </div>
  )
}

export default box;