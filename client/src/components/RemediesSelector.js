import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";
import axios from 'axios';
import config from './config.js';

const RemediesSelector = (props) => {
	const [bodyParts, setBodyParts] = useState([]);
	const [ailments, setAilments] = useState([]);

	const dropDownList = (items) => {
		return items.map((part) => <option value={part.toLowerCase()} key={part.toLowerCase()}>{part}</option>);
	}

	const correctCase = (str) => {
		if(str){
			return (str[0].toUpperCase()+str.substring(1).toLowerCase());
		}
		return;
	}

	useEffect(() => {
		axios.get(`http://localhost:${config.server_port}/api/users/get_remedy_preview`)
			.then(res => {
				let remedies = res.data;

				const compareBodyParts = (a, b) => {
					if (a.body_part.toLowerCase() < b.body_part.toLowerCase()) {
						return -1
					}
					if (a.body_part.toLowerCase() > b.body_part.toLowerCase()) {
						return 1
					}
					return 0;
				}


				const compareAilments = (a, b) => {
					if (a.ailment_type.toLowerCase() < b.ailment_type.toLowerCase()) {
						return -1
					}
					if (a.ailment_type.toLowerCase() > b.ailment_type.toLowerCase()) {
						return 1
					}
					return 0;
				}

				remedies.sort(compareBodyParts);
				let parts = [""];
				let ails = [""];

				remedies.forEach(remedy => {
					if(remedy.body_part && remedy.body_part.toLowerCase() != parts[parts.length-1].toLowerCase()){
						parts.push(correctCase(remedy.body_part));
					}
					if(remedy.ailment_type && !ails.includes(correctCase(remedy.ailment_type))){
						ails.push(correctCase(remedy.ailment_type));
					}
				});

				setBodyParts(parts)
				setAilments(ails);

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
				<Form.Label>Body Part:</Form.Label>
				<Form.Control as="select" name="body_part">
					{dropDownList(bodyParts)}
				</Form.Control>
			</Form.Group>
			<Form.Group controlId="ailment_type">
				<Form.Label>Ailment: </Form.Label>
				<Form.Control as="select" name="ailment_type">
					{dropDownList(ailments)}
				</Form.Control>
			</Form.Group>
			<Form.Group controlId="include_premium">
				<Form.Check name="include_premium" label="Include Premium Remedies" type="switch" defaultChecked="on"/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Search
			</Button>
		</Form>
	);

};

export default RemediesSelector;
