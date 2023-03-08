import React from 'react';

export const Item = (props) => {

  return <>
    <h3>{props.item.title}</h3>
    <h3>£{props.item.price}</h3>
    <h3>{props.item.description}</h3>
    <h3>{props.item.category}</h3>
    <img src={props.item.image} alt={props.item.title} />
  </>
} 
