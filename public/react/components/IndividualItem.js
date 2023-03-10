import React from 'react';

export function IndividualItem (props) {
    return (
      <>
        <h3 id="items">{props.item.title}</h3>
        <h4 id="items"> Price: £{props.item.price}</h4>
        <h4 id="items">Item Description: {props.item.description}</h4>
        <h4 id="items">Item Category: {props.item.category}</h4>
        <img id="image" src={props.item.image} alt={props.item.title} />
        <button id="button" onClick={() => props.setIndividualItem()}>Back to Wiki List</button>
      </>
    );
  }
  
