import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";
import axios from 'axios';
import config from './config.js';

const RemediesSelector = (props) => {
	const [bodyParts, setBodyParts] = useState([]);

	const dropDownList = (items) => {
		return items.map((part) => <option value={part.toLowerCase()} key={part.toLowerCase()}>{part}</option>);
	}

	const correctCase = (str) => {
		return (str[0].toUpperCase()+str.substring(1).toLowerCase());
	}

	useEffect(() => {
		axios.get(`http://localhost:${config.server_port}/api/users/get_remedy_preview`)
			.then(res => {
				let remedies = res.data;

				const compare = (a, b) => {
					if (a.body_part.toLowerCase() < b.body_part.toLowerCase()) {
						return -1
					}
					if (a.body_part.toLowerCase() > b.body_part.toLowerCase()) {
						return 1
					}
					return 0;
				}
				remedies.sort();
				let parts = [""];

				remedies.forEach(remedy => {
					if(remedy.body_part.toLowerCase() != parts[parts.length-1].toLowerCase()){
						parts.push(correctCase(remedy.body_part))
					}
				})

				setBodyParts(parts)

			})
			.catch(function (e) {
				console.log(e.response)
				if (e) {
				}
			});
	}, []);

	return (
		<Form action="/remedies">
			<Form.Group controlId="body_part">
				<Form.Label>body part</Form.Label>
				<Form.Control as="select" name="body_part">
					{dropDownList(bodyParts)}
				</Form.Control>
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);

};

export default RemediesSelector;