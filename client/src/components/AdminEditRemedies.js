import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { FaRegEdit } from "react-icons/fa";

const AdminEditRemedies = props => {
	const [modal, setModal] = useState(false);
	const [name, setName] = useState(props.item.name);
	const [ailment, setAilment] = useState(props.item.ailment_type);
	const [body_part, setBody_Part] = useState(props.item.body_part);
	const [description, setDescription] = useState(props.item.description);
	const [createdAt, setCreatedAt] = useState(props.item.createdAt);
	const [ingredients, setIngredients] = useState(props.item.ingredients);
	const [amounts, setAmounts] = useState(props.item.amounts);
	const [units, setUnits] = useState(props.item.units);
	const [isPremium, setIsPremium] = useState(props.item.is_premium);
	const [isPublished, setIsPublished] = useState(props.item.is_published);

	const openModal = () => {
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const handleSubmit = event => {
		let data = {
			_id: props.item._id,
			name: name,
			ailment_type: ailment,
			body_part: body_part,
			description: description,
			ingredients: ingredients,
			amounts: amounts,
			units: units,
			createdAt: props.item.createdAt,
			is_published: isPublished,
			is_premium: isPremium
		};
		axios.put(
			`http://localhost:${config.server_port}/api/admin/update_remedy/${data._id}`,
			data
		).then(
			response => {
				console.log(response);
				window.location.reload(false);
			}
		)

		setModal(false);
	};

	
	const ingredientsDefault = () => {
		let value = "";
		for(let i=0; i<ingredients.length; ++i){
			if(!(value === "")){
				value+="\n";
			}
			value += (ingredients[i] + "," + amounts[i] + "," + units[i])
		}
		return value;
	}

	const parseIngredients = (text) => {
		let ing = [];
		let amnt = [];
		let unit = [];
		const allIngredients = text.split("\n");
		allIngredients.forEach( ingredient => {
			let fields = ingredient.split(",");
			ing.push(fields[0])
			amnt.push(fields[1])
			unit.push(fields[2]);
		});
		setIngredients(ing);
		setAmounts(amnt);
		setUnits(unit);
	}

	return (
		<>
			<Button variant="success" onClick={openModal}>
				<FaRegEdit color="white" size={24} />
			</Button>

			<Modal show={modal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Editing: {name}</Modal.Title>
				</Modal.Header>
				<Form>
					<Modal.Body>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control
								name="Name"
								type="text"
								defaultValue={name}
								onChange={event => setName(event.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Ailment</Form.Label>
							<Form.Control
								name="Ailment"
								type="text"
								defaultValue={ailment}
								onChange={event => setAilment(event.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Body Part</Form.Label>
							<Form.Control
								name="Body Part"
								type="text"
								defaultValue={body_part}
								onChange={event => setBody_Part(event.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								name="Description"
								rows="2"
								defaultValue={description}
								onChange={event => setDescription(event.target.value)}
							/>
						</Form.Group>
						
						<Form.Group>
							<Form.Label>Ingredients</Form.Label>
							<div>Enter each ingredient on a new line in this format:</div>
							<div>Water,3,oz</div>
							<Form.Control
								required
								as="textarea"
								name="ailment"
								rows="5"
								defaultValue={ingredientsDefault()}
								onChange={event => parseIngredients(event.target.value)}
							/>
						</Form.Group>

						<Form.Check
							type="checkbox"
							name="draft"
							label="Premium?"
							defaultChecked={isPremium}
							onChange={event => setIsPremium(event.target.checked)}
						/>

						<Form.Check
							type="checkbox"
							name="draft"
							label="Save as Draft"
							defaultChecked={!isPublished}
							onChange={event => {setIsPublished(!event.target.checked)}}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
            			</Button>

						<Button variant="primary" onClick={handleSubmit}>
							Save Changes
            			</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};

export default AdminEditRemedies;
