import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';

const ViewRemedy = (props) => {
	const [remedy, setRemedy] = useState([]);

	const createRemedy = (remedy) => {
		const JSX = [
			<h3>{remedy.name}</h3>,
			<h6>{remedy.body_part}</h6>,
			<p className="text-primary"><b>Ailment: </b> {remedy.ailment}</p>,
			<p className="text-primary"><b>Description: </b> {remedy.description}</p>
		];

		return JSX;
	}

	useEffect(() => {
		axios.get(`http://localhost:${config.server_port}/api/users/get_remedy/${props.name}`)
			.then(res => {
				const remedy = res.data;

				setRemedy(remedy);
			})
	}, []);

	return (
		<div style={{ backgroundColor: "white" }} className="glossary-item">
			{createRemedy(remedy)}
		</div>
	);

};
export default ViewRemedy;
