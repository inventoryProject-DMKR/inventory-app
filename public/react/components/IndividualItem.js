import React from 'react';

export function IndividualItem (props) {
    return (
      <>
        <h3>{props.item.title}</h3>
        <h4> Price: £{props.item.price}</h4>
        <h4>Item Description: {props.item.description}</h4>
        <h4>Item Category: {props.item.category}</h4>
        <img id="image" src={props.item.image} alt={props.item.title} />
        <button id="button" onClick={() => props.setIndividualItem()}>Back to Wiki List</button>
      </>
    );
  }
  
