import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="Card" key={props.id}>
      <button type="button" onClick={props.deleteCardProp}>delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;