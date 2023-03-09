import React, { useState } from 'react';

import apiURL from '../api';


export const Item = (props) => {



  //rendering the item's details in a component
  async function fetchRequest () {
    try {
      const res = await fetch(apiURL + "/item/" + props.item.id);
      const data = await res.json();
      props.setIndividualItem(data);
      console.log(props.item)
    } catch (error) {
      console.log(error)
    }
  }

  return <>
    <h3 onClick = {fetchRequest}>{props.item.title}</h3>

  </>
} 
