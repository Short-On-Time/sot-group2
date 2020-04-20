import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
import ListGroup from 'react-bootstrap/ListGroup'
import PremiumWarning from './PremiumWarning'
import Error from './Error'

const ViewRemedy = (props) => {
	const [isForbidden, setIsForbidden] = useState(false);
	const [remedy, setRemedy] = useState([]);

	const ingredients = (remedy) => {
		let ingredientsJSX = [];
		if(remedy.ingredients){
			const numIngredients = remedy.ingredients.length
			for(let i=0; i<numIngredients; ++i){
				ingredientsJSX.push(
					<ListGroup.Item>{remedy.amounts[i]} {remedy.units[i]} <b>{remedy.ingredients[i]}</b></ListGroup.Item>
				)
			}
		}
		return <ListGroup>{ingredientsJSX}</ListGroup>;
	}

	const createRemedy = (remedy) => {
		if(isForbidden){
			return <PremiumWarning return="/remedies" page={remedy.name}/>;
		}
		const JSX = [
			<h3>{remedy.name}</h3>,
			<h6>{remedy.body_part}</h6>,
			<p><b>Ailment: </b> {remedy.ailment_type}</p>,
			<p><b>Description: </b> {remedy.description}</p>,
			<h5>Ingredients: </h5>
		];

		JSX.push(ingredients(remedy));

		return JSX;
	}

	useEffect(() => {
		axios.get(`http://localhost:${config.server_port}/api/users/get_remedy_full/${props.name}`)
			.then(res => {
				const remedy = res.data;

				setRemedy(remedy);
			})
			.catch(function (e) {
				console.log(e)
				//TODO check this actually works once authentication is working
				if(e.response.status === 403){
					setIsForbidden(true);
				}
				else if (e) {
					return <Error error={e} returnURL="/" />
				}
			});
	}, []);

	return (
		<div style={{ backgroundColor: "white" }} className="glossary-item">
			{createRemedy(remedy)}
		</div>
	);

};
export default ViewRemedy;
