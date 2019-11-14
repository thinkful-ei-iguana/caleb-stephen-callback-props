import React from 'react';
import Card from './Card';
import './List.css';

const List = (props) => {
  return (
    <section className="List" key={props.id}>
      <header className="List-header">
          <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) => 
          <Card 
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            deleteCardProp={props.deleteCardProp}
          />  
        )}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>  
    </section>
  );
};

export default List;