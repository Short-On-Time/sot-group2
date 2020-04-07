import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';
import Card from 'react-bootstrap/Card';

const ViewGlossaryItem = (props) => {
	const [glossaryItem, setGlossaryItem] = useState({});

	const createGlossaryItem = (item) => {
		const JSX = [
			<h3>{item.title}</h3>,
			<Card className="text-justify" style={{ width: 'auto' }}>
				<Card.Body>
					<Card.Text>
						<b>Usage</b>: {item.usage} <br /><br />
						<b>Definition</b>: {item.definition}
					</Card.Text>
				</Card.Body>
			</Card>
		];

		return JSX;
	}

	useEffect(() => {
		axios.get(`http://localhost:${config.server_port}/api/users/get_glossary/${props.title}`)
			.then(res => {
                const item = res.data;
                console.log(item)
				setGlossaryItem(item);
			})
	}, []);

	return (
		<div className="glossary-item">
			{createGlossaryItem(glossaryItem)}
		</div>
	);
};

export default ViewGlossaryItem;
