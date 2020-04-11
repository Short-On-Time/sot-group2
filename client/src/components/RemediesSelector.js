import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";

const RemediesSelector = (props) => {
	const [bodyParts, setBodyParts] = useState(["Head","Shoulders","Knees","Toes","Eyes","Ears","Mouth","Nose"].sort());
	const [searchOptions, setSearchOptions] = useState("");

	const dropDownList = (items) => {
		return items.map((part) => <option value={part.toLowerCase()} key={part.toLowerCase()}>{part}</option>);
	}

	const changeBodyPart = (part) => {
		setSearchOptions(part);
	}

	return (
		<Form action="/remedies">
			<Form.Group controlId="part">
				<Form.Label>body part</Form.Label>
				<Form.Control as="select" name="part" onChange={(event) => {changeBodyPart(event.target.value)}}>
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