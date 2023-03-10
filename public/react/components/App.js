import React, { useState, useEffect } from 'react';

//import { ItemsList } from './ItemsList';
import { ItemsList } from './ItemsList';
import { IndividualItem } from './IndividualItem';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	//const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);
	const [individualItem, setIndividualItem] = useState();

	// async function fetchSauces(){
	// 	try {
	// 		const response = await fetch(`${apiURL}/sauces`);
	// 		const saucesData = await response.json();
			
	// 		setSauces(saucesData);
	// 	} catch (err) {
	// 		console.log("Oh no an error! ", err)
	// 	}
	// }


	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	

	useEffect(() => {

		fetchItems();
	}, []);

	return (
		<main>
			{/* <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<SaucesList sauces={sauces} /> */}
			<h1>Item Store</h1>
			<h2>All items </h2>
			{/* <ItemsList items={items} /> */}
			{!individualItem ? <ItemsList items={items} setIndividualItem={setIndividualItem} /> : <IndividualItem item={individualItem} setIndividualItem={setIndividualItem} />}
		</main>
	)
}
